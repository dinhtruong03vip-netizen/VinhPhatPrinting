/*
 * NỘI DUNG CỬA SỔ BÁO GIÁ — sửa chữ, nhãn, gợi ý và lựa chọn tại đây.
 * Điện thoại/email/địa chỉ dùng chung từ contact trong data.js.
 * Form gửi trực tiếp qua EmailJS; cấu hình tại emailjs-config.js.
 */
window.QUOTE_DATA = {
  title: "Yêu cầu báo giá",
  description: "Điền nhu cầu in ấn và bao bì của bạn, chuyên viên của chúng tôi sẽ liên hệ tư vấn và báo giá trong vòng 30 phút.",
  closeLabel: "Đóng cửa sổ báo giá",
  contacts: [
    { source: "phone", label: "HOTLINE 24/7" },
    { source: "email", label: "EMAIL" },
    { source: "address", label: "VĂN PHÒNG" }
  ],
  // width: full = cả hàng, half = nửa hàng. name phải khác nhau giữa các ô.
  // type: text, email, tel, number hoặc select. required: true = bắt buộc.
  fields: [
    { name: "fullName", label: "Họ và tên", type: "text", placeholder: "Nguyễn Văn A", required: true, width: "half", autocomplete: "name" },
    { name: "company", label: "Tên công ty", type: "text", placeholder: "Công ty ABC", required: false, width: "half", autocomplete: "organization" },
    { name: "product", label: "Sản phẩm", type: "text", placeholder: "Ví dụ: Hộp Bồi Carton, hộp giấy, Túi Giấy...", required: true, width: "full" },
    { name: "dimensions", label: "Kích thước", type: "text", placeholder: "Dài × rộng × cao (cm)", required: true, width: "full" },
    { name: "finishing", label: "Gia công sau in", type: "text", placeholder: "Ví dụ: Thúc nổi, bế ô cửa sổ, ép kim...", required: false, width: "full" },
    { name: "quantity", label: "Số lượng", type: "number", placeholder: "Nhập số lượng cần đặt", min: 1, step: 1, required: true, width: "full" },
    { name: "email", label: "Email liên hệ", type: "email", placeholder: "name@company.com", required: true, width: "half", autocomplete: "email" },
    { name: "phone", label: "Số điện thoại", type: "tel", placeholder: "0987654321", required: true, width: "half", autocomplete: "tel", pattern: "[+0-9() .-]{8,20}" }
  ],
  submitLabel: "GỬI YÊU CẦU BÁO GIÁ",
  email: {
    subject: "Yêu cầu báo giá",
    introduction: "Kính gửi bộ phận tư vấn, tôi muốn nhận báo giá với thông tin sau:",
    emptyValue: "Chưa cung cấp"
  }
};
