import React, { useState } from 'react';
import { Camera, Sparkles, Filter, Eye, MessageCircle, X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface PhotoItem {
  id: string;
  cameraId: 'canon-r50' | 'fujifilm-xt20' | 'fujifilm-xt30';
  cameraName: string;
  title: string;
  concept: string;
  imageUrl: string;
  colorRecipe: string;
  settings: string;
  description: string;
}

const SAMPLE_PHOTOS: PhotoItem[] = [
  {
    id: 'p1',
    cameraId: 'canon-r50',
    cameraName: 'Canon EOS R50',
    title: 'Chân Dung Dã Ngoại Nắng Sớm',
    concept: 'Chân dung ngoại cảnh',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    colorRecipe: 'Canon Picture Style: Portrait (Tone da sáng hồng)',
    settings: 'Lens 18-45mm • f/4.5 • 1/500s • ISO 100',
    description: 'Canon R50 bắt nét ánh mắt cực bén, nước ảnh trong trẻo, tôn da trắng hồng tự nhiên rất nịnh mắt.'
  },
  {
    id: 'p2',
    cameraId: 'fujifilm-xt20',
    cameraName: 'Fujifilm X-T20',
    title: 'Cafe Hoài Cổ Buổi Chiều',
    concept: 'Cafe Vintage & Retro',
    imageUrl: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80',
    colorRecipe: 'Film Simulation: Classic Chrome (Độ tương phản cao, màu trầm ấm)',
    settings: 'Lens 16-50mm • f/3.5 • 1/250s • ISO 400',
    description: 'Tone màu phim huyền thoại của Fujifilm, ánh sáng ngả vàng nhẹ mang lại cảm xúc hoài niệm đậm chất thơ.'
  },
  {
    id: 'p3',
    cameraId: 'fujifilm-xt30',
    cameraName: 'Fujifilm X-T30',
    title: 'Chân Dung Điện Ảnh Nàng Thơ',
    concept: 'Điện ảnh nghệ thuật',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    colorRecipe: 'Film Simulation: Eterna / Cinema (Màu phẳng dịu mắt, chuyển khối mịn)',
    settings: 'Lens 15-45mm • f/3.5 • 1/400s • ISO 200',
    description: 'Cảm biến X-Trans IV 26.1MP cho độ chi tiết sắc nét từng sợi tóc, tone màu điện ảnh Eterna nhẹ nhàng thanh lịch.'
  },
  {
    id: 'p4',
    cameraId: 'canon-r50',
    cameraName: 'Canon EOS R50',
    title: 'Kỷ Yếu & Sinh Nhật Nhóm Bạn',
    concept: 'Kỷ yếu thanh xuân',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    colorRecipe: 'Canon Standard Color • EV +0.3 (Sáng tươi)',
    settings: 'Lens 18-45mm • f/5.0 • 1/640s • ISO 160',
    description: 'Lấy nét Dual Pixel AF II nhận diện cùng lúc nhiều khuôn mặt, bắt trọn từng nụ cười rạng rỡ của nhóm bạn.'
  },
  {
    id: 'p5',
    cameraId: 'fujifilm-xt20',
    cameraName: 'Fujifilm X-T20',
    title: 'Dã Ngoại Vườn Hoa & Cắm Trại',
    concept: 'Dã ngoại rực rỡ',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    colorRecipe: 'Film Simulation: Velvia / Vivid (Màu sắc tươi rói, trời xanh mây trắng)',
    settings: 'Lens 16-50mm • f/5.6 • 1/800s • ISO 200',
    description: 'Chế độ Velvia đẩy màu xanh của lá cây và màu hoa nở rộ, ảnh xuất ra trực tiếp tươi tắn không cần chỉnh sửa.'
  },
  {
    id: 'p6',
    cameraId: 'fujifilm-xt30',
    cameraName: 'Fujifilm X-T30',
    title: 'Hoàng Hôn Hồ Nước Vĩnh Yên',
    concept: 'Phong cảnh hoàng hôn',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    colorRecipe: 'Film Simulation: Classic Chrome + WB Daylight',
    settings: 'Lens 15-45mm • f/8.0 • 1/320s • ISO 160',
    description: 'Dải nhạy sáng (Dynamic Range) rộng giúp thu trọn ánh hoàng hôn rực đỏ mà không làm mất chi tiết vùng tối.'
  },
  {
    id: 'p7',
    cameraId: 'canon-r50',
    cameraName: 'Canon EOS R50',
    title: 'Cafe Tone Trắng Sáng Hàn Quốc',
    concept: 'Cafe hiện đại',
    imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=1200&q=80',
    colorRecipe: 'Canon Neutral • Highlight Tone Priority',
    settings: 'Lens 18-45mm • f/4.0 • 1/320s • ISO 250',
    description: 'Thích hợp cho các quán cafe phong cách Minimalist/Hàn Quốc, ánh sáng tự nhiên mềm mại và sạch sẽ.'
  },
  {
    id: 'p8',
    cameraId: 'fujifilm-xt20',
    cameraName: 'Fujifilm X-T20',
    title: 'Góc Phố & Ánh Chiều Thu',
    concept: 'Đường phố Streetlife',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80',
    colorRecipe: 'Film Simulation: PRO Neg. Hi (Da mịn, tương phản sâu)',
    settings: 'Lens 16-50mm • f/4.0 • 1/400s • ISO 200',
    description: 'Chất ảnh vintage đậm chất điện ảnh, tạo chiều sâu thị giác cuốn hút cho từng góc phố.'
  },
  {
    id: 'p9',
    cameraId: 'fujifilm-xt30',
    cameraName: 'Fujifilm X-T30',
    title: 'Chụp Cận Cảnh Chi Tiết & Hoa',
    concept: 'Macro & Cận cảnh hoa cỏ',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    colorRecipe: 'Film Simulation: Astia / Soft (Dịu dàng, sắc thái phong phú)',
    settings: 'Lens 15-45mm • f/5.6 • 1/640s • ISO 160',
    description: 'Cảm biến 26.1MP thế hệ mới giữ chi tiết siêu mịn, màu sắc mềm mại thơ mộng.'
  }
];

interface PhotoGalleryProps {
  onSelectCameraToConsult: (cameraId: string) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onSelectCameraToConsult }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'canon-r50' | 'fujifilm-xt20' | 'fujifilm-xt30'>('all');
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = selectedFilter === 'all'
    ? SAMPLE_PHOTOS
    : SAMPLE_PHOTOS.filter((p) => p.cameraId === selectedFilter);

  const filters = [
    { id: 'all', label: 'Tất cả mẫu ảnh', count: SAMPLE_PHOTOS.length },
    { id: 'canon-r50', label: 'Canon EOS R50', count: SAMPLE_PHOTOS.filter(p => p.cameraId === 'canon-r50').length },
    { id: 'fujifilm-xt20', label: 'Fujifilm X-T20', count: SAMPLE_PHOTOS.filter(p => p.cameraId === 'fujifilm-xt20').length },
    { id: 'fujifilm-xt30', label: 'Fujifilm X-T30', count: SAMPLE_PHOTOS.filter(p => p.cameraId === 'fujifilm-xt30').length },
  ] as const;

  return (
    <section id="mau-anh" className="py-20 bg-stone-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold">
            <Camera className="w-3.5 h-3.5" /> Mẫu ảnh thực tế
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-stone-900">
            Ảnh Chụp Thực Tế Theo Từng Dòng Máy
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-normal">
            Khám phá chất màu đặc trưng của Canon và Fujifilm. Ảnh gốc xuất thẳng từ thẻ nhớ sang điện thoại bằng đầu chuyển tặng kèm, màu sắc chân thực và nét căng!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                selectedFilter === f.id
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-white hover:bg-rose-50 text-stone-700 border border-stone-200'
              }`}
            >
              <span>{f.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                selectedFilter === f.id ? 'bg-rose-500 text-white' : 'bg-stone-100 text-stone-600'
              }`}>
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group bg-white rounded-3xl border border-rose-100 shadow-soft hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
            >
              {/* Image Preview with Hover Action */}
              <div
                onClick={() => setActivePhoto(photo)}
                className="relative h-64 sm:h-72 overflow-hidden bg-stone-100 cursor-pointer"
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Camera Badge */}
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-stone-900 shadow-xs flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-rose-500" />
                  <span>{photo.cameraName}</span>
                </div>

                {/* Concept Tag */}
                <div className="absolute top-3.5 right-3.5 bg-stone-900/80 text-white text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-xs">
                  {photo.concept}
                </div>

                {/* Eye Icon Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5 text-rose-600" />
                  </div>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-serif font-semibold text-base sm:text-lg tracking-tight truncate">
                    {photo.title}
                  </h3>
                  <p className="text-[11px] text-rose-200 line-clamp-1 font-normal mt-0.5">
                    {photo.colorRecipe}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-stone-600 line-clamp-2 font-normal leading-relaxed">
                  {photo.description}
                </p>

                <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-[11px] text-stone-600 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-stone-800">
                    <Tag className="w-3 h-3 text-rose-500" /> Cài đặt gợi ý:
                  </div>
                  <div className="text-[10px] text-stone-500 font-mono">
                    {photo.settings}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-rose-50 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActivePhoto(photo)}
                    className="flex-1 py-2 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-stone-500" /> Xem ảnh lớn
                  </button>

                  <button
                    onClick={() => onSelectCameraToConsult(photo.cameraId)}
                    className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-400 hover:from-rose-600 hover:to-amber-500 text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Tư vấn máy này
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-rose-100/70 via-rose-50 to-pink-100/70 border border-rose-200 text-center max-w-4xl mx-auto space-y-3">
          <h4 className="font-serif text-lg font-semibold text-stone-900">
            Bạn muốn chụp concept nào trong buổi đi chơi sắp tới?
          </h4>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto">
            Nhắn tin cho bạn nhỏ nhà Sâu qua Zalo hoặc Facebook, chúng mình sẽ tư vấn dòng máy có tone màu ưng ý nhất cho địa điểm của bạn (quán cafe, dã ngoại, kỷ yếu, du lịch)!
          </p>
          <div className="pt-1 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://zalo.me/${STORE_INFO.zaloPhones[0].replace(/\s+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Nhắn Zalo tư vấn màu ảnh
            </a>
            <a
              href={STORE_INFO.facebookAccounts[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm transition-all flex items-center gap-2"
            >
              Nhắn Facebook xem thêm ảnh
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Photo Preview */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-800 flex flex-col md:flex-row max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image View */}
            <div className="md:w-3/5 bg-stone-900 flex items-center justify-center overflow-hidden min-h-[300px]">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="w-full h-full object-contain max-h-[60vh] md:max-h-[85vh]"
              />
            </div>

            {/* Right Details Panel */}
            <div className="md:w-2/5 p-6 sm:p-7 flex flex-col justify-between space-y-4 overflow-y-auto bg-white">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold">
                  <Camera className="w-3.5 h-3.5" />
                  {activePhoto.cameraName}
                </div>

                <h3 className="font-serif text-2xl font-semibold text-stone-900">
                  {activePhoto.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {activePhoto.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-xs text-rose-900">
                    <span className="font-bold block">Công thức màu chụp:</span>
                    <span className="text-[11px] font-normal">{activePhoto.colorRecipe}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                    <span className="font-bold block">Thông số ống kính & thông số chụp:</span>
                    <span className="text-[11px] font-mono">{activePhoto.settings}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-stone-100">
                <button
                  onClick={() => {
                    const camId = activePhoto.cameraId;
                    setActivePhoto(null);
                    onSelectCameraToConsult(camId);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-amber-400 text-white font-semibold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Tư vấn & Đặt thuê {activePhoto.cameraName}
                </button>

                <button
                  onClick={() => setActivePhoto(null)}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Đóng lại
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
