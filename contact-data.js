/*
 * TRANG LIÊN HỆ VÀ BÁO GIÁ — sửa nội dung tại đây, lưu rồi tải lại trang.
 * Logo, menu và liên hệ mặc định dùng chung từ data.js.
 * Biểu mẫu báo giá in ấn và bao bì gồm 8 trường như cửa sổ báo giá.
 * Biểu mẫu gửi trực tiếp qua EmailJS; cấu hình tại emailjs-config.js.
 */
window.CONTACT_DATA = {
  page: {
    title: "Liên hệ và báo giá",
    description: "Liên hệ Vinh Phát để được tư vấn và nhận báo giá in ấn, bao bì giấy.",
    background: "#f8fafc",
    badge: "TƯ VẤN & BÁO GIÁ",
    titleHighlight: "LIÊN HỆ VÀ",
    heading: "BÁO GIÁ",
    subtitle: "Chia sẻ nhu cầu in ấn và bao bì để được tư vấn và nhận báo giá phù hợp."
  },

  form: {
    title: "Yêu cầu báo giá",
    icon: "assets/contact/box.png",
    // name phải khác nhau giữa các ô. width: full = cả hàng, half = nửa hàng.
    // heading là dòng tiêu đề phụ phía trên nhãn. required: true = bắt buộc.
    fields: [
      {"name":"fullName","label":"Họ và tên","type":"text","placeholder":"Nguyễn Văn A","required":true,"width":"half","autocomplete":"name"},
      {"name":"company","label":"Tên công ty","type":"text","placeholder":"Công ty ABC","required":false,"width":"half","autocomplete":"organization"},
      {"name":"product","label":"Sản phẩm","type":"text","placeholder":"Ví dụ: Hộp Bồi Carton, hộp giấy, Túi Giấy...","required":true,"width":"full"},
      {"name":"dimensions","label":"Kích thước","type":"text","placeholder":"Dài × rộng × cao (cm)","required":true,"width":"full"},
      {"name":"finishing","label":"Gia công sau in","type":"text","placeholder":"Ví dụ: Thúc nổi, bế ô cửa sổ, ép kim...","required":false,"width":"full"},
      {"name":"quantity","label":"Số lượng","type":"number","placeholder":"Nhập số lượng cần đặt","min":1,"step":1,"required":true,"width":"full"},
      {"name":"email","label":"Email liên hệ","type":"email","placeholder":"name@company.com","required":true,"width":"half","autocomplete":"email"},
      {"name":"phone","label":"Số điện thoại","type":"tel","placeholder":"0987654321","required":true,"width":"half","autocomplete":"tel","pattern":"[+0-9() .-]{8,20}"}
    ],
    note: "Chuyên viên sẽ liên hệ tư vấn và báo giá dựa trên sản phẩm, kích thước, gia công sau in và số lượng bạn yêu cầu.",
    submitLabel: "GỬI YÊU CẦU BÁO GIÁ",
    buttonStartColor: "#ff5722",
    buttonEndColor: "#ffc107"
  },

  sidebar: {
    title: "Thông tin liên hệ",
    // source lấy từ contact trong data.js; có thể thêm value để ghi đè riêng.
    items: [
      { source: "address", label: "Trụ sở chính", icon: "assets/contact/map.svg" },
      { source: "phone", label: "Điện thoại", icon: "assets/contact/phone.svg" },
      { source: "email", label: "Email", icon: "assets/contact/email.svg" }
    ]
  },

  email: {
    subject: "Yêu cầu báo giá in ấn và bao bì",
    introduction: "Kính gửi bộ phận tư vấn, tôi cần báo giá in ấn và bao bì với thông tin sau:",
    emptyValue: "Chưa cung cấp"
  }
};
