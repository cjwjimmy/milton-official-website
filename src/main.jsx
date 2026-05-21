import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  MessageCircle,
  Sparkles,
  Users,
  Headphones,
  ArrowRight,
  MapPin,
  Phone,
  CheckCircle2,
  School,
  BookOpen,
  Globe2,
  Layers3,
  Compass,
  PenTool,
  Presentation,
  Home,
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
  Microscope,
  BookMarked
} from 'lucide-react';
import './styles.css';

const REVIEW_APP_URL = 'https://milton-vocab-app.vercel.app/';
const LINE_URL = '#';

const philosophies = [
  { title: '看見每個孩子', desc: 'Seen. Supported. Inspired.', icon: Compass },
  { title: '有系統的學習', desc: 'Structured for growth.', icon: Brain },
  { title: '讓英文用出來', desc: 'English in action.', icon: Sparkles }
];

const roadmap = [
  { title: '幼兒美語', subtitle: 'Start with joy.', age: 'Age 4–5', desc: 'English starts here.', icon: Baby },
  { title: '兒童美語', subtitle: 'Build foundations.', age: 'Age 6–12', desc: 'Read. Speak. Grow.', icon: School },
  { title: '進階美語', subtitle: 'Grow with purpose.', age: 'Age 13–15', desc: 'Think. Write. Express.', icon: GraduationCap }
];

const courseTracks = [
  {
    title: 'Prime 活用班',
    headline: '聽・說・讀・寫',
    subtitle: 'Build strong foundations.',
    href: '#/prime',
    visual: 'prime'
  },
  {
    title: 'ESL 實作班',
    headline: '探索・創作・表達',
    subtitle: 'Explore. Create. Present.',
    href: '#/esl',
    visual: 'esl'
  }
];

const materials = [
  { title: 'Oxford University Press', desc: 'Professional Materials' },
  { title: '分級閱讀', desc: 'Reading Journey' },
  { title: '課堂延伸', desc: 'Practice & Review' }
];

const outputMethods = [
  { title: 'Creative Sharing', desc: 'Share ideas.' },
  { title: 'Hands-on Discovery', desc: 'Learn by doing.' },
  { title: 'Presentation Time', desc: 'Speak with confidence.' }
];

const afterSchool = ['作業陪伴', '學習習慣', '素養閱讀', '生活自理', '親師溝通'];

const prepItems = [
  { title: '美語先修', desc: 'English readiness.' },
  { title: '正音先修', desc: 'School readiness.' },
  { title: '數學讀題', desc: 'Thinking skills.' },
  { title: '科技與素養', desc: 'Explore and create.' }
];

const primePhotos = [
  { src: '/assets/class-photo-prime-1.svg', title: '課堂互動與口說練習' },
  { src: '/assets/class-photo-prime-2.svg', title: '閱讀與語感累積' },
  { src: '/assets/class-photo-prime-3.svg', title: '自然發音與拼讀練習' }
];

const eslPhotos = [
  { src: '/assets/class-photo-esl-1.svg', title: '小組討論與合作學習' },
  { src: '/assets/class-photo-esl-2.svg', title: '跨域主題探索' },
  { src: '/assets/class-photo-esl-3.svg', title: '專題成果與發表' }
];

function getRoute() {
  if (window.location.hash === '#/prime') return 'prime';
  if (window.location.hash === '#/esl') return 'esl';
  if (window.location.hash === '#/afterschool') return 'afterschool';
  return 'home';
}

