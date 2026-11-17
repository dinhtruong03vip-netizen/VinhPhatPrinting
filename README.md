# Website Vinh Phát

Website tĩnh bằng HTML, CSS và JavaScript thuần. Không cần cài thư viện, chạy build, backend hoặc cơ sở dữ liệu.

## Mở trang

Mở `index.html`, `gioi-thieu.html`, `dich-vu.html`, `bang-gia.html` hoặc `lien-he-va-bao-gia.html` bằng Chrome, Edge hoặc Firefox. Menu đã dẫn đến các trang Giới thiệu, Sản phẩm, Bảng giá và Liên hệ và Báo giá. Có thể dùng tiện ích Live Server trong VS Code để tự cập nhật khi sửa file. Khi xuất bản lên hosting tĩnh, đưa tất cả file HTML, CSS, JS và thư mục `assets/` lên cùng một thư mục.

## Các file

- `index.html`: trang chủ, nội dung, menu, dịch vụ, giới thiệu, quy trình, cẩm nang và liên hệ.
- `data.js`: nguồn nội dung dùng để chỉnh sửa chữ, menu, ảnh, thông tin liên hệ và bài cẩm nang.
- `content.js`: đưa dữ liệu vào giao diện; không cần sửa file này khi chỉ thay nội dung.
- `styles.css`: font Inter tự lưu, màu thương hiệu và bố cục responsive.
- `script.js`: menu điện thoại, slider ảnh, trạng thái menu khi cuộn, cẩm nang dạng hộp thoại và nút về đầu trang.
- `gioi-thieu.html`: trang giới thiệu doanh nghiệp với 3 thẻ ảnh và nội dung.
- `chinh-sach-quy-dinh.html`: trang chính sách với mục lục 6 phần; menu và liên kết chính sách ở chân trang đã kết nối đến trang này.
- `policy-data.js`: toàn bộ nội dung chính sách do doanh nghiệp cung cấp. Sửa `page` để thay tiêu đề/lời dẫn và `sections` để thay nội dung. Mỗi phần có `id`, `title`, `navLabel`, `icon`, `blocks`. Giữ nguyên `id` để các liên kết vẫn hoạt động.
- `policy.js`, `policy.css`: hiển thị nội dung, mục lục theo vị trí cuộn và bố cục trên máy tính/điện thoại. Các khối nội dung hỗ trợ `paragraph`, `heading`, `list` và danh sách lồng nhau.
- `about-data.js`: toàn bộ nội dung riêng của trang giới thiệu.
- `about.css`: bố cục, kích thước và màu nền của trang giới thiệu theo mẫu.
- `about.js`: hiển thị dữ liệu, chuyển tab, menu điện thoại và liên kết giữa các trang.
- `quote-data.js`: nội dung cửa sổ Yêu cầu báo giá, nhãn ô nhập và cấu hình email.
- `quote.css`, `quote.js`: giao diện cửa sổ và xử lý biểu mẫu báo giá trên trang chủ.
- `lien-he-va-bao-gia.html`: trang liên hệ và báo giá hàng lẻ (LCL), không có tab FCL.
- `contact-data.js`: tiêu đề, nội dung form, phương thức vận chuyển và khung liên hệ của trang liên hệ.
- `contact.css`, `contact.js`: giao diện trang liên hệ theo mẫu và kết nối biểu mẫu gửi qua EmailJS.
- `dich-vu.html`: trang dịch vụ in ấn, với thẻ ngang, thông tin quy cách và cửa sổ chi tiết từng dịch vụ.
- `services-data.js`: nội dung, ảnh, icon, thông số, quy trình và các nút trên trang dịch vụ.
- `services.css`, `services.js`: giao diện và thao tác xem chi tiết của trang dịch vụ.
- `page-shell.js`: thanh menu, chân trang và thao tác chung cho trang sản phẩm và bảng giá, lấy nội dung từ `data.js`.
- `bang-gia.html`: trang bảng giá tham khảo, với 6 dòng sản phẩm theo ảnh mới nhất đã cung cấp.
- `pricing-data.js`: nội dung bảng giá, kích thước, gia công, số lượng, giá và phần tư vấn.
- `pricing.css`, `pricing.js`: giao diện bảng trên máy tính, dạng thẻ trên điện thoại và hiển thị dữ liệu.
- `footer.css`: bố cục, cỡ chữ và các nút mạng xã hội dùng chung ở chân trang của cả bốn trang.
- `footer-socials.js`: hiển thị Facebook, YouTube và chat theo cấu hình trong `data.js`.
- `assets/`: hình ảnh và thư mục `fonts/` chứa font Inter.

