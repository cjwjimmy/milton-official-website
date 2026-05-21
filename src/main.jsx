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
  { title: '適性發展', desc: '尊重每位孩子的獨特性，挖掘潛能並給予最合適的學習養分。', icon: Compass },
  { title: '獨立自主', desc: '培養解決問題的能力與主動學習的態度，讓孩子成為學習的主人。', icon: Brain },
  { title: '樂在學習', desc: '營造充滿好奇與探索的環境，讓美語成為開啟世界的快樂鑰匙。', icon: Sparkles }
];

const roadmap = [
  { title: '幼兒美語', subtitle: 'Preschoolers', age: 'Age 4–5', desc: '從五感探索與日常聽說開始，建立孩子對美語的好感度。', icon: Baby },
  { title: '兒童美語', subtitle: 'Young Learners', age: 'Age 6–12', desc: '整合聽、說、讀、寫，搭配多元探索、跨域學習與閱讀素養。', icon: School },
  { title: '進階美語', subtitle: 'Advanced', age: 'Age 13–15', desc: '銜接學術英語、檢定證照與寫作養成，規劃長期學習歷程。', icon: GraduationCap }
];

const courseTracks = [
  {
    title: 'Prime 活用班',
    tag: '核心能力建構',
    href: '#/prime',
    desc: '以聽說讀寫為主軸，透過主題式對話、字彙練習、自然發音與漸進閱讀，幫助孩子穩固語言基礎。',
    points: ['螺旋式能力建構，循序漸進', '自然發音與漸進式閱讀', '全美語浸潤式學習環境']
  },
  {
    title: 'ESL 實作班',
    tag: '跨域探索與表達',
    href: '#/esl',
    desc: '在核心美語能力之上加入 Social Science 主題探索，讓孩子用英文理解世界、組織想法並勇敢表達。',
    points: ['CLIL 精神：用英文學知識', 'Theme-Based Learning 主題式學習', 'Project-Based Learning 成果發表']
  }
];

const materials = [
  { title: 'Oxford University Press 系列教材', desc: '選用 Oxford University Press 出版之一系列專業英語教材作為能力建構基礎。' },
  { title: '分級閱讀與廣泛閱讀', desc: '透過不同難度與主題的閱讀素材，逐步養成閱讀理解、語感與自主閱讀習慣。' },
  { title: '自編學習與回家練習系統', desc: '搭配課堂練習、親師聯絡與回家任務，連結教室與家庭，完整累積學習軌跡。' }
];

const outputMethods = [
  { title: '創意簡報', desc: '上台介紹主題，訓練膽量、台風與口語表達。' },
  { title: '實驗觀察', desc: '整理資訊與觀察內容，將抽象知識具象化。' },
  { title: '角色扮演', desc: '模擬真實情境對話，讓英文從課本走進生活。' }
];

const afterSchool = ['學校作業陪伴與訂正', '學科能力複習與基礎穩固', '素養閱讀與邏輯思考', '生活教育與自主習慣', '親師溝通與學習紀錄'];

