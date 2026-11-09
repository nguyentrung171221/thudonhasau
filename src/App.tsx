import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { PriceTable } from './components/PriceTable';
import { PhotoGallery } from './components/PhotoGallery';
import { CameraGuide } from './components/CameraGuide';
import { ShootingAnglesGuide } from './components/ShootingAnglesGuide';
import { DirectBookingSection } from './components/DirectBookingSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { RentalProcess } from './components/RentalProcess';
import { RentalPolicy } from './components/RentalPolicy';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { Footer } from './components/Footer';
import { IntegrationGuideModal } from './components/IntegrationGuideModal';
import { PRODUCTS } from './data/storeData';
import { CameraProduct } from './types';
import { Camera, Sparkles, ShieldCheck } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<CameraProduct | null>(null);
  const [bookingProductId, setBookingProductId] = useState<string | undefined>(undefined);
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  const handleOpenBooking = (productId?: string) => {
    if (productId) {
      setBookingProductId(productId);
    }
    const element = document.getElementById('dat-lich');
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToPrice = () => {
    const element = document.getElementById('bang-gia');
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF7F8] text-stone-800 selection:bg-rose-500 selection:text-white font-sans antialiased">
      
      {/* Top Header Navbar */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        
        {/* Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onScrollToPrice={handleScrollToPrice}
        />

        {/* Product List Section (Canon R50, Fujifilm X-T20 & Fujifilm X-T30) */}
        <section id="thiet-bi" className="pt-6 pb-12 sm:pt-8 sm:pb-16 bg-white relative">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold">
                <Camera className="w-3.5 h-3.5" /> Dòng máy hiện có
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900">
                Danh sách máy ảnh cho thuê
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-normal">
                Ba mẫu máy ảnh Canon & Fujifilm tuyển chọn, chụp ảnh sắc nét, màu sắc thơ mộng sẵn sàng cùng bạn ghi lại mọi khoảnh khắc đáng nhớ.
              </p>
            </div>

            {/* 3 Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {PRODUCTS.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectDetail={(prod) => setSelectedDetailProduct(prod)}
                  onBookNow={(prodId) => handleOpenBooking(prodId)}
                />
              ))}
            </div>

            {/* Sub-banner for included items */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-rose-50 via-rose-100/40 to-pink-50 border border-rose-200/80 text-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs max-w-6xl mx-auto">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-9 h-9 rounded-xl bg-white text-rose-500 flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-sm sm:text-base text-stone-900 tracking-tight">Đầy đủ trọn bộ phụ kiện đi kèm (100% miễn phí)</h4>
                  <p className="text-xs text-stone-600 font-normal">Thẻ nhớ tốc độ cao + Lens Kit + Sạc pin + Dây sạc + Đầu đọc thẻ chuyển ảnh điện thoại</p>
                </div>
              </div>

              <button
                onClick={() => handleOpenBooking()}
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
              >
                Tư vấn thuê ngay
              </button>
            </div>

          </div>
        </section>

        {/* Pricing Comparison Table Section */}
        <PriceTable onBookNow={(prodId) => handleOpenBooking(prodId)} />

        {/* Mẫu ảnh chụp thực tế theo từng dòng máy (New) */}
        <PhotoGallery onSelectCameraToConsult={(prodId) => handleOpenBooking(prodId)} />

        {/* Hướng dẫn sử dụng máy ảnh cho người mới (New) */}
        <CameraGuide />

        {/* Hướng dẫn lấy góc chụp đẹp: Kỷ yếu, Cafe, Dã ngoại, Chân dung (New) */}
        <ShootingAnglesGuide />

        {/* Rental Process Section */}
        <RentalProcess />

        {/* Rental Policy Section */}
        <RentalPolicy />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* FAQ Section */}
        <FAQ />

        {/* Direct Booking & Consultation Section (Replaces Web Booking Form) */}
        <DirectBookingSection initialProductId={bookingProductId} />

        {/* Customer Testimonials Section */}
        <Testimonials />

        {/* Contact & Map Section */}
        <ContactSection />

      </main>

      {/* Floating Integration Guide Bar for Developers/Store Owners */}
      <div className="bg-rose-100/80 border-t border-b border-rose-200 py-2.5 px-4 text-center text-xs text-stone-700 flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
        <span>Dành cho chủ shop: Xem hướng dẫn quản lý website, kênh liên hệ & bảng giá tại đây</span>
        <button
          onClick={() => setGuideModalOpen(true)}
          className="ml-2 px-3 py-1 bg-white hover:bg-rose-50 text-rose-700 font-bold border border-rose-300 rounded-lg shadow-2xs transition-colors cursor-pointer"
        >
          Mở tài liệu Hướng Dẫn
        </button>
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (Facebook, Zalo, Phone) */}
      <FloatingContactButtons onOpenBooking={() => handleOpenBooking()} />

      {/* Modals */}
      <ProductDetailModal
        product={selectedDetailProduct}
        onClose={() => setSelectedDetailProduct(null)}
        onBookNow={(prodId) => handleOpenBooking(prodId)}
      />

      <IntegrationGuideModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />

    </div>
  );
};

export default App;
