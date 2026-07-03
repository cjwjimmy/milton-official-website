import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Baby,
  BookOpen,
  Brain,
  Brush,
  CheckCircle2,
  Compass,
  FlaskConical,
  Globe2,
  GraduationCap,
  Headphones,
  Landmark,
  LibraryBig,
  MapPin,
  MessageCircle,
  Mic2,
  Microscope,
  Music4,
  Palette,
  PenTool,
  Pencil,
  Phone,
  PlayCircle,
  Presentation,
  School,
  Shapes,
  Sparkles,
  UsersRound,
  Volume2
} from 'lucide-react';
import './styles.css';

const REVIEW_APP_URL = 'https://milton-vocab-app.vercel.app/';
const LINE_URL = 'https://lin.ee/q0YfnGm';

const heroHighlights = ['Language Roots', 'Discovery Pathways', 'Global Horizons'];

const trustMetrics = [
  { value: '4+', label: '幼兒到國中銜接' },
  { value: '2', label: '英語主軸課程' },
  { value: '1:1', label: '家長溝通與學習追蹤' }
];

const parentPromises = [
  { title: '孩子敢開口', desc: '從聽說讀寫建立穩定基礎，讓孩子在課堂中自然練習、安心表達' },
  { title: '學習看得見', desc: '課程有清楚路徑與練習節奏，家長能理解孩子正在累積什麼能力' },
  { title: '放學也安心', desc: '銜接學校作息與課後照顧，協助孩子完成作業、複習與生活常規' }
];

const philosophies = [
  {
    title: 'Roots｜扎根',
    desc: '建立聽、說、讀、寫與語感基礎',
    english: 'Strong roots build confident learners',
    icon: Compass,
    methods: ['Roots of Language', 'Listening', 'Reading Foundation'],
    videos: [
      { label: 'Watch Phonics Demo Video', href: 'https://youtube.com/shorts/lcIENw4Zv3g?feature=share' },
      { label: 'Story Reading', href: 'https://www.youtube.com/results?search_query=english+story+reading+for+kids' }
    ]
  },
  {
    title: 'Pathways｜探索',
    desc: '依照孩子的節奏，引導主動學習',
    english: 'Every child follows a path of discovery',
    icon: Brain,
    methods: ['Discovery Missions', 'Theme Projects', 'Inquiry Practice'],
    videos: [
      { label: 'Classroom Dialogue', href: 'https://www.youtube.com/results?search_query=english+role+play+for+kids' },
      { label: 'Task-based ESL', href: 'https://www.youtube.com/results?search_query=task+based+learning+esl+kids' }
    ]
  },
  {
    title: 'Canopy｜成長',
    desc: '延伸閱讀、表達、思考與合作力',
    english: 'Growth reaches beyond the classroom',
    icon: Sparkles,
    methods: ['Voice in the Forest', 'Presentation', 'Collaboration'],
    videos: [
      { label: 'Show & Tell', href: 'https://www.youtube.com/results?search_query=show+and+tell+english+class+kids' },
      { label: 'Integrated Skills Class', href: 'https://www.youtube.com/results?search_query=integrated+english+skills+class+kids' }
    ]
  },
  {
    title: 'Horizons｜世界',
    desc: '用英文連結更寬廣的未來',
    english: 'Language opens the way to the world',
    icon: Globe2,
    methods: ['Global Themes', 'Cultural Awareness', 'Confident Expression'],
    videos: [
      { label: 'Theme Learning', href: 'https://www.youtube.com/results?search_query=global+themes+english+class+kids' },
      { label: 'World Explorers', href: 'https://www.youtube.com/results?search_query=kids+global+learning+english' }
    ]
  }
];

const roadmap = [
  { title: '幼兒美語', course: '故事音樂劇', subtitle: '聽覺、口說與自然語感', age: 'Age 4+', desc: '用歌曲、故事與遊戲建立美語親近感', icon: Baby },
  { title: '國小基礎', course: 'Prime 活用班 / ESL 全美實作班', subtitle: 'Prime 系統能力建立與主題實作', age: 'Age 6-12', desc: '累積單字、閱讀、句型與書寫表達，也透過主題活動練習美語分享', icon: School },
  { title: '國中銜接', course: '閱讀理解與學科表達', subtitle: '閱讀理解與學科表達', age: 'Age 13-15', desc: '提升理解力、表達力與學校課業銜接', icon: GraduationCap }
];

const courseTracks = [
  {
    title: 'Roots of Language',
    headline: '基礎美語扎根',
    subtitle: 'Phonics Reading Core language skills',
    href: '#/prime',
    visual: 'prime'
  },
  {
    title: 'Discovery Missions',
    headline: '主題探索任務',
    subtitle: 'Explore Think Express',
    href: '#/esl',
    visual: 'esl'
  }
];

const learningPathways = [
  {
    stage: 'Roots',
    title: '語言扎根',
    english: 'Language Roots',
    type: '兒童美語 / 自然發音 / 聽說讀寫基礎',
    desc: '從自然發音、詞彙、句型到聽說讀寫，建立穩定英文基礎',
    quote: 'Strong roots build confident learners',
    icon: BookOpen,
    href: '#/prime'
  },
  {
    stage: 'Trunk',
    title: '閱讀路徑',
    english: 'Story Paths',
    type: '閱讀理解 / 故事閱讀 / 英文閱讀能力',
    desc: '透過故事閱讀與引導提問，培養理解力、想像力與思考力',
    quote: 'Stories strengthen the core of learning',
    icon: LibraryBig,
    href: '#/prime'
  },
  {
    stage: 'Branches',
    title: '口說表達',
    english: 'Voice in the Forest',
    type: '英文會話 / 口說練習 / 發表能力',
    desc: '透過對話、句型應用與發表練習，建立孩子開口的自信',
    quote: 'A confident voice grows outward',
    icon: Mic2,
    href: '#/prime'
  },
  {
    stage: 'Leaves',
    title: '主題探索',
    english: 'Discovery Missions',
    type: '主題課程 / 科學探索 / 營隊活動 / Project-based learning',
    desc: '在主題任務與跨域活動中，讓孩子自然使用英文探索世界',
    quote: 'Curiosity helps every learner grow',
    icon: Compass,
    href: '#/esl'
  },
  {
    stage: 'Nurture',
    title: '課後陪伴',
    english: 'Daily Growth Journey',
    type: '課後輔導 / 作業陪伴 / 學習習慣',
    desc: '透過日常陪伴與學習支持，幫助孩子穩定累積與持續成長',
    quote: 'Daily support shapes lasting growth',
    icon: School,
    href: '#/afterschool'
  }
];

const programPathways = [
  {
    stage: 'Kids',
    title: '幼兒美語音樂劇啟蒙班',
    english: 'Kiddo Musical English Program',
    shortDesc: '在歌曲、故事、遊戲與表演中，開啟孩子的英文第一步',
    quote: 'Sing Play Speak Grow',
    icon: Baby,
    href: '#/kids'
  },
  {
    stage: 'Prime',
    title: 'Prime 活用班',
    english: 'Core Skills for Confident Learners',
    shortDesc: '在全美語授課中，建立聽、說、讀、寫四大核心能力',
    quote: 'Build the skills Use the language',
    icon: Headphones,
    href: '#/prime'
  },
  {
    stage: 'ESL',
    title: 'ESL 全美實作班',
    english: 'English in Action',
    shortDesc: '在全美語主題討論中，讓孩子聽見更多，也更自然開口',
    quote: 'Questions Voices Discovery',
    icon: Globe2,
    href: '#/esl'
  }
];

