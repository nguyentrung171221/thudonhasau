import React from 'react';
import { PRODUCTS } from '../data/storeData';
import { Calendar, CheckCircle, Sparkles, Tag, MessageCircle } from 'lucide-react';

interface PriceTableProps {
  onBookNow: (productId: string) => void;
}

export const PriceTable: React.FC<PriceTableProps> = ({ onBookNow }) => {
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
            Không phát sinh phụ phí ẩn. Tất cả gói thuê đều đã bao gồm trọn bộ phụ kiện: Thẻ nhớ tốc độ cao, Lens Kit, Hộp sạc, Dây sạc và Đầu chuyển ảnh. Cọc CCCD nhanh gọn.
          </p>
        </div>

        {/* Pricing Matrix Table */}
        <div className="bg-white rounded-3xl border border-rose-100 shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-rose-50/70 border-b border-rose-100">
                  <th className="p-5 font-serif text-lg font-semibold tracking-tight text-stone-900 w-1/4 min-w-[180px]">
                    Thời Gian Thuê
                  </th>
                  {PRODUCTS.map((prod) => (
                    <th key={prod.id} className="p-5 text-center min-w-[210px] border-l border-rose-100 first:border-l-0">
                      <div className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-stone-900">{prod.name}</div>
                      <span className="text-xs text-rose-600 font-medium">
                        {prod.id === 'canon-r50' ? 'Hiện đại • Lấy nét mắt' : prod.id === 'fujifilm-xt20' ? 'Cổ điển Retro • Màu phim đẹp' : 'Thế hệ mới • X-Trans IV 26MP'}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-100/70 text-sm text-stone-800">
                
                {/* 6 Hours */}
                <tr className="hover:bg-rose-50/30 transition-colors">
                  <td className="p-5 font-semibold text-stone-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                    Gói 6 tiếng
                  </td>
                  {PRODUCTS.map((prod) => (
                    <td key={prod.id} className="p-5 text-center font-bold text-stone-900 text-lg border-l border-rose-100">
                      {prod.prices.find((p) => p.planKey === '6h')?.formattedPrice}
                    </td>
                  ))}
                </tr>

                {/* 1 Day */}
                <tr className="hover:bg-rose-50/30 transition-colors bg-rose-50/20">
                  <td className="p-5 font-semibold text-stone-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    Gói 1 ngày (24h)
                  </td>
                  {PRODUCTS.map((prod) => (
                    <td key={prod.id} className="p-5 text-center font-bold text-rose-600 text-xl border-l border-rose-100">
                      {prod.prices.find((p) => p.planKey === '1d')?.formattedPrice}
                    </td>
                  ))}
                </tr>

                {/* 2 Days */}
                <tr className="hover:bg-rose-50/30 transition-colors">
                  <td className="p-5 font-semibold text-stone-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    Gói 2 ngày (48h)
                  </td>
                  {PRODUCTS.map((prod) => (
                    <td key={prod.id} className="p-5 text-center font-bold text-stone-900 text-lg border-l border-rose-100">
                      {prod.prices.find((p) => p.planKey === '2d')?.formattedPrice}
                    </td>
                  ))}
                </tr>

                {/* 3 Days */}
                <tr className="hover:bg-rose-50/30 transition-colors bg-rose-50/10">
                  <td className="p-5 font-semibold text-stone-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Gói 3 ngày (72h)
                  </td>
                  {PRODUCTS.map((prod) => (
                    <td key={prod.id} className="p-5 text-center font-bold text-stone-900 text-lg border-l border-rose-100">
                      {prod.prices.find((p) => p.planKey === '3d')?.formattedPrice}
                    </td>
                  ))}
                </tr>

                {/* Included Accessories */}
                <tr>
                  <td className="p-5 font-semibold text-stone-900 align-top">
                    Phụ kiện đi kèm
                  </td>
                  {PRODUCTS.map((prod) => (
                    <td key={prod.id} className="p-5 text-xs text-stone-600 border-l border-rose-100 align-top">
                      <ul className="space-y-1">
                        {prod.accessories.map((acc, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{acc}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Suitable For */}
                <tr>
                  <td className="p-5 font-semibold text-stone-900 align-top">
                    Phù hợp nhu cầu
                  </td>
                  {PRODUCTS.map((prod) => (
                    <td key={prod.id} className="p-5 text-xs text-stone-600 border-l border-rose-100 align-top">
                      {prod.id === 'canon-r50'
                        ? 'Chụp chân dung, dã ngoại, sinh nhật, du lịch, sự kiện ngắn, người mới chưa dùng máy bao giờ.'
                        : prod.id === 'fujifilm-xt20'
                        ? 'Chụp màu phim hoài cổ, du lịch, dã ngoại, chụp ảnh thời trang, chụp ảnh quán cafe thơ mộng.'
                        : 'Màu phim thế hệ mới (Eterna, Classic Chrome), quay video 4K sắc nét, bắt nét mắt siêu nhạy cho chân dung & cafe.'}
                    </td>
                  ))}
                </tr>

                {/* Action Row */}
                <tr className="bg-rose-50/50">
                  <td className="p-5 font-serif font-semibold tracking-tight text-stone-900">
                    Tư Vấn & Đặt Thuê
                  </td>
                  {PRODUCTS.map((prod) => (
                    <td key={prod.id} className="p-5 text-center border-l border-rose-100">
                      <button
                        onClick={() => onBookNow(prod.id)}
                        className="w-full py-3 px-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-400 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Tư vấn thuê {prod.name.replace(' + Lens Kit', '')}
                      </button>
                    </td>
                  ))}
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
