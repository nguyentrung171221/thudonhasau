import React from 'react';
import { Calendar, Tag, ShieldCheck, Heart, Sparkles, MapPin, Camera, ArrowRight } from 'lucide-react';
import { STORE_INFO, PRODUCTS } from '../data/storeData';

interface HeroProps {
  onOpenBooking: (productId?: string) => void;
  onScrollToPrice: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToPrice }) => {
  return (
    <section id="trang-chu" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-silk-pattern">
      {/* Soft Silk Ambient Decorative Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-rose-200/40 via-rose-100/30 to-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-700 text-xs font-semibold tracking-wide shadow-sm backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>Dịch vụ cho thuê máy ảnh uy tín & thân thiện</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-rose-400"></span>
              <span className="hidden sm:inline font-bold text-rose-800">Vĩnh Yên, Vĩnh Phúc</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.15] tracking-tight">
              Thuê máy ảnh tại <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 bg-clip-text text-transparent italic font-normal">
                Vĩnh Yên
              </span>
            </h1>

            {/* Slogan & Subtitle */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-rose-600 font-serif text-2xl md:text-3xl font-medium italic">
              <Heart className="w-5 h-5 text-rose-400 fill-rose-300 inline" />
              “{STORE_INFO.slogan}”
            </div>

            {/* Main Description */}
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Cho thuê máy ảnh Canon và Fujifilm với thủ tục nhanh chóng, mức giá rõ ràng và đầy đủ phụ kiện đi kèm. Thiết bị được kiểm tra kỹ và sạc pin đầy 100% trước khi bàn giao.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onScrollToPrice}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white border border-rose-200 text-stone-800 font-bold text-sm shadow-sm hover:shadow-md hover:bg-rose-50/50 hover:border-rose-300 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Tag className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
                Xem bảng giá
              </button>

              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400 hover:from-rose-600 hover:to-amber-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Đặt lịch ngay
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Key Service Locations Bar */}
            <div className="pt-4 border-t border-rose-100/80">
              <div className="p-3 bg-white/80 rounded-xl border border-rose-100 flex items-start gap-2.5 shadow-xs max-w-md">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-stone-900">Địa chỉ nhận máy</p>
                  <p className="text-[11px] text-stone-500">KCN Thăng Long 3 Vĩnh Phúc, Xã Thiện Kế, Bình Xuyên, Phú Thọ</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Background Decorative Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="/src/assets/images/hero_camera_banner_1784710690864.jpg"
                  alt="Thuê đồ nhà Sâu - Cho thuê máy ảnh Canon & Fujifilm"
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />
                
                {/* Floating Overlay Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/80 shadow-lg text-stone-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-wider flex items-center gap-1">
                      <Camera className="w-3.5 h-3.5" /> 2 Dòng máy sẵn có
                    </span>
                    <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full">
                      ● Đang còn lịch
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-medium text-stone-700">
                    <div className="p-2 bg-rose-50/80 rounded-xl border border-rose-100 flex items-center justify-between">
                      <span className="font-bold text-stone-900">Canon EOS R50</span>
                      <span className="text-rose-600 font-bold">160k/6h</span>
                    </div>
                    <div className="p-2 bg-rose-50/80 rounded-xl border border-rose-100 flex items-center justify-between">
                      <span className="font-bold text-stone-900">Fujifilm X-T20</span>
                      <span className="text-rose-600 font-bold">170k/6h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge Top-Right Floating */}
              <div className="absolute -top-4 -right-2 bg-gradient-to-br from-amber-300 via-amber-200 to-rose-200 text-stone-900 px-4 py-2 rounded-2xl shadow-lg border border-white font-bold text-xs flex items-center gap-2 animate-bounce">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Đầy đủ thẻ nhớ & sạc</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
