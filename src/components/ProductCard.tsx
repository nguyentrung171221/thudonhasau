import React from 'react';
import { CameraProduct } from '../types';
import { CheckCircle2, Eye, Calendar, Phone, MessageCircle, Sparkles, Clock } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface ProductCardProps {
  product: CameraProduct;
  onSelectDetail: (product: CameraProduct) => void;
  onBookNow: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectDetail,
  onBookNow
}) => {
  return (
    <div className="bg-white rounded-3xl border border-rose-100 shadow-soft hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1">
      
      {/* Top Image Section */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-rose-50/50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

        {/* Brand Tag */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-stone-900 border border-white/80 shadow-xs flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-rose-500 fill-rose-300" />
          {product.brand}
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          {product.status === 'available' && (
            <span className="bg-emerald-500/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-emerald-300/40 shadow-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              Còn máy
            </span>
          )}
          {product.status === 'booked' && (
            <span className="bg-amber-500/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-xs">
              Đã được đặt
            </span>
          )}
          {product.status === 'maintenance' && (
            <span className="bg-stone-500/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-xs">
              Bảo trì
            </span>
          )}
        </div>

        {/* Lowest Price Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
          <div>
            <span className="text-[11px] text-rose-200 uppercase font-semibold tracking-wider block">
              Giá thuê tốt nhất
            </span>
            <span className="text-2xl font-bold font-serif text-white">
              chỉ {product.prices[0].formattedPrice}
            </span>
            <span className="text-xs text-rose-100 font-medium"> / 6 tiếng</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        
        {/* Title & Short Description */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2 group-hover:text-rose-600 transition-colors">
            {product.name}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {product.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-md bg-rose-50 text-rose-700 text-[11px] font-medium border border-rose-100"
              >
                #{tag}
              </span>
            ))}
          </div>

          <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
            {product.shortDesc}
          </p>
        </div>

        {/* Pricing Table Tier Grid */}
        <div className="bg-rose-50/50 rounded-2xl p-3.5 border border-rose-100/80">
          <div className="text-[11px] font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-rose-500" /> Bảng giá theo thời gian:
            </span>
            <span className="text-[10px] font-semibold text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">
              Cam kết không tăng giá
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            {product.prices.map((tier) => (
              <div
                key={tier.planKey}
                className="bg-white p-2 rounded-xl border border-rose-100 flex items-center justify-between shadow-2xs"
              >
                <span className="text-stone-600 font-medium">{tier.durationLabel}</span>
                <span className="font-bold text-stone-900">{tier.formattedPrice}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Included Accessories Checklist */}
        <div>
          <div className="text-xs font-bold text-stone-800 mb-2 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" /> Phụ kiện đi kèm 100% đầy đủ:
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-stone-600">
            {product.accessories.map((acc, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-rose-400"></span>
                <span>{acc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Action Buttons */}
        <div className="pt-2 border-t border-rose-100 space-y-2">
          
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelectDetail(product)}
              className="w-full py-2.5 px-3 rounded-xl bg-white border border-rose-200 hover:border-rose-300 text-stone-800 font-bold text-xs shadow-2xs hover:bg-rose-50/50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-stone-600" />
              Xem chi tiết
            </button>

            <button
              onClick={() => onBookNow(product.id)}
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-400 hover:from-rose-600 hover:to-amber-500 text-white font-bold text-xs shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              Đặt thuê ngay
            </button>
          </div>

          {/* Direct Call or Zalo Contact Buttons */}
          <div className="flex items-center justify-between text-[11px] pt-1">
            <a
              href={`tel:${STORE_INFO.phones[0].replace(/\s+/g, '')}`}
              className="text-stone-600 hover:text-rose-600 flex items-center gap-1 font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-rose-500" /> Gọi Hotline
            </a>

            <span className="text-stone-300">|</span>

            <a
              href={`https://zalo.me/${STORE_INFO.zaloPhones[0].replace(/\s+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:text-rose-700 flex items-center gap-1 font-bold transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-emerald-500 fill-emerald-100" /> Tư vấn Zalo ngay
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
