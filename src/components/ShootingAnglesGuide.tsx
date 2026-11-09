import React, { useState } from 'react';
import {
  Compass,
  Coffee,
  GraduationCap,
  Sparkles,
  Sun,
  Users,
  Smile,
  Layers,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Maximize2,
  Camera,
  Heart
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface AngleTip {
  title: string;
  angleName: string;
  description: string;
  poseHint: string;
  cameraSetting: string;
  recommendedCamera: string;
}

interface ConceptGuide {
  id: 'cafe' | 'ky-yeu' | 'da-ngoai' | 'chan-dung';
  tabLabel: string;
  icon: any;
  headline: string;
  tagline: string;
  colorTone: string;
  generalTip: string;
  angles: AngleTip[];
}

const CONCEPTS: ConceptGuide[] = [
  {
    id: 'cafe',
    tabLabel: '☕ Chụp Quán Cafe',
    icon: Coffee,
    headline: 'Bí Quyết Chụp Ảnh Quán Cafe Sống Ảo Cực Nghệ',
    tagline: 'Tận dụng ánh sáng tự nhiên bên cửa sổ và màu ảnh retro hoài cổ',
    colorTone: 'Fujifilm Classic Chrome hoặc Canon Neutral tăng nhẹ sáng',
    generalTip: 'Hãy chọn chỗ ngồi gần cửa sổ hoặc giếng trời. Ánh sáng xiên tự nhiên sẽ làm da mặt sáng mịn, không bị bóng dầu và tạo vệt nắng xiên cực thơ mộng.',
    angles: [
      {
        title: 'Góc 1: Ngồi cạnh cửa sổ đón nắng xiên',
        angleName: 'Góc ngang tầm mắt (Eye-level 45°)',
        description: 'Người mẫu ngồi chếch 45 độ so với cửa kính, người chụp hướng ống kính theo hướng ánh sáng chiếu vào. Giữ khoảng cách 1.5 - 2m để xóa phông nhẹ phía sau.',
        poseHint: 'Một tay cầm ly cafe đưa lên ngang ngực, mắt nhìn ra ngoài đường phố hoặc hơi cúi đọc sách, cười nhẹ tự nhiên.',
        cameraSetting: 'Khẩu độ mở lớn f/3.5 - f/4, tiêu cự 24mm - 35mm',
        recommendedCamera: 'Fujifilm X-T20 hoặc X-T30 (tone màu Classic Chrome trầm ấm)'
      },
      {
        title: 'Góc 2: Chụp set bánh nước từ trên xuống',
        angleName: 'Góc Flat Lay (Top-down 45° hoặc 90°)',
        description: 'Đứng dậy hoặc giơ máy thẳng đứng nhìn vuông góc xuống mặt bàn. Bật màn hình lật để căn chỉnh ly nước, đĩa bánh và cuốn sách theo bố cục tam giác cân.',
        poseHint: 'Người mẫu đặt một bàn tay thon thả vào cạnh tách cafe hoặc cầm dĩa bánh để bức ảnh có "hơi thở" và chiều sâu chân thực.',
        cameraSetting: 'Tiêu cự 28mm, giữ chắc tay để không bị rung',
        recommendedCamera: 'Canon R50 hoặc Fujifilm X-T30 (độ nét cao chi tiết vụn bánh)'
      },
      {
        title: 'Góc 3: Chụp "trộm" qua khung kính & tán cây',
        angleName: 'Góc tiền cảnh mờ (Foreground Framing)',
        description: 'Đứng từ ngoài cửa kính hoặc nép sau chậu cây/ly cafe ở bàn trước. Cành lá hoặc vệt phản chiếu kính mờ ảo ở tiền cảnh sẽ tạo cảm giác như một bức ảnh chụp lén điện ảnh.',
        poseHint: 'Chủ thể trò chuyện tự nhiên cùng bạn bè, không cần nhìn vào máy ảnh.',
        cameraSetting: 'Lấy nét điểm vào mắt chủ thể, tiền cảnh sẽ tự động mờ mịn',
        recommendedCamera: 'Fujifilm X-T30 (bộ lọc phim Eterna mơ màng)'
      },
      {
        title: 'Góc 4: Chụp phản chiếu qua gương cafe',
        angleName: 'Góc Mirror Selfie thời thượng',
        description: 'Các quán cafe hiện nay thường có gương tròn hoặc gương toàn thân vintage. Cầm chiếc máy ảnh kim loại nhỏ xinh che nhẹ một phần má.',
        poseHint: 'Hơi nghiêng đầu, chân trước chân sau bắt chéo nhẹ để tạo dáng người mảnh mai, tay cầm máy ảnh chuyên nghiệp.',
        cameraSetting: 'Tắt đèn Flash, lấy nét vào hình phản chiếu trong gương',
        recommendedCamera: 'Canon EOS R50 hoặc Fujifilm X-T20 (máy nhỏ gọn cầm 1 tay cực xinh)'
      }
    ]
  },
  {
    id: 'ky-yeu',
    tabLabel: '🎓 Chụp Kỷ Yếu & Nhóm Bạn',
    icon: GraduationCap,
    headline: 'Hướng Dẫn Lấy Góc Chụp Kỷ Yếu & Thanh Xuân Nét Đẹp',
    tagline: 'Bắt trọn nụ cười rạng rỡ, màu da trắng hồng và bầu trời thanh xuân tươi sáng',
    colorTone: 'Canon Picture Style Portrait (da trắng hồng) hoặc Fuji Velvia',
    generalTip: 'Kỷ yếu đẹp nhất ở cảm xúc chân thực và sự tương tác giữa các bạn bè. Hãy chụp liên tục (Continuous Shooting) khi các bạn đang cười đùa, bước đi hoặc tung mũ tốt nghiệp.',
    angles: [
      {
        title: 'Góc 1: Ngước nhìn bầu trời thanh xuân',
        angleName: 'Góc thấp ngước lên (Low Angle nhìn lên)',
        description: 'Người chụp ngồi xổm hoặc hạ máy sát ngực, lật màn hình hướng lên trên. Góc máy lấy được toàn thân nhóm bạn cùng trọn vẹn nền trời xanh ngắt phía sau.',
        poseHint: 'Nhóm bạn chụm đầu nhìn xuống ống kính cùng cười, hoặc cùng nhau tung mũ cử nhân/bóng bay lên trời cao.',
        cameraSetting: 'Tốc độ màn trập nhanh 1/800s - 1/1000s để bắt dính khoảnh khắc tung mũ',
        recommendedCamera: 'Canon EOS R50 (Dual Pixel AF II bắt nét nhiều người cùng lúc)'
      },
      {
        title: 'Góc 2: Bước đi tự nhiên trên sân trường',
        angleName: 'Góc chuyển động ngang (Walking Action)',
        description: 'Lùi xa khoảng 4 - 6m, dùng tiêu cự 35mm - 45mm. Yêu cầu nhóm bạn cùng khoác tay bước đi thong thả về phía máy ảnh.',
        poseHint: 'Các bạn vừa đi vừa nhìn nhau nói chuyện, cười đùa tự nhiên, tà áo dài hoặc vạt áo cử nhân bay nhẹ theo gió.',
        cameraSetting: 'Chế độ chụp liên tục tốc độ cao (H Burst), lấy nét bám mặt liên tục',
        recommendedCamera: 'Canon EOS R50 hoặc Fujifilm X-T30 (bám nét khuôn mặt siêu đỉnh)'
      },
      {
        title: 'Góc 3: Chân dung cá nhân áo dài / cử nhân',
        angleName: 'Góc nghiêng 3/4 đón nắng dịu',
        description: 'Đứng nghiêng 45 độ so với ống kính, mặt quay nhẹ về phía người chụp. Hậu cảnh chọn hàng cây rợp bóng hoặc hành lang lớp học có chiều sâu hun hút.',
        poseHint: 'Hai tay ôm bó hoa tươi hoặc bằng tốt nghiệp ngang eo, vai hơi hạ thấp, nụ cười nhẹ nhàng thanh tú.',
        cameraSetting: 'Tiêu cự tối đa của lens kit (45mm - 50mm) để phông nền xóa mờ nhất',
        recommendedCamera: 'Canon EOS R50 (tông màu da hồng mịn màng trứ danh)'
      },
      {
        title: 'Góc 4: Ngồi bậc thang hoặc ghế đá tâm tình',
        angleName: 'Góc chụp bậc thang phân tầng (Tiered Composition)',
        description: 'Tận dụng các bậc thềm giảng đường, khán đài sân bóng hoặc ghế đá. Sắp xếp người ngồi trước, người ngồi sau để khung hình không bị đều đều nhàm chán.',
        poseHint: 'Các bạn tựa vai nhau, bạn ngồi trước quay lại cười với bạn ngồi sau, tạo cảm giác thân thiết gắn bó.',
        cameraSetting: 'Khẩu độ f/5.6 để tất cả các bạn trong hàng đều rõ nét',
        recommendedCamera: 'Fujifilm X-T20 hoặc X-T30 (màu ảnh hoài niệm lưu giữ kỷ niệm)'
      }
    ]
  },
  {
    id: 'da-ngoai',
    tabLabel: '🌸 Dã Ngoại & Du Lịch',
    icon: Sun,
    headline: 'Góc Chụp Dã Ngoại, Cắm Trại & Đi Chơi Cuối Tuần',
    tagline: 'Hòa mình vào thiên nhiên, cỏ cây hoa lá và ánh hoàng hôn rực rỡ',
    colorTone: 'Fujifilm Velvia (cây cối xanh tươi) hoặc Classic Chrome (vintage)',
    generalTip: 'Khung giờ vàng (Golden Hour) là từ 16h00 đến 17h30 chiều. Lúc này ánh nắng vàng óng ả chiếu xiên, tạo viền sáng tóc (rim light) cực kỳ lung linh và thơ mộng.',
    angles: [
      {
        title: 'Góc 1: Nằm trên thảm picnic từ trên cao',
        angleName: 'Góc chụp thẳng từ trên xuống (Overhead Bird-eye)',
        description: 'Trải thảm picnic trên thảm cỏ, bày giỏ hoa quả, bánh mì và máy ảnh retro. Người chụp đứng phía trên đỉnh đầu chụp thẳng xuống.',
        poseHint: 'Nằm nghiêng tay gối đầu, mắt nhắm hờ tận hưởng làn gió, một tay che hờ mắt như đang đón nắng nhẹ.',
        cameraSetting: 'Góc rộng 15mm - 18mm để bao trọn cả thảm cỏ và phụ kiện',
        recommendedCamera: 'Fujifilm X-T30 (màu sắc tươi tắn, chi tiết lá cỏ sắc nét)'
      },
      {
        title: 'Góc 2: Ngược sáng hoàng hôn viền tóc',
        angleName: 'Góc ngược sáng (Backlight Golden Hour)',
        description: 'Đặt mặt trời ở ngay sau lưng người mẫu. Khi chụp, hơi nép mặt trời vào sau đầu hoặc vai để ánh sáng lóe lên (flare) ấm áp mà không làm cháy đen ảnh.',
        poseHint: 'Xoay nhẹ người, tay vuốt tóc để ánh nắng xuyên qua kẽ tóc tạo thành đường viền phát sáng lấp lánh.',
        cameraSetting: 'Đo sáng vào mặt người mẫu, bù sáng EV +0.7 đến +1.0',
        recommendedCamera: 'Fujifilm X-T20 hoặc Canon R50 (xử lý ngược sáng mượt mà)'
      },
      {
        title: 'Góc 3: Cầm hoa / phụ kiện che nửa mặt',
        angleName: 'Góc chụp cận cảnh giấu mặt (Half-face Mystery)',
        description: 'Dùng một nhành hoa dã quỳ, lá phong hoặc chiếc mũ cói che hờ một bên mắt. Tập trung lấy nét vào đôi mắt còn lại.',
        poseHint: 'Mắt nhìn thẳng vào ống kính với ánh nhìn mơ mộng, tạo vẻ bí ẩn và thu hút mọi ánh nhìn.',
        cameraSetting: 'Khoảng cách chụp gần 40cm, khẩu độ f/3.5 mở tối đa',
        recommendedCamera: 'Fujifilm X-T30 (độ nét mắt cực nhạy 425 điểm lấy nét)'
      }
    ]
  },
  {
    id: 'chan-dung',
    tabLabel: '📸 Chân Dung & Dáng Đẹp',
    icon: Sparkles,
    headline: 'Bí Quyết Lấy Góc Hack Dáng & Không Bị Đơ Trước Ống Kính',
    tagline: 'Kỹ thuật lấy góc thấp kéo dài chân và bố cục 1/3 chuẩn nhiếp ảnh',
    colorTone: 'Canon Portrait (tôn da) hoặc Fujifilm Astia (dịu dàng)',
    generalTip: 'Không bao giờ để chân người mẫu bị cắt ngang cổ chân. Hãy để bàn chân chạm sát mép dưới khung hình, và chừa khoảng trống thoáng đãng phía trên đỉnh đầu.',
    angles: [
      {
        title: 'Quy tắc 1: Góc thấp "Hack" chân dài miên man',
        angleName: 'Góc Low Angle ngang đầu gối',
        description: 'Người chụp ngồi thụp xuống hoặc hạ máy ngang thắt lưng/đầu gối. Lật màn hình cảm ứng lên 90 độ để nhìn ngắm dễ dàng mà không cần phải nằm bò ra đất.',
        poseHint: 'Một chân trụ, một chân bước xéo lên trước nửa bước hoặc nhón gót nhẹ. Góc chụp này giúp đôi chân thon dài tự nhiên hơn 5 - 10cm!',
        cameraSetting: 'Bật đường lưới bố cục 3x3 trong Menu máy ảnh',
        recommendedCamera: 'Cả 3 dòng máy Canon R50, Fuji X-T20 và X-T30 đều có màn hình lật tiện lợi'
      },
      {
        title: 'Quy tắc 2: Đặt mắt vào điểm 1/3 vàng (Rule of Thirds)',
        angleName: 'Bố cục 1/3 kinh điển',
        description: 'Chia khung hình thành 9 ô vuông bằng 2 đường dọc và 2 đường ngang. Đặt đôi mắt hoặc khuôn mặt của bạn vào một trong 4 điểm giao nhau.',
        poseHint: 'Người mẫu nhìn về phía có khoảng trống nhiều hơn trong khung hình, tạo chiều sâu suy tư và không gian mở.',
        cameraSetting: 'Khóa nét trung tâm sau đó lia bố cục nhẹ nhàng',
        recommendedCamera: 'Canon EOS R50 (bắt nét theo mắt ngay khi lia máy)'
      },
      {
        title: 'Quy tắc 3: Tương tác với tay để không bị đơ',
        angleName: 'Tạo dáng tự nhiên với bàn tay',
        description: 'Nhiều bạn khi đứng trước máy ảnh thường bối rối không biết để tay ở đâu. Hãy tận dụng nguyên tắc "tay chạm nhẹ".',
        poseHint: 'Tay vén tóc bên tai, tay che nhẹ ánh nắng, tay cầm quai túi xách, tay cầm chiếc máy ảnh retro hoặc chống cằm suy tư nhẹ nhàng.',
        cameraSetting: 'Chụp bắt khoảnh khắc khi tay đang chuyển động',
        recommendedCamera: 'Fujifilm X-T20 & X-T30 (thân máy retro làm phụ kiện chụp ảnh cực sang)'
      }
    ]
  }
];

export const ShootingAnglesGuide: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<'cafe' | 'ky-yeu' | 'da-ngoai' | 'chan-dung'>('cafe');

  const currentConcept = CONCEPTS.find((c) => c.id === selectedConcept) || CONCEPTS[0];

  return (
    <section id="goc-chup" className="py-20 bg-gradient-to-b from-rose-50/40 via-white to-rose-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" /> Cẩm nang nhiếp ảnh bỏ túi
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-stone-900">
            Hướng Dẫn Lấy Góc & Chụp Ảnh Đẹp
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-normal">
            Không cần là nhiếp ảnh gia chuyên nghiệp! Bạn nhỏ nhà Sâu chia sẻ trọn bộ mẹo lấy góc "thần thánh" khi đi chụp kỷ yếu, sống ảo quán cafe và dã ngoại.
          </p>
        </div>

        {/* Concept Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-4xl mx-auto">
          {CONCEPTS.map((concept) => {
            const isSelected = selectedConcept === concept.id;
            return (
              <button
                key={concept.id}
                onClick={() => setSelectedConcept(concept.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-rose-500 to-amber-400 text-white shadow-md shadow-rose-200'
                    : 'bg-white hover:bg-rose-50 text-stone-700 border border-rose-100 hover:border-rose-200'
                }`}
              >
                <span>{concept.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Main Concept Presentation Container */}
        <div className="bg-white rounded-3xl border border-rose-100 shadow-soft p-6 sm:p-10 max-w-6xl mx-auto space-y-8 animate-fade-in">
          
          {/* Concept Header & Key Advice */}
          <div className="border-b border-rose-100 pb-6 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">
                  Chủ đề được chọn
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                  {currentConcept.headline}
                </h3>
              </div>

              <div className="p-3 rounded-2xl bg-rose-50 border border-rose-100 text-xs text-rose-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Tone màu khuyên dùng: <strong>{currentConcept.colorTone}</strong></span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 font-normal">
              {currentConcept.tagline}
            </p>

            {/* General Advice Highlight */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Lời khuyên cốt lõi:</strong> {currentConcept.generalTip}
              </div>
            </div>
          </div>

          {/* Grid of 3 - 4 Specific Angles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentConcept.angles.map((angle, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-stone-50/60 border border-stone-200/80 hover:border-rose-300 transition-all space-y-4 hover:shadow-xs group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-rose-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <h4 className="font-serif font-semibold text-stone-900 text-base group-hover:text-rose-600 transition-colors">
                      {angle.title}
                    </h4>
                  </div>
                  <span className="text-[10px] bg-white border border-stone-200 text-stone-600 px-2.5 py-0.5 rounded-full font-medium shrink-0">
                    {angle.angleName}
                  </span>
                </div>

                {/* Description of how to set up the angle */}
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {angle.description}
                </p>

                {/* Pose Hint */}
                <div className="p-3 bg-white rounded-xl border border-rose-100 text-xs text-stone-700 space-y-1">
                  <span className="font-bold text-rose-700 flex items-center gap-1.5 text-[11px]">
                    <Smile className="w-3.5 h-3.5 text-rose-500" /> Cách tạo dáng (Pose):
                  </span>
                  <p className="text-[11px] text-stone-600 font-normal">
                    {angle.poseHint}
                  </p>
                </div>

                {/* Technical setting & camera recommendation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-stone-500 pt-1 border-t border-stone-200/60">
                  <div>
                    <span className="font-semibold text-stone-700 block">Thông số ống kính:</span>
                    <span>{angle.cameraSetting}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-stone-700 block">Dòng máy gợi ý:</span>
                    <span className="text-rose-600 font-medium">{angle.recommendedCamera}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Universal Golden Rules Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50 border border-rose-200 space-y-3">
            <h4 className="font-serif font-semibold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 3 Nguyên Tắc Vàng Cần Nhớ Khi Bấm Máy:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-700">
              <div className="bg-white/80 p-3 rounded-xl border border-rose-100">
                <span className="font-bold text-stone-900 block mb-1">1. Đừng để chân sát mép dưới</span>
                <span className="text-stone-600 text-[11px]">Bàn chân chạm sát mép đáy khung hình, chừa 30% khoảng trống trên đỉnh đầu để chân dài miên man.</span>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-rose-100">
                <span className="font-bold text-stone-900 block mb-1">2. Luôn nhấn nửa cò trước</span>
                <span className="text-stone-600 text-[11px]">Nhấn nửa cò nghe tiếng "bíp" khóa nét mắt rồi mới nhấn hết nút chụp để ảnh không bị mờ nhòe.</span>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-rose-100">
                <span className="font-bold text-stone-900 block mb-1">3. Tận dụng màn hình lật</span>
                <span className="text-stone-600 text-[11px]">Lật màn hình cảm ứng lên để chụp từ bụng/đầu gối, không cần phải cúi gập người vất vả.</span>
              </div>
            </div>
          </div>

          {/* Consultation CTA Banner */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-rose-100 text-xs text-stone-600">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <Sparkles className="w-4 h-4 text-rose-500 shrink-0" />
              <span>
                Cần tư vấn thêm về concept chụp của bạn? Chúng mình luôn sẵn sàng gợi ý phụ kiện và góc chụp đẹp nhất!
              </span>
            </div>

            <a
              href={`https://zalo.me/${STORE_INFO.zaloPhones[0].replace(/\s+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-400 text-white font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0"
            >
              <span>Nhắn Zalo tư vấn góc chụp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