const growthEvidenceItems = [
  {
    title: '學習歷程',
    english: 'Learning Progress',
    desc: '孩子的學習不只是單次表現，而是長期累積麋爾頓透過課程紀錄、單元練習與老師回饋，讓孩子的進步被持續看見',
    quote: 'Progress is built step by step',
    icon: BookOpen
  },
  {
    title: '語言自信',
    english: 'Language Confidence',
    desc: '從願意聽、願意說，到能自然開口分享，孩子在一次次練習中建立開口的勇氣與自信',
    quote: 'Confidence grows through meaningful practice',
    icon: Mic2
  },
  {
    title: '課業支持',
    english: 'Academic Support',
    desc: '我們陪伴孩子穩定面對學校學習任務，建立讀書節奏與學習習慣，同時不只停留在短期考試，而是幫助孩子累積真正的英文能力',
    quote: 'Support today Strength for tomorrow',
    icon: School
  },
  {
    title: '階段成果',
    english: 'Visible Outcomes',
    desc: '透過測驗表現、課堂發表、閱讀理解、作業完成度與老師觀察，家長能看見孩子在不同階段的具體成長',
    quote: 'Every result tells part of the journey',
    icon: Presentation
  }
];

const materials = [
  { title: 'Oxford University Press', desc: '國際教材系統' },
  { title: 'Reading Journey', desc: '分級閱讀旅程' },
  { title: 'Practice & Review', desc: '單字與句型複習' }
];

const outputMethods = [
  { title: 'Creative Sharing', desc: '以作品、海報或短講整理學習成果', icon: PenTool },
  { title: 'Hands-on Discovery', desc: '透過觀察、實作與討論理解主題內容', icon: Microscope },
  { title: 'Presentation Time', desc: '練習站上台，用美語說出自己的想法', icon: Presentation }
];

const afterSchool = ['作業陪伴', '學科複習', '學校進度銜接', '生活常規建立'];

const prepItems = [
  { title: '閱讀力', desc: '從短文理解到分級閱讀，累積穩定語感', icon: BookOpen },
  { title: '學校銜接', desc: '協助孩子跟上校內進度，也保留美語加深練習', icon: School },
  { title: '思考表達', desc: '用提問、討論與簡報練習完整說明', icon: Brain },
  { title: '創作分享', desc: '在主題活動中把語言轉成作品與行動', icon: Palette }
];

const primePhotos = [
  { src: '/assets/class-photo-prime-1.svg', title: '聽說讀寫基礎練習' },
  { src: '/assets/class-photo-prime-2.svg', title: '分級閱讀與單字任務' },
  { src: '/assets/class-photo-prime-3.svg', title: '小班互動與口說表達' }
];

const eslPhotos = [
  { src: '/assets/class-photo-esl-1.svg', title: '主題探索活動' },
  { src: '/assets/class-photo-esl-2.svg', title: '跨領域創作課程' },
  { src: '/assets/class-photo-esl-3.svg', title: '美語發表與團隊合作' }
];

const campusLifePhotos = [
  { src: '/assets/class-photo-prime-1.svg', title: 'Reading & Phonics Studio', caption: 'Focused foundations' },
  { src: '/assets/class-photo-esl-2.svg', title: 'Inquiry Workshop', caption: 'Explore through themes' },
  { src: '/assets/class-photo-esl-3.svg', title: 'Presentation Moment', caption: 'Confidence in action' }
];

const primeClassroomMoments = [
  {
    src: '/prime/classroom-interaction.png',
    title: '課堂互動',
    english: 'Classroom Interaction',
    desc: '透過主題情境與同儕互動，讓孩子在課堂中自然使用英文',
    type: 'photo',
    icon: UsersRound,
    alt: 'Prime 活用班課堂互動，孩子透過情境活動練習英文表達',
    position: 'center center'
  },
  {
    src: '/images/prime/classroom-4.webp',
    title: '口說練習',
    english: 'Speaking Practice',
    desc: '在課堂互動中建立開口表達的信心',
    type: 'photo',
    icon: Mic2,
    alt: 'Prime 活用班口說練習情境',
    position: 'center center'
  },
  {
    src: '/prime/presentation-australia.png',
    title: '成果發表',
    english: 'Presentation Day',
    desc: '孩子透過主題介紹與口說發表，展現學習成果與表達自信',
    type: 'photo',
    icon: Presentation,
    alt: 'Prime 活用班學生介紹 Australia 主題並練習英文口說表達',
    position: 'center center'
  },
  {
    src: '/images/prime/reading-writing-classroom.png',
    title: '閱讀與書寫',
    english: 'Reading & Writing',
    desc: '從閱讀理解到書寫練習，穩定累積孩子的英文基礎',
    type: 'photo',
    icon: BookOpen,
    alt: 'Prime 活用班閱讀與書寫學習情境',
    position: 'center center'
  },
  {
    src: '/images/prime/learning-outcome-hani.png',
    title: '成果看得見',
    english: 'Learning Outcomes',
    desc: '看見孩子的努力，也看見成長的自信',
    type: 'photo',
    icon: CheckCircle2,
    alt: 'Prime 活用班學生展示學習成果與升級證書',
    position: 'center center'
  }
];

const eslClassroomMoments = [
  {
    src: '/images/esl/topic-discussion-wheels.png',
    title: '主題討論',
    english: 'Topic Discussion',
    desc: '從主題分享中，練習聽懂、回應與表達',
    type: 'photo',
    icon: MessageCircle,
    alt: 'ESL 課堂中的主題討論活動，學生進行 Wheels 主題發表',
    position: 'center center'
  },
  { src: '/images/esl/classroom-1.webp', title: '全美語互動', english: 'English Immersion', desc: '在課堂聲音裡，熟悉英文節奏', type: 'photo', icon: Globe2, alt: 'ESL 全美語互動課堂花絮' },
  { src: '/images/esl/classroom-2.webp', title: '口說分享', english: 'Speaking Moment', desc: '從短句回答，到完整說出想法', type: 'photo', icon: Mic2, alt: 'ESL 口說分享課堂花絮' },
  { src: '/images/esl/classroom-3.webp', title: '團體任務', english: 'Group Communication', desc: '在合作與互動中增加開口機會', type: 'video', icon: UsersRound, alt: 'ESL 團體任務課堂花絮' },
  { src: '/images/esl/classroom-4.webp', title: '聽力浸潤', english: 'Listening in Context', desc: '在全美語主題中累積理解力', type: 'photo', icon: Headphones, alt: 'ESL 聽力浸潤課堂花絮' }
];

