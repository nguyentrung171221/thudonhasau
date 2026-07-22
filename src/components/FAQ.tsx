import React, { useState } from 'react';
import { FAQS } from '../data/storeData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1); // Open 1st question by default

  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white via-rose-50/20 to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Giải Đáp Thắc Mắc
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-base text-stone-600 font-normal">
            Tổng hợp những giải đáp chi tiết nhất giúp bạn hoàn toàn yên tâm khi chọn dịch vụ tại Thuê đồ nhà Sâu.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-rose-300 shadow-md'
                    : 'bg-white/80 border-rose-100 hover:border-rose-200 shadow-2xs'
                }`}
              >
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full p-5 text-left font-serif font-bold text-stone-900 text-base sm:text-lg flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center shrink-0 font-sans">
                      {item.id}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-full bg-rose-50 text-rose-600 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-rose-500 text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-rose-100/60 animate-fade-in pl-14">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact fallback note */}
        <div className="mt-10 p-4 rounded-2xl bg-rose-50 border border-rose-100 text-center text-xs text-stone-600 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
          <span>Vẫn còn thắc mắc chưa được giải đáp? Gọi ngay Hotline <strong>0981 225 634</strong> để được tư vấn nhé!</span>
        </div>

      </div>
    </section>
  );
};
