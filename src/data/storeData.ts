import {
  StoreInfo,
  CameraProduct,
  RentalStep,
  PolicyItem,
  BenefitItem,
  FAQItem,
  TestimonialItem
} from '../types';

export const STORE_INFO: StoreInfo = {
  brandName: 'Thuê đồ nhà Sâu',
  slogan: 'Ghi lại mọi khoảnh khắc',
  field: 'Cho thuê máy ảnh, ống kính và phụ kiện chụp ảnh.',
  serviceRegions: ['Vĩnh Yên, Vĩnh Phúc'],
  phones: ['0981 225 634'],
  zaloPhones: ['0981 225 634'],
  facebookAccounts: [
    { name: 'Phương Nguyễn (Facebook 1)', url: 'https://www.facebook.com/phuong.nguyn.184857' },
    { name: 'Phương Nguyễn (Facebook 2)', url: 'https://www.facebook.com/phuong.nguyen.139428' }
  ],
  email: 'Trantienky666@gmail.com',
  locations: [
    {
      id: 'vinh-yen',
      region: 'Vĩnh Yên',
      regionLabel: 'Vĩnh Yên, Vĩnh Phúc',
      address: 'Khu vực KCN Thăng Long Vĩnh Phúc, Vĩnh Yên, Vĩnh Phúc',
      mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=KCN+Th%C4%83ng+Long+V%C3%AEnh+Ph%C3%BAc+V%C3%AEnh+Y%C3%AAn+V%C3%AEnh+Ph%C3%BAc'
    }
  ]
};

