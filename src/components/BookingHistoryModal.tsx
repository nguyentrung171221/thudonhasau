import React, { useState, useEffect } from 'react';
import { getStoredBookings } from '../utils/helpers';
import { BookingRequest } from '../types';
import { X, ReceiptText, Trash2, Phone, Calendar, Clock, MapPin, Tag, CheckCircle2 } from 'lucide-react';

interface BookingHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingHistoryModal: React.FC<BookingHistoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [bookings, setBookings] = useState<BookingRequest[]>([]);

  useEffect(() => {
    setBookings(getStoredBookings());
  }, [isOpen]);

  const handleClearHistory = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ danh sách đơn đặt lịch đã lưu trong trình duyệt này?')) {
      localStorage.removeItem('thuedonhasau_bookings_v1');
      setBookings([]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-rose-100 overflow-hidden relative text-stone-800">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-rose-50 to-white border-b border-rose-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-rose-100 rounded-xl text-rose-600">
              <ReceiptText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-xl tracking-tight text-stone-900">
                Đơn Đặt Lịch Đã Lưu
              </h3>
              <p className="text-xs text-stone-500 font-normal">
                Lưu trữ tạm thời trong bộ nhớ trình duyệt ({bookings.length} đơn)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-100 text-stone-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {bookings.length === 0 ? (
            <div className="py-12 text-center text-stone-400 space-y-2">
              <ReceiptText className="w-12 h-12 mx-auto text-rose-200" />
              <p className="text-sm font-medium text-stone-600">Chưa có yêu cầu đặt lịch nào được tạo.</p>
              <p className="text-xs text-stone-400">Các yêu cầu đặt lịch của bạn sau khi bấm gửi sẽ xuất hiện tại đây.</p>
            </div>
          ) : (
            bookings.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100 space-y-2 text-xs relative"
              >
                <div className="flex items-center justify-between border-b border-rose-100 pb-2">
                  <span className="font-mono font-bold text-rose-700">{item.id}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Đã ghi nhận
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-700 pt-1">
                  <div>• <strong>Họ tên:</strong> {item.fullName}</div>
                  <div>• <strong>SĐT:</strong> <a href={`tel:${item.phone}`} className="text-rose-600 font-bold">{item.phone}</a></div>
                  <div>• <strong>Máy thuê:</strong> <span className="font-bold text-stone-900">{item.productName}</span></div>
                  <div>• <strong>Khu vực:</strong> {item.region}</div>
                  <div>• <strong>Thời gian nhận:</strong> {item.pickupDate} ({item.pickupTime})</div>
                  <div>• <strong>Thời gian trả:</strong> {item.returnDate} ({item.returnTime})</div>
                  <div>• <strong>Gói thuê:</strong> {item.calculatedDaysOrHoursText}</div>
                  <div>• <strong>Tổng giá:</strong> <span className="text-rose-600 font-bold">{item.formattedPrice}</span></div>
                </div>

                {item.note && (
                  <div className="text-[11px] text-stone-500 italic bg-white p-2 rounded-xl border border-rose-100">
                    Ghi chú: "{item.note}"
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
          {bookings.length > 0 && (
            <button
              onClick={handleClearHistory}
              className="text-xs text-rose-600 hover:text-rose-800 font-bold flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" /> Xóa lịch sử
            </button>
          )}

          <button
            onClick={onClose}
            className="ml-auto px-5 py-2 bg-stone-900 text-white font-bold text-xs rounded-xl hover:bg-stone-800 transition-colors"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
