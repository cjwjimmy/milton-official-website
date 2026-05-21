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
  Music4
} from 'lucide-react';
import './styles.css';

const REVIEW_APP_URL = 'https://milton-vocab-app.vercel.app/';
const LINE_URL = '#';

const philosophies = [
  { title: '看見每個孩子', desc: '在適合的節奏裡，建立自信與好奇。', icon: Compass },
  { title: '讓學習有方向', desc: '有系統，也有溫度。', icon: Brain },
  { title: '把英文用出來', desc: '在互動、閱讀與探索中自然累積。', icon: Sparkles }
];

const roadmap = [
  { title: '幼兒美語', subtitle: 'Start with joy.', age: 'Age 4–5', desc: '用歌曲、故事與遊戲，開啟英文好感。', icon: Baby },
  { title: '兒童美語', subtitle: 'Build strong foundations.', age: 'Age 6–12', desc: '從聽說讀寫到閱讀表達，穩定累積能力。', icon: School },
  { title: '進階美語', subtitle: 'Grow with purpose.', age: 'Age 13–15', desc: '銜接更完整的閱讀、寫作與表達能力。', icon: GraduationCap }
];

const courseTracks = [
  {
    title: 'Prime 活用班',
    tag: 'Foundational English Literacy',
    href: '#/prime',
    desc: '建立聽、說、讀、寫核心能力，讓孩子穩定累積英文自信。',
    points: ['Build strong foundations', 'Grow with confidence', 'Learn with joy']
  },
  {
    title: 'ESL 實作班',
    tag: 'Inquiry-Based Learning',
    href: '#/esl',
    desc: '透過跨域主題與專題任務，讓孩子用英文探索世界、表達想法。',
    points: ['Explore the world', 'Think in English', 'Express with confidence']
  }
];

const materials = [
  { title: 'Oxford University Press 系列教材', desc: '搭配 Milton 課堂架構，建立穩定英文基礎。' },
  { title: '分級閱讀與廣泛閱讀', desc: '讓閱讀成為孩子帶得走的能力。' },
  { title: '課堂延伸與回家練習', desc: '讓學習從教室延伸到生活。' }
];

const outputMethods = [
  { title: 'Creative Sharing', desc: '讓孩子把想法說出來。' },
  { title: 'Hands-on Discovery', desc: '在動手做中理解世界。' },
  { title: 'Presentation Time', desc: '練習自信表達與成果展現。' }
];

const afterSchool = ['作業陪伴', '學習習慣', '素養閱讀', '生活自理', '親師溝通'];

const prepItems = [
  { title: '美語先修', desc: '建立英文聲音感與學習好感。' },
  { title: '正音先修', desc: '穩定銜接小學學習。' },
  { title: '數學讀題', desc: '練習理解題意與邏輯思考。' },
  { title: '科技與素養', desc: '培養探索、表達與生活能力。' }
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
  return 'home';
}

function SoftCard({ icon: Icon, title, desc }) {
  return <article className="soft-feature-card"><Icon /><h3>{title}</h3><p>{desc}</p></article>;
}

