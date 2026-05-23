import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  MessageCircle,
  Sparkles,
  Headphones,
  ArrowRight,
  MapPin,
  Phone,
  CheckCircle2,
  School,
  BookOpen,
  Globe2,
  Compass,
  PenTool,
  Presentation,
  Brain,
  Baby,
  GraduationCap,
  Mic2,
  LibraryBig,
  Shapes,
  UsersRound,
  FlaskConical,
  Palette,
  Landmark,
  Music4,
  Volume2,
  Pencil,
  Brush,
  Microscope
} from 'lucide-react';
import './styles.css';

const REVIEW_APP_URL = 'https://milton-vocab-app.vercel.app/';
const LINE_URL = 'https://lin.ee/q0YfnGm';

const philosophies = [
  { title: '看見每個孩子', desc: '用溫暖陪伴孩子建立安全感，讓學習從願意開口開始。', icon: Compass },
  { title: '有系統地成長', desc: '依照年齡與能力規劃課程，讓孩子一步步累積英語力。', icon: Brain },
  { title: '把英文用出來', desc: '透過聽說讀寫、討論與發表，把英文變成可使用的能力。', icon: Sparkles }
];

const roadmap = [
  { title: '幼兒啟蒙', subtitle: '從興趣開始', age: 'Age 4+', desc: '歌曲、繪本、遊戲與情境活動，建立自然語感。', icon: Baby },
  { title: '國小基礎', subtitle: '穩定累積能力', age: 'Age 6-12', desc: '聽說讀寫並進，銜接學校與檢定需求。', icon: School },
  { title: '國中進階', subtitle: '表達與思考升級', age: 'Age 13-15', desc: '強化閱讀理解、寫作架構與口語表達。', icon: GraduationCap }
];

