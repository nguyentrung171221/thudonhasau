import React, { useState } from 'react';
import {
  Camera,
  BookOpen,
  Smartphone,
  Sparkles,
  ShieldAlert,
  ChevronRight,
  Eye,
  Sliders,
  CheckCircle2,
  HardDrive,
  Flame,
  Film
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const CameraGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'basics' | 'focus' | 'color' | 'transfer' | 'care'>('basics');

  const tabs = [
    { id: 'basics', label: '1. Khởi động & Chụp', icon: Camera },
    { id: 'focus', label: '2. Lấy nét bám mắt', icon: Eye },
    { id: 'color', label: '3. Màu phim & Tone ảnh', icon: Film },
    { id: 'transfer', label: '4. Chép ảnh sang điện thoại', icon: Smartphone },
    { id: 'care', label: '5. Bảo quản máy', icon: ShieldAlert },
  ] as const;

  return (
    <section id="huong-dan" className="py-20 bg-gradient-to-b from-white via-rose-50/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" /> Dành cho người mới
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-stone-900">
            Hướng Dẫn Sử Dụng Máy Ảnh
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-normal">
            Dù bạn chưa từng cầm máy ảnh bao giờ, bạn nhỏ nhà Sâu đã cài sẵn mọi chế độ tự động tối ưu. Chỉ mất 3 phút đọc hướng dẫn là bạn có thể tự tin chụp được những bức ảnh cực xinh!
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-2xl font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-500 to-amber-400 text-white shadow-md shadow-rose-200'
                    : 'bg-white hover:bg-rose-50 text-stone-700 border border-rose-100 hover:border-rose-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-rose-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="bg-white rounded-3xl border border-rose-100 shadow-soft p-6 sm:p-10 max-w-5xl mx-auto">
          
          {/* TAB 1: KHỞI ĐỘNG & THAO TÁC CƠ BẢN */}
          {activeTab === 'basics' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-rose-100 pb-5">
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Bước 1</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                  Cách Khởi Động & Chế Độ Chụp Cho Người Mới
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2">
                  Máy luôn được sạc pin đầy 100% trước khi giao. Hãy làm theo các bước đơn giản sau:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                    01
                  </div>
                  <h4 className="font-serif font-semibold text-stone-900 text-base">Bật nguồn & Tháo nắp lens</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    Gạt công tắc <strong>ON / OFF</strong> ở đỉnh máy. Bóp nhẹ 2 chốt của nắp ống kính để mở ra và cất nắp vào túi máy tránh thất lạc.
                  </p>
                  <span className="inline-block text-[11px] text-rose-700 bg-rose-100/80 px-2.5 py-1 rounded-lg font-medium">
                    Mẹo: Luôn đeo dây máy vào cổ
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                    02
                  </div>
                  <h4 className="font-serif font-semibold text-stone-900 text-base">Chế độ chụp khuyên dùng</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    Xoay bánh xe chế độ về chữ <strong>Auto (Tự động)</strong> hoặc <strong>P (Program)</strong>. Máy sẽ tự tính toán ánh sáng chuẩn nhất, bạn không cần chỉnh tay thông số rườm rà.
                  </p>
                  <span className="inline-block text-[11px] text-rose-700 bg-rose-100/80 px-2.5 py-1 rounded-lg font-medium">
                    Canon: Ký hiệu [A+] • Fuji: Gạt cần Auto
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                    03
                  </div>
                  <h4 className="font-serif font-semibold text-stone-900 text-base">Tư thế cầm máy chụp</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    Tay phải cầm báng máy, tay trái nâng dưới ống kính để xoay zoom và giữ máy đầm tay, tránh bị rung mờ ảnh khi chụp trong quán cafe thiếu sáng.
                  </p>
                  <span className="inline-block text-[11px] text-rose-700 bg-rose-100/80 px-2.5 py-1 rounded-lg font-medium">
                    Nhấn nửa cò để lấy nét trước khi bấm chụp
                  </span>
                </div>

              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Bí quyết của nhà Sâu:</strong> Màn hình của cả 3 dòng máy Canon R50, Fujifilm X-T20 và X-T30 đều có cảm ứng và có thể xoay / lật đa góc. Bạn có thể hạ máy sát mặt đất để chụp góc thấp (hack dáng chân dài) hoặc giơ cao lên chụp góc từ trên xuống siêu nghệ thuật!
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LẤY NÉT BÁM MẮT */}
          {activeTab === 'focus' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-rose-100 pb-5">
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Bước 2</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                  Cách Lấy Nét Mắt (Eye-AF) Để Ảnh Luôn Nét Căng
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2">
                  Lấy nét mắt thông minh giúp ảnh chụp người luôn trong trẻo, mắt sáng rõ và phông nền mờ ảo tuyệt đẹp.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Canon R50 Focus */}
                <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold bg-rose-500 text-white px-3 py-1 rounded-full">
                      Trên Canon EOS R50
                    </span>
                    <span className="text-xs text-rose-700 font-semibold">Dual Pixel AF II</span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-stone-900">
                    Bắt nét tự động nhận diện mắt & mặt người
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-700 font-normal">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Bước 1:</strong> Hướng máy về phía chủ thể. Khung vuông xanh sẽ tự động khóa vào mắt hoặc khuôn mặt.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Bước 2:</strong> Nhấn nhẹ và giữ một nửa nút chụp (half-press), nghe tiếng "Bíp" và ô lấy nét sáng màu xanh lá.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Bước 3:</strong> Giữ nguyên tư thế và nhấn hết nút chụp để có tấm ảnh nét căng không bao giờ bị out nét!</span>
                    </li>
                  </ul>
                  <div className="p-3 bg-white rounded-xl text-[11px] text-stone-600 border border-rose-100">
                    💡 <em>Bạn cũng có thể chạm trực tiếp ngón tay vào màn hình cảm ứng để chọn vị trí muốn máy lấy nét (chụp ly cafe, bó hoa...).</em>
                  </div>
                </div>

                {/* Fujifilm XT20 / XT30 Focus */}
                <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold bg-amber-600 text-white px-3 py-1 rounded-full">
                      Trên Fujifilm X-T20 & X-T30
                    </span>
                    <span className="text-xs text-amber-800 font-semibold">Face / Eye Detection</span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-stone-900">
                    Bắt nét khuôn mặt hoài cổ đặc trưng
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-700 font-normal">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Cần gạt trước máy:</strong> Đảm bảo cần gạt lấy nét ở mặt trước máy đang nằm ở chữ <strong>S (Single AF)</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Chạm màn hình:</strong> Chạm trực tiếp vào mặt bạn bè trên màn hình, máy sẽ tự bám nét theo chủ thể.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Cần Joystick trên X-T30:</strong> Dùng ngón tay cái gạt cần joystick tròn phía sau máy để dịch chuyển điểm lấy nét siêu tốc.</span>
                    </li>
                  </ul>
                  <div className="p-3 bg-white rounded-xl text-[11px] text-stone-600 border border-amber-100">
                    💡 <em>Khi chụp chân dung ngược sáng hoặc chiều hoàng hôn, hãy hướng ống kính hơi chếch khỏi nguồn sáng mạnh để máy lấy nét dễ dàng hơn.</em>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: MÀU PHIM & TONE ẢNH */}
          {activeTab === 'color' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-rose-100 pb-5">
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Bước 3</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                  Cách Chọn Chế Độ Màu Ảnh & Giả Lập Màu Phim
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2">
                  Điểm "gây nghiện" nhất của máy ảnh là màu ảnh gốc xuất ra đã đẹp xuất sắc, không cần mất công tải app hay mua preset màu!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <span className="text-[10px] bg-rose-100 text-rose-700 font-bold px-2 py-0.5 rounded-md">
                    Fujifilm
                  </span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Classic Chrome</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    Tone màu trầm ấm, hoài niệm, hơi ngả vàng nhẹ vintage. Đây là màu được các bạn trẻ yêu thích nhất khi chụp ở các quán cafe, đường phố hay mặc đồ retro.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <span className="text-[10px] bg-rose-100 text-rose-700 font-bold px-2 py-0.5 rounded-md">
                    Fujifilm
                  </span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Velvia (Vivid)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    Màu sắc tươi tắn, độ bão hòa cao, bầu trời xanh ngắt và lá cây tươi non. Rất phù hợp cho các chuyến đi dã ngoại, cắm trại, đi biển và chụp phong cảnh.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <span className="text-[10px] bg-rose-100 text-rose-700 font-bold px-2 py-0.5 rounded-md">
                    Fujifilm X-T30
                  </span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Eterna (Cinema)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    Màu phim điện ảnh nhẹ nhàng, độ tương phản dịu mắt, da người sáng trong trẻo. Cực kỳ thích hợp để quay video vlog hoặc chụp ảnh phong cách nàng thơ nhẹ nhàng.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <span className="text-[10px] bg-rose-100 text-rose-700 font-bold px-2 py-0.5 rounded-md">
                    Canon R50
                  </span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Portrait (Chân dung da hồng)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    Canon nổi tiếng với khả năng tái tạo màu da người trắng sáng, ánh hồng tự nhiên, mịn màng. Rất thích hợp chụp tiệc sinh nhật, kỷ yếu, ảnh profile cá nhân.
                  </p>
                </div>

              </div>

              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-stone-700 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-rose-500 shrink-0" />
                  <span>
                    <strong>Cách đổi màu trên máy:</strong> Nhấn nút <strong>Q (Quick Menu)</strong> trên thân máy &gt; Chọn mục <strong>Film Simulation (hoặc Picture Style)</strong> &gt; Xoay bánh xe để chọn màu bạn ưng ý nhất!
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CHÉP ẢNH SANG ĐIỆN THOẠI SIÊU TỐC */}
          {activeTab === 'transfer' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-rose-100 pb-5">
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Bước 4</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                  Cách Chép Ảnh Sang Điện Thoại Chỉ Trong 30 Giây
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2">
                  Trong túi máy luôn có sẵn <strong>Đầu chuyển ảnh (Adapter OTG)</strong> miễn phí cho cả iPhone (cổng Lightning & Type-C) và Android. Không cần Wi-Fi, không sợ giật lag!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="p-5 rounded-2xl bg-white border-2 border-rose-100 space-y-3 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-xs">
                    B1
                  </div>
                  <h4 className="font-serif font-semibold text-stone-900 text-sm">Tắt máy & Rút thẻ nhớ</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    Gạt nút nguồn máy về <strong>OFF</strong>. Mở nắp khay pin/thẻ nhớ ở đáy máy, nhấn nhẹ đầu thẻ nhớ SD để thẻ nảy ra rồi rút nhẹ nhàng.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border-2 border-rose-100 space-y-3 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-xs">
                    B2
                  </div>
                  <h4 className="font-serif font-semibold text-stone-900 text-sm">Cắm vào đầu chuyển ảnh</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    Cắm thẻ nhớ vào cổng SD trên đầu đọc thẻ. Sau đó cắm đầu cắm tương ứng (Type-C hoặc Lightning) trực tiếp vào điện thoại của bạn.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border-2 border-rose-100 space-y-3 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-xs">
                    B3
                  </div>
                  <h4 className="font-serif font-semibold text-stone-900 text-sm">Lưu ảnh về máy</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    Mở ứng dụng <strong>Ảnh (Photos)</strong> trên iPhone &gt; Nhấn vào mục <strong>"Nhập" (Import)</strong> ở góc dưới &gt; Chọn các ảnh bạn ưng ý và bấm "Nhập tất cả". Xong ngay!
                  </p>
                </div>

              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  <strong>Ưu điểm tuyệt đối:</strong> Chép hàng trăm tấm ảnh gốc chất lượng cao dung lượng lớn chỉ mất chưa đầy 1 phút, không bị nén vỡ hình, không cần đăng ký tài khoản hay cài thêm ứng dụng gì!
                </span>
              </div>
            </div>
          )}

          {/* TAB 5: BẢO QUẢN THIẾT BỊ */}
          {activeTab === 'care' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-rose-100 pb-5">
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Bước 5</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                  Lưu Ý Bảo Quản & An Toàn Thiết Bị Khi Thuê
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2">
                  Để buổi đi chơi của bạn diễn ra suôn sẻ và an toàn, vui lòng ghi nhớ một số điểm quan trọng sau:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-serif font-semibold text-stone-900 text-sm">Tránh nước, mưa và ẩm ướt</h4>
                    <p className="text-xs text-stone-600 font-normal">
                      Máy ảnh điện tử không có tính năng chống nước lặn. Nếu trời mưa hoặc chụp gần hồ/thác, hãy che chắn cẩn thận và cất ngay vào túi chống sốc.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-serif font-semibold text-stone-900 text-sm">Không tháo rời lens khi ở ngoài trời</h4>
                    <p className="text-xs text-stone-600 font-normal">
                      Cửa hàng đã lắp sẵn lens kit kèm máy và lau sạch cảm biến. Quý khách vui lòng không tự ý tháo lens để tránh bụi bẩn rơi vào cảm biến bên trong.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-serif font-semibold text-stone-900 text-sm">Luôn đeo dây máy vào cổ hoặc cổ tay</h4>
                    <p className="text-xs text-stone-600 font-normal">
                      Tránh tình trạng trượt tay làm rơi máy khi đang chụp ảnh ngoài đường phố hoặc trên cầu/thuyền.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-serif font-semibold text-stone-900 text-sm">Cất giữ đầy đủ phụ kiện khi hoàn trả</h4>
                    <p className="text-xs text-stone-600 font-normal">
                      Khi trả máy, bạn chỉ cần bàn giao lại đủ bộ: Máy + Lens kit + Thẻ nhớ + Hộp sạc + Dây sạc + Đầu chuyển ảnh.
                    </p>
                  </div>
                </div>

              </div>

              <div className="p-4 rounded-2xl bg-stone-900 text-white text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  Cần trợ giúp trong lúc sử dụng máy? Gọi hoặc nhắn Zalo hỗ trợ ngay:
                </span>
                <a
                  href={`tel:${STORE_INFO.phones[0].replace(/\s+/g, '')}`}
                  className="px-4 py-2 bg-gradient-to-r from-rose-500 to-amber-400 text-white rounded-xl font-bold text-xs hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Hotline {STORE_INFO.phones[0]}
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
