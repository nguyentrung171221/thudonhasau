import React from 'react';
import { Calendar, Tag, ShieldCheck, Heart, Sparkles, MapPin, Camera, ArrowRight, MessageCircle } from 'lucide-react';
import { STORE_INFO, PRODUCTS } from '../data/storeData';

interface HeroProps {
  onOpenBooking: (productId?: string) => void;
  onScrollToPrice: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToPrice }) => {
  const mainLocation = STORE_INFO.locations[0];

  return (
    <section id="trang-chu" className="relative pt-24 pb-10 md:pt-28 md:pb-14 overflow-hidden bg-silk-pattern">
      {/* Soft Silk Ambient Decorative Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-rose-200/30 via-pink-100/30 to-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-rose-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-700 text-xs font-medium shadow-2xs backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500/80 fill-amber-300" />
              <span>Dịch vụ cho thuê máy ảnh uy tín & thân thiện</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-rose-400"></span>
              <span className="hidden sm:inline font-semibold text-rose-800">Vĩnh Yên, Vĩnh Phúc</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-stone-900 leading-[1.15] tracking-tight">
              Thuê máy ảnh tại <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500 bg-clip-text text-transparent italic font-normal">
                Vĩnh Yên
              </span>
            </h1>

            {/* Slogan & Subtitle */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-rose-600 font-serif text-2xl md:text-3xl font-medium italic tracking-tight">
              <Heart className="w-5 h-5 text-rose-400 fill-rose-300 inline" />
              “{STORE_INFO.slogan}”
            </div>

            {/* Main Description */}
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Cho thuê máy ảnh Canon và Fujifilm với thủ tục nhanh chóng, mức giá rõ ràng và đầy đủ phụ kiện đi kèm. Thiết bị được kiểm tra kỹ và sạc pin đầy 100% trước khi bàn giao.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onScrollToPrice}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white border border-rose-200 text-stone-800 font-semibold text-xs sm:text-sm shadow-xs hover:shadow-md hover:bg-rose-50/50 hover:border-rose-300 transition-all flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
              >
                <Tag className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
                <span>Xem bảng giá</span>
              </button>

              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-400 to-pink-400 hover:from-rose-600 hover:to-pink-500 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Tư vấn & Đặt lịch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Address & Pickup Location Buttons */}
            <div className="pt-4 border-t border-rose-100/80 space-y-2">
              <p className="text-xs font-semibold text-stone-800 flex items-center justify-center lg:justify-start gap-1.5">
                <MapPin className="w-4 h-4 text-rose-500" /> Địa điểm nhận máy:
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <a
                  href={mainLocation.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white border border-rose-200 hover:border-rose-400 text-stone-800 hover:text-rose-700 text-xs font-semibold transition-all shadow-2xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                  title="Mở Google Maps chỉ đường"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>Nhận máy tại Vĩnh Yên (Chỉ đường)</span>
                </a>

                <button
                  onClick={() => onOpenBooking()}
                  className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-800 text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Nhận máy tại Vĩnh Yên (Tư vấn)</span>
                </button>
              </div>

              <p className="text-[11px] text-stone-500 font-normal">
                {mainLocation.address}
              </p>
            </div>

          </div>

          {/* Right Visual Showcase: Canon R50, Fujifilm XT20 & Fujifilm XT30 */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-3.5 relative mx-auto max-w-md lg:max-w-none">
              
              {/* Canon EOS R50 Card */}
              <div
                onClick={() => onOpenBooking(PRODUCTS[0].id)}
                className="group relative rounded-2xl overflow-hidden bg-white border-2 border-rose-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative h-36 sm:h-44 overflow-hidden bg-stone-100">
                  <img
                    src={PRODUCTS[0].image}
                    alt={PRODUCTS[0].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-rose-500/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-xs backdrop-blur-xs">
                    Canon R50
                  </div>
                  <div className="absolute bottom-2 right-2 bg-white/95 text-stone-900 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs border border-rose-100">
                    Từ 160k/6h
                  </div>
                </div>
                <div className="p-2.5 bg-white flex-1 flex flex-col justify-between space-y-1">
                  <div>
                    <h3 className="font-serif font-semibold text-stone-900 text-xs truncate">
                      {PRODUCTS[0].name}
                    </h3>
                    <p className="text-[10px] text-stone-500 line-clamp-1 font-normal">
                      Nhỏ gọn, lấy nét mắt nhanh
                    </p>
                  </div>
                  <div className="text-[10px] text-rose-600 font-semibold flex items-center justify-between pt-1 border-t border-rose-50">
                    <span>Đủ phụ kiện</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Fujifilm X-T20 Card */}
              <div
                onClick={() => onOpenBooking(PRODUCTS[1].id)}
                className="group relative rounded-2xl overflow-hidden bg-white border-2 border-rose-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative h-36 sm:h-44 overflow-hidden bg-stone-100">
                  <img
                    src={PRODUCTS[1].image}
                    alt={PRODUCTS[1].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-amber-600/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-xs backdrop-blur-xs">
                    Fujifilm X-T20
                  </div>
                  <div className="absolute bottom-2 right-2 bg-white/95 text-stone-900 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs border border-rose-100">
                    Từ 170k/6h
                  </div>
                </div>
                <div className="p-2.5 bg-white flex-1 flex flex-col justify-between space-y-1">
                  <div>
                    <h3 className="font-serif font-semibold text-stone-900 text-xs truncate">
                      {PRODUCTS[1].name}
                    </h3>
                    <p className="text-[10px] text-stone-500 line-clamp-1 font-normal">
                      Màu phim hoài cổ thơ mộng
                    </p>
                  </div>
                  <div className="text-[10px] text-rose-600 font-semibold flex items-center justify-between pt-1 border-t border-rose-50">
                    <span>Đủ phụ kiện</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Fujifilm X-T30 Featured Wide Card */}
              {PRODUCTS[2] && (
                <div
                  onClick={() => onOpenBooking(PRODUCTS[2].id)}
                  className="col-span-2 group relative rounded-2xl overflow-hidden bg-gradient-to-r from-rose-50 via-white to-pink-50 border-2 border-rose-200/90 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer p-3 flex items-center gap-3 sm:gap-4"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-rose-200">
                    <img
                      src={PRODUCTS[2].image}
                      alt={PRODUCTS[2].name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-1.5 left-1.5 bg-rose-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-2xs">
                      HOT NEW
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] bg-rose-100 text-rose-700 font-bold px-2 py-0.5 rounded-full">
                        Mới bổ sung
                      </span>
                      <span className="text-xs font-bold text-rose-600">
                        Từ 180k / 6h
                      </span>
                    </div>
                    <h3 className="font-serif font-semibold text-stone-900 text-sm sm:text-base truncate group-hover:text-rose-600 transition-colors">
                      {PRODUCTS[2].name}
                    </h3>
                    <p className="text-[11px] text-stone-500 line-clamp-1 font-normal">
                      Cảm biến X-Trans IV 26MP, lấy nét bám mắt/mặt cực đỉnh, quay 4K
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-rose-600 font-semibold pt-0.5">
                      <span className="text-stone-600 text-[10px]">Cọc CCCD • Kèm sạc, thẻ nhớ & đầu chuyển ảnh</span>
                      <span className="flex items-center gap-1 text-rose-600 font-bold text-xs">
                        Đặt ngay <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Trust Badge Bottom */}
              <div className="col-span-2 bg-gradient-to-r from-rose-50 via-white to-amber-50 text-stone-800 p-2.5 rounded-xl border border-rose-200/80 shadow-xs text-xs font-semibold flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-[11px] sm:text-xs">Chuyên 3 dòng máy ảnh Canon & Fujifilm tuyển chọn</span>
                </div>
                <span className="text-[10px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded-md font-medium whitespace-nowrap">
                  100% máy sạch & pin sạc đầy
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
