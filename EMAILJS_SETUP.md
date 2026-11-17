# Kích hoạt gửi báo giá qua EmailJS

Website gửi trực tiếp qua EmailJS REST API, không cần mở ứng dụng email hoặc cài thêm thư viện. Cửa sổ báo giá và form trang Liên hệ dùng chung cấu hình.

## 1. Kết nối email doanh nghiệp

Trong [EmailJS Dashboard](https://dashboard.emailjs.com/), tạo Email Service và kết nối tài khoản gửi email theo hướng dẫn của nhà cung cấp. Lưu Service ID.

## 2. Tạo Email Template

Tạo template với các thiết lập:

- **To Email:** `invinhphat6886@gmail.com` (đặt cố định trong template; thay nếu email nhận thay đổi).
- **From Name:** `Website Vinh Phát`.
- **From Email:** sử dụng địa chỉ mặc định của Email Service, không dùng email khách làm người gửi.
- **Reply To:** `{{reply_to}}` để doanh nghiệp có thể trả lời trực tiếp cho khách.
- **Subject:** `{{subject}} — {{from_name}}`.

Dán nội dung sau vào phần nội dung của template:

```text
YÊU CẦU BÁO GIÁ TỪ WEBSITE VINH PHÁT

Họ tên: {{fullName}}
Công ty: {{company}}
Email: {{email}}
Điện thoại: {{phone}}

Sản phẩm: {{product}}
Kích thước: {{dimensions}}
Gia công sau in: {{finishing}}
Số lượng: {{quantity}}

Thông tin đầy đủ:
{{message}}

Trang gửi yêu cầu: {{page_url}}
```

Lưu Template ID. Nếu dùng trình soạn HTML, đặt `{{message}}` trong `<pre style="white-space:pre-wrap">` để giữ xuống dòng. Dùng biến có hai dấu ngoặc nhọn như trên để dữ liệu khách được hiển thị dưới dạng chữ.

## 3. Điền cấu hình công khai

Lấy Public Key trong phần Account của EmailJS. Điền ba giá trị vào `emailjs-config.js`:

```js
window.EMAILJS_CONFIG = {
  serviceId: "service_...",
  templateId: "template_...",
  publicKey: "...",
};
```

Đây là cấu hình công khai dùng trên trình duyệt. Không đưa Private Key, mật khẩu email hoặc token quản trị vào mã nguồn.

Trong phần Security của EmailJS, cấu hình danh sách tên miền được phép theo gói tài khoản, gồm `https://vinhphatprinting.com` và `https://www.vinhphatprinting.com`. Chỉ thêm địa chỉ localhost khi cần kiểm tra tại máy.

## 4. Triển khai và kiểm tra

Push bản cấu hình lên GitHub và triển khai commit mới trên Vercel. Kiểm tra cả cửa sổ báo giá trên trang chủ/sản phẩm/bảng giá và form trang Liên hệ:

1. Điền thông tin thử có dấu tiếng Việt và gửi một lần.
2. Nút hiện trạng thái đang gửi; chỉ báo thành công sau khi EmailJS trả về thành công.
3. Kiểm tra hộp thư đến, thư rác và lịch sử gửi trên EmailJS.
4. Dùng nút trả lời email và xác nhận địa chỉ người nhận là email khách đã điền.
5. Nếu mất mạng hoặc EmailJS từ chối, form báo lỗi và giữ dữ liệu để thử lại.

Khi thiếu cấu hình, form báo dịch vụ chưa sẵn sàng và không thực hiện yêu cầu gửi. Thông báo thành công xác nhận EmailJS đã nhận xử lý; cần kiểm tra hộp thư để xác minh việc nhận email thực tế.

Tài liệu chính thức: https://www.emailjs.com/docs/rest-api/send/
