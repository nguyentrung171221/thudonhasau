import React, { useState } from 'react';
import { CameraProduct } from '../types';
import { X, CheckCircle2, Calendar, Phone, MessageCircle, Sparkles, Shield, Clock, Heart, ChevronRight, Info } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface ProductDetailModalProps {
  product: CameraProduct | null;
  onClose: () => void;
  onBookNow: (productId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onBookNow
}) => {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(product.image);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-rose-100 relative text-stone-800">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md border border-rose-100 flex items-center justify-center text-stone-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Hero Image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 bg-gradient-to-b from-rose-50/70 to-white border-b border-rose-100">
          
          {/* Image Gallery Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-rose-100 shadow-sm bg-rose-50">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-stone-900 border border-white/80">
                {product.brand}
              </span>
            </div>

            {/* Gallery Thumbnails */}
            {product.galleryImages.length > 1 && (
              <div className="flex items-center gap-2">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === img ? 'border-rose-500 scale-105 shadow-sm' : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Gallery thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Price Column */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {product.statusLabel}
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 leading-tight">
                {product.name}
              </h2>

              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                {product.shortDesc}
              </p>
            </div>

            {/* Tag Badges */}
            <div className="flex flex-wrap gap-1.5">
              {product.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-rose-100/70 text-rose-800 text-xs font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Quick Price Cards */}
            <div className="bg-white rounded-2xl p-4 border border-rose-100 shadow-2xs space-y-2">
              <span className="text-xs font-semibold text-stone-600 block">
                Bảng giá thuê chi tiết:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {product.prices.map((p) => (
                  <div key={p.planKey} className="bg-rose-50/60 p-2 rounded-xl text-center border border-rose-100">
                    <span className="text-[10px] text-stone-500 block font-medium">{p.durationLabel}</span>
                    <span className="font-serif font-semibold text-stone-900 text-sm tracking-tight">{p.formattedPrice}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onBookNow(product.id);
                }}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400 hover:from-rose-600 hover:to-amber-500 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Tư vấn & Đặt thuê máy này
              </button>

              <a
                href={`https://zalo.me/${STORE_INFO.zaloPhones[0].replace(/\s+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs border border-rose-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500 fill-emerald-100" />
                Tư vấn Zalo
              </a>
            </div>

          </div>

        </div>

        {/* Modal Body Sections */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Full Description & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-semibold tracking-tight text-stone-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-500" /> Giới thiệu chi tiết
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                {product.fullDesc}
              </p>

              {/* Technical specs summary */}
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 space-y-2 mt-4">
                <span className="text-xs font-semibold text-stone-700 block">Thông số kỹ thuật cơ bản:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.commonSpecs.map((spec, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-stone-200/60 pb-1">
                      <span className="text-stone-500 font-normal">{spec.label}:</span>
                      <span className="font-semibold text-stone-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights & Suitable Uses */}
            <div className="space-y-4">
              
              <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100 space-y-2">
                <h4 className="text-xs font-semibold text-rose-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-500" /> Điểm nổi bật nhất của máy:
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-700 font-normal">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1 shrink-0"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 space-y-2">
                <h4 className="text-xs font-semibold text-amber-900 flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-amber-600 fill-amber-200" /> Phù hợp nhất cho nhu cầu:
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-700 font-normal">
                  {product.suitableFor.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Included Accessories Full Breakdown */}
          <div className="bg-white rounded-2xl p-5 border border-rose-200 shadow-2xs space-y-3">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <Shield className="w-4 h-4 text-rose-500" /> Trọn bộ phụ kiện bàn giao kèm máy (100% miễn phí):
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {product.accessories.map((acc, idx) => (
                <div key={idx} className="p-3 bg-rose-50/60 rounded-xl border border-rose-100 flex items-center gap-2 text-xs font-medium text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{acc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pickup Guide & Deposit Policy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
              <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-rose-500" /> Quy trình nhận máy:
              </h4>
              <p className="text-stone-600 leading-relaxed">
                {product.pickupGuide}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
              <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Info className="w-4 h-4 text-amber-500" /> Chính sách cọc & Giữ lịch:
              </h4>
              <p className="text-stone-600 leading-relaxed">
                {product.depositPolicy}
              </p>
            </div>

          </div>

          {/* Modal Footer Call to Action */}
          <div className="pt-6 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left text-xs text-stone-500">
              Cần hỗ trợ gấp? Gọi Hotline: <a href={`tel:${STORE_INFO.phones[0].replace(/\s+/g, '')}`} className="font-bold text-rose-600 hover:underline">{STORE_INFO.phones[0]}</a>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs transition-colors"
              >
                Đóng lại
              </button>

              <button
                onClick={() => {
                  onClose();
                  onBookNow(product.id);
                }}
                className="w-1/2 sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-amber-400 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Tư vấn máy này
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
