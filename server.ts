import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory server backup store for bookings
interface BookingRecord {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  email?: string;
  productName: string;
  region: string;
  locationAddress: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  rentalPlan: string;
  calculatedDaysOrHoursText: string;
  formattedPrice: string;
  note?: string;
}

const serverBookings: BookingRecord[] = [];

// Helper to construct HTML email
function buildBookingEmailHtml(booking: BookingRecord, targetEmail: string) {
  return `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #292524; background-color: #fafaf9; border-radius: 16px; border: 1px solid #fecdd3;">
      <div style="text-align: center; padding-bottom: 16px; border-bottom: 2px solid #f43f5e;">
        <h1 style="color: #e11d48; margin: 0; font-size: 24px;">📸 THUÊ ĐỒ NHÀ SÂU</h1>
        <p style="color: #78716c; font-size: 13px; margin-top: 4px;">Thông báo đơn đặt lịch thuê máy ảnh mới</p>
      </div>

      <div style="padding: 20px 0;">
        <p style="font-size: 15px; font-weight: bold; color: #1c1917; margin-bottom: 16px;">
          Kính gửi cửa hàng, bạn vừa nhận được 1 yêu cầu đặt lịch mới cho email: <span style="color: #e11d48;">${targetEmail}</span>
        </p>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e7e5e4;">
          <tr style="background-color: #fff1f2;">
            <th colspan="2" style="padding: 12px; text-align: left; color: #9f1239; font-size: 15px; border-bottom: 1px solid #ffe4e6;">
              📋 THÔNG TIN KHÁCH HÀNG & ĐƠN THUÊ
            </th>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; font-weight: bold; width: 40%; color: #57534e;">Mã đơn:</td>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; color: #1c1917; font-weight: bold;">${booking.id}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; font-weight: bold; color: #57534e;">Họ và tên khách hàng:</td>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; color: #1c1917; font-weight: bold;">${booking.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; font-weight: bold; color: #57534e;">Số điện thoại / Zalo:</td>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; color: #e11d48; font-weight: bold; font-size: 16px;">
              <a href="tel:${booking.phone}" style="color: #e11d48; text-decoration: none;">${booking.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; font-weight: bold; color: #57534e;">Email liên hệ:</td>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; color: #1c1917;">${booking.email || 'Không cung cấp'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; font-weight: bold; color: #57534e;">Máy ảnh chọn thuê:</td>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; color: #1c1917; font-weight: bold;">${booking.productName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; font-weight: bold; color: #57534e;">Địa điểm nhận máy:</td>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; color: #1c1917;">${booking.region} (${booking.locationAddress})</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; font-weight: bold; color: #57534e;">Thời gian nhận máy:</td>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; color: #1c1917;">${booking.pickupDate} lúc ${booking.pickupTime}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; font-weight: bold; color: #57534e;">Thời gian trả máy:</td>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; color: #1c1917;">${booking.returnDate} lúc ${booking.returnTime}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; font-weight: bold; color: #57534e;">Gói thuê & Thời lượng:</td>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; color: #1c1917;">${booking.calculatedDaysOrHoursText} (${booking.rentalPlan})</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; font-weight: bold; color: #57534e;">Dự kiến giá thuê:</td>
            <td style="padding: 10px 14px; border-bottom: 1px solid #f5f5f4; color: #d97706; font-weight: bold; font-size: 16px;">${booking.formattedPrice}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: bold; color: #57534e;">Ghi chú thêm:</td>
            <td style="padding: 10px 14px; color: #1c1917;">${booking.note || 'Không có ghi chú'}</td>
          </tr>
        </table>
      </div>

      <div style="background-color: #f5f5f4; padding: 12px; border-radius: 8px; text-align: center; font-size: 12px; color: #78716c;">
        <p style="margin: 0;">Email tự động gửi từ hệ thống Thuê đồ nhà Sâu - Vĩnh Yên, Vĩnh Phúc</p>
        <p style="margin: 4px 0 0 0;">Vui lòng liên hệ lại khách hàng qua SĐT <strong style="color: #e11d48;">${booking.phone}</strong> trong vòng 15-30 phút.</p>
      </div>
    </div>
  `;
}

