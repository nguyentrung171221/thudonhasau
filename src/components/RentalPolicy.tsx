import React from 'react';
import { POLICIES } from '../data/storeData';
import { ShieldAlert, FileText, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';

export const RentalPolicy: React.FC = () => {
  return (
    <section id="chinh-sach" className="py-20 bg-gradient-to-b from-white via-rose-50/20 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" /> Quy Định & Quyền Lợi
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900">
            Chính Sách Thuê Máy Rõ Ràng
          </h2>
          <p className="text-base text-stone-600 font-normal">
            Thuê đồ nhà Sâu luôn tôn trọng trải nghiệm và sự riêng tư an toàn thông tin của mọi khách hàng.
          </p>
        </div>

        {/* Security & Privacy Banner */}
        <div className="mb-10 p-6 rounded-3xl bg-amber-500/10 border-2 border-amber-300/60 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-stone-900 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Lock className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-lg text-amber-950 flex items-center gap-2">
              Bảo mật dữ liệu cá nhân khách hàng <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
              Website của cửa hàng <strong>KHÔNG yêu cầu khách hàng tải ảnh CCCD trực tiếp lên mạng</strong> để tránh mọi rủi ro bảo mật thông tin cá nhân. Khách hàng chỉ cần xuất trình CCCD chính chủ trực tiếp khi tới nhận máy để đối chiếu.
            </p>
          </div>
        </div>

        {/* 9 Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POLICIES.map((policy) => (
            <div
              key={policy.id}
              className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                policy.important
                  ? 'bg-gradient-to-br from-rose-50 via-white to-rose-100/50 border-rose-300 shadow-md'
                  : 'bg-white border-rose-100 shadow-soft hover:border-rose-200'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center">
                    0{policy.id}
                  </span>
                  {policy.important && (
                    <span className="text-[10px] uppercase font-extrabold px-2.5 py-0.5 rounded-full bg-rose-600 text-white">
                      Quan trọng
                    </span>
                  )}
                </div>

                <h3 className="font-serif font-bold text-lg text-stone-900">
                  {policy.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {policy.content}
                </p>
              </div>

              <div className="pt-4 border-t border-rose-100/60 mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-rose-600">
                <CheckCircle2 className="w-3.5 h-3.5" /> Áp dụng thống nhất
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
