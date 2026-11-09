import React, { useState, useEffect } from 'react';
import { PRODUCTS, STORE_INFO } from '../data/storeData';
import { calculateRentalCalculation, saveBookingToLocalStorage, formatVND } from '../utils/helpers';
import { Calendar, Clock, MapPin, CheckCircle2, AlertCircle, Camera, Sparkles, Send, FileText, ArrowRight, X, Mail, Copy, Check } from 'lucide-react';

interface BookingFormProps {
  initialProductId?: string;
  onSuccess?: () => void;
  onCloseModal?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialProductId,
  onSuccess,
  onCloseModal
}) => {
  // Today's date YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];
  
  // Tomorrow's date YYYY-MM-DD
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(
    initialProductId && PRODUCTS.some(p => p.id === initialProductId) ? initialProductId : PRODUCTS[0].id
  );
  const region = 'Vĩnh Yên';
  const locationAddress = STORE_INFO.locations[0].address;
  
  const [pickupDate, setPickupDate] = useState(todayStr);
  const [pickupTime, setPickupTime] = useState('08:00');
  const [returnDate, setReturnDate] = useState(tomorrowStr);
  const [returnTime, setReturnTime] = useState('08:00');

  const [rentalPlan, setRentalPlan] = useState<'6h' | '1d' | '2d' | '3d' | 'custom'>('1d');
  const [note, setNote] = useState('');
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);

  // Status & Validation
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedNotice, setSubmittedNotice] = useState<string | null>(null);
  const [emailStatus, setEmailStatus] = useState<{ sent: boolean; message: string; targetEmail: string } | null>(null);
  const [copied, setCopied] = useState(false);

  // Update initial product when prop changes
  useEffect(() => {
    if (initialProductId && PRODUCTS.some(p => p.id === initialProductId)) {
      setSelectedProductId(initialProductId);
    }
  }, [initialProductId]);


  // Adjust return date when pickup date changes if return date < pickup date
  useEffect(() => {
    if (returnDate < pickupDate) {
      setReturnDate(pickupDate);
    }
  }, [pickupDate, returnDate]);

  const selectedProduct = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];

  // Calculate pricing & duration
  const calculation = calculateRentalCalculation(
    selectedProductId,
    rentalPlan,
    pickupDate,
    pickupTime,
    returnDate,
    returnTime
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Validation
    if (!fullName.trim()) {
      setFormError('Vui lòng nhập Họ và tên của bạn.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 9) {
      setFormError('Vui lòng nhập Số điện thoại hợp lệ để cửa hàng liên hệ xác nhận.');
      return;
    }
    if (returnDate < pickupDate) {
      setFormError('Ngày trả máy không thể diễn ra trước ngày nhận máy.');
      return;
    }
    if (!agreedToPolicy) {
      setFormError('Bạn vui lòng tích chọn đồng ý với chính sách thuê của Thuê đồ nhà Sâu.');
      return;
    }

    setIsSubmitting(true);

    const bookingPayload = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      productId: selectedProductId,
      productName: selectedProduct.name,
      region,
      locationAddress,
      pickupDate,
      pickupTime,
      returnDate,
      returnTime,
      rentalPlan,
      calculatedDaysOrHoursText: calculation.durationSummary,
      estimatedPrice: calculation.calculatedPrice,
      formattedPrice: calculation.formattedPrice,
      note: note.trim(),
      agreedToPolicy: true
    };

    // Save locally
    saveBookingToLocalStorage(bookingPayload);

    // Call API to send email
    try {
      const res = await fetch('/api/send-booking-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingPayload)
      });
      const data = await res.json();

      if (data.success) {
        setEmailStatus({
          sent: data.sent,
          message: data.message || `Đơn đã được gửi về email ${data.targetEmail}`,
          targetEmail: data.targetEmail || 'trantienky666@gmail.com'
        });
      } else {
        setEmailStatus({
          sent: false,
          message: data.message || 'Lưu đơn thành công, đang chờ gửi mail.',
          targetEmail: 'trantienky666@gmail.com'
        });
      }
    } catch (err) {
      console.error('Lỗi khi gửi API email:', err);
      setEmailStatus({
        sent: false,
        message: 'Đã lưu đơn đặt lịch. Cửa hàng sẽ liên hệ xác nhận qua SĐT trong 15-30 phút.',
        targetEmail: 'trantienky666@gmail.com'
      });
    }

    setIsSubmitting(false);
    setSubmittedNotice(
      'Yêu cầu đặt lịch đã được ghi nhận. Thuê đồ nhà Sâu sẽ liên hệ để kiểm tra lịch trống và xác nhận đơn thuê trong thời gian sớm nhất.'
    );

    if (onSuccess) {
      onSuccess();
    }
  };

  const copyOrderSummary = () => {
    const text = `📋 ĐƠN ĐẶT THUÊ MÁY ÁNH - THUÊ ĐỒ NHÀ SÂU\n- Khách hàng: ${fullName}\n- SĐT: ${phone}\n- Email: ${email || 'Không'}\n- Máy thuê: ${selectedProduct.name}\n- Nhận tại: ${region} (${locationAddress})\n- Thời gian: ${pickupDate} (${pickupTime}) -> ${returnDate} (${returnTime})\n- Giá dự kiến: ${calculation.formattedPrice}\n- Ghi chú: ${note || 'Không'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailToLink = `mailto:trantienky666@gmail.com?subject=${encodeURIComponent(`[Đơn đặt thuê] ${fullName} - ${phone}`)}&body=${encodeURIComponent(
    `Họ tên: ${fullName}\nSĐT: ${phone}\nEmail: ${email}\nMáy thuê: ${selectedProduct.name}\nThời gian: ${pickupDate} (${pickupTime}) đến ${returnDate} (${returnTime})\nDự kiến giá: ${calculation.formattedPrice}\nGhi chú: ${note}`
  )}`;

  return (
    <div id="dat-lich" className="bg-white rounded-3xl border border-rose-100 shadow-soft p-6 sm:p-8 md:p-10 relative">
      
      {/* Modal Close Button if embedded in modal */}
      {onCloseModal && (
        <button
          onClick={onCloseModal}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-rose-50 hover:bg-rose-100 text-stone-600 transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Form Header */}
      <div className="mb-8 text-center sm:text-left space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold">
          <Calendar className="w-3.5 h-3.5" /> Đặt lịch máy ảnh
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900">
          Form Đặt Lịch Giữ Máy Trực Tuyến
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-normal">
          Điền thông tin bên dưới để cửa hàng kiểm tra lịch máy trống và gọi lại tư vấn chốt đơn cho bạn trong vòng 15 - 30 phút.
        </p>
      </div>

      {/* Submitted Success Notice State */}
      {submittedNotice ? (
        <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          
          <h3 className="font-serif text-2xl font-semibold tracking-tight text-stone-900">
            Đã Ghi Nhận Yêu Cầu Đặt Lịch!
          </h3>

          <p className="text-sm text-stone-700 leading-relaxed max-w-lg mx-auto font-medium">
            “{submittedNotice}”
          </p>

          {/* Email Notification Status Box */}
          <div className="p-3.5 bg-rose-50/80 rounded-2xl border border-rose-200 text-xs text-rose-900 max-w-md mx-auto text-left space-y-1">
            <div className="font-semibold flex items-center gap-1.5 text-rose-800">
              <Mail className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Email thông báo nhận đơn:</span>
              <strong className="text-stone-900 underline">{emailStatus?.targetEmail || 'trantienky666@gmail.com'}</strong>
            </div>
            <p className="text-[11px] text-stone-600 font-normal leading-normal">
              {emailStatus?.message}
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-emerald-100 text-xs text-stone-600 max-w-md mx-auto text-left space-y-1.5 shadow-2xs">
            <div className="font-semibold text-stone-900 border-b pb-1">Tóm tắt yêu cầu thuê:</div>
            <div>• <strong>Máy thuê:</strong> {selectedProduct.name}</div>
            <div>• <strong>Nhận tại:</strong> {region} ({locationAddress})</div>
            <div>• <strong>Thời gian:</strong> {pickupDate} ({pickupTime}) đến {returnDate} ({returnTime})</div>
            <div>• <strong>Dự kiến chi phí:</strong> <span className="text-rose-600 font-semibold">{calculation.formattedPrice}</span></div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={copyOrderSummary}
              className="px-5 py-2.5 bg-white border border-stone-300 text-stone-800 text-xs font-semibold rounded-xl hover:bg-stone-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-stone-500" />}
              <span>{copied ? 'Đã sao chép đơn' : 'Sao chép thông tin đơn'}</span>
            </button>

            <a
              href={mailToLink}
              className="px-5 py-2.5 bg-rose-100 hover:bg-rose-200 text-rose-800 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-rose-600" />
              <span>Gửi qua Mail (mở ứng dụng Mail)</span>
            </a>

            <a
              href={`tel:${STORE_INFO.phones[0].replace(/\s+/g, '')}`}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5"
            >
              Gọi hotline: {STORE_INFO.phones[0]}
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setSubmittedNotice(null);
                setFullName('');
                setPhone('');
                setEmail('');
                setNote('');
              }}
              className="text-xs text-rose-600 font-medium hover:underline cursor-pointer"
            >
              + Đặt thêm đơn thuê mới
            </button>
          </div>
        </div>
      ) : (

        /* Active Form */
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Error Banner */}
          {formError && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2.5 animate-shake">
              <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          {/* Section 1: Selected Camera Choice */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-stone-800 block flex items-center gap-1">
              <Camera className="w-4 h-4 text-rose-500" /> 1. Chọn máy ảnh muốn thuê <span className="text-rose-500">*</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => setSelectedProductId(prod.id)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-3 ${
                    selectedProductId === prod.id
                      ? 'border-rose-500 bg-rose-50/60 shadow-sm'
                      : 'border-stone-200 bg-white hover:border-rose-200'
                  }`}
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-14 h-14 object-cover rounded-xl border border-stone-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-semibold text-stone-900 text-sm truncate">{prod.name}</h4>
                    <p className="text-[11px] text-stone-500">
                      Từ <span className="font-semibold text-rose-600">{prod.prices[0].formattedPrice}</span> / 6 tiếng
                    </p>
                    <span className="inline-block mt-1 text-[10px] bg-white px-2 py-0.5 rounded-md border border-rose-100 text-stone-600 font-medium">
                      Đủ sạc + Thẻ nhớ + Adapter
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Pickup Region & Address */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-semibold text-stone-800 block flex items-center gap-1">
              <MapPin className="w-4 h-4 text-rose-500" /> 2. Khu vực & địa điểm nhận máy <span className="text-rose-500">*</span>
            </label>

            <div className="p-3.5 bg-rose-50/60 rounded-2xl border border-rose-200 text-xs text-stone-700 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-stone-900 block">Khu vực Vĩnh Yên, Vĩnh Phúc</span>
                <span className="text-stone-600 font-normal">{locationAddress}</span>
              </div>
            </div>
          </div>

          {/* Section 3: Time & Plan */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-semibold text-stone-800 block flex items-center gap-1">
              <Clock className="w-4 h-4 text-rose-500" /> 3. Thời gian & gói thuê dự kiến <span className="text-rose-500">*</span>
            </label>

            {/* Plan selection buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { key: '6h', label: '6 Tiếng', price: selectedProduct.prices.find(p=>p.planKey==='6h')?.formattedPrice },
                { key: '1d', label: '1 Ngày (24h)', price: selectedProduct.prices.find(p=>p.planKey==='1d')?.formattedPrice },
                { key: '2d', label: '2 Ngày (48h)', price: selectedProduct.prices.find(p=>p.planKey==='2d')?.formattedPrice },
                { key: '3d', label: '3 Ngày (72h)', price: selectedProduct.prices.find(p=>p.planKey==='3d')?.formattedPrice }
              ].map((p) => (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setRentalPlan(p.key as any)}
                  className={`p-2.5 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                    rentalPlan === p.key
                      ? 'border-rose-500 bg-rose-50 text-rose-700 font-semibold'
                      : 'border-stone-200 bg-white text-stone-700 hover:border-rose-200'
                  }`}
                >
                  <span className="text-xs block font-medium">{p.label}</span>
                  <span className="text-[11px] font-semibold text-rose-600 block">{p.price}</span>
                </button>
              ))}
            </div>

            {/* Date Pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Pickup Date & Time */}
              <div className="bg-rose-50/40 p-3.5 rounded-2xl border border-rose-100 space-y-2">
                <span className="text-xs font-semibold text-stone-800 block">Ngày & giờ nhận máy:</span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={pickupDate}
                    min={todayStr}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="p-2 bg-white rounded-xl border border-stone-200 text-xs font-normal text-stone-800 focus:outline-none focus:border-rose-400"
                  />
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="p-2 bg-white rounded-xl border border-stone-200 text-xs font-normal text-stone-800 focus:outline-none focus:border-rose-400"
                  />
                </div>
              </div>

              {/* Return Date & Time */}
              <div className="bg-rose-50/40 p-3.5 rounded-2xl border border-rose-100 space-y-2">
                <span className="text-xs font-semibold text-stone-800 block">Ngày & giờ trả máy:</span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={returnDate}
                    min={pickupDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="p-2 bg-white rounded-xl border border-stone-200 text-xs font-normal text-stone-800 focus:outline-none focus:border-rose-400"
                  />
                  <input
                    type="time"
                    value={returnTime}
                    onChange={(e) => setReturnTime(e.target.value)}
                    className="p-2 bg-white rounded-xl border border-stone-200 text-xs font-normal text-stone-800 focus:outline-none focus:border-rose-400"
                  />
                </div>
              </div>

            </div>

            {/* Automated Price & Duration Summary Box */}
            <div className="p-4 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
              <div>
                <span className="text-[11px] text-stone-400 block font-medium">
                  Tổng thời gian & giá dự kiến:
                </span>
                <div className="text-sm font-medium text-rose-200">
                  {calculation.durationSummary} ({calculation.planName})
                </div>
              </div>

              <div className="text-center sm:text-right">
                <span className="text-2xl font-serif font-semibold text-amber-300 block tracking-tight">
                  {calculation.formattedPrice}
                </span>
                <span className="text-[10px] text-stone-400">Chưa bao gồm tiền cọc (Trao đổi khi liên hệ)</span>
              </div>
            </div>

          </div>

          {/* Section 4: Customer Contact Info */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-semibold text-stone-800 block flex items-center gap-1">
              <FileText className="w-4 h-4 text-rose-500" /> 4. Thông tin người thuê máy <span className="text-rose-500">*</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-medium text-stone-600 block mb-1">
                  Họ và tên khách hàng <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Nguyễn Thanh Hằng"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-3 bg-white rounded-xl border border-stone-200 text-xs font-normal text-stone-800 focus:outline-none focus:border-rose-400"
                  required
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-stone-600 block mb-1">
                  Số điện thoại & Zalo <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Ví dụ: 0981225634"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 bg-white rounded-xl border border-stone-200 text-xs font-normal text-stone-800 focus:outline-none focus:border-rose-400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-medium text-stone-600 block mb-1">
                  Email (Không bắt buộc)
                </label>
                <input
                  type="email"
                  placeholder="Ví dụ: myemail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-white rounded-xl border border-stone-200 text-xs font-normal text-stone-800 focus:outline-none focus:border-rose-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-stone-600 block mb-1">
                  Ghi chú thêm (Mục đích chụp, yêu cầu đặc biệt)
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Cần lấy máy sớm hơn 15p, xin HDSD cho người mới..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full p-3 bg-white rounded-xl border border-stone-200 text-xs font-normal text-stone-800 focus:outline-none focus:border-rose-400"
                />
              </div>
            </div>
          </div>

          {/* Section 5: Policy Agreement Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 p-3 rounded-2xl bg-rose-50/50 border border-rose-100 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedToPolicy}
                onChange={(e) => setAgreedToPolicy(e.target.checked)}
                className="mt-1 w-4 h-4 text-rose-600 rounded border-stone-300 focus:ring-rose-500"
              />
              <span className="text-xs text-stone-700 leading-relaxed font-normal">
                Tôi đã đọc và đồng ý với <strong>Chính sách thuê máy ảnh</strong> của Thuê đồ nhà Sâu (Xuất trình CCCD khi nhận máy, bảo quản thiết bị, đủ phụ kiện khi hoàn trả).
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400 hover:from-rose-600 hover:to-amber-500 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Đang xử lý gửi yêu cầu...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Gửi Yêu Cầu Đặt Lịch Ngay</span>
                </>
              )}
            </button>
          </div>

        </form>
      )}

    </div>
  );
};