// API Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "Thuê đồ nhà Sâu", targetEmail: process.env.NOTIFICATION_EMAIL || "trantienky666@gmail.com" });
});

// API Get Bookings List
app.get("/api/bookings", (req, res) => {
  res.json({ success: true, count: serverBookings.length, bookings: serverBookings });
});

// API Send Booking Email
app.post("/api/send-booking-email", async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      productName,
      region,
      locationAddress,
      pickupDate,
      pickupTime,
      returnDate,
      returnTime,
      rentalPlan,
      calculatedDaysOrHoursText,
      formattedPrice,
      note
    } = req.body;

    if (!fullName || !phone || !productName) {
      res.status(400).json({ success: false, message: "Thiếu thông tin bắt buộc (họ tên, SĐT, máy thuê)." });
      return;
    }

    const newRecord: BookingRecord = {
      id: `TDNS-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      fullName,
      phone,
      email,
      productName,
      region: region || "Vĩnh Yên",
      locationAddress: locationAddress || "KCN Thăng Long 3 Vĩnh Phúc, Xã Thiện Kế, Bình Xuyên, Phú Thọ",
      pickupDate,
      pickupTime,
      returnDate,
      returnTime,
      rentalPlan: rentalPlan || "1d",
      calculatedDaysOrHoursText: calculatedDaysOrHoursText || "",
      formattedPrice: formattedPrice || "0 đ",
      note: note || ""
    };

    serverBookings.unshift(newRecord);

    const targetEmail = process.env.NOTIFICATION_EMAIL || "trantienky666@gmail.com";
    const smtpUser = process.env.SMTP_USER || "trantienky666@gmail.com";
    const smtpPass = process.env.SMTP_PASS || "ulesyiqeiraweuxf";
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const webhookUrl = process.env.WEBHOOK_URL;

    let emailSent = false;
    let emailError = "";

    // 1. Optional Webhook (Tùy chọn - không bắt buộc)
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "new_booking",
            targetEmail,
            booking: newRecord
          })
        });
        console.log(`[WEBHOOK SUCCESS] Notification pushed to ${webhookUrl}`);
      } catch (err: any) {
        console.error("Webhook notification error (ignored):", err?.message || err);
      }
    }

    // 2. Main Email Delivery via Gmail SMTP (Nodemailer)
    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465, // true for 465, false for other ports
          auth: {
            user: smtpUser,
            pass: smtpPass
          }
        });

        const mailOptions = {
          from: `"Thuê Đồ Nhà Sâu" <${smtpUser}>`,
          to: `${targetEmail}${email ? `, ${email}` : ""}`,
          subject: `[ĐƠN THUÊ MỚI ${newRecord.id}] ${fullName} - ${phone} (${productName})`,
          html: buildBookingEmailHtml(newRecord, targetEmail)
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
        console.log(`[SMTP SUCCESS] Email successfully dispatched to ${targetEmail}`);
      } catch (err: any) {
        console.error("[SMTP ERROR]:", err?.message || err);
        emailError = err?.message || "SMTP error";
      }
    }

    if (emailSent) {
      res.json({
        success: true,
        sent: true,
        bookingId: newRecord.id,
        targetEmail,
        message: `Đã gửi thông báo đơn hàng thành công tới email ${targetEmail}`
      });
      return;
    }

    // If SMTP credentials are not yet set in .env
    console.log(`[BOOKING RECEIVED] Order ${newRecord.id} saved in memory. Target Email: ${targetEmail}`);
    res.json({
      success: true,
      sent: false,
      bookingId: newRecord.id,
      targetEmail,
      reason: "smtp_credentials_missing",
      message: `Đơn hàng đã được lưu lại hệ thống. Để tự động nhận email tới ${targetEmail}, hãy điền SMTP_USER & SMTP_PASS (Mật khẩu ứng dụng Gmail) vào file .env.`
    });

  } catch (error: any) {
    console.error("Error in send-booking-email API:", error);
    res.status(500).json({ success: false, message: "Lỗi máy chủ khi xử lý đơn hàng." });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
