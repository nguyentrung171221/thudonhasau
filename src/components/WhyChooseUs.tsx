import React from 'react';
import { WHY_CHOOSE_US } from '../data/storeData';
import { BadgeCheck, ShieldCheck, PackageCheck, Zap, Sparkles, MapPin, Headphones, Heart } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const iconsMap: Record<string, React.ReactNode> = {
    BadgeCheck: <BadgeCheck className="w-6 h-6 text-rose-500" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-rose-500" />,
    PackageCheck: <PackageCheck className="w-6 h-6 text-rose-500" />,
    Zap: <Zap className="w-6 h-6 text-amber-500" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-500" />,
    MapPin: <MapPin className="w-6 h-6 text-rose-500" />,
    Headphones: <Headphones className="w-6 h-6 text-rose-500" />,
    Heart: <Heart className="w-6 h-6 text-rose-500 fill-rose-200" />
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Lý Do Lựa Chọn
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900">
            Vì Sao Khách Hàng Yêu Thích Thuê Đồ Nhà Sâu?
          </h2>
          <p className="text-base text-stone-600 font-normal">
            Chúng mình tự hào mang đến trải nghiệm thuê máy nhẹ nhàng, thân thiện, giá tốt và chuẩn chu đáo.
          </p>
        </div>

        {/* 8 Reason Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-gradient-to-b from-rose-50/50 to-white border border-rose-100 shadow-soft hover:shadow-lg transition-all duration-300 space-y-3 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs border border-rose-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                {iconsMap[item.iconName] || <Heart className="w-6 h-6 text-rose-500" />}
              </div>

              <h3 className="font-serif font-bold text-stone-900 text-lg group-hover:text-rose-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