## Chỉnh sửa

- Đổi hai màu ở `:root` trong `styles.css`: `--wine: #5d0633` và `--gold: #f6a822`.
- Sửa nội dung trong `data.js`, lưu file rồi tải lại trang. Nội dung trong file này thay thế bản mặc định trong HTML khi JavaScript hoạt động.
- Thay ảnh trong `assets/` rồi cập nhật đường dẫn trong `data.js`. `site.logo` dùng chung cho logo đầu trang và chân trang; `site.favicon` là biểu tượng trên tab.
- Menu nằm trong `menu` của `data.js`: đường dẫn bắt đầu bằng `#` dẫn đến một phần trong trang; các đường dẫn `.html` dành cho các trang con chưa tạo.
- Nút liên hệ mở ứng dụng gọi điện hoặc email. Các biểu mẫu báo giá gửi trực tiếp qua EmailJS sau khi điền cấu hình; xem EMAILJS_SETUP.md.

## Chỉnh chân trang

Chỉnh `data.js` → `footer`. `columns` chứa các tiêu đề và mục liên kết; `contactTitle` là tiêu đề cột liên hệ. Điện thoại, email và địa chỉ vẫn lấy từ `contact`.

`socials` chứa ba icon Facebook, YouTube và chat. Để `href: ""` khi chưa có địa chỉ: icon hiển thị thành nút, bấm không chuyển trang. Khi có liên kết, điền URL đầy đủ vào `href`; icon tự chuyển thành liên kết mở trong tab mới. `icon` hỗ trợ `facebook`, `youtube`, `chat`; `label` dùng cho tên truy cập và chú thích khi rê chuột.

Cột Thông tin & Chính sách có đủ bốn mục được yêu cầu. Bảng giá tham khảo dẫn đến `bang-gia.html`; Hướng dẫn đặt hàng dẫn đến `dich-vu.html`. Hai mục Chính sách bảo mật và Điều khoản sử dụng đang để trống `href` vì chưa có trang nội dung, hiển thị dạng nút; có thể thêm đường dẫn vào dữ liệu khi tạo các trang đó.

## Sửa trang Bảng giá

Sửa `pricing-data.js`, lưu rồi tải lại `bang-gia.html`. Dữ liệu theo ảnh bảng giá mới: 6 dòng gồm hộp bồi sóng E + giấy Duplex 230 gsm, hai quy cách hộp giấy Ivory 350 gsm, vở ô ly 60 trang, vở kẻ ngang 80 trang và tem decal nhựa. Đã nhập đầy đủ kích thước, số lượng và đơn giá từ ảnh; phần gia công của hai dòng vở để trống theo ảnh.

`table.rows` chứa từng dòng. Sửa `product` (sản phẩm), `size` (kích thước), `finishing` (gia công sau in), `quantity` (số lượng) và `price` (giá). Thêm dòng bằng cách sao chép một phần tử trong danh sách. Các trường chưa có dữ liệu để `""`; giao diện hiển thị dấu gạch ngang và nhãn truy cập Chưa cập nhật. Chưa có đơn giá nào được tự đặt. Khi có giá thực tế, có thể nhập `price: "1.500 đ/hộp"` hoặc cách ghi giá khác theo nhu cầu, không cần thay mã hiển thị.

`icon` là đường dẫn biểu tượng; `href` dẫn đến chi tiết sản phẩm tương ứng, để trống nếu chưa có trang sản phẩm. `table.columns` chứa nhãn của năm cột; giữ các `key` để dữ liệu khớp đúng cột. `page` chỉnh tiêu đề và mô tả đầu trang, `guide` chỉnh phần hướng dẫn nhận báo giá, `cta` chỉnh khối liên hệ cuối trang. Số điện thoại và email lấy từ `data.js`. Nút Yêu cầu báo giá mở cửa sổ dùng chung với trang chủ; nội dung cửa sổ nằm trong `quote-data.js`.