const courseTracks = [
  {
    title: 'Prime 基礎英語',
    headline: '聽說讀寫一起打底',
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
  { title: '分級閱讀', desc: 'Reading Journey' },
  { title: '單字複習任務', desc: 'Practice & Review' }
];

const outputMethods = [
  { title: 'Creative Sharing', desc: '用英文分享想法與作品。', icon: PenTool },
  { title: 'Hands-on Discovery', desc: '在操作與觀察中理解主題。', icon: Microscope },
  { title: 'Presentation Time', desc: '練習清楚、自信地表達。', icon: Presentation }
];

const afterSchool = ['學校作業陪伴', '英文複習安排', '閱讀習慣建立', '生活常規養成', '安心接送銜接'];

const prepItems = [
  { title: '英文準備', desc: '建立聽說讀寫基礎。', icon: BookOpen },
  { title: '學校銜接', desc: '協助孩子適應課業節奏。', icon: School },
  { title: '思考表達', desc: '練習整理想法與清楚說明。', icon: Brain },
  { title: '探索創作', desc: '透過主題活動延伸學習。', icon: Palette }
];

const primePhotos = [
  { src: '/assets/class-photo-prime-1.svg', title: '字母與自然發音練習' },
  { src: '/assets/class-photo-prime-2.svg', title: '分級閱讀與句型操作' },
  { src: '/assets/class-photo-prime-3.svg', title: '聽說讀寫整合活動' }
];

const eslPhotos = [
  { src: '/assets/class-photo-esl-1.svg', title: '主題探索與觀察紀錄' },
  { src: '/assets/class-photo-esl-2.svg', title: '小組合作與英文討論' },
  { src: '/assets/class-photo-esl-3.svg', title: '作品發表與自信表達' }
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
        <img src="/assets/milton-logo-horizontal-blue.png" alt="Milton 麋爾頓美語" />
      </a>
      <nav>
        <a href="#about">關於 Milton</a>
        <a href="#roadmap">學習路線</a>
        <a href="#courses">課程介紹</a>
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
      <div className="mascot-stage" tabIndex="0" aria-label="Milton 3D 吉祥物">
        <div className="hover-greeting" aria-hidden="true">
          <span className="hover-greeting-hi">Hi,</span>
          <strong className="hover-greeting-title">Welcome to Milton</strong>
        </div>
        <img className="mascot-half" src="/assets/milton-3d-mascot-half-slim.png" alt="Milton 3D 吉祥物" />
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
          <h1>Milton 麋爾頓美語<br />讓孩子自信開口</h1>
          <p>從幼兒啟蒙到國中進階，透過有系統的英語課程、主題探索與課後陪伴，讓孩子在穩定節奏中累積真正能使用的英文能力。</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#courses">看課程 <ArrowRight size={18} /></a>
            <a className="secondary-btn" href={REVIEW_APP_URL} target="_blank" rel="noreferrer">單字複習任務 <ArrowRight size={18} /></a>
            <a className="accent-btn" href="#contact">預約諮詢 <ArrowRight size={18} /></a>
          </div>
        </div>
        <HeroVisual />
      </section>

      <section id="about" className="section about-section">
        <div className="soft-section-head">
          <div className="section-label">Milton Spirit</div>
          <h2>用溫暖陪伴，讓英文成為孩子的能力</h2>
          <p>Joyful learning. Confident growth.</p>
        </div>
        <div className="about-features philosophy-grid">{philosophies.map((item) => <SoftCard key={item.title} {...item} />)}</div>
      </section>

      <section id="roadmap" className="section roadmap-section">
        <div className="soft-section-head">
          <div className="section-label">Learning Roadmap</div>
          <h2>依照年齡與能力安排學習路線</h2>
          <p>Start with joy. Build with structure. Speak with confidence.</p>
        </div>
        <div className="roadmap-grid">
          {roadmap.map(({ icon: Icon, title, subtitle, age, desc }) => (
            <article className="soft-feature-card" key={title}>
              <Icon />
              <h3>{title}</h3>
              <strong>{age}</strong>
              <p>{subtitle}。{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="courses" className="section courses-section">
        <div className="soft-section-head course-section-head course-title-only">
          <div className="section-label">Course Pathway</div>
          <h2>兩大主軸，建立英語力與表達力</h2>
        </div>
        <div className="track-grid">{courseTracks.map((track) => <TrackCard key={track.title} {...track} />)}</div>
      </section>

      <section className="section prep-section">
        <div className="soft-section-head">
          <div className="section-label">School Readiness</div>
          <h2>課程之外，也照顧孩子的學習節奏</h2>
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
          <a className="secondary-btn" href="#courses">返回課程</a>
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
        <img className="prime-transparent-mascot" src="/assets/prime-hero-transparent.png" alt="Prime 課程視覺" />
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
        <img className="esl-hero-mascot" src="/assets/milton-3d-mascot-clean.png" alt="ESL 課程視覺" />
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
    { icon: Headphones, title: '聽力理解', desc: '從聲音辨識、關鍵字理解到情境聽力，讓孩子聽得懂也跟得上。' },
    { icon: Mic2, title: '口語表達', desc: '透過句型替換、角色扮演與課堂問答，建立敢說與能說的能力。' },
    { icon: BookOpen, title: '閱讀能力', desc: '搭配分級閱讀與主題文章，累積字彙、句型與理解策略。' },
    { icon: LibraryBig, title: '書寫基礎', desc: '從單字、句子到段落，逐步建立清楚完整的英文書寫。' }
  ];
  return (
    <>
      <PageHero
        label="Prime Program"
        title="Prime 基礎英語"
        desc="以聽說讀寫四大能力為核心，幫助孩子建立穩固的英文基礎。"
        className="prime-page-hero"
        visual={<PrimeHeroVisual />}
      />
      <section className="section course-page-section">
        <div className="soft-section-head">
          <div className="section-label">Learning Goals</div>
          <h2>四大能力循序累積</h2>
          <p>Build. Practice. Grow.</p>
        </div>
        <div className="page-feature-grid">{abilities.map((item) => <SoftCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />)}</div>
      </section>
      <section className="section reading-section prime-reading-section">
        <div className="reading-panel">
          <div>
            <div className="section-label">Reading Journey</div>
            <h2>從分級閱讀培養長期語感</h2>
            <p>Read. Think. Grow.</p>
          </div>
          <div className="reading-keywords"><span>分級閱讀</span><span>單字句型</span><span>閱讀理解</span></div>
        </div>
      </section>
      <section className="section course-page-section alt-bg">
        <div className="two-column-content single-column-text">
          <div>
            <div className="section-label">Materials</div>
            <h2>教材與練習清楚銜接</h2>
            <p>Professional materials. Clear pathway.</p>
            <ul className="clean-list">
              {materials.map((item) => <li key={item.title}><CheckCircle2 /> {item.title} - {item.desc}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="section photo-section">
        <div className="soft-section-head"><div className="section-label">Classroom Moments</div><h2>課堂學習片段</h2><p>Practice in action.</p></div>
        <PhotoGallery photos={primePhotos} />
      </section>
      <section className="section course-page-section">
        <div className="reading-panel">
          <div><div className="section-label">Prime Summary</div><h2>適合想穩固打底的孩子</h2><p>Strong foundations.</p></div>
          <a className="primary-btn" href="#contact">預約課程諮詢 <ArrowRight size={18} /></a>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

function EslPage() {
  const features = [
    { icon: Globe2, title: '跨領域主題', desc: '結合自然、藝術、文化與生活議題，讓英文學習更有情境。' },
    { icon: Shapes, title: 'CLIL 學習', desc: '用英文學內容，也用內容帶出英文，提升理解與應用能力。' },
    { icon: UsersRound, title: '合作討論', desc: '透過小組任務練習傾聽、提問、整理與分享。' },
    { icon: Presentation, title: 'PBL 發表', desc: '以作品或專題作為成果，讓孩子練習清楚表達。' }
  ];
  return (
    <>
      <PageHero label="ESL Program" title="ESL 主題探索" desc="用英文探索世界，透過主題任務培養理解、創造與表達力。" className="esl-page-hero" visual={<EslHeroVisual />} />
      <section className="section course-page-section">
        <div className="soft-section-head"><div className="section-label">Learning in Action</div><h2>讓英文在真實任務中被使用</h2><p>Think. Create. Share.</p></div>
        <div className="page-feature-grid">{features.map((item) => <SoftCard key={item.title} {...item} />)}</div>
      </section>
      <section className="section course-page-section alt-bg">
        <div className="monthly-cycle">
          <div><div className="section-label">Inquiry Cycle</div><h2>探索式學習循環</h2><p>Input. Practice. Output.</p></div>
          <div className="cycle-steps">
            <article><span>01</span><h3>Input 輸入</h3><p>閱讀、影片與教師引導建立背景知識。</p></article>
            <article><span>02</span><h3>Practice 練習</h3><p>透過任務與討論練習語言使用。</p></article>
            <article><span>03</span><h3>Output 輸出</h3><p>用作品、口說或簡報呈現學習成果。</p></article>
          </div>
        </div>
      </section>
      <section className="section photo-section">
        <div className="soft-section-head"><div className="section-label">Classroom Moments</div><h2>課堂探索片段</h2><p>Collaborate. Create. Present.</p></div>
        <PhotoGallery photos={eslPhotos} />
      </section>
      <section className="section course-page-section">
        <div className="output-grid">{outputMethods.map(({ icon: Icon, title, desc }) => <article className="output-card" key={title}><Icon /><h3>{title}</h3><p>{desc}</p></article>)}</div>
      </section>
      <section className="section course-page-section">
        <div className="reading-panel">
          <div><div className="section-label">ESL Summary</div><h2>適合喜歡探索與表達的孩子</h2><p>English in action.</p></div>
          <a className="primary-btn" href="#contact">預約課程諮詢 <ArrowRight size={18} /></a>
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
        desc="放學後的安心陪伴，協助孩子完成作業、複習英文並建立穩定生活節奏。"
        className="after-school-page-hero"
      />
      <section className="section after-school-section">
        <div className="soft-section-head">
          <div className="section-label">Care & Growth</div>
          <h2>照顧孩子，也照顧學習習慣</h2>
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
          <p>透過線上單字複習任務，孩子可以依照 Level / Unit 進行練習，讓課堂內容回到日常複習中，持續累積記憶與熟練度。</p>
        </div>
        <a className="primary-btn" href={REVIEW_APP_URL} target="_blank" rel="noreferrer">進入複習任務 <ArrowRight size={18} /></a>
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
          <p>加入 LINE 預約諮詢與詢問課程。</p>
        </a>
        <div className="contact-soft-card">
          <Phone />
          <h3>03-2878335</h3>
          <p>歡迎來電洽詢。</p>
        </div>
        <div className="contact-soft-card">
          <MapPin />
          <h3>校區位置</h3>
          <p>鄰近青埔國小、青埔國中，交通與接送便利。</p>
        </div>
      </div>

      <div className="location-map-panel distance-map-panel">
        <div className="location-map-copy">
          <div className="section-label">Campus Map</div>
          <h2>鄰近學校與校區位置</h2>
          <div className="distance-list">
            <div><strong>青埔國小</strong><span>步行約 260 公尺</span></div>
            <div><strong>青埔國中</strong><span>步行約 350 公尺</span></div>
          </div>
          <p className="map-note">地圖標示為校區與鄰近學校相對位置，實際路線可依現場交通狀況調整。</p>
        </div>

        <div className="simple-map distance-map final-map-image-wrap" aria-label="Milton 校區位置地圖">
          <img src="/assets/milton-campus-final-map.png" alt="Milton 校區與鄰近學校位置地圖" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <img src="/assets/milton-logo-horizontal-blue.png" alt="Milton 麋爾頓美語" />
      <p>© {new Date().getFullYear()} Milton Kids Academy 麋爾頓美語. All rights reserved.</p>
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