function TrackCard({ title, tag, desc, points, href }) {
  return (
    <article className="track-card track-card-link">
      <span>{tag}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul>{points.map((point) => <li key={point}><CheckCircle2 size={16} /> {point}</li>)}</ul>
      <a className="track-link" href={href}>了解 {title} <ArrowRight size={17} /></a>
    </article>
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
          <p>有系統的英文學習，也有孩子喜歡的課堂溫度。</p>
          <div className="hero-actions"><a className="primary-btn" href="#courses">課程架構 <ArrowRight size={18} /></a><a className="secondary-btn" href={REVIEW_APP_URL}>學生作業系統 <ArrowRight size={18} /></a><a className="accent-btn" href="#contact">預約了解 <ArrowRight size={18} /></a></div>
          <div className="hero-points soft-points"><span><CheckCircle2 size={18} /> 全方位美語能力</span><span><CheckCircle2 size={18} /> 閱讀素養與跨域探索</span><span><CheckCircle2 size={18} /> 學習軌跡持續累積</span></div>
        </div>
        <HeroVisual />
      </section>

      <section id="about" className="section about-section">
        <div className="soft-section-head"><div className="section-label">Our Philosophy</div><h2>我們相信，孩子會因為喜歡而學得更深</h2><p>Learn with joy. Grow with confidence.</p></div>
        <div className="about-features philosophy-grid">{philosophies.map((item) => <SoftCard key={item.title} {...item} />)}</div>
        <div className="team-strip"><div><div className="section-label">Our Team</div><h3>專業團隊，用心陪伴</h3><p>A caring team for every child.</p></div><div className="team-pill-list"><span>資深美語教學</span><span>課業輔導支持</span><span>行政溝通照顧</span></div></div>
      </section>

      <section id="roadmap" className="section roadmap-section">
        <div className="soft-section-head"><div className="section-label">Learning Pathway</div><h2>從喜歡英文，到真正用英文</h2><p>A pathway for confident communication.</p></div>
        <div className="roadmap-grid">{roadmap.map(({ icon: Icon, title, subtitle, age, desc }) => <article className="roadmap-card" key={title}><Icon /><span>{age}</span><h3>{title}</h3><strong>{subtitle}</strong><p>{desc}</p></article>)}</div>
      </section>

      <section id="courses" className="section courses-section">
        <div className="soft-section-head course-section-head"><div className="section-label">Course Pathway</div><h2>兩大主軸，建立孩子的英文未來力</h2><p>From foundations to global expression.</p></div>
        <div className="track-grid">{courseTracks.map((track) => <TrackCard key={track.title} {...track} />)}</div>
        <div className="architecture-flow" aria-label="課程核心流程"><div><Layers3 /><span>主題輸入</span></div><ArrowRight /><div><Headphones /><span>聽讀累積</span></div><ArrowRight /><div><MessageCircle /><span>口語演練</span></div><ArrowRight /><div><Presentation /><span>專題輸出</span></div></div>
      </section>

      <section className="section materials-section">
        <div className="soft-section-head"><div className="section-label">Materials</div><h2>專業教材，搭配 Milton 的學習節奏</h2><p>Oxford University Press materials. Milton learning design.</p></div>
        <div className="material-grid">{materials.map((item) => <article className="material-card" key={item.title}><BookOpen /><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div>
      </section>

      <section className="section reading-section"><div className="reading-panel"><div><div className="section-label">Reading Journey</div><h2>讓閱讀成為孩子帶得走的能力</h2><p>Read more. Think deeper. See wider.</p></div><div className="reading-keywords"><span>廣泛閱讀</span><span>獨立閱讀</span><span>批判思考</span><span>語感累積</span></div></div></section>

      <section className="section esl-section"><div className="soft-section-head"><div className="section-label">English in Action</div><h2>用英文探索世界，自信表達想法</h2><p>Explore, express, and connect with the world.</p></div><div className="output-grid">{outputMethods.map((item) => <article className="output-card" key={item.title}><PenTool /><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div></section>

      <section id="after-school" className="section after-school-section"><div className="after-school-panel"><div><div className="section-label">After School Care</div><h2>課後陪伴，也是一種學習</h2><p>Support, routine, and confidence.</p></div><ul>{afterSchool.map((item) => <li key={item}><CheckCircle2 size={18} /> {item}</li>)}</ul></div></section>

      <section className="section prep-section"><div className="soft-section-head"><div className="section-label">School Readiness</div><h2>為下一個學習階段，做好準備</h2><p>Ready for school. Ready to grow.</p></div><div className="prep-grid">{prepItems.map((item) => <article className="prep-card" key={item.title}><Home /><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div></section>

      <ReviewSection />
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
  return (
    <div className="prime-hero-visual prime-hero-visual-image" aria-hidden="true">
      <div className="prime-hero-halo" />
      <div className="prime-hero-orb prime-orb-a" />
      <div className="prime-hero-orb prime-orb-b" />
      <div className="prime-hero-spark prime-spark-a">✦</div>
      <div className="prime-hero-spark prime-spark-b">✦</div>
      <div className="prime-dot-grid" />
      <div className="prime-hero-image-shell">
        <img className="prime-hero-reference-image" src="/assets/prime-hero-learning-badges.png" alt="Prime 活用班示意圖：3D 吉祥物搭配 Listening、Speaking、Reading、Writing 四大能力" />
      </div>
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
        title="Prime 活用班｜聽說讀寫核心能力建構"
        desc="Build strong foundations for lifelong English learning."
        className="prime-page-hero"
        visual={<PrimeHeroVisual />}
      />
      <section className="section course-page-section">
        <div className="soft-section-head">
          <div className="section-label">Learning Goals</div>
          <h2>孩子會建立哪些能力？</h2>
          <p>Build strong foundations. Grow with confidence.</p>
        </div>
        <div className="page-feature-grid">{abilities.map((item) => <SoftCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />)}</div>
      </section>
      <section className="section course-page-section alt-bg">
        <div className="two-column-content single-column-text">
          <div>
            <div className="section-label">Materials</div>
            <h2>教材與學習架構</h2>
            <p>Oxford University Press materials, guided by Milton’s learning pathway.</p>
            <ul className="clean-list">
              <li><CheckCircle2 /> Oxford University Press 專業教材作為語言能力建構主軸</li>
              <li><CheckCircle2 /> 分級閱讀與廣泛閱讀，逐步建立語感與閱讀習慣</li>
              <li><CheckCircle2 /> 自編學習系統，連結課堂練習、家庭複習與學習軌跡</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section photo-section"><div className="soft-section-head"><div className="section-label">Classroom Moments</div><h2>看見孩子在課堂裡的學習樣貌</h2><p>Learn, practice, and grow in action.</p></div><PhotoGallery photos={primePhotos} /></section>
      <section className="section course-page-section"><div className="reading-panel"><div><div className="section-label">Prime Summary</div><h2>穩固基礎，讓孩子更有信心</h2><p>Strong foundations. Confident learners.</p></div><a className="primary-btn" href="#contact">了解報名資訊 <ArrowRight size={18} /></a></div></section>
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
      <PageHero label="ESL Program" title="ESL 實作班｜Inquiry-Based Learning × Global Communication" desc="Learn through inquiry. Express with confidence. Connect with the world." className="esl-page-hero" visual={<EslHeroVisual />} />
      <section className="section course-page-section"><div className="soft-section-head"><div className="section-label">Learning in Action</div><h2>用英文探索世界，建立真實表達力</h2><p>Explore ideas. Work together. Share with confidence.</p></div><div className="page-feature-grid">{features.map((item) => <SoftCard key={item.title} {...item} />)}</div></section>
      <section className="section course-page-section alt-bg"><div className="monthly-cycle"><div><div className="section-label">Inquiry Cycle</div><h2>從探索到表達，讓英文真正用出來</h2><p>Input. Practice. Output.</p></div><div className="cycle-steps"><article><span>01</span><h3>Input 累積</h3><p>主題詞彙、背景知識、聽讀理解與高頻口說練習。</p></article><article><span>02</span><h3>Practice 演練</h3><p>小組討論、情境任務、角色演練與老師引導回饋。</p></article><article><span>03</span><h3>Output 展現</h3><p>專題成果、口語發表、海報展示或主題作品分享。</p></article></div></div></section>
      <section className="section photo-section"><div className="soft-section-head"><div className="section-label">Classroom Moments</div><h2>在任務與合作中，看見孩子的表達力</h2><p>Collaborate, create, and present.</p></div><PhotoGallery photos={eslPhotos} /></section>
      <section className="section course-page-section"><div className="output-grid">{outputMethods.map((item) => <article className="output-card" key={item.title}><PenTool /><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div></section>
      <section className="section course-page-section"><div className="reading-panel"><div><div className="section-label">ESL Summary</div><h2>不只是英文課，是用英文看世界</h2><p>English in action. Learning without limits.</p></div><a className="primary-btn" href="#contact">了解報名資訊 <ArrowRight size={18} /></a></div></section>
      <ContactSection />
    </>
  );
}

function ReviewSection() {
  return <section id="review" className="section review-section"><div className="review-panel"><div><div className="section-label">Student Review Mission</div><h2>Milton Review Mission</h2><p>學生登入班級與姓名後，只會看到老師指定的 Level / Unit 作業。完成聽力拼字練習後，老師可在後台追蹤學習紀錄，讓回家複習更有方向。</p></div><a className="primary-btn" href={REVIEW_APP_URL}>進入學生作業系統 <ArrowRight size={18} /></a></div></section>;
}

function ContactSection() {
  return <section id="contact" className="section contact-section"><div className="soft-section-head compact-head"><div className="section-label">Contact</div><h2>歡迎預約，讓我們親自為孩子介紹最適合的學習安排</h2><p>Visit Milton. Discover the right path.</p></div><div className="contact-grid"><a className="contact-soft-card" href={LINE_URL}><MessageCircle /><h3>LINE 官方帳號</h3><p>點此加入 LINE，詢問課程與試聽資訊。</p></a><div className="contact-soft-card"><Phone /><h3>電話聯絡</h3><p>請填入你的聯絡電話</p></div><div className="contact-soft-card"><MapPin /><h3>教室地址</h3><p>請填入你的教室地址</p></div></div></section>;
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
  return <main><Header />{route === 'prime' ? <PrimePage /> : route === 'esl' ? <EslPage /> : <HomePage />}<Footer /></main>;
}

createRoot(document.getElementById('root')).render(<App />);