Trên máy tính, nội dung trình bày dạng bảng. Trên màn hình nhỏ, mỗi dòng tự chuyển thành thẻ với đủ nhãn để dễ đọc, không cần cuộn ngang.

## Sửa trang Dịch vụ

Sửa `services-data.js`, lưu rồi tải lại `dich-vu.html`. Giao diện tham khảo từ https://phuongdonglogistics.net/dich-vu/, đổi nội dung thành bốn sản phẩm in ấn hiện có.

| Nhóm | Nội dung |
| --- | --- |
| `page` | Tiêu đề tab, màu nền, huy hiệu và phần giới thiệu đầu trang |
| `labels` | Nhãn nút liên hệ, xem chi tiết, tiêu đề trong cửa sổ |
| `items` | Bốn dịch vụ; tiêu đề, mô tả, ảnh, icon, nhãn và thông tin sản phẩm |
| `process` | Quy trình dùng chung trong cửa sổ chi tiết; thêm `steps` vào một dịch vụ để dùng quy trình riêng |
| `options` | Tiêu đề phần chất liệu và quy cách |
| `consultation` | Khối tư vấn nền xanh đậm: chữ, ảnh, danh sách và nút |
| `cta` | Khối lời mời cuối trang và các liên kết |

Trong mỗi phần tử của `items`, `image` là đường dẫn ảnh, `imageAlt` là mô tả ảnh, `icon` là đường dẫn biểu tượng SVG, `tags` là các nhãn ngắn, `introduction` là lời giới thiệu trong cửa sổ chi tiết. `specifications` là danh sách thông tin sản phẩm; nếu danh sách trống, `note` được dùng ở khối quy cách. Chữ `{{name}}` tự lấy tên thương hiệu từ `data.js`.

Giữ nguyên bốn `id` để các thẻ trên trang chủ và liên kết ở chân trang mở đúng dịch vụ:

- `dich-vu.html#hop-carton-boi`: Hộp carton bồi.
- `dich-vu.html#hop-giay-ivory-duplex`: Hộp giấy ivory, duplex.
- `dich-vu.html#vo-hoc-sinh-giay-thi`: Vở học sinh, giấy thi.
- `dich-vu.html#tui-giay`: Túi giấy.

Các ảnh trong `assets/services/` đang lấy tạm từ website mẫu theo yêu cầu. Thay ảnh sản phẩm thực tế bằng cách thêm file vào thư mục rồi sửa `items[].image` hoặc `consultation.image` trong `services-data.js`. Nhãn và mô tả ngắn của thẻ trên trang chủ vẫn chỉnh tại `data.js` → `services`. Nút Liên hệ ngay mở cửa sổ báo giá, tự điền tên sản phẩm đã chọn; nội dung form đó chỉnh tại `quote-data.js`.

## Sửa trang Liên hệ và Báo giá

Sửa `contact-data.js`, lưu rồi tải lại `lien-he-va-bao-gia.html`.

| Nhóm | Nội dung |
| --- | --- |
| `page` | Tiêu đề tab trình duyệt, huy hiệu, tiêu đề hai màu, mô tả và màu nền |
| `form` | Tên Hàng lẻ (LCL), biểu tượng, danh sách các ô, lưu ý và nút gửi |
| `sidebar` | Tiêu đề, nhãn và biểu tượng của khung thông tin liên hệ |
| `email` | Địa chỉ nhận, tiêu đề và lời dẫn trong email báo giá |

`form.fields` là danh sách các ô nhập. Mỗi ô có `name` riêng, `label`, `type`, `placeholder`, `width` (`full` hoặc `half`) và `required`. Thuộc tính `heading` thêm tiêu đề phụ phía trên nhãn. `options` thay các lựa chọn của ô phương thức. `value` đặt giá trị mặc định; `min` và `step` dùng cho ô số. Điện thoại, email, địa chỉ mặc định của sidebar lấy từ `contact` trong `data.js`; muốn ghi đè riêng một mục, thêm `value` vào mục đó trong `sidebar.items`.

