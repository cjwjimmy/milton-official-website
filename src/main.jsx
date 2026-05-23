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

const heroHighlights = ['小班精緻教學', 'Prime 基礎英語 + ESL 主題探索', '鄰近青埔國小與青埔國中'];

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
  { title: '快樂學習', desc: '用溫暖互動與可完成的任務，讓孩子願意靠近英文。', icon: Compass },
  { title: '穩定累積', desc: '循序練習發音、單字、閱讀與表達，把能力一層一層建起來。', icon: Brain },
  { title: '自信輸出', desc: '透過分享、簡報與主題活動，讓孩子把英文用出來。', icon: Sparkles }
];

const roadmap = [
  { title: '幼兒啟蒙', subtitle: '聽覺、口說與自然語感', age: 'Age 4+', desc: '用歌曲、故事與遊戲建立英文親近感。', icon: Baby },
  { title: '國小基礎', subtitle: 'Prime 系統英語訓練', age: 'Age 6-12', desc: '強化單字、閱讀、句型與書寫表達。', icon: School },
  { title: '國中銜接', subtitle: '閱讀理解與學科表達', age: 'Age 13-15', desc: '提升理解力、輸出力與學校課業銜接。', icon: GraduationCap }
];

const courseTracks = [
  {
    title: 'Prime 基礎英語',
    headline: '扎實建立聽說讀寫',
    subtitle: 'Build strong foundations.',
    href: '#/prime',
    visual: 'prime'
  },
  {
    title: 'ESL 主題探索',
    headline: '用英文探索世界',
    subtitle: 'Explore. Create. Present.',
    href: '#/esl',
    visual: 'esl'
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
  { title: 'Presentation Time', desc: '練習站上台，用英文說出自己的想法。', icon: Presentation }
];

const afterSchool = ['作業陪伴', '英文複習', '學校進度銜接', '生活常規建立'];

const prepItems = [
  { title: '閱讀力', desc: '從短文理解到分級閱讀，累積穩定語感。', icon: BookOpen },
  { title: '學校銜接', desc: '協助孩子跟上校內進度，也保留英文加深練習。', icon: School },
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
  { src: '/assets/class-photo-esl-3.svg', title: '英文發表與團隊合作' }
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
    <div className="hero-visual">
      <div className="hero-visual-glow" aria-hidden="true" />
      <div className="hero-orb orb-a" aria-hidden="true" />
      <div className="hero-orb orb-b" aria-hidden="true" />
      <div className="hero-spark spark-a" aria-hidden="true">*</div>
      <div className="hero-spark spark-b" aria-hidden="true">*</div>
      <div className="dot-grid" aria-hidden="true" />
      <div className="mascot-stage" tabIndex="0" aria-label="Milton 3D mascot">
        <div className="hover-greeting" aria-hidden="true">
          <span className="hover-greeting-hi">Hi,</span>
          <strong className="hover-greeting-title">Welcome to Milton</strong>
        </div>
        <img className="mascot-half" src="/assets/milton-3d-mascot-half-slim.png" alt="Milton mascot" />
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
          <div className="section-kicker"><span className="kicker-line" /><span>Grow with confidence. Learn with joy.</span><span className="kicker-line" /></div>
          <h1>Milton 麋爾頓美語<br />Kids Academy</h1>
          <p>青埔英語學習中心，從幼兒啟蒙、國小英語到國中銜接，Milton 用溫暖的小班教學與清楚的課程路徑，陪孩子建立英文能力與表達自信。</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#courses">探索課程<ArrowRight size={18} /></a>
            <a className="secondary-btn" href={REVIEW_APP_URL} target="_blank" rel="noreferrer">單字複習系統 <ArrowRight size={18} /></a>
            <a className="accent-btn" href="#contact">預約諮詢 <ArrowRight size={18} /></a>
          </div>
          <div className="hero-highlight-list" aria-label="Milton 特色">
            {heroHighlights.map((item) => (
              <span key={item}><CheckCircle2 size={18} />{item}</span>
            ))}
          </div>
        </div>
        <HeroVisual />
      </section>

      <section className="home-proof-strip" aria-label="Milton 學習指標">
        {trustMetrics.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section id="about" className="section about-section">
        <div className="soft-section-head">
          <div className="section-label">Milton Spirit</div>
          <h2>讓孩子喜歡英文，也把能力真正帶得走</h2>
          <p>Joyful learning. Confident growth.</p>
        </div>
        <div className="about-features philosophy-grid">{philosophies.map((item) => <SoftCard key={item.title} {...item} />)}</div>
      </section>

      <section className="section parent-promise-section">
        <div className="soft-section-head">
          <div className="section-label">For Parents</div>
          <h2>家長放心的學習安排，孩子有感的成長節奏</h2>
          <p>Milton 重視孩子的英文能力、學習習慣與自信表達，也重視與家長清楚溝通。</p>
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
          <h2>依照年齡與能力，安排剛剛好的英文路徑</h2>
          <p>Start with joy. Build with structure. Speak with confidence.</p>
        </div>
        <div className="roadmap-grid">
          {roadmap.map(({ icon: Icon, title, subtitle, age, desc }) => (
            <article className="soft-feature-card" key={title}>
              <Icon />
              <h3>{title}</h3>
              <strong>{age}</strong>
              <p>{subtitle}：{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="courses" className="section courses-section">
        <div className="soft-section-head course-section-head course-title-only">
          <div className="section-label">Course Pathway</div>
          <h2>兩大課程主軸，建立英文基礎與跨領域表達</h2>
        </div>
        <div className="track-grid">{courseTracks.map((track) => <TrackCard key={track.title} {...track} />)}</div>
      </section>

      <section className="section prep-section">
        <div className="soft-section-head">
          <div className="section-label">School Readiness</div>
          <h2>英文課之外，也照顧孩子的學習銜接</h2>
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
    { icon: Headphones, title: '聽力理解', desc: '從聲音辨識、自然語調到短文理解，建立穩定的英文輸入。' },
    { icon: Mic2, title: '口說表達', desc: '透過句型替換、情境問答與短講，讓孩子敢開口。' },
    { icon: BookOpen, title: '閱讀能力', desc: '從自然發音到分級閱讀，培養理解文章的能力。' },
    { icon: LibraryBig, title: '字彙句型', desc: '用規律複習和任務練習，把單字與句型真正留住。' }
  ];
  return (
    <>
      <PageHero
        label="Prime Program"
        title="Prime 基礎英語"
        desc="Prime 以聽、說、讀、寫為核心，適合正在建立英文基礎的孩子，讓學習有方向也有成就感。"
        className="prime-page-hero"
        visual={<PrimeHeroVisual />}
      />
      <section className="section course-page-section">
        <div className="soft-section-head">
          <div className="section-label">Learning Goals</div>
          <h2>把英文基本功練穩，孩子才有自信往前走</h2>
          <p>Build. Practice. Grow.</p>
        </div>
        <div className="page-feature-grid">{abilities.map((item) => <SoftCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />)}</div>
      </section>
      <section className="section reading-section prime-reading-section">
        <div className="reading-panel">
          <div>
            <div className="section-label">Reading Journey</div>
            <h2>用分級閱讀養成英文理解力</h2>
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
    { icon: Globe2, title: '主題式學習', desc: '以科學、文化、藝術與生活主題延伸英文使用情境。' },
    { icon: Shapes, title: 'CLIL 課程', desc: '把英文和內容學習結合，讓孩子用英文理解世界。' },
    { icon: UsersRound, title: '合作討論', desc: '透過小組任務練習聆聽、回應與表達想法。' },
    { icon: Presentation, title: 'PBL 發表', desc: '用作品與簡報呈現學習成果，培養台風與自信。' }
  ];
  return (
    <>
      <PageHero label="ESL Program" title="ESL 主題探索" desc="ESL 讓孩子在跨領域主題中使用英文，從理解、討論到創作發表，把英文變成真正的工具。" className="esl-page-hero" visual={<EslHeroVisual />} />
      <section className="section course-page-section">
        <div className="soft-section-head"><div className="section-label">Learning in Action</div><h2>在有內容的活動裡，自然練習英文輸出</h2><p>Think. Create. Share.</p></div>
        <div className="page-feature-grid">{features.map((item) => <SoftCard key={item.title} {...item} />)}</div>
      </section>
      <section className="section course-page-section alt-bg">
        <div className="monthly-cycle">
          <div><div className="section-label">Inquiry Cycle</div><h2>每個主題都有清楚的學習循環</h2><p>Input. Practice. Output.</p></div>
          <div className="cycle-steps">
            <article><span>01</span><h3>Input 輸入</h3><p>透過閱讀、影片、圖片與教師引導建立主題背景。</p></article>
            <article><span>02</span><h3>Practice 練習</h3><p>用句型、討論與任務練習把英文說出來。</p></article>
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
          <div><div className="section-label">ESL Summary</div><h2>用英文探索，也用英文表達</h2><p>English in action.</p></div>
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
        desc="放學後的時間也很重要。Milton 協助孩子完成作業、複習英文、建立穩定的學習與生活節奏。"
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
          <div className="section-label">Student Review Mission</div>
          <h2>Milton Review Mission</h2>
          <p>孩子可以依照 Level / Unit 進行單字與句型複習，把課堂內容帶回家持續練習。</p>
        </div>
        <a className="primary-btn" href={REVIEW_APP_URL} target="_blank" rel="noreferrer">進入複習系統 <ArrowRight size={18} /></a>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="soft-section-head compact-head">
        <div className="section-label">Contact</div>
        <h2>歡迎預約諮詢 Milton</h2>
        <p>Visit Milton.</p>
      </div>

      <div className="contact-grid">
        <a className="contact-soft-card" href={LINE_URL} target="_blank" rel="noreferrer">
          <MessageCircle />
          <h3>LINE 官方帳號</h3>
          <p>加入 LINE 預約諮詢，了解適合孩子的課程安排。</p>
        </a>
        <div className="contact-soft-card">
          <Phone />
          <h3>03-2878335</h3>
          <p>歡迎來電洽詢課程與試聽資訊。</p>
        </div>
        <div className="contact-soft-card">
          <MapPin />
          <h3>桃園市青埔地區</h3>
          <p>鄰近青埔國小與青埔國中，接送與課後安排更便利。</p>
        </div>
      </div>

      <div className="location-map-panel distance-map-panel">
        <div className="location-map-copy">
          <div className="section-label">Campus Map</div>
          <h2>青埔校區位置與周邊距離</h2>
          <div className="distance-list">
            <div><strong>青埔國小</strong><span>步行約 260 公尺</span></div>
            <div><strong>青埔國中</strong><span>步行約 350 公尺</span></div>
          </div>
          <p className="map-note">地圖標示以實際路線與現場環境為準，歡迎透過 LINE 詢問到班與接送細節。</p>
        </div>

        <div className="simple-map distance-map final-map-image-wrap" aria-label="Milton 校區位置地圖">
          <img src="/assets/milton-campus-final-map.png" alt="Milton 校區周邊地圖" />
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
