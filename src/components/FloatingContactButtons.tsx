import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { Phone, MessageCircle, Calendar, ArrowUp, Facebook } from 'lucide-react';

interface FloatingContactButtonsProps {
  onOpenBooking: () => void;
}

export const FloatingContactButtons: React.FC<FloatingContactButtonsProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Stacked Action Buttons */}
      <div className="pointer-events-auto flex flex-col items-end gap-2.5">
        
        {/* Quick Booking Button */}
        <button
          onClick={onOpenBooking}
          className="px-4 py-2.5 bg-gradient-to-r from-rose-500 to-amber-400 text-white rounded-full shadow-lg hover:shadow-xl font-bold text-xs flex items-center gap-2 transform hover:scale-105 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span className="hidden sm:inline">Đặt lịch ngay</span>
        </button>

        {/* Facebook Floating Button */}
        <a
          href={STORE_INFO.facebookAccounts[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transform hover:scale-110 transition-all group"
          title="Tư vấn nhanh qua Facebook"
        >
          <Facebook className="w-5 h-5 fill-white" />
        </a>

        {/* Zalo Floating Button */}
        <a
          href={`https://zalo.me/${STORE_INFO.zaloPhones[0].replace(/\s+/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transform hover:scale-110 transition-all group"
          title="Tư vấn nhanh qua Zalo"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>

        {/* Phone Floating Button */}
        <a
          href={`tel:${STORE_INFO.phones[0].replace(/\s+/g, '')}`}
          className="w-12 h-12 bg-rose-600 hover:bg-rose-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transform hover:scale-110 transition-all animate-bounce cursor-pointer"
          title={`Gọi hotline ngay: ${STORE_INFO.phones[0]}`}
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="w-9 h-9 bg-stone-800/80 hover:bg-stone-900 text-white rounded-full shadow-md flex items-center justify-center transition-colors text-xs"
          title="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>

    </div>
  );
};