export const PRODUCTS: CameraProduct[] = [
  {
    id: 'canon-r50',
    name: 'Canon EOS R50 + Lens Kit',
    brand: 'Canon',
    shortDesc: 'Canon EOS R50 nhỏ gọn, dễ sử dụng, lấy nét nhanh, phù hợp chụp chân dung, du lịch, sự kiện, ảnh cá nhân và sáng tạo nội dung.',
    fullDesc: 'Canon EOS R50 sở hữu cảm biến APS-C 24.2MP hiện đại cùng bộ xử lý DIGIC X mạnh mẽ. Khả năng lấy nét tự động Dual Pixel CMOS AF II thông minh tự động nhận diện mắt, khuôn mặt và chủ thể cực kỳ chuẩn xác. Máy thiết kế mỏng nhẹ, màn hình xoay lật cảm ứng giúp bạn dễ dàng quay vlog hoặc chụp selfie từ nhiều góc độ.',
    image: '/src/assets/images/canon_r50_camera_1784710663779.jpg',
    galleryImages: [
      '/src/assets/images/canon_r50_camera_1784710663779.jpg',
      '/src/assets/images/hero_camera_banner_1784710690864.jpg'
    ],
    lowestPrice: 160000,
    lowestPriceLabel: '160.000 đ / 6 tiếng',
    prices: [
      { planKey: '6h', durationLabel: 'Thuê 6 tiếng', hours: 6, price: 160000, formattedPrice: '160.000 đ' },
      { planKey: '1d', durationLabel: 'Thuê 1 ngày', hours: 24, price: 220000, formattedPrice: '220.000 đ' },
      { planKey: '2d', durationLabel: 'Thuê 2 ngày', hours: 48, price: 400000, formattedPrice: '400.000 đ' },
      { planKey: '3d', durationLabel: 'Thuê 3 ngày', hours: 72, price: 570000, formattedPrice: '570.000 đ' },
    ],
    accessories: [
      'Thẻ nhớ tốc độ cao',
      'Lens kit kèm theo',
      'Hộp sạc chính hãng',
      'Dây sạc',
      'Đầu chuyển ảnh (Adapter kết nối điện thoại / laptop)'
    ],
    tags: ['Dễ sử dụng', 'Nhỏ gọn', 'Chụp chân dung đẹp', 'Phù hợp người mới'],
    status: 'available',
    statusLabel: 'Sẵn sàng giao máy',
    highlights: [
      'Cảm biến APS-C 24.2MP sắc nét',
      'Lấy nét tự động Dual Pixel AF II nhận diện mắt thông minh',
      'Màn hình cảm ứng xoay lật đa góc tiện lợi',
      'Quay video 4K sắc nét, không bị giật lag',
      'Truyền ảnh nhanh chóng sang điện thoại bằng đầu đọc thẻ đính kèm'
    ],
    suitableFor: [
      'Chụp ảnh chân dung cá nhân, bạn bè, kỷ yếu',
      'Chụp ảnh du lịch, dã ngoại, chụp Tết & lễ hội',
      'Chụp ảnh sản phẩm nhỏ & quay clip ngắn TikTok/Reels',
      'Khách hàng lần đầu tập dùng máy ảnh mirrorless'
    ],
    commonSpecs: [
      { label: 'Cảm biến', value: 'APS-C CMOS 24.2 Megapixels' },
      { label: 'Bộ xử lý', value: 'DIGIC X' },
      { label: 'Lấy nét', value: 'Dual Pixel CMOS AF II' },
      { label: 'Màn hình', value: 'Cảm ứng 3.0 inch xoay lật' },
      { label: 'Kết nối', value: 'Wi-Fi, Bluetooth, USB-C' }
    ],
    pickupGuide: 'Khách hàng hẹn lịch nhận máy tại điểm Vĩnh Yên. Hai bên cùng bật máy kiểm tra thân máy, ống kính kit, sạc, thẻ nhớ và đầu chuyển ảnh trước khi bàn giao.',
    depositPolicy: 'Cửa hàng không giữ giấy tờ tùy thân gốc, khách chỉ cần xuất trình CCCD chính chủ để đối chiếu thông tin và thực hiện đặt cọc theo thỏa thuận trực tiếp khi bàn giao.',
    availableDatesNotice: 'Máy đang có sẵn tại chi nhánh Vĩnh Yên. Quý khách vui lòng đặt lịch trước ít nhất 2 - 4 tiếng để cửa hàng chuẩn bị sạc pin đầy đủ.'
  },
  {
    id: 'fujifilm-xt20',
    name: 'Fujifilm X-T20 + Lens Kit',
    brand: 'Fujifilm',
    shortDesc: 'Fujifilm X-T20 có thiết kế cổ điển, màu ảnh đẹp, phù hợp chụp chân dung, du lịch, ảnh đường phố và những khách hàng yêu thích màu ảnh Fujifilm.',
    fullDesc: 'Fujifilm X-T20 mang ngôn ngữ thiết kế Vintage hoài cổ quyến rũ với bánh răng kim loại sang trọng. Cảm biến X-Trans CMOS III 24.3MP trứ danh kết hợp cùng các chế độ giả lập màu phim độc quyền (Classic Chrome, Velvia, PRO Neg, Acros...) giúp bạn có ngay những bức ảnh mang màu sắc cổ điển thơ mộng mà không cần chỉnh sửa phức tạp.',
    image: '/src/assets/images/fujifilm_xt20_camera_1784710677485.jpg',
    galleryImages: [
      '/src/assets/images/fujifilm_xt20_camera_1784710677485.jpg',
      '/src/assets/images/hero_camera_banner_1784710690864.jpg'
    ],
    lowestPrice: 170000,
    lowestPriceLabel: '170.000 đ / 6 tiếng',
    prices: [
      { planKey: '6h', durationLabel: 'Thuê 6 tiếng', hours: 6, price: 170000, formattedPrice: '170.000 đ' },
      { planKey: '1d', durationLabel: 'Thuê 1 ngày', hours: 24, price: 240000, formattedPrice: '240.000 đ' },
      { planKey: '2d', durationLabel: 'Thuê 2 ngày', hours: 48, price: 440000, formattedPrice: '440.000 đ' },
      { planKey: '3d', durationLabel: 'Thuê 3 ngày', hours: 72, price: 630000, formattedPrice: '630.000 đ' },
    ],
    accessories: [
      'Thẻ nhớ tốc độ cao',
      'Lens kit kèm theo',
      'Hộp sạc chính hãng',
      'Dây sạc',
      'Đầu chuyển ảnh (Adapter kết nối điện thoại / laptop)'
    ],
    tags: ['Màu ảnh đẹp', 'Thiết kế cổ điển', 'Chụp chân dung', 'Phù hợp du lịch'],
    status: 'available',
    statusLabel: 'Sẵn sàng giao máy',
    highlights: [
      'Cảm biến X-Trans CMOS III 24.3MP độc quyền Fujifilm',
      'Bộ giả lập màu phim huyền thoại (Classic Chrome, Velvia, Astia...)',
      'Thiết kế hoài cổ sang trọng, bánh răng điều chỉnh cơ học',
      'Chụp ảnh lên màu da trong trẻo, hồng hào tự nhiên',
      'Lấy nét nhanh, dễ thao tác chụp ảnh dã ngoại'
    ],
    suitableFor: [
      'Khách hàng mê tone màu ảnh retro, phim vintage',
      'Chụp chân dung ngoại cảnh, quán cafe, đường phố',
      'Đi du lịch, đi chơi cuối tuần chụp ảnh thời trang',
      'Chụp ảnh phong cách nhẹ nhàng, thơ mộng'
    ],
    commonSpecs: [
      { label: 'Cảm biến', value: 'X-Trans CMOS III 24.3 Megapixels' },
      { label: 'Giả lập màu', value: '15 chế độ màu phim Fujifilm' },
      { label: 'Màn hình', value: 'Cảm ứng 3.0 inch lật 2 hướng' },
      { label: 'Quay phim', value: '4K Ultra HD (30fps)' },
      { label: 'Kiểu dáng', value: 'Retro hoài cổ kim loại' }
    ],
    pickupGuide: 'Khách hàng đến điểm hẹn tại Vĩnh Yên để nhận máy. Cửa hàng hỗ trợ hướng dẫn chỉnh chọn chế độ màu phim ưa thích và cách chuyển ảnh sang điện thoại cực kỳ đơn giản.',
    depositPolicy: 'Xác minh thông tin qua CCCD chính chủ. Mức cọc linh hoạt được trao đổi cụ thể theo nhu cầu thuê và thời gian đặt lịch.',
    availableDatesNotice: 'Lịch trống sẵn sàng. Vui lòng nhắn tin Zalo hoặc đặt trước qua form để cửa hàng giữ máy cho bạn đúng giờ.'
  }
];

