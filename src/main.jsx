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
  { title: '孩子敢開口', desc: '從聽說讀寫建立穩定基礎，讓孩子在課堂中自然練習、安心表達。' },
  { title: '學習看得見', desc: '課程有清楚路徑與練習節奏，家長能理解孩子正在累積什麼能力。' },
  { title: '放學也安心', desc: '銜接學校作息與課後照顧，協助孩子完成作業、複習與生活常規。' }
];

const philosophies = [
  {
    title: 'Roots｜扎根',
    desc: '建立聽、說、讀、寫與語感基礎。',
    english: 'Strong roots build confident learners.',
    icon: Compass,
    methods: ['Roots of Language', 'Listening', 'Reading Foundation'],
    videos: [
      { label: 'Watch Phonics Demo Video', href: 'https://youtube.com/shorts/lcIENw4Zv3g?feature=share' },
      { label: 'Story Reading', href: 'https://www.youtube.com/results?search_query=english+story+reading+for+kids' }
    ]
  },
  {
    title: 'Pathways｜探索',
    desc: '依照孩子的節奏，引導主動學習。',
    english: 'Every child follows a path of discovery.',
    icon: Brain,
    methods: ['Discovery Missions', 'Theme Projects', 'Inquiry Practice'],
    videos: [
      { label: 'Classroom Dialogue', href: 'https://www.youtube.com/results?search_query=english+role+play+for+kids' },
      { label: 'Task-based ESL', href: 'https://www.youtube.com/results?search_query=task+based+learning+esl+kids' }
    ]
  },
  {
    title: 'Canopy｜成長',
    desc: '延伸閱讀、表達、思考與合作力。',
    english: 'Growth reaches beyond the classroom.',
    icon: Sparkles,
    methods: ['Voice in the Forest', 'Presentation', 'Collaboration'],
    videos: [
      { label: 'Show & Tell', href: 'https://www.youtube.com/results?search_query=show+and+tell+english+class+kids' },
      { label: 'Integrated Skills Class', href: 'https://www.youtube.com/results?search_query=integrated+english+skills+class+kids' }
    ]
  },
  {
    title: 'Horizons｜世界',
    desc: '用英文連結更寬廣的未來。',
    english: 'Language opens the way to the world.',
    icon: Globe2,
    methods: ['Global Themes', 'Cultural Awareness', 'Confident Expression'],
    videos: [
      { label: 'Theme Learning', href: 'https://www.youtube.com/results?search_query=global+themes+english+class+kids' },
      { label: 'World Explorers', href: 'https://www.youtube.com/results?search_query=kids+global+learning+english' }
    ]
  }
];

const roadmap = [
  { title: '幼兒美語', course: '故事音樂劇', subtitle: '聽覺、口說與自然語感', age: 'Age 4+', desc: '用歌曲、故事與遊戲建立美語親近感。', icon: Baby },
  { title: '國小基礎', course: 'Prime 活用班 / ESL 實作班', subtitle: 'Prime 系統英語訓練與主題實作', age: 'Age 6-12', desc: '強化單字、閱讀、句型與書寫表達，也透過主題活動練習美語輸出。', icon: School },
  { title: '國中銜接', course: '閱讀理解與學科表達', subtitle: '閱讀理解與學科表達', age: 'Age 13-15', desc: '提升理解力、輸出力與學校課業銜接。', icon: GraduationCap }
];

