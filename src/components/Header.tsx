import React, { useState, useEffect } from 'react';
import { Camera, Calendar, Phone, Menu, X, Sparkles, ReceiptText } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface HeaderProps {
  onOpenBooking: (productId?: string) => void;
  onOpenHistory: () => void;
  activeBookingsCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenHistory, activeBookingsCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-rose-100/80 py-2.5'
          : 'bg-gradient-to-b from-rose-50/90 to-transparent py-3 md:py-4'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand Name */}
          <a
            href="#trang-chu"
            onClick={scrollToSection('trang-chu')}
            className="flex items-center gap-2.5 group text-left cursor-pointer shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-400 via-pink-300 to-rose-300 p-0.5 shadow-2xs group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-rose-500">
                <Camera className="w-4 h-4" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-stone-900 group-hover:text-rose-600 transition-colors whitespace-nowrap flex items-center gap-1">
                {STORE_INFO.brandName}
                <Sparkles className="w-3.5 h-3.5 text-amber-500/80 fill-amber-300 inline shrink-0" />
              </div>
              <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium whitespace-nowrap leading-none mt-0.5">
                {STORE_INFO.slogan}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-xs xl:text-sm font-medium text-stone-700 whitespace-nowrap">
            <a href="#trang-chu" onClick={scrollToSection('trang-chu')} className="hover:text-rose-600 transition-colors py-1">
              Trang chủ
            </a>
            <a href="#thiet-bi" onClick={scrollToSection('thiet-bi')} className="hover:text-rose-600 transition-colors py-1">
              Thiết bị
            </a>
            <a href="#bang-gia" onClick={scrollToSection('bang-gia')} className="hover:text-rose-600 transition-colors py-1">
              Bảng giá
            </a>
            <a href="#quy-trinh" onClick={scrollToSection('quy-trinh')} className="hover:text-rose-600 transition-colors py-1">
              Quy trình thuê
            </a>
            <a href="#chinh-sach" onClick={scrollToSection('chinh-sach')} className="hover:text-rose-600 transition-colors py-1">
              Chính sách
            </a>
            <a href="#faq" onClick={scrollToSection('faq')} className="hover:text-rose-600 transition-colors py-1">
              Hỏi đáp
            </a>
            <a href="#lien-he" onClick={scrollToSection('lien-he')} className="hover:text-rose-600 transition-colors py-1">
              Liên hệ
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0 whitespace-nowrap">
            <button
              onClick={onOpenHistory}
              className="relative px-3 py-1.5 text-stone-700 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer shrink-0"
              title="Xem lịch sử đặt máy đã lưu"
            >
              <ReceiptText className="w-4 h-4 text-rose-500 shrink-0" />
              <span className="whitespace-nowrap">Đơn đã lưu</span>
              {activeBookingsCount > 0 && (
                <span className="bg-rose-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {activeBookingsCount}
                </span>
              )}
            </button>

            <a
              href={`tel:${STORE_INFO.phones[0].replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-full transition-colors border border-rose-200/80 whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{STORE_INFO.phones[0]}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-400 to-pink-400 hover:from-rose-600 hover:to-pink-500 rounded-full shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>Đặt lịch ngay</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              onClick={onOpenHistory}
              className="relative p-2 text-rose-600 bg-rose-50 rounded-full cursor-pointer"
            >
              <ReceiptText className="w-5 h-5" />
              {activeBookingsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {activeBookingsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-800 bg-white shadow-xs border border-rose-100 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-rose-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white/95 backdrop-blur-xl border-b border-rose-100 shadow-xl py-6 px-6 animate-fade-in z-50 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-4 text-center">
            <a
              href="#trang-chu"
              onClick={scrollToSection('trang-chu')}
              className="py-2 text-stone-800 font-medium hover:text-rose-600 border-b border-stone-100"
            >
              Trang chủ
            </a>
            <a
              href="#thiet-bi"
              onClick={scrollToSection('thiet-bi')}
              className="py-2 text-stone-800 font-medium hover:text-rose-600 border-b border-stone-100"
            >
              Thiết bị & Bảng giá
            </a>
            <a
              href="#bang-gia"
              onClick={scrollToSection('bang-gia')}
              className="py-2 text-stone-800 font-medium hover:text-rose-600 border-b border-stone-100"
            >
              So sánh giá thuê
            </a>
            <a
              href="#quy-trinh"
              onClick={scrollToSection('quy-trinh')}
              className="py-2 text-stone-800 font-medium hover:text-rose-600 border-b border-stone-100"
            >
              Quy trình thuê
            </a>
            <a
              href="#chinh-sach"
              onClick={scrollToSection('chinh-sach')}
              className="py-2 text-stone-800 font-medium hover:text-rose-600 border-b border-stone-100"
            >
              Chính sách thuê
            </a>
            <a
              href="#faq"
              onClick={scrollToSection('faq')}
              className="py-2 text-stone-800 font-medium hover:text-rose-600 border-b border-stone-100"
            >
              Câu hỏi thường gặp
            </a>
            <a
              href="#lien-he"
              onClick={scrollToSection('lien-he')}
              className="py-2 text-stone-800 font-medium hover:text-rose-600 border-b border-stone-100"
            >
              Địa chỉ & Liên hệ
            </a>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-gradient-to-r from-rose-500 to-amber-400 text-white font-bold rounded-2xl shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <Calendar className="w-4 h-4" />
                Đặt lịch ngay
              </button>

              <a
                href={`tel:${STORE_INFO.phones[0].replace(/\s+/g, '')}`}
                className="w-full py-3 bg-rose-50 text-rose-700 font-semibold rounded-2xl border border-rose-200 flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                Gọi ngay: {STORE_INFO.phones[0]}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