export const RENTAL_STEPS: RentalStep[] = [
  {
    stepNumber: 1,
    title: 'Chọn máy và thời gian thuê',
    description: 'Tham khảo hai dòng máy Canon EOS R50 hoặc Fujifilm X-T20 cùng gói thời gian thuê phù hợp nhu cầu (6 tiếng, 1 ngày, 2 ngày, 3 ngày).'
  },
  {
    stepNumber: 2,
    title: 'Gửi yêu cầu đặt lịch',
    description: 'Điền form đặt lịch trực tiếp trên website, hoặc gọi điện / nhắn tin qua Zalo tới Hotline 0981 225 634.'
  },
  {
    stepNumber: 3,
    title: 'Xác nhận đơn thuê',
    description: 'Cửa hàng kiểm tra lịch máy trống, xác nhận địa điểm nhận máy tại Vĩnh Yên và liên hệ chốt lịch cùng bạn.'
  },
  {
    stepNumber: 4,
    title: 'Cung cấp thông tin & đặt cọc',
    description: 'Khách hàng cung cấp thông tin đối chiếu (CCCD) và thực hiện đặt cọc theo thỏa thuận riêng cho từng đơn thuê.'
  },
  {
    stepNumber: 5,
    title: 'Bàn giao & kiểm tra thiết bị',
    description: 'Hai bên cùng kiểm tra kỹ tình trạng máy, lens, thẻ nhớ, hộp sạc, dây sạc và đầu chuyển ảnh trước khi nhận máy.'
  }
];

export const POLICIES: PolicyItem[] = [
  {
    id: 1,
    title: 'Đặt lịch trước',
    content: 'Khách hàng vui lòng đặt lịch trước để cửa hàng kiểm tra tình trạng máy và chuẩn bị pin sạc đầy đủ.'
  },
  {
    id: 2,
    title: 'Giữ lịch thuê',
    content: 'Thiết bị chỉ được chính thức giữ lịch sau khi cửa hàng đã liên hệ xác nhận đơn thuê thành công.'
  },
  {
    id: 3,
    title: 'Xác minh thông tin',
    content: 'Khách hàng cần xuất trình CCCD chính chủ để cửa hàng đối chiếu và xác minh thông tin nhận máy. Website tuyệt đối KHÔNG yêu cầu bạn tải ảnh CCCD lên mạng để đảm bảo an toàn dữ liệu cá nhân.',
    important: true
  },
  {
    id: 4,
    title: 'Hình thức đặt cọc',
    content: 'Hình thức và mức đặt cọc được trao đổi trực tiếp và xác nhận cụ thể theo từng đơn thuê.'
  },
  {
    id: 5,
    title: 'Kiểm tra thiết bị khi nhận',
    content: 'Hai bên cùng tiến hành kiểm tra tình trạng hoạt động của máy ảnh, ống kính và toàn bộ phụ kiện đi kèm khi bàn giao.'
  },
  {
    id: 6,
    title: 'Bảo quản thiết bị',
    content: 'Khách hàng có trách nhiệm bảo quản, sử dụng cẩn thận thiết bị và phụ kiện trong suốt thời gian thuê.'
  },
  {
    id: 7,
    title: 'Thông báo gia hạn / Trả muộn',
    content: 'Nếu có nhu cầu trả máy muộn hơn so với thời gian đã đăng ký, quý khách vui lòng thông báo trước với cửa hàng ít nhất 2 - 3 tiếng.'
  },
  {
    id: 8,
    title: 'Xử lý sự cố phát sinh',
    content: 'Mọi chi phí phát sinh do trả muộn không báo trước, hư hỏng hoặc thất lạc thiết bị sẽ được xử lý theo thỏa thuận thuê ban đầu.'
  },
  {
    id: 9,
    title: 'Đầy đủ phụ kiện bàn giao',
    content: 'Khách hàng cần kiểm tra và bàn giao lại đủ bộ: máy, lens kit, thẻ nhớ, hộp sạc, dây sạc và đầu chuyển ảnh khi hoàn trả.'
  }
];