const courseTracks = [
  {
    title: 'Roots of Language',
    headline: '基礎美語扎根',
    subtitle: 'Phonics. Reading. Core language skills.',
    href: '#/prime',
    visual: 'prime'
  },
  {
    title: 'Discovery Missions',
    headline: '主題探索任務',
    subtitle: 'Explore. Think. Express.',
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
    desc: '從自然發音、詞彙、句型到聽說讀寫，建立穩定英文基礎。',
    quote: 'Strong roots build confident learners.',
    icon: BookOpen,
    href: '#/prime'
  },
  {
    stage: 'Trunk',
    title: '閱讀路徑',
    english: 'Story Paths',
    type: '閱讀理解 / 故事閱讀 / 英文閱讀能力',
    desc: '透過故事閱讀與引導提問，培養理解力、想像力與思考力。',
    quote: 'Stories strengthen the core of learning.',
    icon: LibraryBig,
    href: '#/prime'
  },
  {
    stage: 'Branches',
    title: '口說表達',
    english: 'Voice in the Forest',
    type: '英文會話 / 口說練習 / 發表能力',
    desc: '透過對話、句型應用與發表練習，建立孩子開口的自信。',
    quote: 'A confident voice grows outward.',
    icon: Mic2,
    href: '#/prime'
  },
  {
    stage: 'Leaves',
    title: '主題探索',
    english: 'Discovery Missions',
    type: '主題課程 / 科學探索 / 營隊活動 / Project-based learning',
    desc: '在主題任務與跨域活動中，讓孩子自然使用英文探索世界。',
    quote: 'Curiosity helps every learner grow.',
    icon: Compass,
    href: '#/esl'
  },
  {
    stage: 'Nurture',
    title: '課後陪伴',
    english: 'Daily Growth Journey',
    type: '課後輔導 / 作業陪伴 / 學習習慣',
    desc: '透過日常陪伴與學習支持，幫助孩子穩定累積與持續成長。',
    quote: 'Daily support shapes lasting growth.',
    icon: School,
    href: '#/afterschool'
  }
];

const growthEvidenceItems = [
  {
    title: '學習歷程',
    english: 'Learning Progress',
    desc: '孩子的學習不只是單次表現，而是長期累積。麋爾頓透過課程紀錄、單元練習與老師回饋，讓孩子的進步被持續看見。',
    quote: 'Progress is built step by step.',
    icon: BookOpen
  },
  {
    title: '語言自信',
    english: 'Language Confidence',
    desc: '從願意聽、願意說，到能自然使用英文表達，孩子在一次次練習中建立開口的勇氣與自信。',
    quote: 'Confidence grows through meaningful practice.',
    icon: Mic2
  },
  {
    title: '課業支持',
    english: 'Academic Support',
    desc: '我們陪伴孩子穩定面對學校學習任務，建立讀書節奏與學習習慣，同時不只停留在短期考試，而是幫助孩子累積真正的英文能力。',
    quote: 'Support today. Strength for tomorrow.',
    icon: School
  },
  {
    title: '階段成果',
    english: 'Visible Outcomes',
    desc: '透過測驗表現、課堂發表、閱讀理解、作業完成度與老師觀察，家長能看見孩子在不同階段的具體成長。',
    quote: 'Every result tells part of the journey.',
    icon: Presentation
  }
];

const materials = [
  { title: 'Oxford University Press', desc: '國際教材系統' },
  { title: 'Reading Journey', desc: '分級閱讀訓練' },
  { title: 'Practice & Review', desc: '單字與句型複習' }
];

const outputMethods = [
  { title: 'Creative Sharing', desc: '以作品、海報或短講整理學習成果。', icon: PenTool },
  { title: 'Hands-on Discovery', desc: '透過觀察、實作與討論理解主題內容。', icon: Microscope },
  { title: 'Presentation Time', desc: '練習站上台，用美語說出自己的想法。', icon: Presentation }
];

const afterSchool = ['作業陪伴', '美語複習', '學校進度銜接', '生活常規建立'];

