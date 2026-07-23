import React from 'react';
import { RENTAL_STEPS } from '../data/storeData';
import { Camera, CalendarCheck, PhoneCall, ShieldCheck, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export const RentalProcess: React.FC = () => {
  const stepIcons = [
    <Camera className="w-6 h-6 text-rose-500" key={1} />,
    <PhoneCall className="w-6 h-6 text-rose-500" key={2} />,
    <CalendarCheck className="w-6 h-6 text-rose-500" key={3} />,
    <ShieldCheck className="w-6 h-6 text-rose-500" key={4} />,
    <CheckCircle2 className="w-6 h-6 text-emerald-500" key={5} />
  ];

  return (
    <section id="quy-trinh" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Quy trình đơn giản
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-stone-900">
            5 Bước Thuê Máy Ảnh Nhanh Gọn
          </h2>
          <p className="text-base text-stone-600 font-normal">
            Quy trình làm việc minh bạch, chu đáo, hỗ trợ tối đa cho khách hàng lần đầu trải nghiệm máy ảnh.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {RENTAL_STEPS.map((step, index) => (
            <div
              key={step.stepNumber}
              className="bg-gradient-to-b from-rose-50/50 to-white p-6 rounded-3xl border border-rose-100 shadow-soft hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-white shadow-2xs border border-rose-100 flex items-center justify-center font-serif font-semibold text-lg text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  0{step.stepNumber}
                </span>
                <div className="p-2 bg-rose-100/50 rounded-xl">
                  {stepIcons[index]}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2 flex-1">
                <h3 className="font-serif font-semibold tracking-tight text-stone-900 text-lg group-hover:text-rose-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Indicator Arrow for desktop */}
              {index < RENTAL_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-rose-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-rose-50 border border-rose-100 text-xs font-semibold text-stone-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Toàn bộ máy và ống kính đều được cài đặt sẵn chế độ màu đẹp trước khi bàn giao!</span>
          </div>
        </div>

      </div>
    </section>
  );
};
