import { PRODUCTS } from '../data/storeData';
import { BookingRequest } from '../types';

/**
 * Format a number to Vietnamese currency format
 */
export function formatVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
    .format(amount)
    .replace('₫', 'đồng');
}

/**
 * Calculate total hours between two date-time strings
 */
export function calculateHoursBetween(
  startDateStr: string,
  startTimeStr: string,
  endDateStr: string,
  endTimeStr: string
): number {
  if (!startDateStr || !endDateStr) return 0;
  
  const start = new Date(`${startDateStr}T${startTimeStr || '08:00'}`);
  const end = new Date(`${endDateStr}T${endTimeStr || '14:00'}`);
  
  const diffMs = end.getTime() - start.getTime();
  if (isNaN(diffMs) || diffMs <= 0) return 0;
  
  return Math.ceil(diffMs / (1000 * 60 * 60));
}

/**
 * Calculate estimated rental price based on product and rental parameters
 */
export function calculateRentalCalculation(
  productId: string,
  selectedPlan: '6h' | '1d' | '2d' | '3d' | 'custom',
  pickupDateStr: string,
  pickupTimeStr: string,
  returnDateStr: string,
  returnTimeStr: string
): {
  totalHours: number;
  totalDays: number;
  calculatedPrice: number;
  formattedPrice: string;
  durationSummary: string;
  planName: string;
} {
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const hours = calculateHoursBetween(pickupDateStr, pickupTimeStr, returnDateStr, returnTimeStr);
  
  let price = 0;
  let durationSummary = '';
  let planName = '';

  // Standard fixed package prices
  const price6h = product.prices.find((p) => p.planKey === '6h')?.price || 160000;
  const price1d = product.prices.find((p) => p.planKey === '1d')?.price || 220000;
  const price2d = product.prices.find((p) => p.planKey === '2d')?.price || 400000;
  const price3d = product.prices.find((p) => p.planKey === '3d')?.price || 570000;

  if (selectedPlan === '6h') {
    price = price6h;
    durationSummary = '6 tiếng';
    planName = 'Gói 6 tiếng';
  } else if (selectedPlan === '1d') {
    price = price1d;
    durationSummary = '1 ngày (24h)';
    planName = 'Gói 1 ngày';
  } else if (selectedPlan === '2d') {
    price = price2d;
    durationSummary = '2 ngày (48h)';
    planName = 'Gói 2 ngày';
  } else if (selectedPlan === '3d') {
    price = price3d;
    durationSummary = '3 ngày (72h)';
    planName = 'Gói 3 ngày';
  } else {
    // Custom calculation according to calculated hours
    if (hours <= 0) {
      price = price6h;
      durationSummary = 'Chưa chọn đủ thời gian';
      planName = 'Gói 6 tiếng (Mặc định)';
    } else if (hours <= 6) {
      price = price6h;
      durationSummary = `${hours} tiếng (Gói 6h)`;
      planName = 'Gói 6 tiếng';
    } else if (hours <= 24) {
      price = price1d;
      durationSummary = `${hours} tiếng (Gói 1 ngày)`;
      planName = 'Gói 1 ngày';
    } else if (hours <= 48) {
      // Interpolate or tier 2d
      price = price2d;
      const extraDays = Math.ceil((hours - 24) / 24);
      durationSummary = `${hours} tiếng (~${extraDays + 1} ngày)`;
      planName = 'Gói 2 ngày';
    } else if (hours <= 72) {
      price = price3d;
      durationSummary = `${hours} tiếng (3 ngày)`;
      planName = 'Gói 3 ngày';
    } else {
      // Over 3 days: 3d price + extra days
      const days = Math.ceil(hours / 24);
      const extraDays = days - 3;
      price = price3d + extraDays * price1d;
      durationSummary = `${days} ngày (${hours} tiếng)`;
      planName = `Gói ${days} ngày`;
    }
  }

  return {
    totalHours: hours,
    totalDays: Math.ceil(hours / 24) || 1,
    calculatedPrice: price,
    formattedPrice: formatVND(price),
    durationSummary,
    planName
  };
}

const STORAGE_KEY = 'thuedonhasau_bookings_v1';

/**
 * Fetch list of saved booking requests from LocalStorage
 */
export function getStoredBookings(): BookingRequest[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch (err) {
    console.error('Lỗi khi đọc danh sách đặt lịch từ LocalStorage:', err);
    return [];
  }
}

/**
 * Save a new booking request to LocalStorage
 */
export function saveBookingToLocalStorage(booking: Omit<BookingRequest, 'id' | 'createdAt' | 'status'>): BookingRequest {
  const existing = getStoredBookings();
  const newBooking: BookingRequest = {
    ...booking,
    id: 'SÂU-' + Date.now().toString(36).toUpperCase(),
    createdAt: new Date().toISOString(),
    status: 'pending'
  };

  const updated = [newBooking, ...existing];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Lỗi khi lưu đặt lịch vào LocalStorage:', err);
  }

  // Integration Stub: Fire background event or webhook if configured
  sendBookingToExternalIntegrations(newBooking);

  return newBooking;
}

/**
 * Integration stub function for Google Sheets, Firebase, Email or Webhook
 */
export async function sendBookingToExternalIntegrations(booking: BookingRequest): Promise<boolean> {
  console.log('📦 [Thuê đồ nhà Sâu] Dữ liệu đơn hàng mới đã sẵn sàng để gửi:', booking);
  
  /* 
   * HƯỚNG DẪN KẾT NỐI HỆ THỐNG BÊN NGOÀI (Google Sheets / Firebase / Email API):
   * 
   * 1. KẾT NỐI GOOGLE SHEETS:
   *    Bạn có thể dùng Google Apps Script Web App Endpoint:
   *    const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   *    fetch(SCRIPT_URL, {
   *      method: 'POST',
   *      body: JSON.stringify(booking),
   *      headers: { 'Content-Type': 'application/json' }
   *    });
   * 
   * 2. KẾT NỐI FIREBASE FIRESTORE:
   *    import { db } from './firebaseConfig';
   *    import { collection, addDoc } from 'firebase/firestore';
   *    await addDoc(collection(db, "bookings"), booking);
   * 
   * 3. KẾT NỐI EMAILJS (Gửi email thông báo cho shop):
   *    import emailjs from '@emailjs/browser';
   *    emailjs.send('SERVICE_ID', 'TEMPLATE_ID', booking, 'PUBLIC_KEY');
   */

  return true;
}