const prepItems = [
  { title: '閱讀力', desc: '從短文理解到分級閱讀，累積穩定語感。', icon: BookOpen },
  { title: '學校銜接', desc: '協助孩子跟上校內進度，也保留美語加深練習。', icon: School },
  { title: '思考表達', desc: '用提問、討論與簡報練習完整說明。', icon: Brain },
  { title: '創作輸出', desc: '在主題活動中把語言轉成作品與行動。', icon: Palette }
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
  const pathwayCards = learningPathways.map((item) => ({
    ...item,
    shortDesc: {
      Roots: '建立穩定英文基礎。',
      Trunk: '培養理解與思考力。',
      Branches: '建立開口的自信。',
      Leaves: '用英文探索世界。',
      Nurture: '穩定累積學習習慣。'
    }[item.stage]
  }));

  return (
    <div className="pathway-map" aria-label="Milton learning pathways">
      <div className="pathway-card-grid">
        {pathwayCards.map(({ icon: Icon, stage, title, english, shortDesc }, index) => (
          <article className={`pathway-card pathway-${index + 1}`} key={title}>
            <div className="pathway-card-top">
              <span className="pathway-card-icon"><Icon /></span>
              <span className="pathway-card-stage">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3><span>{english}</span><strong>{title}</strong></h3>
            <p>{shortDesc}</p>
          </article>
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
          <p>在麋爾頓，我們重視的不只是孩子完成了多少作業，而是他是否真正理解、是否願意開口、是否逐步建立語感、自信與學習習慣。透過穩定的課程設計、老師觀察、學習紀錄與階段性成果，家長可以清楚看見孩子每一步的成長。</p>
          <strong>Growth you can see. Confidence you can feel.</strong>
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
        <p>每一次練習、每一次開口、每一次完成任務，都是孩子走向世界的一小步。</p>
        <span>Every small step becomes part of a bigger journey.</span>
      </div>
    </section>
  );
}

const growthEvidenceTrustItems = [
  {
    title: '學習紀錄',
    english: 'Learning Records',
    desc: '透過錄音作業與單字作業 App，記錄孩子的練習狀況、完成度與學習進度。',
    type: 'dashboard',
    image: '/images/growth/learning-progress.webp',
    placeholder: 'progress',
    placeholderLabel: 'Learning Progress Dashboard',
    icon: BookOpen,
    detail: {
      body: '麋爾頓透過錄音作業與單字作業 App，讓孩子能完成指定練習，也讓老師能掌握練習次數、完成狀況與學習進度。這些紀錄幫助我們更了解孩子在哪些地方已經穩定，哪些地方還需要更多陪伴與練習。',
      english: 'Practice becomes visible through thoughtful learning records.'
    }
  },
  {
    title: 'Final Test 階段檢核',
    english: 'Final Test & Level Readiness',
    desc: '每一期結束前，透過 Final Test 檢核孩子是否具備升級到下一級的能力。',
    type: 'assessment',
    image: '/images/growth/final-test.webp',
    placeholder: 'assessment',
    placeholderLabel: 'Assessment / Checklist Placeholder',
    icon: CheckCircle2,
    detail: {
      body: '每一期課程結束時，麋爾頓會安排本期 Final Test，檢核孩子在單字、句型、閱讀理解、聽力與綜合應用上的學習狀況。這不只是一次測驗，而是確認孩子是否已經準備好進入下一個學習階段的重要依據。',
      english: 'A clear checkpoint before the next level.'
    }
  },
  {
    title: '成果發表會',
    english: 'Presentation Day',
    desc: '每一期結束邀請家長參與成果發表會，親眼看見孩子的學習成果。',
    type: 'showcase',
    image: '/images/growth/presentation-day.webp',
    placeholder: 'showcase',
    placeholderLabel: 'Presentation / Showcase Photo',
    icon: Presentation,
    detail: {
      body: '每一期結束時，麋爾頓會邀請家長參加成果發表會。孩子透過口說、閱讀、表演、作品展示或主題任務，展現本期學到的英文能力。這讓家長不只是看見分數，也能看見孩子的表達力、自信與成長。',
      english: 'Learning becomes visible when children share their voice.'
    }
  },
  {
    title: '劍橋兒童英檢認證',
    english: 'Cambridge English Qualification',
    desc: '透過劍橋兒童英檢認證，確認孩子的美語學習能對接國際標準。',
    type: 'certificate',
    image: '/images/growth/cambridge-qualification.webp',
    placeholder: 'certificate',
    placeholderLabel: 'International Certificate Placeholder',
    icon: Globe2,
    detail: {
      body: '麋爾頓鼓勵孩子參與劍橋兒童英檢認證，讓學習成果不只停留在課堂內，也能透過國際認證標準檢視聽、說、讀、寫等能力的發展。這幫助家長更清楚了解孩子目前的英文程度，也讓孩子在階段性挑戰中建立成就感與自信。',
      english: 'Learning aligned with international standards.'
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
          <strong>Growth you can see. Confidence you can feel.</strong>
          <p>孩子的成長，在麋爾頓是被看見、被記錄、被檢核，也能對接國際標準。透過日常學習紀錄、期末 Final Test、成果發表會與劍橋兒童英檢認證，家長能清楚看見孩子在理解力、表達力、自信與學習階段上的穩定成長。</p>
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
        <strong>Confidence Starts Here.</strong>
        <p>孩子的自信，從這裡開始。</p>
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
          <p>在麋爾頓，英文不只是學科，而是一段讓孩子建立語言力、自信與國際視野的成長旅程。</p>
          <div className="hero-english-line">Step into the forest. Grow into the world.</div>
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
          <p>Rooted in language.<br />Growing through exploration.</p>
        </div>
        <div className="brand-story-content">
          <p>麋爾頓探索森林，是青園二校的空間理念，<br />也是麋爾頓對孩子學習環境的想像。<br />森林象徵扎根與成長，探索代表好奇、表達與看見世界的能力。</p>
          <p>在這裡，孩子透過英文學習，<br />逐步建立自信、思考力與真正能使用的語言能力。</p>
        </div>
      </section>

      <SpacePreviewSection />

      <section id="courses" className="section courses-section">
        <div className="soft-section-head course-section-head">
          <div className="section-label">Learning Pathways in Milton Exploration Forest</div>
          <h2>探索森林中的學習路徑</h2>
          <p>從語言基礎、閱讀理解、口說表達，到主題探索與日常陪伴，麋爾頓以清楚的學習路徑，陪伴孩子一步步建立真正能使用的英文能力。</p>
          <div className="course-section-english">Every pathway is designed for growth, confidence, and discovery.</div>
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

function CampusLifeSection() {
  return (
    <section className="section campus-life-section">
      <div className="campus-life-layout">
        <div className="campus-life-copy">
          <div className="section-label">Campus Life</div>
          <h2>明亮、有秩序，也保有孩子探索的空間</h2>
          <p>Milton 以小班互動、主題活動與成果發表，讓美語學習像校園生活一樣自然發生。</p>
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
        <p>青園二校以「麋爾頓探索森林」為空間與學習概念，<br />結合自然光感、森林意象與溫暖材質，<br />打造孩子能夠學習、閱讀、表達與探索的新一代英文學習環境。</p>
        <strong>Designed for growth, confidence, and discovery.</strong>
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

function PageHero({ label, title, desc, visual = null, className = '' }) {
  return (
    <section className={`course-page-hero ${visual ? 'has-visual' : ''} ${className}`.trim()}>
      <div className="course-page-hero-copy">
        <div className="section-label">{label}</div>
        <h1>{title}</h1>
        <p>{desc}</p>
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
      <div className="prime-forest-branch prime-branch-a" />
      <div className="prime-forest-branch prime-branch-b" />
      <div className="prime-forest-leaf prime-leaf-a" />
      <div className="prime-forest-leaf prime-leaf-b" />
      <div className="prime-forest-leaf prime-leaf-c" />
      <div className="prime-growth-sprout sprout-a" />
      <div className="prime-growth-sprout sprout-b" />
      <div className="prime-forest-ring" />
      <div className="prime-dot-grid" />
      <div className="prime-transparent-mascot-shell">
        <img className="prime-transparent-mascot" src="/assets/prime-hero-transparent.png" alt="Prime program visual" />
      </div>
    </div>
  );
}

function EslHeroVisual() {
  const domains = [
    { icon: FlaskConical, title: 'Science Inquiry', subtitle: 'Explore / Observe / Discover', className: 'domain-a' },
    { icon: Palette, title: 'Creative Arts', subtitle: 'Imagine / Create / Express', className: 'domain-b' },
    { icon: Landmark, title: 'Global Studies', subtitle: 'Culture / People / Perspectives', className: 'domain-c' },
    { icon: Music4, title: 'Music & Movement', subtitle: 'Rhythm / Voice / Confidence', className: 'domain-d' }
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

function PrimePage() {
  const abilities = [
    { icon: Headphones, title: '聽力理解', desc: '從聲音辨識、自然語調到短文理解，建立穩定的美語輸入。' },
    { icon: Mic2, title: '口說表達', desc: '透過句型替換、情境問答與短講，讓孩子敢開口。' },
    { icon: BookOpen, title: '閱讀能力', desc: '從自然發音到分級閱讀，培養理解文章的能力。' },
    { icon: LibraryBig, title: '字彙句型', desc: '用規律複習和任務練習，把單字與句型真正留住。' }
  ];
  return (
    <>
      <PageHero
        label="Prime Program"
        title="Prime 基礎英語"
        desc="Prime 以聽、說、讀、寫為核心，適合正在建立美語基礎的孩子，讓學習有方向也有成就感。"
        className="prime-page-hero"
        visual={<PrimeHeroVisual />}
      />
      <section className="section course-page-section">
        <div className="soft-section-head">
          <div className="section-label">Learning Goals</div>
          <h2>把美語基本功練穩，孩子才有自信往前走</h2>
          <p>Build. Practice. Grow.</p>
        </div>
        <div className="page-feature-grid">{abilities.map((item) => <SoftCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />)}</div>
      </section>
      <section className="section reading-section prime-reading-section">
        <div className="reading-panel">
          <div>
            <div className="section-label">Reading Journey</div>
            <h2>用分級閱讀養成美語理解力</h2>
            <p>Read. Think. Grow.</p>
          </div>
          <div className="reading-keywords"><span>分級閱讀</span><span>自然發音</span><span>閱讀理解</span></div>
        </div>
      </section>
      <section className="section course-page-section alt-bg">
        <div className="two-column-content single-column-text">
          <div>
            <div className="section-label">Materials</div>
            <h2>教材與練習搭配，讓學習更有系統</h2>
            <p>Professional materials. Clear pathway.</p>
            <ul className="clean-list">
              {materials.map((item) => <li key={item.title}><CheckCircle2 /> {item.title} - {item.desc}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="section photo-section">
        <div className="soft-section-head"><div className="section-label">Classroom Moments</div><h2>Prime 課堂日常</h2><p>Practice in action.</p></div>
        <PhotoGallery photos={primePhotos} />
      </section>
      <section className="section course-page-section">
        <div className="reading-panel">
          <div><div className="section-label">Prime Summary</div><h2>扎實基礎，穩定進步</h2><p>Strong foundations.</p></div>
          <a className="primary-btn" href="#contact">預約 Prime 諮詢 <ArrowRight size={18} /></a>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

function EslPage() {
  const features = [
    { icon: Globe2, title: '主題式學習', desc: '以科學、文化、藝術與生活主題延伸美語使用情境。' },
    { icon: Shapes, title: 'CLIL 課程', desc: '把美語和內容學習結合，讓孩子用美語理解世界。' },
    { icon: UsersRound, title: '合作討論', desc: '透過小組任務練習聆聽、回應與表達想法。' },
    { icon: Presentation, title: 'PBL 發表', desc: '用作品與簡報呈現學習成果，培養台風與自信。' }
  ];
  return (
    <>
      <PageHero label="ESL Program" title="ESL 主題探索" desc="ESL 讓孩子在跨領域主題中使用美語，從理解、討論到創作發表，把美語變成真正的工具。" className="esl-page-hero" visual={<EslHeroVisual />} />
      <section className="section course-page-section">
        <div className="soft-section-head"><div className="section-label">Learning in Action</div><h2>在有內容的活動裡，自然練習美語輸出</h2><p>Think. Create. Share.</p></div>
        <div className="page-feature-grid">{features.map((item) => <SoftCard key={item.title} {...item} />)}</div>
      </section>
      <section className="section course-page-section alt-bg">
        <div className="monthly-cycle">
          <div><div className="section-label">Inquiry Cycle</div><h2>每個主題都有清楚的學習循環</h2><p>Input. Practice. Output.</p></div>
          <div className="cycle-steps">
            <article><span>01</span><h3>Input 輸入</h3><p>透過閱讀、影片、圖片與教師引導建立主題背景。</p></article>
            <article><span>02</span><h3>Practice 練習</h3><p>用句型、討論與任務練習把美語說出來。</p></article>
            <article><span>03</span><h3>Output 輸出</h3><p>以作品、短講或簡報整理想法並分享成果。</p></article>
          </div>
        </div>
      </section>
      <section className="section photo-section">
        <div className="soft-section-head"><div className="section-label">Classroom Moments</div><h2>ESL 課堂日常</h2><p>Collaborate. Create. Present.</p></div>
        <PhotoGallery photos={eslPhotos} />
      </section>
      <section className="section course-page-section">
        <div className="output-grid">{outputMethods.map(({ icon: Icon, title, desc }) => <article className="output-card" key={title}><Icon /><h3>{title}</h3><p>{desc}</p></article>)}</div>
      </section>
      <section className="section course-page-section">
        <div className="reading-panel">
          <div><div className="section-label">ESL Summary</div><h2>用美語探索，也用美語表達</h2><p>English in action.</p></div>
          <a className="primary-btn" href="#contact">預約 ESL 諮詢 <ArrowRight size={18} /></a>
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
        desc="放學後的時間也很重要。Milton 協助孩子完成作業、複習美語、建立穩定的學習與生活節奏。"
        className="after-school-page-hero"
      />
      <section className="section after-school-section">
        <div className="soft-section-head">
          <div className="section-label">Care & Growth</div>
          <h2>照顧生活，也照顧學習</h2>
          <p>Learn with support. Grow with confidence.</p>
        </div>
        <div className="prep-grid">
          {afterSchool.map((item) => (
            <article className="prep-card" key={item}>
              <CheckCircle2 />
              <h3>{item}</h3>
              <p>Steady care.</p>
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
          <p>孩子可以依照學習階段進行課後複習，把課堂中的理解、閱讀與表達練習延伸到日常。</p>
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
          <p className="campus-map-subtitle">親自走進麋爾頓，感受孩子學習、閱讀、表達與成長的空間。</p>
          <strong className="campus-map-english">Begin your child’s learning journey with Milton.</strong>
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
          <p className="map-note">讓孩子在語言中扎根，在探索中成長。<br />Rooted in language. Growing through exploration.</p>
        </div>

        <div className="simple-map distance-map final-map-image-wrap" aria-label="Milton 校區位置地圖">
          <img src="/assets/milton-campus-final-map.png" alt="Milton 校區周邊地圖" />
          <div className="map-kindergarten-marker" aria-label="青園非營利幼兒園位置">
            <strong>青園非營利幼兒園</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <img src="/assets/milton-logo-horizontal-blue.png" alt="Milton Kids Academy" />
      <p>© {new Date().getFullYear()} Milton Kids Academy. All rights reserved.</p>
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
      {route === 'prime' ? <PrimePage /> : route === 'esl' ? <EslPage /> : route === 'afterschool' ? <AfterSchoolPage /> : <HomePage />}
      <Footer />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
