/*
 * NỘI DUNG WEBSITE — sửa tại file này, lưu lại rồi tải lại trình duyệt.
 * Giữ tên các thuộc tính; chỉ thay chữ bên trong dấu ngoặc kép.
 * Dùng \n để xuống dòng. Đường dẫn ảnh tính từ index.html.
 * Có thể thêm/bớt phần tử trong các danh sách items, slides, menu.
 * Thông tin Vinh Phát bên dưới được giữ từ bản mẫu để bạn tự thay.
 */
window.SITE_DATA = {
  // Tên website, tiêu đề tab, mô tả tìm kiếm và logo.
  site: {
    name: "Vinh Phát",
    title: "Trang chủ", // Tên trang hiển thị trên tab trình duyệt.
    description:
      "Vinh Phát — dịch vụ vận chuyển quốc tế, gom container, mua hộ hàng Trung Quốc và ủy thác xuất nhập khẩu.",
    logo: "assets/LOGO VINH PHÁT.png",
    logoAlt: "Vinh Phát Design & Print",
    favicon: "favicon.png",
  },

  // Sửa một lần: tự cập nhật ở topbar, liên hệ, chân trang và nút gọi.
  contact: {
    phone: "0846901111",
    phoneDisplay: "084.690.1111",
    email: "invinhphat6886@gmail.com",
    address:
      "Cụm công nghiệp Thạch Khôi, Phường Thạch Khôi, Thành phố Hải Phòng",
    support: "Hỗ trợ 24/7",
  },

  // Dấu # dẫn đến phần trong trang. gioi-thieu.html là trang giới thiệu đã tạo.
  menu: [
    { label: "Trang chủ", href: "#trang-chu" },
    { label: "Giới thiệu", href: "gioi-thieu.html" },
    { label: "Sản phẩm", href: "dich-vu.html" },
    { label: "Bảng giá", href: "bang-gia.html" },
    { label: "Liên hệ và Báo giá", href: "lien-he-va-bao-gia.html" },
    { label: "Chính sách & Quy định", href: "chinh-sach-quy-dinh.html" },
    { label: "Tin tức", href: "", disabled: true },
  ],

  hero: {
    eyebrow: "Giải Pháp Bao Bì 2026",
    titleHighlight: "Sản phẩm chất lượng",
    title: "Phục vụ tận tâm.",
    description:
      "Bao bì Vinh Phát cung cấp giải pháp đóng gói bao bì giấy toàn diện. Chúng tôi giúp doanh nghiệp nâng tầm giá trị sản phẩm với chi phí thấp nhất, chất lượng và tiến độ ổn định nhất",
    buttons: [
      {
        label: "Khám phá dịch vụ",
        href: "dich-vu.html",
        style: "wine",
        arrow: "→",
      },
      {
        label: "Nhận báo giá ngay",
        href: "#bao-gia",
        style: "white",
        arrow: "↗",
        action: "quote",
      },
    ],
    badges: [
      { icon: "shield", text: "Bảo Hiểm 100%" },
      { icon: "carton", text: "AI Optimized" },
    ],
    // Thêm ảnh vào đây: số chấm và số thứ tự sẽ tự cập nhật.
    slides: [
      {
        src: "assets/Anh Xuong/Ảnh nhà máy .jpg",
        alt: "Nhà máy bao bì Vinh Phát",
      },
      {
        src: "assets/Anh Xuong/Ảnh bên trong.png",
        alt: "Không gian bên trong nhà xưởng Vinh Phát",
      },
      {
        src: "assets/Anh Xuong/Anh Nhan Vien Tu Van.png",
        alt: "Nhân viên tư vấn Vinh Phát",
      },
    ],
    slideInterval: 3000, // Thời gian chuyển ảnh, đơn vị mili giây (3000 = 3 giây).
    captionLabel: "Vinh Phát",
    caption: "Mỗi chuyến hàng.\nMột lời cam kết.",
    // Số liệu doanh nghiệp do bạn cung cấp.
    stats: [
      { value: "50", suffix: "+", label: "KHÁCH HÀNG LỚN" },
      { value: "100K", suffix: "+", label: "ĐƠN HÀNG" },
      { value: "5000", suffix: "", label: "HỘP MOQ" },
      { value: "5000", suffix: "", label: "M² DIỆN TÍCH NHÀ XƯỞNG" },
    ],
  },

  services: {
    kicker: "",
    title: "Dịch vụ của chúng tôi",
    description:
      "Cung cấp giải pháp bao bì đa dạng đáp ứng mọi nhu cầu của doanh nghiệp sản xuất và thương mại.",
    // icon có thể dùng: carton, paper-box, notebook, paper-bag.
    items: [
      {
        icon: "carton",
        title: "Hộp Bồi Carton",
        description:
          "Hộp Bồi Carton giấy in theo thiết kế, phù hợp đóng gói sản phẩm và thể hiện hình ảnh thương hiệu.",
        linkLabel: "Tìm hiểu thêm",
        href: "dich-vu.html#hop-carton-boi",
      },
      {
        icon: "paper-box",
        title: "Hộp Giấy\nIvory, Duplex",
        description:
          "In Hộp Giấy Ivory, Duplex theo kích thước và mẫu thiết kế, đáp ứng nhu cầu bao bì cho nhiều sản phẩm.",
        linkLabel: "Tìm hiểu thêm",
        href: "dich-vu.html#hop-giay-ivory-duplex",
      },
      {
        icon: "notebook",
        title: "Vở Học Sinh,\nGiấy Thi",
        description:
          "In Vở Học Sinh và giấy thi theo mẫu, với nội dung, định lượng giấy và quy cách phù hợp nhu cầu sử dụng.",
        linkLabel: "Tìm hiểu thêm",
        href: "dich-vu.html#vo-hoc-sinh-giay-thi",
      },
      {
        icon: "paper-bag",
        title: "Túi Giấy",
        description:
          "Túi Giấy in logo và thiết kế riêng, phù hợp đựng sản phẩm, quà tặng và quảng bá thương hiệu.",
        linkLabel: "Tìm hiểu thêm",
        href: "dich-vu.html#tui-giay",
      },
    ],
  },

  about: {
    image: "assets/Anh Xuong/Anh Nhan Vien Tu Van.png",
    imageAlt: "Đội ngũ tư vấn Vinh Phát",
    experience: "20",
    experienceSuffix: "+",
    experienceLabel: "KINH NGHIỆM",
    experienceUnit: "Năm",
    kicker: "",
    title: "Tại sao chọn ",
    titleHighlight: "Vinh Phát",
    titleSuffix: "\nlàm đối tác chiến lược?",
    description: "",
    reasons: [
      {
        title: "Giá cả cạnh tranh",
        description:
          "Cam kết mang lại giải pháp bao bì chất lượng với chi phí tối ưu nhất thị trường",
      },
      {
        title: "Sản phẩm chất lượng",
        description:
          "Giám sát chặt chẽ từng công đoạn bởi hệ thống quy trình chuẩn mực",
      },
      {
        title: "Dịch vụ tận tâm",
        description:
          "Đội ngũ chuyên gia giàu kinh nghiệm sẵn sàng hỗ trợ bạn 24/7",
      },
      {
        title: "Công nghệ hiện đại",
        description:
          "Hệ thống máy móc nhập khẩu 100% với công nghệ tự động hóa tiên tiến nhất",
      },
    ],
    button: {
      label: "Đăng ký tư vấn ngay",
      href: "lien-he-va-bao-gia.html",
      style: "wine",
      arrow: "›",
    },
  },

  news: {
  "kicker": "KINH NGHIỆM IN ẤN & BAO BÌ",
  "title": "Cẩm nang khách hàng",
  "description": "Từ ý tưởng đến thành phẩm — cùng Vinh Phát chuẩn bị tốt hơn cho mỗi đơn hàng in.",
  "note": "CHỌN ĐÚNG · IN ĐẸP · TỐI ƯU CHI PHÍ",
  "linkLabel": "Xem hướng dẫn",
  "dialogLabel": "CẨM NANG IN ẤN & BAO BÌ",
  "contactLabel": "Nhờ Vinh Phát tư vấn",
  "support": {
    "title": "Bạn đã có ý tưởng cho bao bì của mình?",
    "description": "Gửi mẫu hoặc kích thước sản phẩm. Vinh Phát tư vấn thiết kế và báo giá miễn phí.",
    "label": "Trao đổi nhu cầu in",
    "href": "lien-he-va-bao-gia.html"
  },
  "items": [
    {
      "id": "chon-bao-bi",
      "image": "assets/Anh san pham/Hộp Giấy Ivory.jpg",
      "imageAlt": "Mẫu hộp giấy Ivory của Vinh Phát",
      "category": "CHẤT LIỆU & QUY CÁCH",
      "meta": "Chọn bao bì",
      "readTime": "3 phút đọc",
      "title": "Chọn loại bao bì phù hợp với sản phẩm",
      "description": "Hộp bồi carton, hộp Ivory hay túi giấy? Bắt đầu từ sản phẩm, cách sử dụng và hình ảnh thương hiệu.",
      "content": [
        {
          "type": "paragraph",
          "text": "Bao bì phù hợp cần vừa vặn với sản phẩm, thuận tiện khi sử dụng và thể hiện đúng hình ảnh thương hiệu. Trước khi chốt mẫu, hãy trao đổi với Vinh Phát về sản phẩm thực tế và nhu cầu đóng gói."
        },
        {
          "type": "list",
          "items": [
            "Hộp bồi carton: trao đổi khi cần kết cấu hộp chắc chắn, kết hợp bề mặt in theo thiết kế.",
            "Hộp giấy Ivory, Duplex: lựa chọn chất liệu và định lượng theo trọng lượng, kiểu hộp và yêu cầu trưng bày.",
            "Túi giấy: xác định kích thước, trọng lượng sản phẩm bên trong và kiểu quai phù hợp.",
            "Cung cấp mẫu sản phẩm hoặc kích thước dài × rộng × cao để được tư vấn quy cách hộp."
          ]
        },
        {
          "type": "paragraph",
          "text": "Nên thống nhất mẫu và cách hoàn thiện trước khi sản xuất hàng loạt. Vinh Phát hỗ trợ tư vấn để cân đối nhu cầu sử dụng, hình thức và ngân sách."
        }
      ]
    },
    {
      "id": "chuan-bi-file-in",
      "image": "assets/Anh san pham/Túi Giấy.jpg",
      "imageAlt": "Túi giấy in thiết kế thương hiệu",
      "category": "THIẾT KẾ & FILE IN",
      "meta": "Chuẩn bị thiết kế",
      "readTime": "3 phút đọc",
      "title": "Cần chuẩn bị gì trước khi gửi thiết kế in?",
      "description": "Một vài bước kiểm tra logo, nội dung và mẫu thiết kế giúp quá trình duyệt in thuận tiện hơn.",
      "content": [
        {
          "type": "paragraph",
          "text": "File thiết kế đầy đủ giúp bộ phận kỹ thuật kiểm tra và trao đổi chính xác hơn. Nếu chưa có thiết kế, bạn có thể gửi ý tưởng, logo và mẫu tham khảo để Vinh Phát tư vấn."
        },
        {
          "type": "list",
          "items": [
            "Gửi file thiết kế gốc nếu có, kèm logo, hình ảnh và các tài nguyên liên quan.",
            "Kiểm tra tên thương hiệu, thông tin liên hệ, nội dung sản phẩm và chính tả.",
            "Nêu rõ kích thước thành phẩm, vị trí gấp, cắt hoặc các yêu cầu gia công mong muốn.",
            "Gửi mẫu màu hoặc sản phẩm tham khảo nếu cần đối chiếu; thống nhất cách duyệt mẫu với bộ phận kỹ thuật.",
            "Xác nhận bản thiết kế cuối cùng trước khi chuyển sang sản xuất."
          ]
        },
        {
          "type": "paragraph",
          "text": "Yêu cầu kỹ thuật cụ thể sẽ được trao đổi theo từng sản phẩm và phương án gia công. Hãy gửi file để Vinh Phát kiểm tra trước khi chốt đơn."
        }
      ]
    },
    {
      "id": "yeu-cau-bao-gia-in",
      "image": "assets/Anh san pham/Hộp bồi sóng E.jpg",
      "imageAlt": "Mẫu hộp bồi sóng E theo yêu cầu",
      "category": "BÁO GIÁ & ĐẶT HÀNG",
      "meta": "Lên kế hoạch đặt in",
      "readTime": "2 phút đọc",
      "title": "5 thông tin giúp nhận báo giá sát nhu cầu",
      "description": "Chuẩn bị quy cách, số lượng và thời gian cần hàng để Vinh Phát tư vấn phương án in phù hợp.",
      "content": [
        {
          "type": "paragraph",
          "text": "Mỗi đơn hàng có quy cách riêng. Cung cấp thông tin càng rõ, Vinh Phát càng dễ đề xuất phương án phù hợp với mục đích sử dụng và ngân sách của bạn."
        },
        {
          "type": "list",
          "items": [
            "Loại sản phẩm cần in: hộp bồi carton, hộp giấy, túi giấy, vở học sinh hoặc giấy thi.",
            "Kích thước thành phẩm và chất liệu mong muốn; gửi mẫu đang dùng nếu có.",
            "Số lượng dự kiến cho từng mẫu hoặc từng kích thước.",
            "Thiết kế và yêu cầu hoàn thiện như cán màng, bế, dán hoặc các chi tiết gia công khác.",
            "Thời gian cần nhận hàng, địa điểm giao và thông tin người liên hệ."
          ]
        },
        {
          "type": "paragraph",
          "text": "Nếu chưa xác định chất liệu hoặc kích thước, hãy gửi ảnh sản phẩm và nhu cầu sử dụng. Vinh Phát sẽ tư vấn, sau đó thống nhất quy cách, mẫu, báo giá và tiến độ trước khi triển khai."
        }
      ]
    }
  ]
},

  partners: {
    kicker: "",
    title: "Đối tác & Khách hàng",
    description: "NHỮNG THƯƠNG HIỆU ĐÃ VÀ ĐANG ĐỒNG HÀNH CÙNG VINH PHÁT",
    scrollDuration: 120, // Thời gian chạy hết một vòng (giây). Số lớn = chạy chậm hơn.
    logoWidth: 220, // Chiều rộng khung logo trên máy tính, đơn vị px.
    logoHeight: 145, // Chiều cao khung logo trên máy tính, đơn vị px.
    items: [
      { image: "assets/logo/Agribank.png", name: "Agribank" },
      {
        image: "assets/logo/Bánh Khảo Bảo Hiên.png",
        name: "Bánh Khảo Bảo Hiên",
      },
      {
        image: "assets/logo/Bánh Đậu Xanh Thành Nam.png",
        name: "Bánh Đậu Xanh Thành Nam",
      },
      {
        image: "assets/logo/Bánh Đậu Xanh Đại Phú.png",
        name: "Bánh Đậu Xanh Đại Phú",
      },
      {
        image: "assets/logo/Bảo Hiểm Xã Hội Thành Phố Hải Phòng.png",
        name: "Bảo Hiểm Xã Hội Thành Phố Hải Phòng",
      },
      {
        image: "assets/logo/Bệnh Viện Nhi Hải Dương.jpg",
        name: "Bệnh Viện Nhi Hải Dương",
      },
      {
        image: "assets/logo/Bệnh Viện Phổi Hải Dương.jpg",
        name: "Bệnh Viện Phổi Hải Dương",
      },
      { image: "assets/logo/Bệnh Viện VPMed.png", name: "Bệnh Viện VPMed" },
      { image: "assets/logo/Cám Haid.jpg", name: "Cám Haid" },
      { image: "assets/logo/Gốm Chu Đậu.png", name: "Gốm Chu Đậu" },
      { image: "assets/logo/Ha Hae Vietnam.jpg", name: "Ha Hae Vietnam" },
      { image: "assets/logo/Khẩu Trang Ami.png", name: "Khẩu Trang Ami" },
      {
        image: "assets/logo/Khẩu Trang Cường Thịnh.png",
        name: "Khẩu Trang Cường Thịnh",
      },
      {
        image: "assets/logo/Khẩu Trang Duy Ngọc.png",
        name: "Khẩu Trang Duy Ngọc",
      },
      { image: "assets/logo/Khẩu Trang Gumi.png", name: "Khẩu Trang Gumi" },
      { image: "assets/logo/Khẩu Trang Juli.png", name: "Khẩu Trang Juli" },
      { image: "assets/logo/Khẩu Trang TopGia.png", name: "Khẩu Trang TopGia" },
      {
        image: "assets/logo/Sở Giáo Dục Thành Phố Hải Phòng.jpeg",
        name: "Sở Giáo Dục Thành Phố Hải Phòng",
      },
      {
        image: "assets/logo/Sở Giáo Dục Tỉnh Sơn La.png",
        name: "Sở Giáo Dục Tỉnh Sơn La",
      },
      {
        image:
          "assets/logo/Sở Lao Động Thương Binh Và Xã Hội Tỉnh Hải Dương.png",
        name: "Sở Lao Động Thương Binh Và Xã Hội Tỉnh Hải Dương",
      },
      {
        image: "assets/logo/Trường Quân Sự Quân Khu 3.jpg",
        name: "Trường Quân Sự Quân Khu 3",
      },
      {
        image: "assets/logo/Tòa án Nhân dân Tối Cao Tỉnh Hải Dương.jpg",
        name: "Tòa án Nhân dân Tối Cao Tỉnh Hải Dương",
      },
      { image: "assets/logo/Vietinbank.png", name: "Vietinbank" },
    ],
  },

  contactBanner: {
    title: "Sẵn sàng tối ưu chi phí nhập hàng?",
    description:
      "Trải nghiệm hệ thống đặt hàng thông minh và dịch vụ vận chuyển chính ngạch chuyên nghiệp ngay hôm nay.",
    buttonLabel: "XEM BẢNG GIÁ VIP",
    buttonHref: "bang-gia.html",
  },

  footer: {
    description: "CÔNG TY TNHH SẢN XUẤT VÀ DỊCH VỤ IN VINH PHÁT.",
    // Để href trống: hiển thị nút có thể bấm, chưa điều hướng đến mạng xã hội.
    socials: [
      {
        icon: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61596599818006",
      },
      { icon: "youtube", label: "YouTube", href: "" },
      { icon: "chat", label: "Chat", href: "" },
    ],
    columns: [
      {
        title: "THÔNG TIN & CHÍNH SÁCH",
        links: [
          {
            label: "Chính sách bảo mật",
            href: "chinh-sach-quy-dinh.html#bao-mat",
          },
          {
            label: "Điều khoản sử dụng",
            href: "chinh-sach-quy-dinh.html#dieu-khoan-su-dung",
          },
          { label: "Bảng giá tham khảo", href: "bang-gia.html" },
          { label: "Hướng dẫn đặt hàng", href: "dich-vu.html" },
        ],
      },
      {
        title: "SẢN PHẨM",
        links: [
          { label: "Hộp Bồi Carton", href: "dich-vu.html#hop-carton-boi" },
          {
            label: "Hộp Giấy Ivory, Duplex",
            href: "dich-vu.html#hop-giay-ivory-duplex",
          },
          {
            label: "Vở Học Sinh, Giấy Thi",
            href: "dich-vu.html#vo-hoc-sinh-giay-thi",
          },
          { label: "Túi Giấy", href: "dich-vu.html#tui-giay" },
        ],
      },
    ],
    contactTitle: "LIÊN HỆ HỖ TRỢ",
    backTopLabel: "Về đầu trang",
  },
};