const kidsClassroomMoments = [
  {
    src: '/images/kids/kids-classroom-04-holiday-moments.png',
    title: '節慶體驗',
    english: 'Holiday Moments',
    desc: '在節慶活動中感受英文與生活的連結',
    type: 'photo',
    icon: Sparkles,
    alt: '幼兒美語課堂中的節慶文化體驗活動',
    position: 'center center'
  },
  {
    src: '/images/kids/kids-classroom-01-songs-movement.webp',
    title: '歌曲律動',
    english: 'Songs & Movement',
    desc: '在節奏與動作中熟悉英文聲音',
    type: 'photo',
    icon: Music4,
    alt: '幼兒美語課堂中的歌曲律動活動'
  },
  {
    src: '/images/kids/kids-classroom-02-story-time.webp',
    title: '故事互動',
    english: 'Story Time',
    desc: '透過故事、聲音與想像開啟英文第一步',
    type: 'photo',
    icon: BookOpen,
    alt: '幼兒美語課堂中的故事互動學習'
  },
  {
    src: '/images/kids/kids-classroom-03-playful-learning.webp',
    title: '遊戲探索',
    english: 'Playful Learning',
    desc: '讓孩子在遊戲中自然接觸英文',
    type: 'photo',
    icon: Shapes,
    alt: '幼兒美語課堂中的遊戲探索活動'
  },
  {
    src: '/images/kids/kids-classroom-05-first-speaking.webp',
    title: '開口練習',
    english: 'First Speaking',
    desc: '從簡單回應開始，建立開口安全感',
    type: 'video',
    icon: Mic2,
    alt: '幼兒美語課堂中的開口練習活動'
  }
];

const spacePreviewPhotos = [
  {
    src: '/images/spaces/milton-space-1f-main.png',
    title: '一樓學習空間',
    english: 'An Open Space for Exploration'
  },
  {
    src: '/images/spaces/milton-space-consultation.png',
    title: '接待與陪伴',
    english: 'A Space for Guidance and Connection'
  }
];

function getRoute() {
  if (window.location.hash === '#/kids') return 'kids';
  if (window.location.hash === '#/prime') return 'prime';
  if (window.location.hash === '#/esl') return 'esl';
  if (window.location.hash === '#/afterschool') return 'afterschool';
  return 'home';
}