const prepItems = [
  { title: '美語先修', desc: '建立字母辨識、字母發音與初階拼讀能力，為英文學習打底。' },
  { title: '正音先修', desc: '透過發音位置、符號辨識與書寫練習，協助孩子穩定銜接小學。' },
  { title: '數學讀題', desc: '練習理解題意、整理資訊與邏輯思考，降低小一學科適應壓力。' },
  { title: '科技與素養', desc: '結合生活科學、動手操作與共讀引導，培養探索與表達能力。' }
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
          <div className="section-kicker"><span className="kicker-line" /><span>適性發展・獨立自主・樂在學習</span><span className="kicker-line" /></div>
          <h1>在 Milton，<br />英文成為孩子探索世界的力量</h1>
          <p>麋爾頓美語以專業美語教學、課業輔導與行政溝通三方支持，為孩子建立穩定、快樂且有方向的學習環境。</p>
          <div className="hero-actions"><a className="primary-btn" href="#courses">課程架構 <ArrowRight size={18} /></a><a className="secondary-btn" href={REVIEW_APP_URL}>學生作業系統 <ArrowRight size={18} /></a><a className="accent-btn" href="#contact">預約了解 <ArrowRight size={18} /></a></div>
          <div className="hero-points soft-points"><span><CheckCircle2 size={18} /> 全方位美語能力</span><span><CheckCircle2 size={18} /> 閱讀素養與跨域探索</span><span><CheckCircle2 size={18} /> 學習軌跡持續累積</span></div>
        </div>
        <HeroVisual />
      </section>

      <section id="about" className="section about-section">
        <div className="soft-section-head"><div className="section-label">Education Philosophy</div><h2>教育理念</h2><p>我們希望孩子不只是學會英文，更能在適合自己的節奏中，培養主動學習、解決問題與享受探索的能力。</p></div>
        <div className="about-features philosophy-grid">{philosophies.map((item) => <SoftCard key={item.title} {...item} />)}</div>
        <div className="team-strip"><div><div className="section-label">Our Team</div><h3>專業教育團隊</h3><p>結合專業美語教學、課業輔導與行政支援，讓孩子在學習、生活與親師溝通上都獲得完整照顧。</p></div><div className="team-pill-list"><span>資深美語教學</span><span>課業輔導支持</span><span>行政溝通照顧</span></div></div>
      </section>

      <section id="roadmap" className="section roadmap-section">
        <div className="soft-section-head"><div className="section-label">Learning Roadmap</div><h2>從幼兒到國中，循序建立英文能力</h2><p>依照孩子不同年齡與學習階段，規劃從美語啟蒙、聽說讀寫整合，到進階英文應用的完整路徑。</p></div>
        <div className="roadmap-grid">{roadmap.map(({ icon: Icon, title, subtitle, age, desc }) => <article className="roadmap-card" key={title}><Icon /><span>{age}</span><h3>{title}</h3><strong>{subtitle}</strong><p>{desc}</p></article>)}</div>
      </section>

      <section id="courses" className="section courses-section">
        <div className="soft-section-head course-section-head"><div className="section-label">Course Architecture</div><h2>兩大美語課程主軸</h2><p>以 Prime 活用班穩固語言核心，再透過 ESL 實作班延伸跨域探索與自信表達，形成由輸入到輸出的學習架構。</p></div>
        <div className="track-grid">{courseTracks.map((track) => <TrackCard key={track.title} {...track} />)}</div>
        <div className="architecture-flow" aria-label="課程核心流程"><div><Layers3 /><span>主題輸入</span></div><ArrowRight /><div><Headphones /><span>聽讀累積</span></div><ArrowRight /><div><MessageCircle /><span>口語演練</span></div><ArrowRight /><div><Presentation /><span>專題輸出</span></div></div>
      </section>

      <section className="section materials-section">
        <div className="soft-section-head"><div className="section-label">Professional Materials</div><h2>多元專業教材與自編學習系統</h2><p>我們選用 Oxford University Press 出版之一系列專業英語教材，並搭配分級閱讀、自編學習單與回家練習系統，讓課堂學習與家庭複習能夠穩定銜接。</p></div>
        <div className="material-grid">{materials.map((item) => <article className="material-card" key={item.title}><BookOpen /><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div>
      </section>

      <section className="section reading-section"><div className="reading-panel"><div><div className="section-label">Independent Readers</div><h2>閱讀領航：讓閱讀成為帶得走的能力</h2><p>在 Milton，閱讀不只是技能，更是一種探索世界的習慣。透過廣泛閱讀、獨立閱讀與提問反思，孩子能從故事中學品格，也能從科普中拓展知識。</p></div><div className="reading-keywords"><span>廣泛閱讀</span><span>獨立閱讀</span><span>批判思考</span><span>語感累積</span></div></div></section>

      <section className="section esl-section"><div className="soft-section-head"><div className="section-label">Theme-Based Learning & Project Output</div><h2>ESL 實作班：用英文拓展視野，自信開口表達</h2><p>透過 Social Science 與 CLIL 精神，孩子在主題情境中累積知識與語言，最後以多元成果展現所學。</p></div><div className="output-grid">{outputMethods.map((item) => <article className="output-card" key={item.title}><PenTool /><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div></section>

      <section id="after-school" className="section after-school-section"><div className="after-school-panel"><div><div className="section-label">After School Program</div><h2>課後輔導與生活陪伴</h2><p>課後輔導不只協助完成作業，也透過學科複習、素養閱讀、生活教育與親師溝通，幫助孩子建立自主節奏與學習信心。</p></div><ul>{afterSchool.map((item) => <li key={item}><CheckCircle2 size={18} /> {item}</li>)}</ul></div></section>

      <section className="section prep-section"><div className="soft-section-head"><div className="section-label">School Readiness</div><h2>小一銜接與先修規劃</h2><p>針對準小一孩子的銜接需求，從美語、正音、數學讀題、科技素養與生活能力多面向準備，降低入學轉換的不安。</p></div><div className="prep-grid">{prepItems.map((item) => <article className="prep-card" key={item.title}><Home /><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div></section>

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
    { icon: FlaskConical, title: 'Science Lab', subtitle: 'Explore • Observe • Discover', className: 'domain-a' },
    { icon: Palette, title: 'Creative Arts', subtitle: 'Color • Design • Imagination', className: 'domain-b' },
    { icon: Landmark, title: 'World Cultures', subtitle: 'People • Places • Stories', className: 'domain-c' },
    { icon: Music4, title: 'Music & Rhythm', subtitle: 'Songs • Beats • Expression', className: 'domain-d' }
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
        desc="Prime 活用班是 Milton 兒童美語的核心能力課程，透過螺旋式學習架構，幫助孩子穩固聽、說、讀、寫基礎，逐步建立長期英文能力。"
        className="prime-page-hero"
        visual={<PrimeHeroVisual />}
      />
      <section className="section course-page-section">
        <div className="soft-section-head">
          <div className="section-label">Learning Goals</div>
          <h2>孩子會建立哪些能力？</h2>
          <p>Prime 的重點不是短期記憶，而是讓孩子在熟悉的基礎上不斷疊加新能力，形成穩定的語言學習節奏。</p>
        </div>
        <div className="page-feature-grid">{abilities.map((item) => <SoftCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />)}</div>
      </section>
      <section className="section course-page-section alt-bg">
        <div className="two-column-content single-column-text">
          <div>
            <div className="section-label">Materials</div>
            <h2>教材與學習架構</h2>
            <p>課程選用 Oxford University Press 出版之一系列專業英語教材，並搭配分級閱讀、自編課堂練習與回家任務，讓孩子在課堂輸入、課後複習與長期能力累積之間建立穩定連結。</p>
            <ul className="clean-list">
              <li><CheckCircle2 /> Oxford University Press 專業教材作為語言能力建構主軸</li>
              <li><CheckCircle2 /> 分級閱讀與廣泛閱讀，逐步建立語感與閱讀習慣</li>
              <li><CheckCircle2 /> 自編學習系統，連結課堂練習、家庭複習與學習軌跡</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section photo-section"><div className="soft-section-head"><div className="section-label">Classroom Moments</div><h2>上課照片位置</h2><p>以下先放一般上課照片佔位圖，未來可以替換成實際孩子上課、閱讀、口說練習或教室照片。</p></div><PhotoGallery photos={primePhotos} /></section>
      <section className="section course-page-section"><div className="reading-panel"><div><div className="section-label">Prime Summary</div><h2>適合希望穩固英文基礎的孩子</h2><p>Prime 活用班以語言核心能力為主軸，讓孩子在全美語浸潤與主題練習中，逐步養成聽懂、敢說、能讀、會寫的基礎能力。</p></div><a className="primary-btn" href="#contact">了解報名資訊 <ArrowRight size={18} /></a></div></section>
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
      <PageHero label="ESL Program" title="ESL 實作班｜Social Science × Project-Based Learning" desc="ESL 實作班在核心美語能力之上，加入跨域主題探索與專題實作，讓孩子在英文情境中累積知識、組織想法並勇敢表達。" className="esl-page-hero" visual={<EslHeroVisual />} />
      <section className="section course-page-section"><div className="soft-section-head"><div className="section-label">Course Core</div><h2>用英文學知識，也用英文表達想法</h2><p>ESL 課程重視從 Input 到 Output 的完整學習歷程，孩子透過主題輸入、口語演練、任務實作與成果發表，逐步建立自信表達能力。</p></div><div className="page-feature-grid">{features.map((item) => <SoftCard key={item.title} {...item} />)}</div></section>
      <section className="section course-page-section alt-bg"><div className="monthly-cycle"><div><div className="section-label">Learning Cycle</div><h2>主題式學習循環</h2><p>以主題作為學習核心，先累積詞彙、句型與背景知識，再透過討論、操作與專題任務，讓孩子將所學轉化成具體表達。</p></div><div className="cycle-steps"><article><span>01</span><h3>Input 累積</h3><p>主題詞彙、背景知識、聽讀理解與高頻口說練習。</p></article><article><span>02</span><h3>Practice 演練</h3><p>小組討論、情境任務、角色演練與老師引導回饋。</p></article><article><span>03</span><h3>Output 展現</h3><p>專題成果、口語發表、海報展示或主題作品分享。</p></article></div></div></section>
      <section className="section photo-section"><div className="soft-section-head"><div className="section-label">Classroom Moments</div><h2>上課照片位置</h2><p>以下先放一般上課照片佔位圖，未來可以替換成小組討論、實驗觀察、主題作品或成果發表照片。</p></div><PhotoGallery photos={eslPhotos} /></section>
      <section className="section course-page-section"><div className="output-grid">{outputMethods.map((item) => <article className="output-card" key={item.title}><PenTool /><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div></section>
      <section className="section course-page-section"><div className="reading-panel"><div><div className="section-label">ESL Summary</div><h2>適合想強化表達與跨域思考的孩子</h2><p>ESL 實作班讓孩子在英文環境中學會觀察、提問、整理與表達，從知識輸入走向自信輸出。</p></div><a className="primary-btn" href="#contact">了解報名資訊 <ArrowRight size={18} /></a></div></section>
      <ContactSection />
    </>
  );
}

function ReviewSection() {
  return <section id="review" className="section review-section"><div className="review-panel"><div><div className="section-label">Student Review Mission</div><h2>Milton Review Mission</h2><p>學生登入班級與姓名後，只會看到老師指定的 Level / Unit 作業。完成聽力拼字練習後，老師可在後台追蹤學習紀錄，讓回家複習更有方向。</p></div><a className="primary-btn" href={REVIEW_APP_URL}>進入學生作業系統 <ArrowRight size={18} /></a></div></section>;
}

function ContactSection() {
  return <section id="contact" className="section contact-section"><div className="soft-section-head compact-head"><div className="section-label">Contact</div><h2>歡迎預約了解課程</h2><p>想了解孩子適合哪一個班級或課程，歡迎透過 LINE 或電話與我們聯繫。</p></div><div className="contact-grid"><a className="contact-soft-card" href={LINE_URL}><MessageCircle /><h3>LINE 官方帳號</h3><p>點此加入 LINE，詢問課程與試聽資訊。</p></a><div className="contact-soft-card"><Phone /><h3>電話聯絡</h3><p>請填入你的聯絡電話</p></div><div className="contact-soft-card"><MapPin /><h3>教室地址</h3><p>請填入你的教室地址</p></div></div></section>;
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
