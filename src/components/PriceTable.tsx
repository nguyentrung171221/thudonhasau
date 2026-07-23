import React from 'react';
import { PRODUCTS } from '../data/storeData';
import { Calendar, CheckCircle, Sparkles, Tag } from 'lucide-react';

interface PriceTableProps {
  onBookNow: (productId: string) => void;
}

export const PriceTable: React.FC<PriceTableProps> = ({ onBookNow }) => {
  const canon = PRODUCTS[0];
  const fuji = PRODUCTS[1];

  return (
    <section id="bang-gia" className="py-20 bg-gradient-to-b from-white via-rose-50/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold">
            <Tag className="w-3.5 h-3.5" /> Bảng giá niêm yết
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-stone-900">
            Bảng Giá Cho Thuê Minh Bạch
          </h2>
          <p className="text-base text-stone-600 font-normal">
            Không phát sinh phụ phí ẩn. Tất cả gói thuê đều đã bao gồm trọn bộ phụ kiện: Thẻ nhớ tốc độ cao, Lens Kit, Hộp sạc, Dây sạc và Đầu chuyển ảnh.
          </p>
        </div>

        {/* Pricing Matrix Desktop & Tablet Table */}
        <div className="bg-white rounded-3xl border border-rose-100 shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-rose-50/70 border-b border-rose-100">
                  <th className="p-5 font-serif text-lg font-semibold tracking-tight text-stone-900 w-1/3 min-w-[200px]">
                    Thời Gian Thuê
                  </th>
                  <th className="p-5 text-center w-1/3 min-w-[240px] bg-rose-100/40 border-x border-rose-100">
                    <div className="font-serif text-xl font-semibold tracking-tight text-stone-900">{canon.name}</div>
                    <span className="text-xs text-rose-600 font-medium">Công nghệ mới • Lấy nét mắt</span>
                  </th>
                  <th className="p-5 text-center w-1/3 min-w-[240px]">
                    <div className="font-serif text-xl font-semibold tracking-tight text-stone-900">{fuji.name}</div>
                    <span className="text-xs text-rose-600 font-medium">Cổ điển Retro • Màu phim đẹp</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-100/70 text-sm text-stone-800">
                
                {/* 6 Hours */}
                <tr className="hover:bg-rose-50/30 transition-colors">
                  <td className="p-5 font-semibold text-stone-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                    Gói 6 tiếng
                  </td>
                  <td className="p-5 text-center font-bold text-stone-900 text-lg bg-rose-50/20 border-x border-rose-100">
                    160.000 đ
                  </td>
                  <td className="p-5 text-center font-bold text-stone-900 text-lg">
                    170.000 đ
                  </td>
                </tr>

                {/* 1 Day */}
                <tr className="hover:bg-rose-50/30 transition-colors bg-rose-50/10">
                  <td className="p-5 font-semibold text-stone-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    Gói 1 ngày (24h)
                  </td>
                  <td className="p-5 text-center font-bold text-rose-600 text-xl bg-rose-100/30 border-x border-rose-100">
                    220.000 đ
                  </td>
                  <td className="p-5 text-center font-bold text-rose-600 text-xl">
                    240.000 đ
                  </td>
                </tr>

                {/* 2 Days */}
                <tr className="hover:bg-rose-50/30 transition-colors">
                  <td className="p-5 font-semibold text-stone-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    Gói 2 ngày (48h)
                  </td>
                  <td className="p-5 text-center font-bold text-stone-900 text-lg bg-rose-50/20 border-x border-rose-100">
                    400.000 đ
                  </td>
                  <td className="p-5 text-center font-bold text-stone-900 text-lg">
                    440.000 đ
                  </td>
                </tr>

                {/* 3 Days */}
                <tr className="hover:bg-rose-50/30 transition-colors bg-rose-50/10">
                  <td className="p-5 font-semibold text-stone-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Gói 3 ngày (72h)
                  </td>
                  <td className="p-5 text-center font-bold text-stone-900 text-lg bg-rose-50/20 border-x border-rose-100">
                    570.000 đ
                  </td>
                  <td className="p-5 text-center font-bold text-stone-900 text-lg">
                    630.000 đ
                  </td>
                </tr>

                {/* Included Accessories */}
                <tr>
                  <td className="p-5 font-semibold text-stone-900 align-top">
                    Phụ kiện đi kèm
                  </td>
                  <td className="p-5 text-xs text-stone-600 bg-rose-50/20 border-x border-rose-100">
                    <ul className="space-y-1">
                      {canon.accessories.map((acc, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{acc}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-5 text-xs text-stone-600">
                    <ul className="space-y-1">
                      {fuji.accessories.map((acc, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{acc}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>

                {/* Suitable For */}
                <tr>
                  <td className="p-5 font-semibold text-stone-900 align-top">
                    Phù hợp nhu cầu
                  </td>
                  <td className="p-5 text-xs text-stone-600 bg-rose-50/20 border-x border-rose-100">
                    Chụp chân dung, dã ngoại, sinh nhật, du lịch, sự kiện ngắn, người mới chưa dùng máy bao giờ.
                  </td>
                  <td className="p-5 text-xs text-stone-600">
                    Chụp màu phim hoài cổ, du lịch, dã ngoại, chụp ảnh thời trang, chụp ảnh quán cafe thơ mộng.
                  </td>
                </tr>

                {/* Action Row */}
                <tr className="bg-rose-50/50">
                  <td className="p-5 font-serif font-semibold tracking-tight text-stone-900">
                    Đặt Thuê Máy Ảnh
                  </td>
                  <td className="p-5 text-center border-x border-rose-100">
                    <button
                      onClick={() => onBookNow(canon.id)}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-amber-400 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      Đặt thuê Canon R50
                    </button>
                  </td>
                  <td className="p-5 text-center">
                    <button
                      onClick={() => onBookNow(fuji.id)}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-amber-400 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      Đặt thuê Fujifilm X-T20
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* Note banner below table */}
        <div className="mt-6 p-4 rounded-2xl bg-rose-50 border border-rose-100 text-center text-xs text-stone-600 flex flex-col sm:flex-row items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
          <span>
            <strong>Lưu ý:</strong> Cửa hàng hỗ trợ nhận máy trực tiếp tại điểm <strong>Vĩnh Yên, Vĩnh Phúc</strong>. Quý khách vui lòng hẹn giờ lấy máy trước để cửa hàng chuẩn bị sạc pin đầy đủ.
          </span>
        </div>

      </div>
    </section>
  );
};