function SoftCard({ icon: Icon, title, desc }) {
  return (
    <article className="soft-feature-card">
      <Icon />
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
}

function PhilosophyPrinciples() {
  return (
    <div className="philosophy-principles">
      {philosophies.map(({ icon: Icon, title, desc, english, methods, videos }, index) => (
        <article className="philosophy-principle" key={title} tabIndex="0">
          <div className="principle-index">{String(index + 1).padStart(2, '0')}</div>
          <Icon />
          <div>
            <h3>{title}</h3>
            <div className="principle-english">{english}</div>
            <p>{desc}</p>
          </div>
          <div className="principle-popover" aria-hidden="true">
            <div className="method-chip-list">
              {methods.map((method) => <span key={method}>{method}</span>)}
            </div>
            <div className="teaching-video-links">
              {videos.map((video) => (
                <a key={video.label} href={video.href} target="_blank" rel="noreferrer">
                  <span className="youtube-link-icon" aria-hidden="true" />{video.label}<ArrowRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function TrackCard({ title, headline, subtitle, href, visual }) {
  const primeIcons = [
    { icon: Volume2, label: 'Listening' },
    { icon: Mic2, label: 'Speaking' },
    { icon: BookOpen, label: 'Reading' },
    { icon: Pencil, label: 'Writing' }
  ];
  const eslIcons = [
    { icon: Microscope, label: 'Science' },
    { icon: Brush, label: 'Arts' },
    { icon: Globe2, label: 'Culture' },
    { icon: Music4, label: 'Music' }
  ];
  const icons = visual === 'prime' ? primeIcons : eslIcons;

  return (
    <a className={`track-card track-card-link visual-track-card course-focus-card ${visual === 'esl' ? 'esl-track-card' : 'prime-track-card'}`} href={href} aria-label={`前往 ${title}`}>
      <div className="course-focus-visual">
        <div className="course-focus-bg-word">{visual === 'prime' ? 'Prime' : 'ESL'}</div>
        <div className="course-focus-icon-grid">
          {icons.map(({ icon: Icon, label }) => (
            <div className="course-focus-icon" key={label}>
              <Icon />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="track-title-area">
        <h3>{title}</h3>
        <strong>{headline}</strong>
        <p>{subtitle}</p>
      </div>
    </a>
  );
}

function CoursePathways() {
  const pathwayCards = programPathways;

  return (
    <div className="pathway-map" aria-label="Milton learning pathways">
      <div className="pathway-card-grid">
        {pathwayCards.map(({ icon: Icon, title, english, shortDesc, quote, href }, index) => (
          <a className={`pathway-card pathway-${index + 1}`} href={href} key={title}>
            <div className="pathway-card-top">
              <span className="pathway-card-icon"><Icon /></span>
              <span className="pathway-card-stage">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3><span>{english}</span><strong>{title}</strong></h3>
            <p>{shortDesc}</p>
            <em>{quote}</em>
          </a>
        ))}
      </div>
    </div>
  );
}
function GrowthEvidenceSection() {
  return (
    <section className="section growth-evidence-section">
      <div className="growth-evidence-layout">
        <div className="growth-evidence-head">
          <div className="section-label">Growth Evidence</div>
          <h2>看得見的學習成長</h2>
          <p>在麋爾頓，我們重視的不只是孩子完成了多少作業，而是他是否真正理解、是否願意開口、是否逐步建立語感、自信與學習習慣透過穩定的課程設計、老師觀察、學習紀錄與階段性成果，家長可以清楚看見孩子每一步的成長</p>
          <strong>Growth you can see Confidence you can feel</strong>
        </div>

        <div className="growth-evidence-track">
          {growthEvidenceItems.map(({ icon: Icon, title, english, desc, quote }, index) => (
            <article className="growth-evidence-item" key={title}>
              <div className="growth-node">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Icon />
              </div>
              <div className="growth-copy">
                <div className="growth-english">{english}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <strong>{quote}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="growth-evidence-footer">
        <p>每一次練習、每一次開口、每一次完成任務，都是孩子走向世界的一小步</p>
        <span>Every small step becomes part of a bigger journey</span>
      </div>
    </section>
  );
}

const growthEvidenceTrustItems = [
  {
    title: '學習紀錄',
    english: 'Learning Records',
    desc: '透過錄音作業與單字作業 App，記錄孩子的練習狀況、完成度與學習進度',
    type: 'dashboard',
    image: '/images/growth/learning-progress.webp',
    placeholder: 'progress',
    placeholderLabel: 'Learning Progress Dashboard',
    icon: BookOpen,
    detail: {
      body: '麋爾頓透過錄音作業與單字作業 App，讓孩子能完成指定練習，也讓老師能掌握練習次數、完成狀況與學習進度這些紀錄幫助我們更了解孩子在哪些地方已經穩定，哪些地方還需要更多陪伴與練習',
      english: 'Practice becomes visible through thoughtful learning records'
    }
  },
  {
    title: 'Final Test 階段檢核',
    english: 'Final Test & Level Readiness',
    desc: '每一期結束前，透過 Final Test 檢核孩子是否具備升級到下一級的能力',
    type: 'assessment',
    image: '/images/growth/final-test.webp',
    placeholder: 'assessment',
    placeholderLabel: 'Assessment / Checklist Placeholder',
    icon: CheckCircle2,
    detail: {
      body: '每一期課程結束時，麋爾頓會安排本期 Final Test，檢核孩子在單字、句型、閱讀理解、聽力與綜合應用上的學習狀況這不只是一次測驗，而是確認孩子是否已經準備好進入下一個學習階段的重要依據',
      english: 'A clear checkpoint before the next level'
    }
  },
  {
    title: '成果發表會',
    english: 'Presentation Day',
    desc: '每一期結束邀請家長參與成果發表會，親眼看見孩子的學習成果',
    type: 'showcase',
    image: '/images/growth/presentation-day.webp',
    placeholder: 'showcase',
    placeholderLabel: 'Presentation / Showcase Photo',
    icon: Presentation,
    detail: {
      body: '每一期結束時，麋爾頓會邀請家長參加成果發表會孩子透過口說、閱讀、表演、作品展示或主題任務，展現本期學到的英文能力這讓家長不只是看見分數，也能看見孩子的表達力、自信與成長',
      english: 'Learning becomes visible when children share their voice'
    }
  },
  {
    title: '劍橋兒童英檢認證',
    english: 'Cambridge English Qualification',
    desc: '透過劍橋兒童英檢認證，確認孩子的美語學習能對接國際標準',
    type: 'certificate',
    image: '/images/growth/cambridge-qualification.webp',
    placeholder: 'certificate',
    placeholderLabel: 'International Certificate Placeholder',
    icon: Globe2,
    detail: {
      body: '麋爾頓鼓勵孩子參與劍橋兒童英檢認證，讓學習成果不只停留在課堂內，也能透過國際認證標準檢視聽、說、讀、寫等能力的發展這幫助家長更清楚了解孩子目前的英文程度，也讓孩子在階段性挑戰中建立成就感與自信',
      english: 'Learning aligned with international standards'
    }
  }
];

function GrowthEvidenceTrustSection() {
  const [activeEvidence, setActiveEvidence] = useState(null);

  return (
    <section className="section growth-summary-section" id="growth-evidence">
      <div className="growth-summary-panel">
        <div className="growth-summary-head">
          <div className="section-label">Growth Evidence</div>
          <h2>看得見的學習成長</h2>
          <strong>Growth you can see Confidence you can feel</strong>
          <p>孩子的成長，在麋爾頓是被看見、被記錄、被檢核，也能對接國際標準透過日常學習紀錄、期末 Final Test、成果發表會與劍橋兒童英檢認證，家長能清楚看見孩子在理解力、表達力、自信與學習階段上的穩定成長</p>
        </div>

        <div className="growth-summary-list">
          {growthEvidenceTrustItems.map(({ icon: Icon, title, english, desc, type, image, placeholder, placeholderLabel, detail }) => {
            const isOpen = activeEvidence === type;
            const detailId = `growth-detail-${type}`;

            return (
              <article className={`growth-evidence-card ${type} ${isOpen ? 'open' : ''}`} key={title}>
                <div className={`growth-card-media ${placeholder}`}>
                  <img
                    src={image}
                    alt={`${title} evidence placeholder`}
                    loading="lazy"
                    onLoad={(event) => event.currentTarget.classList.add('loaded')}
                    onError={(event) => { event.currentTarget.hidden = true; }}
                  />
                  <div className="growth-media-placeholder" aria-hidden="true">
                    <Icon />
                    {placeholder === 'progress' ? (
                      <div className="growth-progress-mockup">
                        <div className="progress-mockup-head">
                          <span>錄音作業</span>
                          <strong>單字作業 App</strong>
                        </div>
                        <div className="progress-mockup-score">
                          <b>練習</b>
                          <i />
                          <b>追蹤</b>
                        </div>
                        <div className="progress-mockup-bars">
                          <span style={{ '--bar': '86%' }}><em>完成度</em></span>
                          <span style={{ '--bar': '72%' }}><em>練習紀錄</em></span>
                          <span style={{ '--bar': '64%' }}><em>老師查看進度</em></span>
                        </div>
                      </div>
                    ) : (
                      <div className={`growth-photo-placeholder-copy ${placeholder}`}>
                        <div className="growth-placeholder-art">
                          <span />
                          <span />
                          <span />
                        </div>
                        <strong>{placeholderLabel}</strong>
                        <span>{placeholder === 'certificate' ? 'Certificate placeholder' : 'Photo placeholder'}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="growth-card-copy">
                  <h3><span>{title}</span><strong>{english}</strong></h3>
                  <p>{desc}</p>
                  {detail && (
                    <button
                      className="growth-sample-trigger"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={detailId}
                      onClick={() => setActiveEvidence(isOpen ? null : type)}
                    >
                      查看成長機制
                      <span>View details</span>
                    </button>
                  )}
                </div>
                {detail && (
                  <div className="growth-sample-popover" id={detailId}>
                    <div className="growth-detail-content">
                      <p>{detail.body}</p>
                      <strong>{detail.english}</strong>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Milton 首頁">
        <img src="/assets/milton-logo-horizontal-blue.png" alt="Milton Kids Academy" />
      </a>
      <nav>
        <a href="#about">關於 Milton</a>
        <a href="#courses">學習路徑</a>
        <a href="#/kids">幼兒美語</a>
        <a href="#/prime">Prime</a>
        <a href="#/esl">ESL</a>
        <a href="#/afterschool">課後照顧</a>
        <a href="#campus-info">校區資訊</a>
        <a href="#contact">聯絡我們</a>
      </nav>
      <a className="header-cta" href={LINE_URL} target="_blank" rel="noreferrer">LINE 諮詢</a>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual forest-hero-visual" aria-label="Milton Exploration Forest visual">
      <div className="forest-light beam-a" aria-hidden="true" />
      <div className="forest-light beam-b" aria-hidden="true" />
      <div className="forest-canopy canopy-a" aria-hidden="true" />
      <div className="forest-canopy canopy-b" aria-hidden="true" />
      <div className="forest-path" aria-hidden="true" />
      <div className="forest-rings" aria-hidden="true" />
      <div className="forest-visual-panel">
        <span>MILTON KIDS ACADEMY</span>
        <strong>Confidence Starts Here</strong>
        <p>孩子的自信，從這裡開始</p>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section id="top" className="hero">
        <div className="hero-bg-mark" aria-hidden="true">Milton</div>
        <div className="hero-copy">
          <div className="section-kicker"><span className="kicker-line" /><span>麋爾頓美語 Milton Kids Academy</span><span className="kicker-line" /></div>
          <h1><span>走進探索森林</span><span>走向更大的世界</span></h1>
          <p>在麋爾頓，英文不只是學科，而是一段讓孩子建立語言力、自信與國際視野的成長旅程</p>
          <div className="hero-english-line">Step into the forest Grow into the world</div>
          <div className="hero-forest-actions">
            <a className="forest-primary-link" href="#contact">預約參觀探索森林校區<ArrowRight size={18} /></a>
            <a className="forest-secondary-link" href="#courses">探索學習路徑</a>
          </div>
          <div className="hero-highlight-list" aria-label="Milton 特色">
            {heroHighlights.map((item) => (
              <span key={item}><CheckCircle2 size={18} />{item}</span>
            ))}
          </div>
        </div>
        <HeroVisual />
      </section>

      <section id="about" className="section about-section brand-story-section">
        <div className="soft-section-head">
          <div className="section-label">Milton Exploration Forest Campus</div>
          <h2>青園二校｜麋爾頓探索森林校</h2>
          <p>Rooted in language<br />Growing through exploration</p>
        </div>
        <div className="brand-story-content">
          <p>麋爾頓探索森林，是青園二校的空間理念，<br />也是麋爾頓對孩子學習環境的想像<br />森林象徵扎根與成長，探索代表好奇、表達與看見世界的能力</p>
          <p>在這裡，孩子透過英文學習，<br />逐步建立自信、思考力與真正能使用的語言能力</p>
        </div>
      </section>

      <SpacePreviewSection />

      <section id="courses" className="section courses-section">
        <div className="soft-section-head course-section-head">
          <div className="section-label">Learning Pathways in Milton Exploration Forest</div>
          <h2>探索森林中的學習路徑</h2>
          <p>從幼兒美語啟蒙，到 Prime 核心能力建立與 ESL 情境應用，麋爾頓以清楚的學習路徑，陪伴孩子一步步建立真正能使用的英文能力</p>
          <div className="course-section-english">Every pathway is designed for growth, confidence, and discovery</div>
        </div>
        <CoursePathways />
      </section>

      <GrowthEvidenceTrustSection />
      <ContactSection />
    </>
  );
}

function PhotoGallery({ photos }) {
  return (
    <div className="class-photo-grid">
      {photos.map((photo) => (
        <figure className="class-photo-card" key={photo.src}>
          <img src={photo.src} alt={photo.title} />
          <figcaption>{photo.title}<span>Classroom Moments</span></figcaption>
        </figure>
      ))}
    </div>
  );
}

function ClassroomMomentsSection({ variant, moments }) {
  const classroomTitles = {
    esl: 'ESL 全美實作班｜課堂影音與學習花絮'
  };
  const classroomDescriptions = {
    kids: '未來將放上歌曲律動、故事互動、遊戲活動、節慶體驗與開口練習，讓家長看見孩子自然接觸英文的真實樣貌',
    prime: 'Prime 活用班的課堂，圍繞聽、說、讀、寫四大能力從口說練習、閱讀書寫到課堂互動與成果表現，孩子一步步累積真正能使用的美語能力',
    esl: 'ESL 全美實作班的課堂，透過主題討論、全美語互動、口說分享與團體任務，讓家長看見孩子在英文聲音裡聆聽、回應與分享的真實樣貌'
  };
  const title = classroomTitles[variant] || '課堂影音與學習花絮';
  const description = classroomDescriptions[variant] || '課堂中的互動、練習與作品，讓家長更清楚看見孩子在麋爾頓的學習樣貌';
  const featuredMomentIndexes = { prime: 3, esl: 0, kids: 0 };
  const defaultFeaturedIndex = featuredMomentIndexes[variant] ?? 0;
  const [activeMomentIndex, setActiveMomentIndex] = useState(defaultFeaturedIndex);

  useEffect(() => {
    setActiveMomentIndex(defaultFeaturedIndex);
  }, [defaultFeaturedIndex, variant, moments.length]);

  const orderedMoments = moments.map((moment, index) => ({ ...moment, originalIndex: index }));
  const featuredMoment = orderedMoments[activeMomentIndex] || orderedMoments[0];
  const FeaturedIcon = featuredMoment?.icon;

  return (
    <section className={`section classroom-moments-section ${variant}-moments-section`}>
      <div className="soft-section-head classroom-moments-head">
        <div className="section-label">Classroom Moments</div>
        <h2>{title}</h2>
        <p>{description}</p>
        <strong>Real moments of learning, confidence, and growth</strong>
      </div>
      <div className="classroom-moments-grid">
        {featuredMoment && (
          <article
            className="classroom-moment-card featured-moment-card active-moment-card"
            key={`featured-${featuredMoment.title}`}
          >
            <div className="classroom-moment-media">
              <img
                src={featuredMoment.src}
                alt={featuredMoment.alt || `${featuredMoment.title} ${featuredMoment.english}`}
                loading="lazy"
                style={{ objectPosition: featuredMoment.position || 'center center' }}
                onLoad={(event) => event.currentTarget.classList.add('loaded')}
                onError={(event) => { event.currentTarget.hidden = true; }}
              />
              <div className="classroom-media-placeholder" aria-hidden="true">
                {FeaturedIcon && <FeaturedIcon />}
                <span>{featuredMoment.english}</span>
                {featuredMoment.type === 'video' && <PlayCircle className="classroom-play-icon" />}
              </div>
            </div>
            <div className="classroom-moment-copy">
              <h3>{featuredMoment.english}<span>{featuredMoment.title}</span></h3>
              <p>{featuredMoment.desc}</p>
            </div>
          </article>
        )}
        <div className="classroom-moment-thumbnails">
          {orderedMoments.map(({ src, title, english, desc, type, icon: Icon, alt, position, originalIndex }) => (
            <article
              className="classroom-moment-card"
              key={title}
              tabIndex={0}
              onMouseEnter={() => setActiveMomentIndex(originalIndex)}
              onFocus={() => setActiveMomentIndex(originalIndex)}
              onClick={() => setActiveMomentIndex(originalIndex)}
            >
              <div className="classroom-moment-media">
                <img
                  src={src}
                  alt={alt || `${title} ${english}`}
                  loading="lazy"
                  style={{ objectPosition: position || 'center center' }}
                  onLoad={(event) => event.currentTarget.classList.add('loaded')}
                  onError={(event) => { event.currentTarget.hidden = true; }}
                />
                <div className="classroom-media-placeholder" aria-hidden="true">
                  <Icon />
                  <span>{english}</span>
                  {type === 'video' && <PlayCircle className="classroom-play-icon" />}
                </div>
              </div>
              <div className="classroom-moment-copy">
                <h3>{english}<span>{title}</span></h3>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseHeroMoments({ moments, label }) {
  const [activeMomentIndex, setActiveMomentIndex] = useState(0);
  const featuredMoment = moments[activeMomentIndex] || moments[0];
  const FeaturedIcon = featuredMoment?.icon;

  return (
    <div className="prime-hero-moments" aria-label={label}>
      {featuredMoment && (
        <article className="prime-hero-moment-main">
          <div className="prime-hero-moment-media">
            <img
              src={featuredMoment.src}
              alt={featuredMoment.alt || `${featuredMoment.title} ${featuredMoment.english}`}
              loading="eager"
              style={{ objectPosition: featuredMoment.position || 'center center' }}
              onLoad={(event) => event.currentTarget.classList.add('loaded')}
              onError={(event) => { event.currentTarget.hidden = true; }}
            />
            <div className="classroom-media-placeholder" aria-hidden="true">
              {FeaturedIcon && <FeaturedIcon />}
              <span>{featuredMoment.english}</span>
            </div>
          </div>
          <div className="prime-hero-moment-copy">
            <h3>{featuredMoment.english}<span>{featuredMoment.title}</span></h3>
            <p>{featuredMoment.desc}</p>
          </div>
        </article>
      )}
      <div className="prime-hero-moment-thumbs" aria-label={`${label}選單`}>
        {moments.map((moment, index) => (
          <button
            type="button"
            className={`prime-hero-moment-thumb ${index === activeMomentIndex ? 'is-active' : ''}`}
            key={moment.title}
            aria-label={`顯示 ${moment.title}`}
            onMouseEnter={() => setActiveMomentIndex(index)}
            onFocus={() => setActiveMomentIndex(index)}
            onClick={() => setActiveMomentIndex(index)}
          >
            <img
              src={moment.src}
              alt={moment.alt || `${moment.title} ${moment.english}`}
              loading="lazy"
              style={{ objectPosition: moment.position || 'center center' }}
              onLoad={(event) => event.currentTarget.classList.add('loaded')}
              onError={(event) => { event.currentTarget.hidden = true; }}
            />
            <span>{moment.english}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function PrimeHeroMoments() {
  return <CourseHeroMoments moments={primeClassroomMoments} label="Prime 活用班課堂照片" />;
}

function EslHeroMoments() {
  return <CourseHeroMoments moments={eslClassroomMoments} label="ESL 全美實作班課堂照片" />;
}

function CampusLifeSection() {
  return (
    <section className="section campus-life-section">
      <div className="campus-life-layout">
        <div className="campus-life-copy">
          <div className="section-label">Campus Life</div>
          <h2>明亮、有秩序，也保有孩子探索的空間</h2>
          <p>Milton 以小班互動、主題活動與成果發表，讓美語學習像校園生活一樣自然發生</p>
        </div>
        <div className="campus-life-gallery">
          {campusLifePhotos.map((photo) => (
            <figure className="campus-life-photo" key={photo.src}>
              <img src={photo.src} alt={photo.title} />
              <figcaption>
                <strong>{photo.title}</strong>
                <span>{photo.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpacePreviewSection() {
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);
  const orderedSpacePhotos = [
    spacePreviewPhotos[activeSpaceIndex],
    ...spacePreviewPhotos.filter((_, index) => index !== activeSpaceIndex)
  ];

  return (
    <section className="section space-preview-section">
      <div className="space-preview-head">
        <div className="section-label">Step Into Milton Exploration Forest Campus</div>
        <h2>走進麋爾頓探索森林校</h2>
        <p>青園二校以「麋爾頓探索森林」為空間與學習概念，<br />結合自然光感、森林意象與溫暖材質，<br />打造孩子能夠學習、閱讀、表達與探索的新一代英文學習環境</p>
        <strong>Designed for growth, confidence, and discovery</strong>
      </div>

      <div className="space-preview-gallery">
        {orderedSpacePhotos.map((photo, index) => {
          const originalIndex = spacePreviewPhotos.findIndex((item) => item.src === photo.src);

          return (
          <figure
            className={`space-preview-image ${index === 0 ? 'main-space' : 'support-space'}`}
            key={photo.src}
            onClick={() => setActiveSpaceIndex(originalIndex)}
          >
            <img
              src={photo.src}
              alt="麋爾頓探索森林校區學習空間 3D 示意圖"
              loading="lazy"
            />
            <figcaption>
              <span>{photo.title}</span>
              <strong>{photo.english}</strong>
            </figcaption>
          </figure>
          );
        })}
      </div>

    </section>
  );
}

function PageHero({ label, title, subtitle, english, tagline = '', desc, visual = null, className = '' }) {
  return (
    <section className={`course-page-hero ${visual ? 'has-visual' : ''} ${className}`.trim()}>
      <div className="course-page-hero-copy">
        <div className="section-label">{label}</div>
        <h1>{title}</h1>
        {subtitle && <strong className="course-page-subtitle">{subtitle}</strong>}
        {english && <span className="course-page-english">{english}</span>}
        {tagline && <span className="course-page-tagline">{tagline}</span>}
        {desc && <p>{desc}</p>}
        <div className="course-page-actions">
          <a className="secondary-btn" href="#courses">回到課程</a>
          <a className="accent-btn" href="#contact">預約諮詢 <ArrowRight size={18} /></a>
        </div>
      </div>
      {visual ? <div className="course-page-hero-visual-wrap">{visual}</div> : null}
    </section>
  );
}

function PrimeHeroVisual() {
  return (
    <div className="prime-hero-visual prime-hero-transparent-visual" aria-hidden="true">
      <div className="prime-hero-halo" />
      <div className="prime-hero-orb prime-orb-a" />
      <div className="prime-hero-orb prime-orb-b" />
      <div className="prime-forest-canopy prime-canopy-a" />
      <div className="prime-forest-canopy prime-canopy-b" />
      <div className="prime-forest-depth depth-a" />
      <div className="prime-forest-depth depth-b" />
      <div className="prime-forest-branch prime-branch-a" />
      <div className="prime-forest-branch prime-branch-b" />
      <div className="prime-forest-branch prime-branch-c" />
      <div className="prime-learning-branches">
        <span className="learning-branch branch-listening" />
        <span className="learning-branch branch-speaking" />
        <span className="learning-branch branch-reading" />
        <span className="learning-branch branch-writing" />
      </div>
      <div className="prime-leaf-cluster cluster-left">
        <span /><span /><span />
      </div>
      <div className="prime-leaf-cluster cluster-right">
        <span /><span /><span />
      </div>
      <div className="prime-forest-leaf prime-leaf-a" />
      <div className="prime-forest-leaf prime-leaf-b" />
      <div className="prime-forest-leaf prime-leaf-c" />
      <div className="prime-forest-leaf prime-leaf-d" />
      <div className="prime-growth-sprout sprout-a" />
      <div className="prime-growth-sprout sprout-b" />
      <div className="prime-book-growth">
        <span /><span /><span /><span />
      </div>
      <div className="prime-growth-line growth-line-a" />
      <div className="prime-growth-line growth-line-b" />
      <div className="prime-forest-ring" />
      <div className="prime-forest-glow glow-a" />
      <div className="prime-forest-glow glow-b" />
      <div className="prime-dot-grid" />
      <div className="prime-transparent-mascot-shell">
        <img className="prime-transparent-mascot" src="/assets/prime-hero-transparent.png" alt="Prime program visual" />
      </div>
    </div>
  );
}

function EslHeroVisual() {
  const domains = [
    { icon: FlaskConical, title: 'Science Inquiry', subtitle: 'Explore｜探索發現', className: 'domain-a' },
    { icon: Palette, title: 'Creative Arts', subtitle: 'Create｜創作表達', className: 'domain-b' },
    { icon: Landmark, title: 'Global Studies', subtitle: 'Connect｜世界視野', className: 'domain-c' },
    { icon: Music4, title: 'Music & Movement', subtitle: 'Express｜節奏自信', className: 'domain-d' }
  ];

  return (
    <div className="esl-hero-visual" aria-hidden="true">
      <div className="esl-hero-halo" />
      <div className="prime-hero-orb prime-orb-a" />
      <div className="prime-hero-orb prime-orb-b" />
      <div className="prime-hero-spark prime-spark-a">*</div>
      <div className="prime-hero-spark prime-spark-b">*</div>
      <div className="prime-dot-grid" />
      <div className="esl-orbit-line orbit-line-a" />
      <div className="esl-orbit-line orbit-line-b" />
      <div className="esl-mascot-shell">
        <img className="esl-hero-mascot" src="/assets/milton-3d-mascot-clean.png" alt="ESL program visual" />
      </div>
      {domains.map(({ icon: Icon, title, subtitle, className }) => (
        <article className={`esl-domain-badge ${className}`} key={title}>
          <div className="esl-domain-icon"><Icon size={20} /></div>
          <div>
            <strong>{title}</strong>
            <p>{subtitle}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function KidsHeroVisual() {
  return (
    <div className="kids-hero-visual" aria-hidden="true">
      <div className="kids-hero-glow" />
      <div className="kids-canopy kids-canopy-a" />
      <div className="kids-canopy kids-canopy-b" />
      <div className="kids-sprout-field">
        <span /><span /><span /><span />
      </div>
      <div className="kids-open-book">
        <span />
        <span />
      </div>
      <div className="kids-story-card">
        <BookOpen />
        <strong>Story Time</strong>
        <span>Listen Move Speak</span>
      </div>
      <div className="kids-floating-token token-rhythm">
        <Music4 />
        <span>Rhythm</span>
      </div>
      <div className="kids-floating-token token-play">
        <Shapes />
        <span>Play</span>
      </div>
      <div className="kids-floating-token token-speak">
        <Mic2 />
        <span>First Words</span>
      </div>
      <div className="kids-speech-bubble">Hello</div>
      <div className="kids-letter-block block-a">A</div>
      <div className="kids-letter-block block-b">B</div>
      <div className="kids-music-note note-a">♪</div>
      <div className="kids-music-note note-b">♫</div>
      <div className="kids-star kids-star-a" />
      <div className="kids-star kids-star-b" />
      <div className="kids-rhythm-curve curve-a" />
      <div className="kids-rhythm-curve curve-b" />
      <div className="kids-leaf kids-leaf-a" />
      <div className="kids-leaf kids-leaf-b" />
      <div className="kids-leaf kids-leaf-c" />
      <div className="kids-rings" />
    </div>
  );
}

function KidsPage() {
  const focuses = [
    { icon: Music4, english: 'Songs & Movement', title: '歌曲律動', desc: '在節奏、韻文與動作中熟悉英文聲音' },
    { icon: BookOpen, english: 'Stories & Reading', title: '故事閱讀', desc: '透過故事情境，建立理解力、想像力與語感' },
    { icon: Presentation, english: 'Show & Tell', title: '日常表達', desc: '從生活會話與簡單分享開始，陪伴孩子願意開口' },
    { icon: Shapes, english: 'Playful Learning', title: '遊戲互動', desc: '在遊戲、操作與主題活動中，自然參與英文' }
  ];

  const themePoints = [
    { title: '生活主題', desc: '從孩子熟悉的日常經驗開始' },
    { title: '節慶文化', desc: '在活動與儀式感中感受不同文化' },
    { title: '自然使用', desc: '在互動中聽英文、說英文、用英文' }
  ];

  return (
    <>
      <PageHero
        label="YOUNG LEARNERS PROGRAM"
        title="幼兒美語音樂劇啟蒙班"
        subtitle="Sing Play Speak Grow"
        english=""
        desc={<><span className="hero-desc-english">Kiddo Musical English Program for a joyful first step into English</span><span>我們透過歌曲律動、故事閱讀、遊戲互動與 Show & Tell，讓孩子在安全、愉快的環境中自然接觸英文，慢慢建立語音節奏、參與感與開口的自信</span></>}
        className="kids-page-hero"
        visual={<KidsHeroVisual />}
      />

      <section className="section course-page-section kids-core-section">
        <div className="soft-section-head">
            <div className="section-label">A joyful first step into English</div>
          <h2>不是急著學會，而是安心開始</h2>
          <p>幼兒階段最重要的，不是背了多少單字，而是孩子是否喜歡英文、願意參與、敢嘗試開口</p>
          <strong className="kids-section-note">當孩子喜歡英文，學習就會開始發芽</strong>
        </div>
        <div className="page-feature-grid kids-focus-grid">
          {focuses.map(({ icon: Icon, english, title, desc }) => (
            <article className="soft-feature-card kids-focus-card" key={title}>
              <Icon />
              <span>{english}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section course-page-section kids-theme-section">
        <div className="kids-theme-panel">
          <div className="kids-theme-copy">
            <div className="section-label">English through everyday themes</div>
            <h2>英文，從生活裡開始</h2>
            <p>課程以孩子熟悉的生活主題出發，結合節慶文化、故事活動與互動任務，讓英文不只出現在課本裡，也出現在孩子期待參與的活動中</p>
          </div>
          <div className="kids-theme-points">
            {themePoints.map((item) => (
              <article key={item.title}>
                <CheckCircle2 />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section course-page-section alt-bg kids-experience-section">
        <div className="kids-digital-panel">
          <Brain />
          <div>
            <div className="section-label">Interactive learning moments</div>
            <h2>讓孩子更願意參與的互動學習</h2>
            <p>透過互動白板與數位學習資源，結合聲音、圖像與操作，讓幼兒更容易投入課堂</p>
          </div>
        </div>
      </section>

      <ClassroomMomentsSection variant="kids" moments={kidsClassroomMoments} />

      <section className="section course-page-section alt-bg kids-outcome-section">
        <div className="reading-panel kids-outcome-panel">
          <div>
            <div className="section-label">From first sounds to confident learning</div>
            <h2>從喜歡英文，到準備好學英文</h2>
            <p>幼兒美語音樂劇啟蒙班，是孩子進入麋爾頓學習路徑的第一步先建立興趣、語音節奏與開口安全感，未來再銜接 Prime 活用班，發展更完整的聽、說、讀、寫能力</p>
            <strong>先喜歡英文，再走進更深的學習</strong>
          </div>
          <div className="program-cta-card">
            <h3>想為孩子開啟英文的第一步？</h3>
            <p>歡迎預約諮詢，讓我們了解孩子的年齡、個性與學習狀態，協助安排適合的啟蒙方式</p>
            <a className="primary-btn" href={LINE_URL} target="_blank" rel="noreferrer">預約幼兒美語諮詢 <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

function PrimePage() {
  const abilities = [
    { icon: Headphones, english: 'Listening', title: '聽得懂', desc: '從自然發音開始，聽出單字、音節與課堂情境' },
    { icon: Mic2, english: 'Speaking', title: '說得出', desc: '在聲音與句型練習中，建立開口表達的自信' },
    { icon: BookOpen, english: 'Reading', title: '讀得進', desc: '透過自然發音解碼，逐步讀懂單字、句子與故事' },
    { icon: Pencil, english: 'Writing', title: '寫得穩', desc: '從聽音、拼字到句型書寫，穩定表達想法' }
  ];
  return (
    <>
      <PageHero
        label="PRIME PROGRAM"
        title="Prime 活用班"
        subtitle="Build the skills Use the language"
        english=""
        desc={<><span className="hero-desc-english">All-English classes that build listening, speaking, reading, and writing skills</span><span>Prime 活用班以全美語授課為基礎，循序建立孩子聽、說、讀、寫四大核心能力，幫助孩子逐步累積真正能使用的英文實力</span></>}
        visual={<PrimeHeroMoments />}
        className="prime-page-hero"
      />
      <section className="section course-page-section">
        <div className="soft-section-head">
          <div className="section-label">Core Abilities</div>
          <h2>聽、說、讀、寫，建立真正能使用的能力</h2>
          <p>Prime 活用班以全美語授課為基礎，透過系統化課程與有效練習，幫助孩子在四大面向穩定累積</p>
        </div>
        <div className="prime-ability-layout">
          <div className="prime-ability-visual-panel">
            <PrimeHeroVisual />
          </div>
          <div className="page-feature-grid prime-ability-grid">
            {abilities.map(({ icon: Icon, english, title, desc }) => (
              <article className="soft-feature-card prime-ability-card" key={title}>
                <Icon />
                <span>{english}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section course-page-section alt-bg prime-outcome-section">
        <div className="reading-panel prime-outcome-panel">
          <div>
            <div className="section-label">Learning Outcomes</div>
            <h2>有效建立能力，不只是增加上課時間</h2>
            <p>Prime 活用班重視學習成效與階段累積孩子會透過日常練習、課堂表現與階段檢核，逐步建立下一階段英文學習所需的基礎能力</p>
            <strong>在麋爾頓，英文學習不是堆疊時間，而是有效建立能力</strong>
          </div>
          <div className="program-cta-card">
            <h3>想了解孩子適合的 Prime 學習階段？</h3>
            <p>歡迎預約諮詢，讓我們協助評估孩子目前的美語能力與學習方向</p>
            <a className="primary-btn" href={LINE_URL} target="_blank" rel="noreferrer">預約 Prime 課程諮詢 <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

function EslPage() {
  const eslQuestions = [
    {
      question: '和 Prime 活用班有什麼不同？',
      answer: 'Prime 活用班著重建立聽、說、讀、寫四大核心能力ESL 全美實作班則提供更多全美語互動與主題討論，讓孩子有更多聽英文、回應英文與自然開口的機會'
    },
    {
      question: '孩子會不會聽不懂？',
      answer: '孩子不需要一開始就完全聽懂老師會透過主題情境、肢體引導、同儕互動與重複輸入，幫助孩子慢慢熟悉英文聲音與課堂節奏'
    },
    {
      question: '這堂課主要練什麼？',
      answer: '重點放在聽力浸潤與口說互動孩子會在主題討論、分享與小組活動中，練習聽懂問題、簡短回應，並逐步說出更多想法'
    },
    {
      question: '孩子怎麼從聽懂，到敢回應？',
      answer: 'ESL 全美實作班透過主題情境、老師引導與同儕互動，讓孩子先熟悉英文聲音，再從簡短回答開始，慢慢累積回應與分享的信心'
    },
    {
      question: '可以期待什麼改變？',
      answer: '我們希望孩子慢慢變得更熟悉英文、更願意回應，也更敢在互動中開口成長不是一次完成，而是在每一次聽見、理解與分享中累積'
    }
  ];
  return (
    <>
      <PageHero
        label="ESL PROGRAM"
        title="ESL 全美實作班"
        subtitle="Questions Voices Discovery"
        english=""
        desc={<><span className="hero-desc-english">All-English theme discussions that help children speak naturally through interaction</span><span>透過全美語授課與主題式團體討論，孩子在聆聽、回應、分享與合作中，累積更多真實使用英文的機會</span></>}
        className="esl-page-hero"
        visual={<EslHeroMoments />}
      />
      <section className="section course-page-section esl-parent-section">
        <div className="soft-section-head">
          <div className="section-label">All-English Discussion</div>
          <h2>聽得懂，才敢回應<br />有安全感，才願意開口</h2>
          <span className="course-page-english">More listening More speaking More confidence</span>
          <p>ESL 全美實作班讓孩子在主題討論與同儕互動中，慢慢熟悉英文聲音，也累積願意開口的安全感</p>
        </div>
        <div className="esl-parent-layout">
          <aside className="esl-parent-promise">
            <p>在互動裡聽見英文<br />在回應中建立自信</p>
            <span>Questions Voices Confidence</span>
            <div className="esl-parent-visual-card">
              <EslHeroVisual />
            </div>
          </aside>
          <div className="esl-question-grid">
            {eslQuestions.map(({ question, answer }, index) => (
              <article className={`esl-question-card esl-question-card-${index + 1}`} key={question}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{question}</h3>
              <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section course-page-section alt-bg esl-outcome-section">
        <div className="reading-panel esl-outcome-panel">
          <div>
            <div className="section-label">Learning Outcomes</div>
            <h2>聽得更多，說得更自然</h2>
            <span className="course-page-english">More listening More speaking More confidence</span>
            <p>ESL 全美實作班讓孩子在全美語主題討論中，接觸更多英文聲音，也有更多機會開口回應能力不是一次完成，而是在每一次聽見、理解、嘗試與分享中慢慢累積</p>
            <strong>每一次互動，都是孩子更敢開口的一步</strong>
          </div>
          <div className="program-cta-card">
            <h3>想了解孩子是否適合 ESL 全美實作班？</h3>
            <p>歡迎預約諮詢，讓我們協助了解孩子目前的英文能力與適合的學習方向</p>
            <a className="primary-btn" href={LINE_URL} target="_blank" rel="noreferrer">預約 ESL 課程諮詢 <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

function AfterSchoolPage() {
  return (
    <>
      <PageHero
        label="After School Care"
        title="課後照顧"
        subtitle=""
        english=""
        desc="放學後的時間也很重要Milton 協助孩子完成作業、進行學科複習，建立穩定的學習與生活節奏"
        className="after-school-page-hero"
      />
      <section className="section after-school-section">
        <div className="soft-section-head">
          <div className="section-label">Care & Growth</div>
          <h2>照顧生活，也照顧學習</h2>
          <p>Learn with support Grow with confidence</p>
        </div>
        <div className="prep-grid">
          {afterSchool.map((item) => (
            <article className="prep-card" key={item}>
              <CheckCircle2 />
              <h3>{item}</h3>
              <p>Steady care</p>
            </article>
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}

function ReviewSection() {
  return (
    <section id="review" className="section review-section">
      <div className="review-panel">
        <div>
          <div className="section-label">Daily Growth Journey</div>
          <h2>把每日練習，延伸成穩定成長</h2>
          <p>孩子可以依照學習階段進行課後複習，把課堂中的理解、閱讀與表達練習延伸到日常</p>
        </div>
        <a className="primary-btn" href={REVIEW_APP_URL} target="_blank" rel="noreferrer">進入 Daily Growth Journey <ArrowRight size={18} /></a>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div id="campus-info" className="location-map-panel distance-map-panel">
        <div className="location-map-copy">
          <div className="section-label">Campus Map</div>
          <h2>校區位置</h2>
          <p className="campus-map-subtitle">親自走進麋爾頓，感受孩子學習、閱讀、表達與成長的空間</p>
          <strong className="campus-map-english">Begin your child’s learning journey with Milton</strong>
          <div className="distance-list">
            <div>
              <strong>青園校</strong>
              <em>Milton Qingyuan Campus</em>
              <span>桃園市大園區大勇路26號</span>
            </div>
            <div className="featured-campus">
              <strong>青園二校｜麋爾頓探索森林校區</strong>
              <em>Milton Exploration Forest Campus</em>
              <span>桃園市中壢區高鐵北路二段95號</span>
            </div>
          </div>
          <div className="campus-contact-list" aria-label="Milton 聯絡資訊">
            <a href={LINE_URL} target="_blank" rel="noreferrer"><MessageCircle />官方 LINE</a>
            <a href="tel:032878335"><Phone />03-2878335</a>
          </div>
          <div className="campus-map-actions">
            <a className="forest-primary-link" href={LINE_URL} target="_blank" rel="noreferrer">預約參觀探索森林校區<ArrowRight size={18} /></a>
            <a className="forest-secondary-link" href="https://www.google.com/maps/search/?api=1&query=桃園市大園區大勇路26號" target="_blank" rel="noreferrer">查看 Google 地圖</a>
          </div>
          <p className="map-note">讓孩子在語言中扎根，在探索中成長<br />Rooted in language Growing through exploration</p>
        </div>

        <div className="simple-map distance-map final-map-image-wrap" aria-label="Milton 校區位置地圖">
          <img src="/images/campus/campus-location-map.png" alt="校區位置與青園國小距離參考圖，標示 Milton 青園校與青園二校位置" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <img src="/assets/milton-logo-horizontal-blue.png" alt="Milton Kids Academy" />
      <p>© {new Date().getFullYear()} Milton Kids Academy. All rights reserved</p>
    </footer>
  );
}

function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <main>
      <Header />
      {route === 'kids' ? <KidsPage /> : route === 'prime' ? <PrimePage /> : route === 'esl' ? <EslPage /> : route === 'afterschool' ? <AfterSchoolPage /> : <HomePage />}
      <Footer />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
