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
    desc: '英文學習需要穩固基礎。從聽、說、讀、寫，到詞彙與語感的建立，孩子在這裡穩穩扎根。',
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
    desc: '每個孩子都有自己的學習節奏與成長路徑。麋爾頓重視引導孩子主動探索，而不是只接受答案。',
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
    desc: '森林的樹冠向上延伸，就像孩子的能力持續擴展。從語言能力到思考力、表達力與合作力，都在過程中逐漸形成。',
    english: 'Growth happens when learning reaches beyond the classroom.',
    icon: Sparkles,
    methods: ['Voice in the Forest', 'Presentation', 'Collaboration'],
    videos: [
      { label: 'Show & Tell', href: 'https://www.youtube.com/results?search_query=show+and+tell+english+class+kids' },
      { label: 'Integrated Skills Class', href: 'https://www.youtube.com/results?search_query=integrated+english+skills+class+kids' }
    ]
  },
  {
    title: 'Horizons｜世界',
    desc: '學習英文的目的，不只是考試，而是讓孩子能夠理解世界、連結世界，也被世界看見。',
    english: 'Language opens the way to a wider world.',
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
    title: '語言扎根',
    english: 'Language Roots',
    type: '兒童美語 / 自然發音 / 聽說讀寫基礎',
    desc: '孩子的英文能力，需要從穩定的基礎開始。麋爾頓透過聽、說、讀、寫與自然發音訓練，幫助孩子建立正確語感、詞彙力與句型理解，讓英文學習不只是記憶，而是逐步內化成真正能使用的能力。',
    quote: 'Strong roots build confident learners.',
    icon: BookOpen,
    href: '#/prime'
  },
  {
    title: '閱讀路徑',
    english: 'Story Paths',
    type: '閱讀理解 / 故事閱讀 / 英文閱讀能力',
    desc: '閱讀是孩子走進語言世界的重要路徑。透過故事、圖像、情境與引導式提問，孩子不只讀懂英文，更學會理解內容、整理想法，並從故事中培養想像力與思考力。',
    quote: 'Stories open the way to deeper thinking.',
    icon: LibraryBig,
    href: '#/prime'
  },
  {
    title: '口說表達',
    english: 'Voice in the Forest',
    type: '英文會話 / 口說練習 / 發表能力',
    desc: '英文學習的目的，不只是聽得懂、看得懂，更要能勇敢表達。麋爾頓透過日常對話、主題討論、句型應用與發表練習，幫助孩子建立開口的自信，讓英文成為能自然使用的溝通工具。',
    quote: 'A confident voice grows through practice.',
    icon: Mic2,
    href: '#/prime'
  },
  {
    title: '主題探索',
    english: 'Discovery Missions',
    type: '主題課程 / 科學探索 / 營隊活動 / Project-based learning',
    desc: '孩子的好奇心，是學習最好的起點。麋爾頓透過主題式探索、跨領域活動與任務挑戰，讓孩子在真實情境中使用英文，培養觀察力、合作力、思考力與解決問題的能力。',
    quote: 'Curiosity leads every mission.',
    icon: Compass,
    href: '#/esl'
  },
  {
    title: '課後照顧與學習陪伴',
    english: 'Daily Growth Journey',
    type: '課後輔導 / 作業陪伴 / 學習習慣',
    desc: '穩定的成長，來自每天被看見與被陪伴。麋爾頓在課後時段提供有秩序、有溫度的學習支持，協助孩子完成學校任務、建立時間感與學習習慣，讓每一天都成為向前的一小步。',
    quote: 'Small steps shape lasting growth.',
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
  const [activePath, setActivePath] = useState(0);
  const active = learningPathways[activePath];
  const ActiveIcon = active.icon;

  return (
    <div className="forest-course-map">
      <div className="forest-trail-list" aria-label="Milton learning pathways">
        {learningPathways.map(({ icon: Icon, title, english }, index) => (
          <button
            className={`forest-trail-point ${activePath === index ? 'active' : ''}`}
            type="button"
            key={title}
            onClick={() => setActivePath(index)}
            aria-pressed={activePath === index}
          >
            <span className="trail-number">{String(index + 1).padStart(2, '0')}</span>
            <Icon />
            <span>
              <strong>{english}</strong>
              <em>{title}</em>
            </span>
          </button>
        ))}
      </div>

      <article className="forest-pathway-detail">
        <div className="pathway-detail-icon"><ActiveIcon /></div>
        <div>
          <div className="pathway-eyebrow">{active.type}</div>
          <h3>{active.english}<span>{active.title}</span></h3>
          <p>{active.desc}</p>
          <strong>{active.quote}</strong>
          <a href={active.href}>查看相關課程<ArrowRight size={16} /></a>
        </div>
      </article>
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

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Milton 首頁">
        <img src="/assets/milton-logo-horizontal-blue.png" alt="Milton Kids Academy" />
      </a>
      <nav>
        <a href="#about">關於 Milton</a>
        <a href="#roadmap">學習路徑</a>
        <a href="#courses">課程</a>
        <a href="#/prime">Prime</a>
        <a href="#/esl">ESL</a>
        <a href="#/afterschool">課後照顧</a>
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
        <span>Milton Exploration Forest</span>
        <strong>Rooted in language.<br />Growing through exploration.</strong>
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
          <div className="section-kicker"><span className="kicker-line" /><span>麋爾頓探索森林 Milton Exploration Forest</span><span className="kicker-line" /></div>
          <h1><span>走進探索森林</span><span>走向更大的世界</span></h1>
          <p>在麋爾頓，英文不只是學科，而是一段孩子透過語言、探索與表達，逐步建立自信與國際視野的成長旅程。</p>
          <div className="hero-english-line">Step into the forest. Grow into the world.</div>
          <div className="hero-forest-actions">
            <a className="forest-primary-link" href="#contact">預約參觀麋爾頓探索森林<ArrowRight size={18} /></a>
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
          <div className="section-label">Milton Exploration Forest</div>
          <h2>麋爾頓探索森林</h2>
          <p>Learning is a journey of exploration. Language opens the way to a wider world.</p>
        </div>
        <div className="brand-story-content">
          <p>在麋爾頓，我們相信，孩子的學習不應只是被動接受知識，而是一段在陪伴與引導中，逐步發現世界的歷程。</p>
          <p>因此，我們將麋爾頓打造為一座探索森林。</p>
          <p>森林，象徵成長。每一棵樹的扎根，都來自時間與累積；每一道光的穿透，都來自理解與啟發；每一條路的延伸，都帶領孩子走向更寬廣的世界。</p>
          <p>在這座森林裡，英文不只是學科，而是孩子認識世界、理解自己、建立表達力與思考力的重要工具。</p>
          <p>麋爾頓希望提供孩子一個溫暖而有方向的學習環境，讓他們在探索中建立能力，在語言中培養自信，並在一次次的學習旅程中，穩定成長，向世界前進。</p>
        </div>
      </section>

      <SpacePreviewSection />

      <section className="section forest-pillars-section">
        <div className="soft-section-head">
          <div className="section-label">Forest Framework</div>
          <h2>四個核心支柱，陪孩子在森林中穩定成長</h2>
          <p>Rooted in language. Growing through exploration.</p>
        </div>
        <PhilosophyPrinciples />
      </section>

      <CampusLifeSection />

      <section className="section parent-promise-section">
        <div className="soft-section-head">
          <div className="section-label">For Parents</div>
          <h2>家長放心的學習安排，孩子有感的成長節奏</h2>
          <p>Milton 重視孩子的美語能力、學習習慣與自信表達，也重視與家長清楚溝通。</p>
        </div>
        <div className="parent-promise-grid">
          {parentPromises.map((item, index) => (
            <article className="parent-promise-card" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="roadmap" className="section roadmap-section">
        <div className="soft-section-head">
          <div className="section-label">Learning Roadmap</div>
          <h2>依照年齡與能力，安排剛剛好的美語路徑</h2>
          <p>Start with joy. Build with structure. Speak with confidence.</p>
        </div>
        <div className="roadmap-grid">
          {roadmap.map(({ icon: Icon, title, course, subtitle, age, desc }) => (
            <article className="soft-feature-card" key={title}>
              <Icon />
              <h3 className="roadmap-title-row"><span>{title}</span><strong>{age}</strong></h3>
              <div className="roadmap-course-name">{course}</div>
              <p>{subtitle}：{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="courses" className="section courses-section">
        <div className="soft-section-head course-section-head">
          <div className="section-label">Learning Pathways in Milton Exploration Forest</div>
          <h2>探索森林中的學習路徑</h2>
          <p>每個孩子都有自己的學習節奏。麋爾頓透過系統化的英文課程、閱讀引導、口說表達與主題探索，陪伴孩子從基礎扎根到自信表達，逐步走向更寬廣的世界。</p>
          <div className="course-section-english">Every pathway is designed for growth, confidence, and discovery.</div>
        </div>
        <CoursePathways />
        <div className="forest-course-cta">
          <p>每一條學習路徑，都是孩子走向世界的一步。歡迎預約參觀麋爾頓探索森林，了解最適合孩子的英文成長方式。</p>
          <span>Begin your child’s learning journey with Milton.</span>
          <a className="forest-primary-link" href={LINE_URL} target="_blank" rel="noreferrer">預約參觀麋爾頓探索森林<ArrowRight size={18} /></a>
        </div>
      </section>

      <GrowthEvidenceSection />

      <section className="section prep-section">
        <div className="soft-section-head">
          <div className="section-label">School Readiness</div>
          <h2>美語課之外，也照顧孩子的學習銜接</h2>
          <p>Ready to grow.</p>
        </div>
        <div className="prep-grid">
          {prepItems.map(({ icon: Icon, title, desc }) => (
            <article className="prep-card" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <ReviewSection />
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
  return (
    <section className="section space-preview-section">
      <div className="space-preview-head">
        <div className="section-label">Step Into Milton Exploration Forest</div>
        <h2>走進麋爾頓探索森林</h2>
        <p>探索森林，不只是麋爾頓的品牌概念，也是孩子每天走進的學習空間。新點 1 樓以自然光感、森林意象與溫暖材質為設計核心，讓孩子在安全、舒適、有啟發性的環境中學習、閱讀、表達與探索。</p>
        <strong>A learning space designed for growth, confidence, and discovery.</strong>
      </div>

      <div className="space-preview-gallery">
        {spacePreviewPhotos.map((photo, index) => (
          <figure className={`space-preview-image ${index === 0 ? 'main-space' : 'support-space'}`} key={photo.src}>
            <img
              src={photo.src}
              alt="麋爾頓探索森林新點一樓學習空間 3D 示意圖"
              loading="lazy"
            />
            <figcaption>
              <span>{photo.title}</span>
              <strong>{photo.english}</strong>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="space-preview-cta">
        <p>歡迎預約參觀，親自走進麋爾頓探索森林。</p>
        <span>Visit Milton and experience the learning forest in person.</span>
        <a className="forest-primary-link" href={LINE_URL} target="_blank" rel="noreferrer">預約參觀新點空間<ArrowRight size={18} /></a>
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
  const abilities = [
    { icon: Volume2, title: 'Listening' },
    { icon: Mic2, title: 'Speaking' },
    { icon: BookOpen, title: 'Reading' },
    { icon: Pencil, title: 'Writing' }
  ];
  return (
    <div className="prime-hero-visual prime-hero-transparent-visual" aria-hidden="true">
      <div className="prime-hero-halo" />
      <div className="prime-hero-orb prime-orb-a" />
      <div className="prime-hero-orb prime-orb-b" />
      <div className="prime-hero-spark prime-spark-a">*</div>
      <div className="prime-hero-spark prime-spark-b">*</div>
      <div className="prime-dot-grid" />
      <div className="prime-transparent-mascot-shell">
        <img className="prime-transparent-mascot" src="/assets/prime-hero-transparent.png" alt="Prime program visual" />
      </div>
      {abilities.map(({ icon: Icon, title }, index) => (
        <div className={`prime-floating-skill skill-${index + 1}`} key={title}>
          <Icon size={18} />
          <span>{title}</span>
        </div>
      ))}
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
      <div className="soft-section-head compact-head">
        <div className="section-label">Contact</div>
        <h2>預約孩子的學習旅程</h2>
        <p>Begin your child’s learning journey with Milton.</p>
      </div>

      <div className="contact-grid">
        <a className="contact-soft-card" href={LINE_URL} target="_blank" rel="noreferrer">
          <MessageCircle />
          <h3>預約參觀麋爾頓探索森林</h3>
          <p>加入官方 LINE，預約參觀、試聽與孩子的學習路徑諮詢。</p>
        </a>
        <div className="contact-soft-card">
          <Phone />
          <h3>03-2878335</h3>
          <p>歡迎來電洽詢課程、校區與試聽資訊。</p>
        </div>
        <div className="contact-soft-card">
          <MapPin />
          <h3>青園校｜青園二校</h3>
          <p>青園校：桃園市大園區大勇路26號<br />青園二校：桃園市中壢區高鐵北路二段95號</p>
        </div>
      </div>

      <div className="location-map-panel distance-map-panel">
        <div className="location-map-copy">
          <div className="section-label">Campus Map</div>
          <h2>鄰近青園國小與青園非營利幼兒園，接送安心更便利</h2>
          <div className="distance-list">
            <div><strong>青園校</strong><span>桃園市大園區大勇路26號</span></div>
            <div><strong>青園二校</strong><span>桃園市中壢區高鐵北路二段95號</span></div>
          </div>
          <p className="map-note">地圖標示以實際路線與現場環境為準，歡迎透過 LINE 詢問到班、參觀與接送細節。</p>
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