function SoftCard({ icon: Icon, title, desc }) {
  return <article className="soft-feature-card"><Icon /><h3>{title}</h3><p>{desc}</p></article>;
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
    <a className={`track-card track-card-link visual-track-card course-focus-card ${visual === 'esl' ? 'esl-track-card' : 'prime-track-card'}`} href={href} aria-label={`了解 ${title}`}>
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
      <a className="brand" href="#top" aria-label="Milton Home"><img src="/assets/milton-logo-horizontal-blue.png" alt="Milton 麋爾頓美語" /></a>
      <nav>
        <a href="#about">關於 Milton</a>
        <a href="#roadmap">學習路徑</a>
        <a href="#courses">課程架構</a>
        <a href="#/prime">Prime 活用班</a>
        <a href="#/esl">ESL 實作班</a>
        <a href="#/afterschool">課後陪伴</a>
        <a href="#contact">聯絡我們</a>
      </nav>
      <a className="header-cta" href={LINE_URL}>LINE 聯絡我們</a>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual-glow" aria-hidden="true" />
      <div className="hero-orb orb-a" aria-hidden="true" />
      <div className="hero-orb orb-b" aria-hidden="true" />
      <div className="hero-spark spark-a" aria-hidden="true">✦</div>
      <div className="hero-spark spark-b" aria-hidden="true">✦</div>
      <div className="dot-grid" aria-hidden="true" />
      <div className="mascot-stage" tabIndex="0" aria-label="Milton 3D 吉祥物，移到上面會打招呼">
        <div className="hover-greeting" aria-hidden="true"><span className="hover-greeting-hi">Hi,</span><strong className="hover-greeting-title">Welcome to Milton</strong></div>
        <img className="mascot-half" src="/assets/milton-3d-mascot-half-slim.png" alt="Milton 3D 麋鹿吉祥物" />
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
          <h1>在 Milton，<br />孩子用英文探索世界</h1>
          <p>Learn with joy. Grow with confidence.</p>
          <div className="hero-actions"><a className="primary-btn" href="#courses">課程架構 <ArrowRight size={18} /></a><a className="secondary-btn" href={REVIEW_APP_URL}>學生作業系統 <ArrowRight size={18} /></a><a className="accent-btn" href="#contact">預約了解 <ArrowRight size={18} /></a></div>
        </div>
        <HeroVisual />
      </section>

      <section id="about" className="section about-section">
        <div className="soft-section-head"><div className="section-label">Milton Spirit</div><h2>因為喜歡，所以學得更深</h2><p>Joyful learning. Confident growth.</p></div>
        <div className="about-features philosophy-grid">{philosophies.map((item) => <SoftCard key={item.title} {...item} />)}</div>
      </section>

      <section id="courses" className="section courses-section">
        <div className="soft-section-head course-section-head course-title-only"><div className="section-label">Course Pathway</div><h2>兩大課程主軸</h2></div>
        <div className="track-grid">{courseTracks.map((track) => <TrackCard key={track.title} {...track} />)}</div>
      </section>

      <section className="section prep-section">
        <div className="soft-section-head"><div className="section-label">School Readiness</div><h2>小一銜接</h2><p>Ready to grow.</p></div>
        <div className="prep-grid">{prepItems.map((item) => <article className="prep-card" key={item.title}><Home /><h3>{item.title}</h3></article>)}</div>
      </section>

      <ContactSection />
    </>
  );
}

function PhotoGallery({ photos }) {
  return <div className="class-photo-grid">{photos.map((photo) => <figure className="class-photo-card" key={photo.src}><img src={photo.src} alt={photo.title} /><figcaption>{photo.title}<span>可替換成實際上課照片</span></figcaption></figure>)}</div>;
}

