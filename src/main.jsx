import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  MessageCircle,
  Sparkles,
  Users,
  Headphones,
  ArrowRight,
  MapPin,
  Phone,
  Star,
  CheckCircle2,
  School,
  Lightbulb,
  Clock3,
  BookOpen,
  Globe2,
  Layers3,
  Compass,
  PenTool,
  Presentation,
  Home,
  Brain,
  Baby,
  GraduationCap
} from 'lucide-react';
import './styles.css';

const REVIEW_APP_URL = 'https://milton-vocab-app.vercel.app/';
const LINE_URL = '#';

const philosophies = [
  {
    title: '適性發展',
    desc: '尊重每位孩子的獨特性，挖掘潛能並給予最合適的學習養分。',
    icon: Compass
  },
  {
    title: '獨立自主',
    desc: '培養解決問題的能力與主動學習的態度，讓孩子成為學習的主人。',
    icon: Brain
  },
  {
    title: '樂在學習',
    desc: '營造充滿好奇與探索的環境，讓美語成為開啟世界的快樂鑰匙。',
    icon: Sparkles
  }
];

const roadmap = [
  {
    title: '幼兒美語',
    subtitle: 'Preschoolers',
    age: 'Age 4–5',
    desc: '從五感探索與日常聽說開始，建立孩子對美語的好感度。',
    icon: Baby
  },
  {
    title: '兒童美語',
    subtitle: 'Young Learners',
    age: 'Age 6–12',
    desc: '整合聽、說、讀、寫，搭配多元探索、跨域學習與閱讀素養。',
    icon: School
  },
  {
    title: '進階美語',
    subtitle: 'Advanced',
    age: 'Age 13–15',
    desc: '銜接學術英語、檢定證照與寫作養成，規劃長期學習歷程。',
    icon: GraduationCap
  }
];

const courseTracks = [
  {
    title: 'Prime 活用班',
    tag: '核心能力建構',
    desc: '以聽說讀寫為主軸，透過主題式對話、字彙練習、自然發音與漸進閱讀，幫助孩子穩固語言基礎。',
    points: ['螺旋式能力建構，循序漸進', '自然發音與漸進式閱讀', '全美語浸潤式學習環境']
  },
  {
    title: 'ESL 實作班',
    tag: '跨域探索與表達',
    desc: '在核心美語能力之上加入 Social Science 主題探索，讓孩子用英文理解世界、組織想法並勇敢表達。',
    points: ['CLIL 精神：用英文學知識', 'Theme-Based Learning 主題式學習', 'Project-Based Learning 成果發表']
  }
];

const materials = [
  {
    title: "Let's Go",
    desc: '主題式建構語法與生活會話，讓孩子在情境中自然使用英文。'
  },
  {
    title: 'Phonics World',
    desc: '從字母到拼讀，漸進式堆疊自然發音能力。'
  },
  {
    title: 'Levelled Readers',
    desc: '由繪本、故事到科普文本，透過分級閱讀建立語感。'
  },
  {
    title: '自編教材',
    desc: '課堂練習、親師聯絡與回家任務連結教室與家庭，完整累積學習軌跡。'
  }
];

const outputMethods = [
  {
    title: '創意簡報',
    desc: '上台介紹主題，訓練膽量、台風與口語表達。'
  },
  {
    title: '實驗觀察',
    desc: '整理資訊與觀察內容，將抽象知識具象化。'
  },
  {
    title: '角色扮演',
    desc: '模擬真實情境對話，讓英文從課本走進生活。'
  }
];

const afterSchool = [
  '學校作業陪伴與訂正',
  '學科能力複習與基礎穩固',
  '素養閱讀與邏輯思考',
  '生活教育與自主習慣',
  '親師溝通與學習紀錄'
];

const prepItems = [
  {
    title: '美語先修',
    desc: '建立字母辨識、字母發音與初階拼讀能力，為英文學習打底。'
  },
  {
    title: '正音先修',
    desc: '透過發音位置、符號辨識與書寫練習，協助孩子穩定銜接小學。'
  },
  {
    title: '數學讀題',
    desc: '練習理解題意、整理資訊與邏輯思考，降低小一學科適應壓力。'
  },
  {
    title: '科技與素養',
    desc: '結合生活科學、動手操作與共讀引導，培養探索與表達能力。'
  }
];

