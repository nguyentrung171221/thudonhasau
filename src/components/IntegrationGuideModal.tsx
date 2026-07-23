import React, { useState } from 'react';
import { X, Code, Database, FileSpreadsheet, Mail, Phone, Settings, Sparkles, BookOpen } from 'lucide-react';

interface IntegrationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IntegrationGuideModal: React.FC<IntegrationGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'contacts' | 'integrations'>('overview');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-rose-100 overflow-hidden relative text-stone-800">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-rose-50 to-white border-b border-rose-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-rose-100 rounded-xl text-rose-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-xl tracking-tight text-stone-900">
                Hướng Dẫn Tùy Chỉnh & Kết Nối Backend
              </h3>
              <p className="text-xs text-stone-500 font-normal">
                Tài liệu kỹ thuật và vị trí chỉnh sửa dữ liệu cửa hàng
              </p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-stone-100 text-stone-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-rose-100 bg-stone-50 text-xs font-bold text-stone-600 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'overview' ? 'border-rose-500 text-rose-600 bg-white' : 'border-transparent hover:text-stone-900'
            }`}
          >
            1. Cách Chạy Website
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'products' ? 'border-rose-500 text-rose-600 bg-white' : 'border-transparent hover:text-stone-900'
            }`}
          >
            2. Chỉnh Sản Phẩm & Giá
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-4 py-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'contacts' ? 'border-rose-500 text-rose-600 bg-white' : 'border-transparent hover:text-stone-900'
            }`}
          >
            3. Chỉnh SĐT & Địa Chỉ
          </button>
          <button
            onClick={() => setActiveTab('integrations')}
            className={`px-4 py-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'integrations' ? 'border-rose-500 text-rose-600 bg-white' : 'border-transparent hover:text-stone-900'
            }`}
          >
            4. Kết Nối Google Sheets / Firebase
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto text-xs sm:text-sm text-stone-700 space-y-4">
          
          {activeTab === 'overview' && (
            <div className="space-y-3 leading-relaxed">
              <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Code className="w-4 h-4 text-rose-500" /> Hướng dẫn chạy và khởi tạo website
              </h4>
              <p>Mã nguồn được viết bằng <strong>React 19, TypeScript, Vite & Tailwind CSS</strong>. Để chạy ứng dụng trên máy cá nhân:</p>
              
              <div className="bg-stone-900 text-stone-100 p-4 rounded-2xl font-mono text-xs space-y-1">
                <p><span className="text-stone-500"># 1. Cài đặt các thư viện bổ trợ:</span></p>
                <p className="text-amber-300">npm install</p>
                <p className="pt-2"><span className="text-stone-500"># 2. Chạy môi trường phát triển (Dev Server):</span></p>
                <p className="text-emerald-400">npm run dev</p>
                <p className="pt-2"><span className="text-stone-500"># 3. Đóng gói cho Production web:</span></p>
                <p className="text-rose-300">npm run build</p>
              </div>

              <p className="text-stone-600">Trình duyệt sẽ tự động mở tại địa chỉ <code className="bg-stone-100 px-1.5 py-0.5 rounded text-rose-600">http://localhost:3000</code>.</p>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="space-y-3 leading-relaxed">
              <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Settings className="w-4 h-4 text-rose-500" /> Vị trí chỉnh sửa Sản phẩm, Hình ảnh và Bảng giá
              </h4>
              <p>Tất cả dữ liệu sản phẩm, giá thuê theo thời gian, mô tả và phụ kiện được lưu tập trung tại file:</p>
              <div className="bg-rose-50 p-3 rounded-xl border border-rose-200 font-mono text-rose-700 font-bold">
                /src/data/storeData.ts → hằng số PRODUCTS
              </div>

              <div className="space-y-2 text-xs">
                <p><strong>Cấu trúc mẫu khi sửa giá hoặc thêm sản phẩm:</strong></p>
                <pre className="bg-stone-900 text-amber-200 p-3 rounded-xl font-mono text-[11px] overflow-x-auto">
{`export const PRODUCTS: CameraProduct[] = [
  {
    id: 'canon-r50',
    name: 'Canon EOS R50 + Lens Kit',
    prices: [
      { planKey: '6h', price: 160000, formattedPrice: '160.000 đ' },
      { planKey: '1d', price: 220000, formattedPrice: '220.000 đ' },
      ...
    ]
  }
];`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'contacts' && (
            <div className="space-y-3 leading-relaxed">
              <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-500" /> Vị trí thay đổi Số điện thoại, Địa chỉ & Email
              </h4>
              <p>Tất cả thông tin liên hệ của cửa hàng Thuê đồ nhà Sâu nằm trong file:</p>
              <div className="bg-rose-50 p-3 rounded-xl border border-rose-200 font-mono text-rose-700 font-bold">
                /src/data/storeData.ts → hằng số STORE_INFO
              </div>

              <div className="space-y-2 text-xs">
                <p><strong>Các trường có thể thay đổi:</strong></p>
                <ul className="list-disc pl-5 space-y-1 text-stone-600">
                  <li><strong>phones:</strong> Mảng chứa các số điện thoại hotline.</li>
                  <li><strong>zaloPhones:</strong> Mảng số Zalo tư vấn.</li>
                  <li><strong>email:</strong> Email nhận liên hệ (<code className="text-stone-900 font-bold">Trantienky666@gmail.com</code>).</li>
                  <li><strong>locations:</strong> Mảng địa điểm Vĩnh Yên kèm đường dẫn Google Maps.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="space-y-3 leading-relaxed">
              <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" /> Kết nối Google Sheets & Firebase
              </h4>
              
              <p>Hiện tại khi khách gửi form, dữ liệu đã được lưu trực tiếp vào <code className="bg-stone-100 px-1 rounded font-mono">localStorage</code>. Hàm xử lý trung gian được đặt tại:</p>
              <div className="bg-rose-50 p-2.5 rounded-xl border border-rose-200 font-mono text-rose-700 text-xs font-bold">
                /src/utils/helpers.ts → hàm sendBookingToExternalIntegrations()
              </div>

              <div className="space-y-3 pt-1 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <FileSpreadsheet className="w-3.5 h-3.5" /> A. Kết nối Google Sheets (Miễn phí & Dễ nhất):
                  </span>
                  <p className="text-stone-600">Tạo một Google Apps Script gắn liền với file Google Sheets của bạn:</p>
                  <pre className="bg-stone-900 text-stone-100 p-2.5 rounded-lg font-mono text-[10px] overflow-x-auto">
{`function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([new Date(), data.fullName, data.phone, data.productName, data.region, data.formattedPrice]);
  return ContentService.createTextOutput("Success");
}`}
                  </pre>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <span className="font-bold text-rose-700 flex items-center gap-1">
                    <Database className="w-3.5 h-3.5" /> B. Kết nối Firebase Firestore:
                  </span>
                  <p className="text-stone-600">Cài đặt SDK Firebase <code className="font-mono">npm install firebase</code> và gọi trong <code className="font-mono">helpers.ts</code>:</p>
                  <pre className="bg-stone-900 text-stone-100 p-2.5 rounded-lg font-mono text-[10px] overflow-x-auto">
{`import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

await addDoc(collection(db, "bookings"), booking);`}
                  </pre>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-100 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-stone-900 text-white font-bold text-xs rounded-xl hover:bg-stone-800 transition-colors"
          >
            Đóng hướng dẫn
          </button>
        </div>

      </div>
    </div>
  );
};
