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
            4. Tự Động Gửi Email & Sheets
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
            <div className="space-y-4 leading-relaxed">
              <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-600" /> Cấu hình Tự động gửi Email về trantienky666@gmail.com
              </h4>
              
              <div className="p-3.5 bg-rose-50 rounded-2xl border border-rose-200 text-xs text-stone-800 space-y-2">
                <p className="font-semibold text-rose-800 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-rose-600" />
                  Mã nguồn đã được nâng cấp Backend Express API (/api/send-booking-email) sẵn sàng gửi mail tự động!
                </p>
                <p>Để hệ thống tự động bắn email thông báo đơn mới tới email <strong className="text-stone-900">trantienky666@gmail.com</strong>, bạn chỉ cần cấu hình Mật khẩu ứng dụng Gmail (App Password):</p>
              </div>

              <div className="space-y-2.5 text-xs text-stone-700">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
                  <span className="font-bold text-stone-900 flex items-center gap-1">
                    1. Các bước lấy Mật khẩu ứng dụng từ Google (App Password):
                  </span>
                  <ol className="list-decimal list-inside space-y-1 pl-1 text-stone-600">
                    <li>Vào tài khoản Gmail: <strong>myaccount.google.com</strong> → chọn <strong>Bảo mật (Security)</strong>.</li>
                    <li>Bật <strong>Xác minh 2 bước (2-Step Verification)</strong>.</li>
                    <li>Tìm từ khóa <strong>Mật khẩu ứng dụng (App Passwords)</strong> → Tạo một mật khẩu mới cho ứng dụng (ví dụ tên: <i>Thuê Đồ Nhà Sâu</i>).</li>
                    <li>Google sẽ cấp 1 chuỗi 16 ký tự (ví dụ: <code className="bg-stone-200 px-1 py-0.5 rounded">abcd efgh ijkl mnop</code>).</li>
                  </ol>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
                  <span className="font-bold text-stone-900 flex items-center gap-1">
                    2. Điền Mật khẩu ứng dụng vào file .env của dự án:
                  </span>
                  <pre className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-[11px] overflow-x-auto">
{`SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=trantienky666@gmail.com
SMTP_PASS=chuoi_mat_khau_16_ky_tu_google_cap
NOTIFICATION_EMAIL=trantienky666@gmail.com`}
                  </pre>
                  <p className="text-[11px] text-stone-500">
                    Sau khi điền file <code className="font-mono text-rose-600 font-bold">.env</code>, khởi động lại server (<code className="font-mono text-stone-900 font-bold">npm run dev</code>). Mọi đơn hàng từ khách hàng sẽ ngay lập tức được gửi vào hòm thư <strong>trantienky666@gmail.com</strong>!
                  </p>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-600" /> Tùy chọn 2: Kết nối Google Sheets (Nâng cao)
                </h4>
                
                <p className="text-xs text-stone-600">Đơn hàng tự động lưu vào hệ thống và gửi qua Gmail SMTP. Nếu muốn đẩy thêm thông báo tùy chọn qua Webhook (Google Sheets/Make/Zapier), bạn có thể thêm <code className="font-mono">WEBHOOK_URL=...</code> trong file <code className="font-mono">.env</code> (biến này là <strong>không bắt buộc</strong>).</p>
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
