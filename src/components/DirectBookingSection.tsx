import React, { useState } from 'react';
import { STORE_INFO, PRODUCTS } from '../data/storeData';
import {
  MessageCircle,
  Phone,
  Facebook,
  Sparkles,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  Camera,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';

interface DirectBookingSectionProps {
  initialProductId?: string;
}

export const DirectBookingSection: React.FC<DirectBookingSectionProps> = ({ initialProductId }) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProductId || PRODUCTS[0]?.id || 'canon-r50'
  );

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];
  const zaloPhoneClean = STORE_INFO.zaloPhones[0].replace(/\s+/g, '');
  const phoneClean = STORE_INFO.phones[0].replace(/\s+/g, '');

  const zaloConsultMessage = encodeURIComponent(
    `Chào Thuê Đồ Nhà Sâu, mình muốn tư vấn và đặt lịch thuê máy ảnh ${selectedProduct.name} tại Vĩnh Yên.`
  );
  const zaloUrl = `https://zalo.me/${zaloPhoneClean}?text=${zaloConsultMessage}`;

  return (
    <section id="dat-lich" className="py-20 bg-gradient-to-b from-white via-rose-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-300" /> Tư vấn & Đặt lịch trực tiếp
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-stone-900">
            Liên Hệ Tư Vấn & Giữ Máy
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-normal">
            Để kiểm tra lịch trống chính xác và chuẩn bị pin sạc đầy 100%, Thuê Đồ Nhà Sâu nhận tư vấn và đặt lịch trực tiếp qua <strong>Facebook</strong>, <strong>Zalo</strong> hoặc <strong>Gọi điện thoại</strong>.
          </p>
        </div>

        {/* Notice Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 flex items-start gap-3 shadow-2xs">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm space-y-1">
            <p className="font-semibold">
              Quý khách vui lòng liên hệ trước ít nhất 1 - 2 tiếng (hoặc trước 1 ngày vào cuối tuần)
            </p>
            <p className="text-amber-800 font-normal text-xs">
              Chúng mình sẽ kiểm tra ngay lịch máy trống, tư vấn dòng máy có tone màu phù hợp nhất với concept của bạn và chuẩn bị máy sẵn sàng đón bạn tại Vĩnh Yên.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Quick Camera Selector & Price Summary */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-rose-100 shadow-soft space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Bước 1</span>
              <h3 className="font-serif text-xl font-semibold text-stone-900 flex items-center gap-2">
                <Camera className="w-4 h-4 text-rose-500" /> Chọn máy bạn muốn thuê
              </h3>
              <p className="text-xs text-stone-500">
                Nhấp để xem tóm tắt giá và gửi thông tin qua Zalo / Facebook
              </p>
            </div>

            {/* Camera Options */}
            <div className="space-y-2.5">
              {PRODUCTS.map((prod) => {
                const isSelected = selectedProductId === prod.id;
                return (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => setSelectedProductId(prod.id)}
                    className={`w-full p-3 rounded-2xl border-2 transition-all cursor-pointer text-left flex items-center gap-3 ${
                      isSelected
                        ? 'border-rose-500 bg-rose-50/70 shadow-xs'
                        : 'border-stone-200 bg-white hover:border-rose-200 hover:bg-stone-50'
                    }`}
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-14 h-14 object-cover rounded-xl border border-stone-200 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-serif font-semibold text-stone-900 text-sm truncate">
                          {prod.name}
                        </h4>
                        {isSelected && (
                          <span className="text-[10px] bg-rose-500 text-white font-bold px-2 py-0.5 rounded-full shrink-0">
                            Đang chọn
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Từ <strong className="text-rose-600 font-semibold">{prod.prices[0].formattedPrice}</strong> / 6 tiếng
                      </p>
                      <span className="text-[10px] text-stone-500 block truncate">
                        {prod.id === 'canon-r50' ? 'Lấy nét mắt • Da sáng hồng' : prod.id === 'fujifilm-xt20' ? 'Tone màu phim cổ điển' : 'X-Trans IV 26MP • Quay 4K'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Camera Summary Box */}
            <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-stone-900">{selectedProduct.name}</span>
                <span className="text-rose-600 font-bold">{selectedProduct.lowestPriceLabel}</span>
              </div>

              {/* Price Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {selectedProduct.prices.map((p) => (
                  <div key={p.planKey} className="p-2 bg-white rounded-xl border border-rose-100 flex items-center justify-between">
                    <span className="text-stone-500 text-[11px]">{p.durationLabel}</span>
                    <span className="font-bold text-stone-800">{p.formattedPrice}</span>
                  </div>
                ))}
              </div>

              {/* Inclusions */}
              <div className="pt-1 text-[11px] text-stone-600 space-y-1">
                <div className="font-semibold text-stone-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Trọn bộ phụ kiện đi kèm 100% miễn phí:
                </div>
                <p className="pl-4 text-stone-500">
                  Thẻ nhớ tốc độ cao + Lens Kit + Hộp sạc + Dây sạc + Đầu chuyển ảnh sang điện thoại.
                </p>
                <div className="font-semibold text-stone-800 flex items-center gap-1 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> Hình thức cọc:
                </div>
                <p className="pl-4 text-stone-500">
                  Đối chiếu CCCD chính chủ. Cửa hàng không giữ giấy tờ gốc, thủ tục nhanh gọn trong 5 phút.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: 3 Contact Channels */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="space-y-1">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Bước 2</span>
              <h3 className="font-serif text-xl font-semibold text-stone-900">
                Chọn phương thức liên hệ thuận tiện nhất cho bạn
              </h3>
              <p className="text-xs text-stone-500">
                Bạn nhỏ nhà Sâu trực tuyến liên tục, sẵn sàng tư vấn góc chụp, hỗ trợ test máy và giữ lịch:
              </p>
            </div>

            {/* CHANNEL 1: ZALO */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-50 via-white to-emerald-50/30 rounded-3xl border-2 border-emerald-200/80 shadow-soft space-y-3 relative overflow-hidden group hover:border-emerald-400 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-200 group-hover:scale-105 transition-transform shrink-0">
                    <MessageCircle className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-stone-900 text-lg">Zalo Thuê Đồ Nhà Sâu</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                        Nhanh nhất
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Số điện thoại / Zalo: <strong className="text-emerald-700 font-mono text-sm">{STORE_INFO.phones[0]}</strong>
                    </p>
                  </div>
                </div>

                <a
                  href={zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Nhắn tin Zalo ngay</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-[11px] text-stone-500 pt-1 border-t border-emerald-100">
                💬 <em>Gợi ý: Nhắn trước cho shop thời gian nhận & trả máy dự kiến để chúng mình giữ máy ngay cho bạn nhé!</em>
              </p>
            </div>

            {/* CHANNEL 2: FACEBOOK */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50/30 rounded-3xl border-2 border-blue-200/80 shadow-soft space-y-4 relative overflow-hidden group hover:border-blue-400 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-200 group-hover:scale-105 transition-transform shrink-0">
                  <Facebook className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-stone-900 text-lg">Facebook Cá Nhân Tư Vấn</span>
                    <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">
                      Xem nhiều ảnh mẫu
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Hỗ trợ trao đổi qua Messenger, xem thêm video clip review và album ảnh thực tế:
                  </p>
                </div>
              </div>

              {/* 2 Facebook links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {STORE_INFO.facebookAccounts.map((fb, idx) => (
                  <a
                    key={idx}
                    href={fb.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white hover:bg-blue-50 rounded-2xl border border-blue-200 transition-all flex items-center justify-between group/link"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <Facebook className="w-4 h-4 fill-blue-600" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] text-blue-700 font-medium block">
                          {idx === 0 ? 'Facebook chính' : 'Facebook phụ'}
                        </span>
                        <span className="font-bold text-stone-900 text-xs truncate block">
                          {fb.name}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-blue-400 group-hover/link:translate-x-0.5 transition-transform shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* CHANNEL 3: PHONE HOTLINE */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-rose-50 via-white to-amber-50/40 rounded-3xl border-2 border-rose-200/80 shadow-soft space-y-3 relative overflow-hidden group hover:border-rose-400 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-md shadow-rose-200 group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-stone-900 text-lg">Gọi Hotline Trực Tiếp</span>
                      <span className="text-[10px] bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded-full">
                        Hỗ trợ 24/7
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Cần thuê máy gấp hoặc cần hỗ trợ kỹ thuật tại chỗ, bấm gọi ngay:
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${phoneClean}`}
                  className="px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Gọi: {STORE_INFO.phones[0]}</span>
                </a>
              </div>
            </div>

            {/* Pickup Address Information Card */}
            <div className="p-5 bg-white rounded-2xl border border-rose-100 text-xs text-stone-700 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold text-stone-900 block text-sm">
                  Địa điểm nhận máy tại Vĩnh Yên:
                </span>
                <p className="text-stone-600 font-normal">
                  {STORE_INFO.locations[0].address}
                </p>
                <div className="pt-1">
                  <a
                    href={STORE_INFO.locations[0].mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-rose-600 hover:text-rose-700 font-semibold"
                  >
                    <span>Xem vị trí trên Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