function PageHero({ label, title, desc, visual = null, className = '' }) {
  return (
    <section className={`course-page-hero ${visual ? 'has-visual' : ''} ${className}`.trim()}>
      <div className="course-page-hero-copy">
        <div className="section-label">{label}</div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className="course-page-actions"><a className="secondary-btn" href="#courses">回課程架構</a><a className="accent-btn" href="#contact">預約了解 <ArrowRight size={18} /></a></div>
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
      <div className="prime-hero-spark prime-spark-a">✦</div>
      <div className="prime-hero-spark prime-spark-b">✦</div>
      <div className="prime-dot-grid" />
      <div className="prime-transparent-mascot-shell">
        <img className="prime-transparent-mascot" src="/assets/prime-hero-transparent.png" alt="Prime 活用班透明背景 3D mascot" />
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
    { icon: FlaskConical, title: 'Science Inquiry', subtitle: 'Explore · Observe · Discover', className: 'domain-a' },
    { icon: Palette, title: 'Creative Arts', subtitle: 'Imagine · Create · Express', className: 'domain-b' },
    { icon: Landmark, title: 'Global Studies', subtitle: 'Culture · People · Perspectives', className: 'domain-c' },
    { icon: Music4, title: 'Music & Movement', subtitle: 'Rhythm · Voice · Confidence', className: 'domain-d' }
  ];

  return (
    <div className="esl-hero-visual" aria-hidden="true">
      <div className="esl-hero-halo" />
      <div className="prime-hero-orb prime-orb-a" />
      <div className="prime-hero-orb prime-orb-b" />
      <div className="prime-hero-spark prime-spark-a">✦</div>
      <div className="prime-hero-spark prime-spark-b">✦</div>
      <div className="prime-dot-grid" />
      <div className="esl-orbit-line orbit-line-a" />
      <div className="esl-orbit-line orbit-line-b" />
      <div className="esl-mascot-shell">
        <img className="esl-hero-mascot" src="/assets/milton-3d-mascot-clean.png" alt="ESL 實作班 3D 品牌吉祥物" />
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
    { icon: Headphones, title: '聽力理解', short: '逐步聽懂指令、對話與重點字句。', desc: '透過主題情境與課堂互動，讓孩子逐步聽懂課堂指令、對話與重點字句。' },
    { icon: Mic2, title: '口說表達', short: '從句型到對話，建立開口自信。', desc: '從高頻句型到主題式對話，累積敢開口、能回應、能表達的自信。' },
    { icon: BookOpen, title: '自然發音', short: '建立拼讀、讀字與拼字基礎。', desc: '從字母聲音到拼讀規則，協助孩子建立讀字、拼字與閱讀的基礎。' },
    { icon: LibraryBig, title: '漸進閱讀', short: '累積語感，讓閱讀成為能力。', desc: '以分級閱讀與廣泛閱讀累積語感，讓閱讀成為帶得走的能力。' }
  ];
  return (
    <>
      <PageHero
        label="Prime Program"
        title="Prime 活用班"
        desc="Build strong foundations."
        className="prime-page-hero"
        visual={<PrimeHeroVisual />}
      />
      <section className="section course-page-section">
        <div className="soft-section-head">
          <div className="section-label">Learning Goals</div>
          <h2>四大核心能力</h2>
          <p>Build. Practice. Grow.</p>
        </div>
        <div className="page-feature-grid">{abilities.map((item) => <SoftCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />)}</div>
      </section>
      <section className="section reading-section prime-reading-section">
        <div className="reading-panel">
          <div>
            <div className="section-label">Reading Journey</div>
            <h2>閱讀能力</h2>
            <p>Read. Think. Grow.</p>
          </div>
          <div className="reading-keywords"><span>分級閱讀</span><span>廣泛閱讀</span><span>語感累積</span></div>
        </div>
      </section>
      <section className="section course-page-section alt-bg">
        <div className="two-column-content single-column-text">
          <div>
            <div className="section-label">Materials</div>
            <h2>教材與學習架構</h2>
            <p>Professional materials. Clear pathway.</p>
            <ul className="clean-list">
              <li><CheckCircle2 /> Oxford University Press</li>
              <li><CheckCircle2 /> Reading Journey</li>
              <li><CheckCircle2 /> Practice & Review</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section photo-section"><div className="soft-section-head"><div className="section-label">Classroom Moments</div><h2>Classroom Moments</h2><p>Practice in action.</p></div><PhotoGallery photos={primePhotos} /></section>
      <section className="section course-page-section"><div className="reading-panel"><div><div className="section-label">Prime Summary</div><h2>Prime Summary</h2><p>Strong foundations.</p></div><a className="primary-btn" href="#contact">了解報名資訊 <ArrowRight size={18} /></a></div></section>
      <ContactSection />
    </>
  );
}

