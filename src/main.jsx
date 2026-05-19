import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BookOpen,
  MessageCircle,
  Sparkles,
  Users,
  PencilLine,
  Headphones,
  ArrowRight,
  MapPin,
  Phone,
  GraduationCap,
  Star,
  CheckCircle2,
  Compass,
  School,
  Lightbulb,
  Clock3
} from 'lucide-react';
import './styles.css';

const REVIEW_APP_URL = 'https://milton-vocab-app.vercel.app/';
const LINE_URL = '#';

function CourseCard({ id, number, age, title, description, points }) {
  return (
    <article id={id} className="course-detail-card">
      <div className="course-number">{number}</div>
      <div className="course-copy">
        <span className="course-age">{age}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </div>
    </article>
  );
}

function App() {
  const courses = [
    {
      id: 'course-kids',
      number: '01',
      age: '國小階段｜6–12 歲',
      title: '兒童美語',
      description: '以聽說讀寫整合為核心，搭配主題單字、句型練習、自然發音與閱讀理解，幫助孩子穩定銜接學校英文與長期語言能力。',
      points: ['聽力與口說互動練習', '自然發音與拼讀基礎', '單字、句型、閱讀與寫作整合', '搭配 Milton Review Mission 回家複習']
    },
    {
      id: 'course-preschool',
      number: '02',
      age: '幼兒階段｜3–6 歲',
      title: '幼兒美語',
      description: '透過歌曲、故事、遊戲、圖像與生活主題建立英文聲音感，讓孩子在輕鬆安全的環境中自然接觸英文，培養開口與模仿能力。',
      points: ['英文兒歌與故事引導', '生活主題字彙啟蒙', '遊戲式互動與肢體反應', '建立孩子對英文的好感與自信']
    },
    {
      id: 'course-after-school',
      number: '03',
      age: '國小課後｜依年級分組',
      title: '課後輔導',
      description: '協助孩子完成學校作業、複習課堂內容與建立讀書習慣。老師會依照孩子的學習狀況給予提醒、陪伴與整理，讓家長更安心。',
      points: ['學校作業陪伴與訂正', '英文與學科基礎複習', '學習習慣與時間管理', '定期回饋孩子學習狀況']
    },
    {
      id: 'course-theme',
      number: '04',
      age: '主題式學習｜依課程主題開班',
      title: '主題探索課程',
      description: '以孩子感興趣的主題出發，結合英文、閱讀、文化、創作與表達，讓英文成為探索世界的工具，而不是只停留在考試科目。',
      points: ['節慶文化與生活英文', '故事閱讀與創意表達', '主題活動與小作品', '培養好奇心與國際視野']
    }
  ];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Milton Home">
          <img src="/assets/milton-logo-horizontal.jpg" alt="Milton 麋爾頓美語" />
        </a>
        <nav>
          <a href="#about">關於 Milton</a>
          <a href="#courses">課程介紹</a>
          <a href="#features">教學特色</a>
          <a href="#review">學生作業</a>
          <a href="#contact">聯絡我們</a>
        </nav>
        <a className="header-cta" href={REVIEW_APP_URL}>學生入口</a>
      </header>

      <section id="top" className="hero hero-3d">
        <div className="hero-bg-mark" aria-hidden="true">Milton</div>
        <div className="hero-content">
          <div className="eyebrow"><Sparkles size={18} /> 英語學習的好夥伴</div>
          <h1>在 Milton，英文成為孩子的超能力</h1>
          <p>
            麋爾頓美語陪伴孩子從聽、說、讀、寫開始，透過主題式課程、
            自然發音與回家複習系統，建立穩定的英文學習習慣。
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#courses">課程介紹 <ArrowRight size={18} /></a>
            <a className="secondary-btn" href={REVIEW_APP_URL}>進入學生作業系統</a>
          </div>
          <div className="hero-points">
            <span><CheckCircle2 size={18} /> 小班制互動學習</span>
            <span><CheckCircle2 size={18} /> 聽說讀寫整合</span>
            <span><CheckCircle2 size={18} /> 線上回家複習</span>
          </div>
        </div>

        <div className="hero-visual hero-visual-mockup" aria-label="Milton 3D 品牌主視覺">
          <div className="hero-glow" aria-hidden="true" />
          <img className="hero-3d-mascot" src="/assets/milton-3d-floating-mascot.png" alt="Milton 3D 麋鹿品牌主視覺" />
          <div className="floating-dot-grid" aria-hidden="true" />
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-label">About Milton</div>
        <div className="section-heading">
          <h2>孩子不只是學英文，而是建立敢開口的自信</h2>
          <p>
            我們相信英文學習應該是自然、快樂且有累積感的。
            Milton 透過清楚的課程分級、豐富的主題單字、聽力練習與老師追蹤，
            讓孩子每週都有看得見的進步。
          </p>
        </div>
        <div className="about-grid">
          <div className="about-card"><Users /><h3>小班制照顧</h3><p>讓老師能看見每個孩子的學習狀態，提供更即時的引導與鼓勵。</p></div>
          <div className="about-card"><School /><h3>主題式學習</h3><p>從生活情境出發，讓單字與句型不只是背誦，而是真正能使用。</p></div>
          <div className="about-card"><Headphones /><h3>回家複習系統</h3><p>學生可完成指定 Level / Unit 作業，老師後台可追蹤完成進度。</p></div>
        </div>
      </section>

      <section id="courses" className="section courses-section">
        <div className="section-label">Courses</div>
        <div className="section-heading course-heading">
          <h2>課程介紹</h2>
          <p>依照孩子的年齡、學校進度與英文程度安排課程，從基礎語感、聽說讀寫到課後學習支持，建立穩定的英文能力與學習自信。</p>
        </div>

        <div className="course-tabs" aria-label="課程快速導覽">
          <a href="#course-kids">兒童美語</a>
          <a href="#course-preschool">幼兒美語</a>
          <a href="#course-after-school">課後輔導</a>
          <a href="#course-theme">主題探索課程</a>
        </div>

        <div className="course-detail-list">
          {courses.map((course) => <CourseCard key={course.id} {...course} />)}
        </div>
      </section>

      <section id="features" className="section feature-band">
        <div>
          <div className="section-label">Why Milton</div>
          <h2>讓學習進度被看見，也讓孩子願意持續練習</h2>
        </div>
        <div className="feature-list">
          <div><Star /><strong>老師可指派作業</strong><span>指定班級的 Level / Unit，學生只能完成老師指派的內容。</span></div>
          <div><Lightbulb /><strong>學生練習有紀錄</strong><span>答對、錯誤、分數與完成進度都能保存在後台。</span></div>
          <div><Clock3 /><strong>適合低年級語速</strong><span>聽力練習已調整成較慢語速，幫助孩子聽清楚再拼字。</span></div>
        </div>
      </section>

      <section id="review" className="section review-section">
        <div className="review-card">
          <div>
            <div className="section-label">Student Area</div>
            <h2>Milton Review Mission</h2>
            <p>
              學生登入班級與姓名後，只會看到老師指定的 Level / Unit 作業。
              完成聽力拼字練習後，老師可在後台查看每一次作業紀錄。
            </p>
          </div>
          <a className="primary-btn" href={REVIEW_APP_URL}>進入學生作業系統 <ArrowRight size={18} /></a>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <div className="section-label">Contact</div>
          <h2>歡迎預約了解課程</h2>
          <p>想了解孩子適合哪一個班級或課程，歡迎透過 LINE 或電話與我們聯繫。</p>
        </div>
        <div className="contact-grid">
          <a className="contact-card" href={LINE_URL}><MessageCircle /><h3>LINE 官方帳號</h3><p>點此加入 LINE，詢問課程與試聽資訊。</p></a>
          <div className="contact-card"><Phone /><h3>電話聯絡</h3><p>請填入你的聯絡電話</p></div>
          <div className="contact-card"><MapPin /><h3>教室地址</h3><p>請填入你的教室地址</p></div>
        </div>
      </section>

      <footer>
        <img src="/assets/milton-logo-horizontal.jpg" alt="Milton 麋爾頓美語" />
        <p>© {new Date().getFullYear()} 英語學習的好夥伴. All rights reserved.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
