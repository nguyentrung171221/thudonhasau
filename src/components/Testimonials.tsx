import React from 'react';
import { TESTIMONIALS } from '../data/storeData';
import { Star, Heart, Camera, Info, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-300" /> Trải Nghiệm Khách Hàng
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900">
            Cảm Nhận Từ Khách Hàng Thân Thiết
          </h2>
          <p className="text-base text-stone-600 font-normal">
            Sự hài lòng của quý khách là động lực lớn nhất của tập thể Thuê đồ nhà Sâu mỗi ngày.
          </p>

          {/* Sample Data Disclaimer Tag Requirement */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-[11px] text-amber-800 font-medium">
              <Info className="w-3.5 h-3.5 text-amber-600" />
              Lưu ý: Dưới đây là dữ liệu đánh giá mẫu minh họa giao diện trải nghiệm người dùng.
            </span>
          </div>
        </div>

        {/* Soft Pink Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-b from-rose-100/60 via-rose-50 to-white p-6 rounded-3xl border border-rose-200/80 shadow-soft flex flex-col justify-between space-y-4 relative group hover:-translate-y-1 transition-all"
            >
              <Quote className="w-8 h-8 text-rose-300/60 absolute top-4 right-4 pointer-events-none" />

              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs text-stone-700 leading-relaxed font-normal italic">
                  “{item.comment}”
                </p>
              </div>

              {/* Renter Info */}
              <div className="pt-3 border-t border-rose-200/60 space-y-1">
                <div className="font-serif font-bold text-stone-900 text-base">
                  {item.name}
                </div>
                <div className="text-[11px] font-semibold text-rose-700 flex items-center gap-1">
                  <Camera className="w-3 h-3 text-rose-500" />
                  <span>{item.cameraRented}</span>
                </div>
                <div className="text-[10px] text-stone-400">
                  Ngày thuê: {item.date}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