function SoftCard({ icon: Icon, title, desc }) {
  return (
    <article className="soft-feature-card">
      <Icon />
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
}

function TrackCard({ title, tag, desc, points }) {
  return (
    <article className="track-card">
      <span>{tag}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul>
        {points.map((point) => (
          <li key={point}><CheckCircle2 size={16} /> {point}</li>
        ))}
      </ul>
    </article>
  );
}

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Milton Home">
          <img src="/assets/milton-logo-horizontal-blue.png" alt="Milton 麋爾頓美語" />
        </a>

        <nav>
          <a href="#about">關於 Milton</a>
          <a href="#roadmap">學習路徑</a>
          <a href="#courses">課程架構</a>
          <a href="#after-school">課後輔導</a>
          <a href="#review">學生入口</a>
          <a href="#contact">聯絡我們</a>
        </nav>

        <a className="header-cta" href={LINE_URL}>LINE 聯絡我們</a>
      </header>

      <section id="top" className="hero">
        <div className="hero-bg-mark" aria-hidden="true">Milton</div>

        <div className="hero-copy">
          <div className="section-kicker">
            <span className="kicker-line" />
            <span>適性發展・獨立自主・樂在學習</span>
            <span className="kicker-line" />
          </div>

          <h1>在 Milton，<br />英文成為孩子探索世界的力量</h1>
          <p>
            麋爾頓美語以專業美語教學、課業輔導與行政溝通三方支持，
            為孩子建立穩定、快樂且有方向的學習環境。
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="#courses">課程架構 <ArrowRight size={18} /></a>
            <a className="secondary-btn" href={REVIEW_APP_URL}>學生作業系統 <ArrowRight size={18} /></a>
            <a className="accent-btn" href="#contact">預約了解 <ArrowRight size={18} /></a>
          </div>

          <div className="hero-points soft-points">
            <span><CheckCircle2 size={18} /> 全方位美語能力</span>
            <span><CheckCircle2 size={18} /> 閱讀素養與跨域探索</span>
            <span><CheckCircle2 size={18} /> 學習軌跡持續累積</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-glow" aria-hidden="true" />
          <div className="hero-orb orb-a" aria-hidden="true" />
          <div className="hero-orb orb-b" aria-hidden="true" />
          <div className="hero-spark spark-a" aria-hidden="true">✦</div>
          <div className="hero-spark spark-b" aria-hidden="true">✦</div>
          <div className="dot-grid" aria-hidden="true" />

          <div className="mascot-stage" tabIndex="0" aria-label="Milton 3D 吉祥物，移到上面會打招呼">
            <div className="hover-greeting" aria-hidden="true">
              <span className="hover-greeting-hi">Hi,</span>
              <strong className="hover-greeting-title">Welcome to Milton</strong>
            </div>

            <img
              className="mascot-half"
              src="/assets/milton-3d-mascot-half-slim.png"
              alt="Milton 3D 麋鹿吉祥物"
            />
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="soft-section-head">
          <div className="section-label">Education Philosophy</div>
          <h2>教育理念</h2>
          <p>
            我們希望孩子不只是學會英文，更能在適合自己的節奏中，培養主動學習、解決問題與享受探索的能力。
          </p>
        </div>

        <div className="about-features philosophy-grid">
          {philosophies.map((item) => <SoftCard key={item.title} {...item} />)}
        </div>

        <div className="team-strip">
          <div>
            <div className="section-label">Our Team</div>
            <h3>專業教育團隊</h3>
            <p>
              結合專業美語教學、課業輔導與行政支援，讓孩子在學習、生活與親師溝通上都獲得完整照顧。
            </p>
          </div>
          <div className="team-pill-list">
            <span>資深美語教學</span>
            <span>課業輔導支持</span>
            <span>行政溝通照顧</span>
          </div>
        </div>
      </section>

      <section id="roadmap" className="section roadmap-section">
        <div className="soft-section-head">
          <div className="section-label">Learning Roadmap</div>
          <h2>從幼兒到國中，循序建立英文能力</h2>
          <p>
            依照孩子不同年齡與學習階段，規劃從美語啟蒙、聽說讀寫整合，到進階英文應用的完整路徑。
          </p>
        </div>

        <div className="roadmap-grid">
          {roadmap.map(({ icon: Icon, title, subtitle, age, desc }) => (
            <article className="roadmap-card" key={title}>
              <Icon />
              <span>{age}</span>
              <h3>{title}</h3>
              <strong>{subtitle}</strong>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="courses" className="section courses-section">
        <div className="soft-section-head course-section-head">
          <div className="section-label">Course Architecture</div>
          <h2>兩大美語課程主軸</h2>
          <p>
            以 Prime 活用班穩固語言核心，再透過 ESL 實作班延伸跨域探索與自信表達，形成由輸入到輸出的學習架構。
          </p>
        </div>

        <div className="track-grid">
          {courseTracks.map((track) => <TrackCard key={track.title} {...track} />)}
        </div>

        <div className="architecture-flow" aria-label="課程核心流程">
          <div><Layers3 /><span>主題輸入</span></div>
          <ArrowRight />
          <div><Headphones /><span>聽讀累積</span></div>
          <ArrowRight />
          <div><MessageCircle /><span>口語演練</span></div>
          <ArrowRight />
          <div><Presentation /><span>專題輸出</span></div>
        </div>
      </section>

      <section className="section materials-section">
        <div className="soft-section-head">
          <div className="section-label">Professional Materials</div>
          <h2>多元專業教材與自編學習系統</h2>
          <p>
            從主教材、自然發音、分級讀本到自編教材，讓課堂學習與回家複習能夠穩定銜接。
          </p>
        </div>

        <div className="material-grid">
          {materials.map((item) => (
            <article className="material-card" key={item.title}>
              <BookOpen />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reading-section">
        <div className="reading-panel">
          <div>
            <div className="section-label">Independent Readers</div>
            <h2>閱讀領航：讓閱讀成為帶得走的能力</h2>
            <p>
              在 Milton，閱讀不只是技能，更是一種探索世界的習慣。透過廣泛閱讀、獨立閱讀與提問反思，孩子能從故事中學品格，也能從科普中拓展知識。
            </p>
          </div>
          <div className="reading-keywords">
            <span>廣泛閱讀</span>
            <span>獨立閱讀</span>
            <span>批判思考</span>
            <span>語感累積</span>
          </div>
        </div>
      </section>

      <section className="section esl-section">
        <div className="soft-section-head">
          <div className="section-label">Theme-Based Learning & Project Output</div>
          <h2>ESL 實作班：用英文拓展視野，自信開口表達</h2>
          <p>
            透過 Social Science 與 CLIL 精神，孩子在主題情境中累積知識與語言，最後以多元成果展現所學。
          </p>
        </div>

        <div className="output-grid">
          {outputMethods.map((item) => (
            <article className="output-card" key={item.title}>
              <PenTool />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="after-school" className="section after-school-section">
        <div className="after-school-panel">
          <div>
            <div className="section-label">After School Program</div>
            <h2>課後輔導與生活陪伴</h2>
            <p>
              課後輔導不只協助完成作業，也透過學科複習、素養閱讀、生活教育與親師溝通，幫助孩子建立自主節奏與學習信心。
            </p>
          </div>
          <ul>
            {afterSchool.map((item) => (
              <li key={item}><CheckCircle2 size={18} /> {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section prep-section">
        <div className="soft-section-head">
          <div className="section-label">School Readiness</div>
          <h2>小一銜接與先修規劃</h2>
          <p>
            針對準小一孩子的銜接需求，從美語、正音、數學讀題、科技素養與生活能力多面向準備，降低入學轉換的不安。
          </p>
        </div>

        <div className="prep-grid">
          {prepItems.map((item) => (
            <article className="prep-card" key={item.title}>
              <Home />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="review" className="section review-section">
        <div className="review-panel">
          <div>
            <div className="section-label">Student Review Mission</div>
            <h2>Milton Review Mission</h2>
            <p>
              學生登入班級與姓名後，只會看到老師指定的 Level / Unit 作業。完成聽力拼字練習後，老師可在後台追蹤學習紀錄，讓回家複習更有方向。
            </p>
          </div>
          <a className="primary-btn" href={REVIEW_APP_URL}>進入學生作業系統 <ArrowRight size={18} /></a>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="soft-section-head compact-head">
          <div className="section-label">Contact</div>
          <h2>歡迎預約了解課程</h2>
          <p>想了解孩子適合哪一個班級或課程，歡迎透過 LINE 或電話與我們聯繫。</p>
        </div>

        <div className="contact-grid">
          <a className="contact-soft-card" href={LINE_URL}>
            <MessageCircle />
            <h3>LINE 官方帳號</h3>
            <p>點此加入 LINE，詢問課程與試聽資訊。</p>
          </a>
          <div className="contact-soft-card">
            <Phone />
            <h3>電話聯絡</h3>
            <p>請填入你的聯絡電話</p>
          </div>
          <div className="contact-soft-card">
            <MapPin />
            <h3>教室地址</h3>
            <p>請填入你的教室地址</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <img src="/assets/milton-logo-horizontal-blue.png" alt="Milton 麋爾頓美語" />
        <p>© {new Date().getFullYear()} Milton Kids Academy 麋爾頓美語. All rights reserved.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