Trang chỉ có biểu mẫu hàng lẻ, không có phần Nguyên Cont. Khung form, khoảng cách, kích thước ô nhập, khung liên hệ, kiểu chữ và nút chuyển màu được đối chiếu từ https://phuongdonglogistics.net/lien-he-va-bao-gia/; thanh menu, logo và nội dung chân trang giữ nhất quán với Vinh Phát. Bản dựng không tự tính cước vì chưa có bảng giá/công thức vận chuyển. Nút gửi soạn email chứa thông tin đã nhập, tương tự cửa sổ báo giá trên trang chủ; người dùng cần nhấn Gửi trong ứng dụng email. `email.recipient` để trống sẽ dùng email chung trong `data.js`.

## Sửa trang giới thiệu

Sửa `about-data.js`, lưu rồi tải lại `gioi-thieu.html`. Không cần sửa HTML hoặc chạy build.

Phần giới thiệu gồm 3 thẻ trong `overview.cards`: sửa `title` (tiêu đề), `image` (đường dẫn ảnh), `imageAlt` (mô tả ảnh) và `paragraphs` (nội dung) của từng thẻ. Trong `paragraphs`, mỗi chuỗi là một đoạn văn; `{ list: ["Mục thứ nhất", "Mục thứ hai"] }` tạo danh sách gạch đầu dòng. Có thể thêm hoặc bớt các đoạn và mục trong danh sách mà không cần sửa HTML.

| Nhóm | Nội dung |
| --- | --- |
| `page` | Tiêu đề tab trình duyệt, tiêu đề trang, màu nền và tên hai tab |
| `overview` | Tiêu đề giới thiệu, các đoạn văn, số liệu, tầm nhìn, sứ mệnh và giá trị cốt lõi |
| `cta` | Khối mời đồng hành cuối trang và các nút liên kết |

Chuỗi `{{name}}` tự thay bằng `site.name` trong `data.js`. Logo, favicon, menu, điện thoại, email, địa chỉ và nội dung chân trang dùng chung từ `data.js` để hai trang đồng nhất. `site.title` trong `data.js` là tiêu đề trang chủ; `page.title` trong `about-data.js` là tiêu đề trang giới thiệu.

Ví dụ đổi nền trang giới thiệu thành trắng: đặt `page.background` thành `"#ffffff"`. Trang giới thiệu không còn mục đội ngũ nhân sự hoặc thanh chuyển tab.

Bố cục trang giới thiệu đã được thiết kế lại thành 3 thẻ. Nội dung doanh nghiệp chỉnh trong `about-data.js`; ảnh minh họa hiện lấy tạm từ các ảnh có sẵn trong dự án.

Logo đối tác trên trang chủ nằm trong `assets/logo/`, danh sách hiển thị cấu hình tại `partners.items` trong `data.js`. Khi thêm ảnh mới vào thư mục, thêm đường dẫn tương ứng vào danh sách này. `partners.scrollDuration` điều chỉnh thời gian chạy hết một vòng.

## Cửa sổ yêu cầu báo giá

Nhấn **Nhận báo giá ngay** trên trang chủ để mở cửa sổ theo mẫu. Sửa `quote-data.js` để đổi tiêu đề, mô tả, nhãn liên hệ, nhãn/placeholder/loại ô nhập, lựa chọn xuất nhập khẩu và chữ trên nút gửi. Điện thoại, email, địa chỉ mặc định lấy từ `contact` trong `data.js`.

- `fields`: danh sách các ô; giữ `name` khác nhau giữa các ô. `width: "half"` là nửa hàng, `"full"` là cả hàng.
- `required: true`: ô bắt buộc. `type` hỗ trợ `text`, `email`, `tel`, `number`, `select`.
- `options`: danh sách lựa chọn cho ô `select`. `min` và `step` đặt giới hạn cho số.
- `email.recipient`: email nhận; để trống để dùng `contact.email`. `email.subject` là tiêu đề email.
- Trong `data.js`, nút có `action: "quote"` sẽ mở cửa sổ; có thể đổi nhãn nút mà không ảnh hưởng thao tác mở.

Website không có backend. Nút **Gửi yêu cầu báo giá** kiểm tra các trường bắt buộc rồi mở ứng dụng email với nội dung đã điền; người dùng cần nhấn Gửi trong ứng dụng email. Nếu thiết bị chưa cấu hình ứng dụng email, cần cấu hình hoặc liên hệ trực tiếp bằng thông tin bên trái. Trang không lưu yêu cầu và không tự gửi email. Có thể đóng bằng nút ×, phím Escape hoặc bấm nền bên ngoài. Trên điện thoại, hai cột xếp dọc và cửa sổ có thể cuộn.