export const WHY_CHOOSE_US: BenefitItem[] = [
  {
    id: 1,
    title: 'Giá thuê rõ ràng, minh bạch',
    description: 'Không chi phí ẩn. Bảng giá niêm yết công khai theo từng mốc 6 tiếng, 1 ngày, 2 ngày, 3 ngày.',
    iconName: 'BadgeCheck'
  },
  {
    id: 2,
    title: 'Thiết bị kiểm tra kỹ trước khi giao',
    description: 'Tất cả máy ảnh, ống kính được lau chùi sạch sẻ, test cảm biến và sạc đầy pin 100% trước khi giao.',
    iconName: 'ShieldCheck'
  },
  {
    id: 3,
    title: 'Đầy đủ phụ kiện đi kèm',
    description: 'Mỗi máy đều kèm sẵn thẻ nhớ tốc độ cao, sạc, dây sạc và đầu chuyển ảnh sang điện thoại tiện lợi.',
    iconName: 'PackageCheck'
  },
  {
    id: 4,
    title: 'Thủ tục nhanh chóng',
    description: 'Quy trình đặt máy đơn giản, không rườm rà, hỗ trợ tối đa cho khách hàng.',
    iconName: 'Zap'
  },
  {
    id: 5,
    title: 'Hướng dẫn sử dụng cơ bản',
    description: 'Dành cho người mới: Cửa hàng tận tình hướng dẫn bấm nút, chỉnh góc, đổi màu ảnh chỉ trong 5 phút.',
    iconName: 'Sparkles'
  },
  {
    id: 6,
    title: 'Địa điểm nhận máy thuận tiện',
    description: 'Nhận máy thuận tiện tại khu vực Vĩnh Yên (Vĩnh Phúc) theo lịch trình của bạn.',
    iconName: 'MapPin'
  },
  {
    id: 7,
    title: 'Hỗ trợ nhanh qua Điện thoại & Zalo',
    description: 'Đội ngũ hỗ trợ nhiệt tình 24/7, sẵn sàng giải đáp thắc mắc và xử lý nhanh yêu cầu.',
    iconName: 'Headphones'
  },
  {
    id: 8,
    title: 'Phù hợp người mới dùng máy ảnh',
    description: 'Canon R50 & Fujifilm X-T20 đều cực kỳ thân thiện, lên hình xinh xắn ngay mà không cần chỉnh sửa.',
    iconName: 'Heart'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'Thuê máy ảnh cần chuẩn bị những gì?',
    answer: 'Bạn chỉ cần chuẩn bị CCCD chính chủ để đối chiếu thông tin khi nhận máy và khoản tiền cọc / tiền thuê theo thỏa thuận với cửa hàng. Cửa hàng cung cấp đầy đủ máy, lens, thẻ nhớ, sạc và đầu chuyển ảnh.'
  },
  {
    id: 2,
    question: 'Tôi có cần đặt lịch trước không?',
    answer: 'Nên đặt lịch trước ít nhất từ vài tiếng đến 1 ngày (đặc biệt vào cuối tuần hoặc ngày lễ) để cửa hàng kiểm tra lịch trống và chuẩn bị sẵn máy cũng như sạc pin đầy đủ cho bạn.'
  },
  {
    id: 3,
    question: 'Máy có kèm thẻ nhớ và sạc không?',
    answer: 'Có đầy đủ 100%! Bộ máy giao cho bạn bao gồm: Thân máy + Lens kit + Thẻ nhớ tốc độ cao + Hộp sạc + Dây sạc + Đầu chuyển ảnh sang điện thoại.'
  },
  {
    id: 4,
    question: 'Địa điểm nhận máy ở đâu tại Vĩnh Yên?',
    answer: 'Bạn nhận máy tại khu vực KCN Thăng Long Vĩnh Phúc, Vĩnh Yên, Vĩnh Phúc. Vui lòng hẹn trước 15-30 phút để cửa hàng chuẩn bị máy đón bạn.'
  },
  {
    id: 5,
    question: 'Tôi có thể nhận máy tại Vĩnh Yên không?',
    answer: 'Có! Bạn có thể nhận máy tại địa điểm Vĩnh Yên: Khu vực KCN Thăng Long Vĩnh Phúc, Vĩnh Yên, Vĩnh Phúc.'
  },
  {
    id: 6,
    question: 'Giá thuê 6 tiếng được tính như thế nào?',
    answer: 'Gói 6 tiếng tính từ thời điểm bạn bắt đầu nhận máy và kéo dài đủ 6 tiếng. Phù hợp cho các buổi chụp kỷ yếu, chụp concept quán cafe hoặc sự kiện ngắn trong ngày.'
  },
  {
    id: 7,
    question: 'Trả máy muộn có phát sinh chi phí không?',
    answer: 'Nếu trả muộn mà không báo trước, sẽ tính phí phát sinh theo giờ hoặc theo mốc thời gian thỏa thuận. Quý khách vui lòng gọi điện báo trước ít nhất 2 tiếng nếu muốn gia hạn thời gian thuê.'
  },
  {
    id: 8,
    question: 'Thiết bị gặp sự cố trong thời gian thuê thì xử lý thế nào?',
    answer: 'Quý khách vui lòng liên hệ ngay với cửa hàng qua hotline 0981 225 634 để được hỗ trợ hướng dẫn. Mọi chi phí hư hỏng hoặc sự cố sẽ được hai bên trao đổi dựa trên tinh thần thiện chí và chính sách thuê.'
  },
  {
    id: 9,
    question: 'Tôi có được kiểm tra máy trước khi nhận không?',
    answer: 'Chắc chắn có! Hai bên sẽ cùng bật máy, chụp thử vài tấm, kiểm tra ống kính, thẻ nhớ và đầu đọc thẻ trước khi bạn mang máy đi.'
  },
  {
    id: 10,
    question: 'Cửa hàng có hướng dẫn sử dụng máy không?',
    answer: 'Có! Nếu bạn chưa từng sử dụng Canon hay Fujifilm, bạn nhỏ nhà Sâu sẽ tận tình hướng dẫn bạn cách bật máy, chọn màu ảnh, lấy nét và chép ảnh sang điện thoại siêu dễ chỉ trong 3 - 5 phút.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Thanh Hằng',
    rating: 5,
    cameraRented: 'Fujifilm X-T20 + Lens Kit',
    comment: 'Máy Fujifilm màu ảnh siêu đỉnh, chụp ở quán cafe không cần chỉnh sửa màu gì cả! Bạn chủ nhà Sâu hỗ trợ rất nhiệt tình, hướng dẫn mình cách chép ảnh qua điện thoại trong 1 nốt nhạc.',
    date: '15/05/2024',
    isSample: true
  },
  {
    id: 2,
    name: 'Minh Trang',
    rating: 5,
    cameraRented: 'Canon EOS R50 + Lens Kit',
    comment: 'Thuê Canon R50 đi chụp kỷ yếu với nhóm bạn ở Vĩnh Yên. Máy nhẹ hều, lấy nét mắt siêu nhanh chụp tấm nào nét tấm đó. Giá thuê 1 ngày 220k quá hời!',
    date: '02/06/2024',
    isSample: true
  },
  {
    id: 3,
    name: 'Thu Hà',
    rating: 5,
    cameraRented: 'Fujifilm X-T20 + Lens Kit',
    comment: 'Giao máy đúng hẹn tại Vĩnh Yên. Máy sạch sẽ, pin sạc đầy 100% kèm cả sạc và đầu đọc thẻ. Sẽ tiếp tục ủng hộ Thuê đồ nhà Sâu dài dài!',
    date: '20/06/2024',
    isSample: true
  },
  {
    id: 4,
    name: 'Phương Linh',
    rating: 5,
    cameraRented: 'Canon EOS R50 + Lens Kit',
    comment: 'Thủ tục siêu nhanh gọn, nhẹ nhàng, không cần giữ CCCD gốc. Rất thích phong cách nhiệt tình và uy tín của shop!',
    date: '10/07/2024',
    isSample: true
  }
];
