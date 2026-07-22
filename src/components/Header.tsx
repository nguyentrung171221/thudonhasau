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
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-rose-100 py-3'
          : 'bg-gradient-to-b from-rose-50/90 to-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#trang-chu"
            onClick={scrollToSection('trang-chu')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-400 via-rose-300 to-amber-200 p-0.5 shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-rose-500">
                <Camera className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="font-serif text-xl md:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-rose-600 transition-colors flex items-center gap-1.5">
                {STORE_INFO.brandName}
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-300 inline" />
              </div>
              <p className="text-[11px] text-stone-500 font-medium tracking-wide">
                {STORE_INFO.slogan}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-700">
            <a href="#trang-chu" onClick={scrollToSection('trang-chu')} className="hover:text-rose-600 transition-colors">
              Trang chủ
            </a>
            <a href="#thiet-bi" onClick={scrollToSection('thiet-bi')} className="hover:text-rose-600 transition-colors">
              Thiết bị
            </a>
            <a href="#bang-gia" onClick={scrollToSection('bang-gia')} className="hover:text-rose-600 transition-colors">
              Bảng giá
            </a>
            <a href="#quy-trinh" onClick={scrollToSection('quy-trinh')} className="hover:text-rose-600 transition-colors">
              Quy trình thuê
            </a>
            <a href="#chinh-sach" onClick={scrollToSection('chinh-sach')} className="hover:text-rose-600 transition-colors">
              Chính sách
            </a>
            <a href="#faq" onClick={scrollToSection('faq')} className="hover:text-rose-600 transition-colors">
              Hỏi đáp
            </a>
            <a href="#lien-he" onClick={scrollToSection('lien-he')} className="hover:text-rose-600 transition-colors">
              Liên hệ
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenHistory}
              className="relative p-2.5 text-stone-700 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Xem lịch sử đặt máy đã lưu"
            >
              <ReceiptText className="w-4 h-4 text-rose-500" />
              <span className="hidden xl:inline">Đơn đã lưu</span>
              {activeBookingsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-pulse">
                  {activeBookingsCount}
                </span>
              )}
            </button>

            <a
              href={`tel:${STORE_INFO.phones[0].replace(/\s+/g, '')}`}
              className="hidden md:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-full transition-colors border border-rose-200/80"
            >
              <Phone className="w-3.5 h-3.5" />
              {STORE_INFO.phones[0]}
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.2 text-xs font-bold text-white bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400 hover:from-rose-600 hover:to-amber-500 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              Đặt lịch ngay
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenHistory}
              className="relative p-2 text-rose-600 bg-rose-50 rounded-full"
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
              className="p-2 rounded-xl text-stone-800 bg-white shadow-sm border border-rose-100"
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