## Hướng dẫn sửa data.js

| Nhóm | Nội dung |
| --- | --- |
| `site` | Tên website, tiêu đề tab, mô tả tìm kiếm, logo, favicon |
| `contact` | Số điện thoại, email, địa chỉ, giờ hỗ trợ; dùng chung trên toàn trang |
| `menu` | Tên và đường dẫn từng mục menu |
| `hero` | Banner, nút bấm, ảnh slider, thời gian chuyển ảnh và số liệu |
| `services` | Tiêu đề và danh sách dịch vụ |
| `about` | Ảnh giới thiệu, kinh nghiệm, lý do lựa chọn |
| `news` | Danh sách cẩm nang và nội dung hộp thoại từng bài |
| `partners` | Tiêu đề và ảnh đối tác |
| `contactBanner` | Lời mời liên hệ cuối trang |
| `footer` | Mô tả, các cột liên kết và nhãn chân trang |

Ví dụ thay thông tin liên hệ:

```js
contact: {
  phone: "0846901111",
  phoneDisplay: "084.690.1111",
  email: "invinhphat6886@gmail.com",
  address: "Địa chỉ doanh nghiệp của bạn",
  support: "Thứ 2 – Thứ 7, 8:00 – 17:00"
},
```

Giữ dấu phẩy, dấu ngoặc và tên thuộc tính. Dùng `\n` trong chuỗi để xuống dòng; không cần viết HTML. Muốn viết dấu ngoặc kép bên trong nội dung, dùng `\"` hoặc đổi sang dấu nháy đơn. Để thêm dịch vụ, ảnh hoặc bài viết, sao chép một phần tử trong danh sách tương ứng rồi thay nội dung. `id` bài viết cần khác nhau. Số chấm slider và nội dung hộp thoại tự lấy theo danh sách.

Trong `partners`, đổi `scrollDuration` để chỉnh thời gian chạy hết một vòng logo (giây; số lớn chạy chậm hơn). `logoWidth` và `logoHeight` chỉnh kích thước khung logo trên máy tính; điện thoại tự giới hạn kích thước cho phù hợp. Logo chạy liên tục từ phải sang trái kể cả khi rê chuột. Khi thiết bị bật giảm chuyển động, logo đứng yên và có thể cuộn ngang. Các liên kết và nút bấm phóng to nhẹ khi rê chuột, không làm thay đổi vị trí các phần tử xung quanh.

Chỉ cần trình duyệt có bật JavaScript. Dữ liệu được nạp bằng thẻ script, không dùng `fetch`, nên vẫn mở được từ file `index.html` trực tiếp. `index.html` giữ nội dung mặc định làm bản dự phòng khi tắt JavaScript; nếu cần nội dung dự phòng hoặc SEO cũng cập nhật trong HTML, chỉnh thêm HTML hoặc dùng quy trình sinh HTML tĩnh.

## Nguồn tài nguyên

Bố cục, hình ảnh, thương hiệu và thông tin liên hệ tham khảo từ https://phuongdonglogistics.net/. Font Inter từ Google Fonts, phân phối theo SIL Open Font License (xem `assets/fonts/OFL.txt`). Nội dung cẩm nang là nội dung minh họa được viết cho bản dựng này. Các số liệu kinh nghiệm, khách hàng, đơn hàng và logo đối tác lấy theo website mẫu; cần kiểm tra và thay bằng dữ liệu phù hợp khi dùng cho doanh nghiệp khác.

Tài nguyên được lưu cục bộ; trang không tải framework, font hoặc ảnh từ CDN khi mở. Bản dựng tái tạo cấu trúc và phong cách trang chủ theo mẫu với Inter và hai màu được yêu cầu; chưa xác nhận khớp từng điểm ảnh với bản gốc.

## Gửi form báo giá qua EmailJS

Cửa sổ báo giá và form trang Liên hệ dùng chung `quote-email.js`. Điền Service ID, Template ID và Public Key vào `emailjs-config.js`, thiết lập email nhận trong template EmailJS rồi triển khai lên Vercel. Xem [hướng dẫn cấu hình đầy đủ](EMAILJS_SETUP.md).
