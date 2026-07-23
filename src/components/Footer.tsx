import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { Camera, Phone, MapPin, Mail, Heart, Sparkles, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 relative overflow-hidden border-t border-rose-900/30">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-300 p-0.5">
                <div className="w-full h-full bg-stone-900 rounded-[14px] flex items-center justify-center text-rose-400">
                  <Camera className="w-5 h-5" />
                </div>
              </div>
              <span className="font-serif text-2xl font-semibold text-white tracking-tight flex items-center gap-1.5">
                {STORE_INFO.brandName}
                <Sparkles className="w-4 h-4 text-amber-400" />
              </span>
            </div>

            <p className="font-serif text-rose-300 text-lg italic flex items-center gap-1.5">
              <Heart className="w-4 h-4 fill-rose-400" /> “{STORE_INFO.slogan}”
            </p>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Dịch vụ cho thuê máy ảnh Canon EOS R50 & Fujifilm X-T20 uy tín, chất lượng tại Vĩnh Yên (Vĩnh Phúc). Đầy đủ phụ kiện, giao nhận tận nơi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-semibold text-white text-base tracking-tight">Menu Nhanh</h4>
            <ul className="space-y-2 text-xs font-normal text-stone-400">
              <li>
                <a href="#trang-chu" onClick={scrollToSection('trang-chu')} className="hover:text-rose-400 transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#thiet-bi" onClick={scrollToSection('thiet-bi')} className="hover:text-rose-400 transition-colors">
                  Thiết bị & Bảng giá
                </a>
              </li>
              <li>
                <a href="#quy-trinh" onClick={scrollToSection('quy-trinh')} className="hover:text-rose-400 transition-colors">
                  Quy trình thuê
                </a>
              </li>
              <li>
                <a href="#chinh-sach" onClick={scrollToSection('chinh-sach')} className="hover:text-rose-400 transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#faq" onClick={scrollToSection('faq')} className="hover:text-rose-400 transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="#lien-he" onClick={scrollToSection('lien-he')} className="hover:text-rose-400 transition-colors">
                  Địa điểm & Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-semibold text-white text-base tracking-tight">Liên Hệ Trực Tiếp</h4>
            <div className="space-y-2 text-xs text-stone-400 font-normal">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <span>
                  Hotline / Zalo: <a href={`tel:${STORE_INFO.phones[0].replace(/\s+/g, '')}`} className="text-white font-semibold hover:underline">{STORE_INFO.phones[0]}</a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                <span>
                  Email: <a href={`mailto:${STORE_INFO.email}`} className="text-white hover:underline">{STORE_INFO.email}</a>
                </span>
              </div>
              <div className="pt-1 space-y-1">
                <span className="text-stone-300 font-medium block flex items-center gap-1.5">
                  <Facebook className="w-3.5 h-3.5 text-blue-400 fill-blue-400" /> Facebook cá nhân:
                </span>
                {STORE_INFO.facebookAccounts.map((fb, idx) => (
                  <div key={idx} className="pl-5">
                    <a
                      href={fb.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-300 hover:text-blue-400 hover:underline transition-colors block text-[11px]"
                    >
                      • {fb.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-semibold text-white text-base tracking-tight">Địa Điểm Nhận Máy</h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              {STORE_INFO.locations.map((loc) => (
                <div key={loc.id} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-200 block">{loc.region}:</strong>
                    <span>{loc.address}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Exact Copyright Line Requirement */}
        <div className="pt-8 text-center text-xs text-stone-500 font-medium">
          <p>© Thuê đồ nhà Sâu. Ghi lại mọi khoảnh khắc.</p>
        </div>

      </div>
    </footer>
  );
};