function EslPage() {
  const features = [
    { icon: Globe2, title: 'Social Science', desc: '用英文探索生活、文化、人文與自然科學主題，讓語言成為理解世界的工具。' },
    { icon: Shapes, title: 'CLIL 精神', desc: '不只學單字文法，而是在知識情境中自然接觸英文、理解英文並使用英文。' },
    { icon: UsersRound, title: '口語與合作', desc: '透過小組討論、任務練習與情境表達，增加孩子開口表達與互動的機會。' },
    { icon: Presentation, title: 'PBL 成果發表', desc: '將輸入的知識轉化成海報、簡報、演示或角色扮演，讓孩子看見自己的學習成果。' }
  ];
  return (
    <>
      <PageHero label="ESL Program" title="ESL 實作班" desc="Explore. Express. Connect." className="esl-page-hero" visual={<EslHeroVisual />} />
      <section className="section course-page-section"><div className="soft-section-head"><div className="section-label">Learning in Action</div><h2>English in Action</h2><p>Think. Create. Share.</p></div><div className="page-feature-grid">{features.map((item) => <SoftCard key={item.title} {...item} />)}</div></section>
      <section className="section course-page-section alt-bg"><div className="monthly-cycle"><div><div className="section-label">Inquiry Cycle</div><h2>Inquiry Cycle</h2><p>Input. Practice. Output.</p></div><div className="cycle-steps"><article><span>01</span><h3>Input 累積</h3><p>Explore ideas.</p></article><article><span>02</span><h3>Practice 演練</h3><p>Practice together.</p></article><article><span>03</span><h3>Output 展現</h3><p>Share with confidence.</p></article></div></div></section>
      <section className="section photo-section"><div className="soft-section-head"><div className="section-label">Classroom Moments</div><h2>Classroom Moments</h2><p>Collaborate. Create. Present.</p></div><PhotoGallery photos={eslPhotos} /></section>
      <section className="section course-page-section"><div className="output-grid">{outputMethods.map((item) => <article className="output-card" key={item.title}><PenTool /><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div></section>
      <section className="section course-page-section"><div className="reading-panel"><div><div className="section-label">ESL Summary</div><h2>ESL Summary</h2><p>English in action.</p></div><a className="primary-btn" href="#contact">了解報名資訊 <ArrowRight size={18} /></a></div></section>
      <ContactSection />
    </>
  );
}


function AfterSchoolPage() {
  return (
    <>
      <PageHero
        label="After School Care"
        title="課後陪伴"
        desc="Support. Routine. Confidence."
        className="after-school-page-hero"
      />
      <section className="section after-school-section">
        <div className="soft-section-head">
          <div className="section-label">Care & Growth</div>
          <h2>陪伴孩子，把每天的學習節奏穩下來</h2>
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
  return <section id="review" className="section review-section"><div className="review-panel"><div><div className="section-label">Student Review Mission</div><h2>Milton Review Mission</h2><p>學生登入班級與姓名後，只會看到老師指定的 Level / Unit 作業。完成聽力拼字練習後，老師可在後台追蹤學習紀錄，讓回家複習更有方向。</p></div><a className="primary-btn" href={REVIEW_APP_URL}>進入學生作業系統 <ArrowRight size={18} /></a></div></section>;
}

function ContactSection() {
  return <section id="contact" className="section contact-section"><div className="soft-section-head compact-head"><div className="section-label">Contact</div><h2>預約了解 Milton</h2><p>Visit Milton.</p></div><div className="contact-grid"><a className="contact-soft-card" href={LINE_URL}><MessageCircle /><h3>LINE 官方帳號</h3><p>點此加入 LINE，詢問課程與試聽資訊。</p></a><div className="contact-soft-card"><Phone /><h3>電話聯絡</h3><p>請填入你的聯絡電話</p></div><div className="contact-soft-card"><MapPin /><h3>教室地址</h3><p>請填入你的教室地址</p></div></div></section>;
}

function Footer() {
  return <footer className="site-footer"><img src="/assets/milton-logo-horizontal-blue.png" alt="Milton 麋爾頓美語" /><p>© {new Date().getFullYear()} Milton Kids Academy 麋爾頓美語. All rights reserved.</p></footer>;
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
  return <main><Header />{route === 'prime' ? <PrimePage /> : route === 'esl' ? <EslPage /> : route === 'afterschool' ? <AfterSchoolPage /> : <HomePage />}<Footer /></main>;
}

createRoot(document.getElementById('root')).render(<App />);
