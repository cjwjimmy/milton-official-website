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
  Globe2
} from 'lucide-react';
import './styles.css';

const REVIEW_APP_URL = 'https://milton-vocab-app.vercel.app/';
const LINE_URL = '#';

const courses = [
  {
    id: 'course-kids',
    title: '兒童美語',
    age: '6–12 歲',
    desc: '以聽、說、讀、寫整合為核心，幫助孩子穩定銜接學校英文與長期語言能力。',
    points: ['主題單字與句型練習', '自然發音與拼讀基礎', '閱讀理解與表達整合']
  },
  {
    id: 'course-preschool',
    title: '幼兒美語',
    age: '3–6 歲',
    desc: '透過歌曲、故事、遊戲與生活主題，建立孩子對英文的聲音感與開口自信。',
    points: ['兒歌故事引導', '生活字彙啟蒙', '遊戲式互動學習']
  },
  {
    id: 'course-after-school',
    title: '課後輔導',
    age: '依年級分組',
    desc: '協助孩子完成作業、整理學習節奏，培養穩定的學習習慣與時間管理能力。',
    points: ['作業陪伴與訂正', '學校進度複習', '建立自主學習習慣']
  },
  {
    id: 'course-theme',
    title: '主題探索課程',
    age: '依主題開班',
    desc: '結合英文、閱讀、文化與創作，讓孩子透過感興趣的主題拓展視野與表達力。',
    points: ['節慶文化與生活英文', '故事閱讀與創意表達', '主題活動與小作品']
  }
];

function CourseCard({ title, age, desc, points }) {
  return (
    <article className="course-card-soft">
      <div className="course-badge">{age}</div>
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
          <a href="#courses">課程介紹</a>
          <a href="#features">教學特色</a>
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
            <span>英語學習的好夥伴</span>
            <span className="kicker-line" />
          </div>

          <h1>在 Milton，<br />英文成為孩子的超能力</h1>
          <p>
            我們相信，學英文不該只是考試，
            而是讓孩子在未來世界中，自信表達、勇敢探索的力量。
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="#courses">課程介紹 <ArrowRight size={18} /></a>
            <a className="secondary-btn" href={REVIEW_APP_URL}>學生作業系統 <ArrowRight size={18} /></a>
            <a className="accent-btn" href="#contact">預約試聽 <ArrowRight size={18} /></a>
          </div>

          <div className="hero-points soft-points">
            <span><CheckCircle2 size={18} /> 小班制互動學習</span>
            <span><CheckCircle2 size={18} /> 聽說讀寫整合</span>
            <span><CheckCircle2 size={18} /> 線上回家複習</span>
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
              <span className="hover-greeting-hi">Hi.</span>
              <strong className="hover-greeting-title">Welcome to Milton</strong>
            </div>

            <img
              className="mascot-half"
              src="/assets/milton-3d-mascot-clean.png"
              alt="Milton 3D 麋鹿吉祥物"
            />
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="soft-section-head">
          <div className="section-label">關於 Milton</div>
          <h2>用心陪伴每一位孩子，在快樂中建立真正的英文能力</h2>
          <p>
            Milton 麋爾頓美語致力於提供專業、系統化的英語學習環境，
            讓孩子從語感、表達到應用能力都能穩定累積。
          </p>
        </div>

        <div className="about-features">
          <div className="soft-feature-card">
            <Users />
            <h3>用心陪伴</h3>
            <p>每位孩子都被看見，學習不再孤單。</p>
          </div>
          <div className="soft-feature-card">
            <Star />
            <h3>專業教學</h3>
            <p>展現師資與課程設計，有效提升語言能力。</p>
          </div>
          <div className="soft-feature-card">
            <BookOpen />
            <h3>生活化學習</h3>
            <p>連結生活情境，讓英文自然融入日常。</p>
          </div>
          <div className="soft-feature-card">
            <Globe2 />
            <h3>國際視野</h3>
            <p>培養跨文化理解，迎向更寬廣的未來。</p>
          </div>
        </div>
      </section>

      <section id="courses" className="section courses-section">
        <div className="soft-section-head course-section-head">
          <div className="section-label">課程介紹</div>
          <h2>依照年齡與學習需求，安排最適合孩子的英文課程</h2>
          <p>包含兒童美語、幼兒美語、課後輔導與主題探索課程，幫助孩子在不同階段穩定成長。</p>
        </div>

        <div className="course-grid">
          {courses.map((course) => <CourseCard key={course.id} {...course} />)}
        </div>
      </section>

      <section id="features" className="section feature-section">
        <div className="soft-section-head compact-head">
          <div className="section-label">教學特色</div>
          <h2>讓學習進度被看見，也讓孩子願意持續練習</h2>
        </div>

        <div className="teaching-feature-list">
          <div className="feature-row-item">
            <Lightbulb />
            <div>
              <strong>老師可指派作業</strong>
              <p>指定班級的 Level / Unit，學生只會看到老師安排的內容。</p>
            </div>
          </div>
          <div className="feature-row-item">
            <Headphones />
            <div>
              <strong>聽力拼字整合練習</strong>
              <p>結合聽、說、拼寫與回家複習，讓孩子反覆熟悉課堂重點。</p>
            </div>
          </div>
          <div className="feature-row-item">
            <Clock3 />
            <div>
              <strong>適合低年級語速</strong>
              <p>聽力已調整成較慢語速，幫助孩子聽清楚再拼字。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="review" className="section review-section">
        <div className="review-panel">
          <div>
            <div className="section-label">學生入口</div>
            <h2>Milton Review Mission</h2>
            <p>
              學生登入班級與姓名後，只會看到老師指定的 Level / Unit 作業。
              完成後，老師可以在後台追蹤每一次的學習紀錄。
            </p>
          </div>
          <a className="primary-btn" href={REVIEW_APP_URL}>進入學生作業系統 <ArrowRight size={18} /></a>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="soft-section-head compact-head">
          <div className="section-label">聯絡我們</div>
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
        <p>© {new Date().getFullYear()} Milton 麋爾頓美語. All rights reserved.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
