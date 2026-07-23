import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { Phone, MapPin, Mail, MessageCircle, Navigation, ExternalLink, Sparkles, Heart, Facebook } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="lien-he" className="py-20 bg-gradient-to-b from-white via-rose-50/40 to-rose-100/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" /> Thông Tin Lịch Trình
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900">
            Liên Hệ Thuê Đồ Nhà Sâu
          </h2>
          <p className="text-base text-stone-600 font-normal">
            Sẵn sàng hỗ trợ bạn chọn máy, tư vấn góc chụp và giữ lịch giao máy nhanh nhất tại Vĩnh Yên.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info & Contacts Card */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-rose-100 shadow-soft space-y-6">
            
            <div className="space-y-2 border-b border-rose-100 pb-6">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Thương hiệu</span>
              <h3 className="font-serif text-3xl font-bold text-stone-900 flex items-center gap-2">
                {STORE_INFO.brandName}
                <Sparkles className="w-4 h-4 text-amber-500 fill-amber-300" />
              </h3>
              <p className="text-rose-600 font-serif text-lg italic flex items-center gap-1.5">
                <Heart className="w-4 h-4 fill-rose-300" /> “{STORE_INFO.slogan}”
              </p>
              <p className="text-xs text-stone-600 pt-1">
                {STORE_INFO.field}
              </p>
            </div>

            {/* Phones & Zalo */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                Điện thoại & Zalo tư vấn 24/7:
              </span>
              <div className="grid grid-cols-1 gap-3">
                {STORE_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="p-3 bg-rose-50 hover:bg-rose-100 rounded-2xl border border-rose-200 transition-colors flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white text-rose-600 flex items-center justify-center shadow-2xs group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-500 block">Hotline tư vấn</span>
                      <span className="font-bold text-stone-900 text-sm">{phone}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                Email trao đổi công việc:
              </span>
              <a
                href={`mailto:${STORE_INFO.email}`}
                className="p-3.5 bg-stone-50 hover:bg-rose-50 rounded-2xl border border-stone-200 transition-colors flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-white text-stone-700 flex items-center justify-center shadow-2xs group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-semibold text-stone-900 text-xs sm:text-sm">{STORE_INFO.email}</span>
              </a>
            </div>

            {/* Facebook Contacts */}
            <div className="space-y-3 pt-1">
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                <Facebook className="w-4 h-4 text-blue-600 fill-blue-600" /> Facebook cá nhân tư vấn:
              </span>
              <div className="grid grid-cols-1 gap-2.5">
                {STORE_INFO.facebookAccounts.map((fb, idx) => (
                  <a
                    key={idx}
                    href={fb.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-50/70 hover:bg-blue-100/90 rounded-2xl border border-blue-200/80 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                        <Facebook className="w-4 h-4 fill-white" />
                      </div>
                      <div>
                        <span className="text-[10px] text-blue-800 font-semibold block">{idx === 0 ? 'Facebook chính' : 'Facebook phụ'}</span>
                        <span className="font-bold text-stone-900 text-xs sm:text-sm">{fb.name}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-500 group-hover:text-blue-700 transition-colors mr-1" />
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Quick Action Buttons */}
            <div className="pt-2 space-y-2">
              <a
                href={`tel:${STORE_INFO.phones[0].replace(/\s+/g, '')}`}
                className="w-full py-3 px-4 rounded-xl bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                Gọi hotline: {STORE_INFO.phones[0]}
              </a>

              <a
                href={`https://zalo.me/${STORE_INFO.zaloPhones[0].replace(/\s+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Liên hệ Zalo cửa hàng ngay
              </a>

              <a
                href={STORE_INFO.facebookAccounts[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <Facebook className="w-4 h-4 fill-white" />
                Nhắn tin Facebook ngay
              </a>
            </div>

          </div>

          {/* Locations & Maps Navigation */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white p-8 rounded-3xl border border-rose-100 shadow-soft space-y-6">
              <h3 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-rose-500" /> Địa Điểm Nhận Máy Chính Thức
              </h3>

              <div className="space-y-4">
                {STORE_INFO.locations.map((loc) => (
                  <div
                    key={loc.id}
                    className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100 hover:border-rose-200 transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                        Chi nhánh {loc.region}
                      </span>
                      <span className="text-[11px] font-bold text-rose-700 bg-rose-100 px-3 py-1 rounded-full">
                        {loc.regionLabel}
                      </span>
                    </div>

                    <p className="text-xs text-stone-700 font-medium leading-relaxed pl-4 border-l-2 border-rose-300">
                      {loc.address}
                    </p>

                    <div className="pt-1 flex items-center gap-3">
                      <a
                        href={loc.mapsSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-4 rounded-xl bg-white border border-rose-200 text-stone-800 font-bold text-xs hover:bg-rose-100 transition-colors flex items-center gap-1.5 shadow-2xs"
                      >
                        <Navigation className="w-3.5 h-3.5 text-rose-500" />
                        Chỉ đường địa điểm {loc.region} trên Google Maps
                        <ExternalLink className="w-3 h-3 text-stone-400" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Notice */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                <span>
                  Trước khi qua địa điểm lấy máy, quý khách vui lòng hẹn giờ trước 15 - 30 phút để cửa hàng có mặt và chuẩn bị máy đầy đủ nhất.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
