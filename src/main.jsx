import React from 'react';
import { createRoot } from 'react-dom/client';
import { BookOpen, MessageCircle, Sparkles, Users, PencilLine, Headphones, ArrowRight, MapPin, Phone, GraduationCap, Star, CheckCircle2 } from 'lucide-react';
import './styles.css';

const REVIEW_APP_URL = 'https://milton-vocab-app.vercel.app/';
const LINE_URL = '#';

function App() {
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

      <section id="top" className="hero">
        <div className="hero-content">
          <div className="eyebrow"><Sparkles size={18} /> Milton Kids Academy</div>
          <h1>讓孩子在溫暖、有趣、有系統的環境中愛上英文</h1>
          <p>麋爾頓美語陪伴孩子從聽、說、讀、寫開始，透過主題式課程、自然發音與回家複習系統，建立穩定的英文學習習慣。</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#courses">了解課程 <ArrowRight size={18} /></a>
            <a className="secondary-btn" href={REVIEW_APP_URL}>進入學生作業系統</a>
          </div>
          <div className="hero-points">
            <span><CheckCircle2 size={18} /> 小班制互動學習</span>
            <span><CheckCircle2 size={18} /> 聽說讀寫整合</span>
            <span><CheckCircle2 size={18} /> 線上回家複習</span>
          </div>
        </div>
        <div className="hero-logo-card">
          <img src="/assets/milton-logo-full.jpg" alt="Milton 麋爾頓美語完整 Logo" />
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-label">About Milton</div>
        <div className="section-heading">
          <h2>孩子不只是學英文，而是建立敢開口的自信</h2>
          <p>我們相信英文學習應該是自然、快樂且有累積感的。Milton 透過清楚的課程分級、豐富的主題單字、聽力練習與老師追蹤，讓孩子每週都有看得見的進步。</p>
        </div>
        <div className="about-grid">
          <div className="about-card"><Users /><h3>小班制照顧</h3><p>讓老師能看見每個孩子的學習狀態，提供更即時的引導與鼓勵。</p></div>
          <div className="about-card"><BookOpen /><h3>主題式學習</h3><p>從生活情境出發，讓單字與句型不只是背誦，而是真正能使用。</p></div>
          <div className="about-card"><Headphones /><h3>回家複習系統</h3><p>學生可完成指定 Level / Unit 作業，老師後台可追蹤完成進度。</p></div>
        </div>
      </section>

      <section id="courses" className="section courses-section">
        <div className="section-label">Courses</div>
        <div className="section-heading">
          <h2>課程介紹</h2>
          <p>依照孩子年齡與英文程度規劃課程，循序建立聽說讀寫能力。</p>
        </div>
        <div className="course-grid">
          <article><GraduationCap /><h3>幼兒美語</h3><p>透過歌曲、故事、遊戲與生活主題，建立英文聲音感與開口習慣。</p></article>
          <article><BookOpen /><h3>國小美語</h3><p>結合教材進度、單字拼寫、聽力理解與句型練習，穩定累積英文能力。</p></article>
          <article><PencilLine /><h3>自然發音</h3><p>訓練字母音、拼讀能力與發音規則，幫助孩子看字能讀、聽音能拼。</p></article>
          <article><MessageCircle /><h3>口說表達</h3><p>透過問答、角色扮演與主題發表，培養孩子敢說、會說的信心。</p></article>
        </div>
      </section>

      <section id="features" className="section feature-band">
        <div><div className="section-label">Why Milton</div><h2>讓學習進度被看見，也讓孩子願意持續練習</h2></div>
        <div className="feature-list">
          <div><Star /><strong>老師可指派作業</strong><span>指定班級的 Level / Unit，學生只能完成老師指派的內容。</span></div>
          <div><Star /><strong>學生練習有紀錄</strong><span>答對、錯誤、分數與完成進度都能保存在後台。</span></div>
          <div><Star /><strong>適合低年級語速</strong><span>聽力練習已調整成較慢語速，幫助孩子聽清楚再拼字。</span></div>
        </div>
      </section>

      <section id="review" className="section review-section">
        <div className="review-card">
          <div>
            <div className="section-label">Student Area</div>
            <h2>Milton Review Mission</h2>
            <p>學生登入班級與姓名後，只會看到老師指定的 Level / Unit 作業，完成聽力拼字練習後，老師可在後台查看每一次作業紀錄。</p>
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
        <p>© {new Date().getFullYear()} Milton Kids Academy. All rights reserved.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
