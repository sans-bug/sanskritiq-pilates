import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../home.css';
import studioHeroImg from '../assets/studio_hero.png';
import altPilatesImg from '../assets/fluidity_vases.png'; 

export default function Home() {
  const navigate = useNavigate();
  const [activeWord, setActiveWord] = useState("Quiet");

  useEffect(() => {
    const words = ["Quiet", "Inner", "Deep"];
    let count = 0;
    const interval = setInterval(() => {
      count = (count + 1) % words.length;
      setActiveWord(words[count]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="new-home">
      {/* Hero */}
      <section className="home-hero">
        <img src={studioHeroImg} alt="Pilates Studio" className="hero-bg" />
        <div className="home-hero-content">
          <div className="hh-subtitle">MINDFUL MOVEMENT</div>
          <h1 className="hh-title">
            Find Your <br/><i>{activeWord}</i><br/> Strength.
          </h1>
          <p className="hh-text">
            A boutique Pilates experience designed for the rhythmic soul. Transform your physical form through intentional alignment and breath.
          </p>
          <div className="hh-btns">
            <button className="btn-primary" style={{padding: '1rem 2rem'}} onClick={() => navigate('/book')}>BOOK A SESSION</button>
            <button className="btn-transparent" style={{color: '#5a2b30'}}>EXPLORE STUDIO &rarr;</button>
          </div>
        </div>
      </section>

      {/* Why Pilates */}
      <section className="why-section">
        <div className="why-col">
          <h2 className="why-title">Why Pilates?</h2>
          <p className="why-text">
            At Sanskritiq, we view Pilates not as a workout, but as an architectural restoration of the body. By focusing on the core, we create a stable foundation for every other movement in your life.
          </p>
          
          <div className="why-feature">
            <div className="why-icon">☘</div>
            <div>
              <h3 className="why-feat-title">Restorative Alignment</h3>
              <p style={{fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.5}}>Correcting postural imbalances through precise, controlled movement that engages the deep stabilizing muscles.</p>
            </div>
          </div>

          <div className="why-feature">
            <div className="why-icon">❖</div>
            <div>
              <h3 className="why-feat-title">Mental Clarity</h3>
              <p style={{fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.5}}>Cultivating a deep mind-body connection that reduces stress and enhances cognitive focus through rhythmic breath.</p>
            </div>
          </div>
        </div>
        <div className="why-col" style={{position: 'relative', marginTop: '2rem'}}>
          <div className="why-img-wrap">
            <img src={altPilatesImg} alt="Pilates alignment" className="why-img" />
            <div className="why-quote-block">
              <div className="why-quote-text">&quot;The first prerequisite of happiness is physical fitness.&quot;</div>
              <div className="why-quote-author">&mdash; JOSEPH PILATES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy/Method */}
      <section className="method-section">
        <div className="method-inner">
          <div className="m-header">
            <div>
              <div className="m-subtitle">THE SANSKRITIQ METHOD</div>
              <h2 className="m-title">An Editorial Approach to Wellness.</h2>
            </div>
            <button className="btn-outline-white">LEARN OUR PHILOSOPHY</button>
          </div>

          <div className="m-grid">
            <div className="m-card">
              <div className="m-card-num">01</div>
              <h3 className="m-card-title">Precision</h3>
              <p className="m-card-desc">Every movement is curated. We focus on the quality of motion rather than the quantity of repetitions.</p>
            </div>
            <div className="m-card">
              <div className="m-card-num">02</div>
              <h3 className="m-card-title">Breath</h3>
              <p className="m-card-desc">Breath is the thread that connects the mind to the muscle. Our sessions prioritize rhythmic breathing cycles.</p>
            </div>
            <div className="m-card">
              <div className="m-card-num">03</div>
              <h3 className="m-card-title">Flow</h3>
              <p className="m-card-desc">Transition smoothly from one exercise to the next, building heat and stamina through graceful continuity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Sessions */}
      <section className="sessions-section">
        <div className="s-header">
          <h2 className="s-title">Studio Sessions</h2>
          <p className="s-desc">Join our community for a transformative experience.</p>
        </div>

        <div className="bento-grid">
          {/* Large Card 1 */}
          <div className="bento-item bento-large-1">
            <div className="bento-badge">POPULAR CHOICE</div>
            <h3 className="bento-title">Classic Reformer</h3>
            <p className="bento-desc">A balanced flow on the reformer machine to strengthen and lengthen the whole body.</p>
            <div className="bento-footer">
              <span>60 MIN &bull; LEVEL 1-2</span>
              <div className="bento-icon">&rarr;</div>
            </div>
          </div>

          {/* Large Card 2 */}
          <div className="bento-item bento-large-2">
            <h3 className="bento-title" style={{color: 'var(--primary)'}}>Foundation Mat</h3>
            <p className="bento-desc" style={{marginTop: '1rem'}}>The core of Pilates. Master the essential movements and breathing patterns on the floor.</p>
            <div className="bento-footer">
              <span>45 MIN &bull; ALL LEVELS</span>
              <div className="bento-icon">+</div>
            </div>
          </div>

          {/* Small Card 1 */}
          <div className="bento-item bento-small">
            <h3 className="bento-title">Sculpt &amp; Pulse</h3>
            <div className="bento-footer" style={{marginTop: 'auto', borderTop: 'none'}}>
              <span>50 MIN</span>
              <div className="bento-icon" style={{backgroundColor: 'transparent', width:'auto', color:'var(--primary)'}}>&#9885;</div>
            </div>
          </div>

          {/* Small Card 2 */}
          <div className="bento-item bento-small">
            <h3 className="bento-title">Restorative Flow</h3>
            <div className="bento-footer" style={{marginTop: 'auto', borderTop: 'none'}}>
              <span>75 MIN</span>
              <div className="bento-icon" style={{backgroundColor: 'transparent', width:'auto', color:'var(--primary)'}}>&#10048;</div>
            </div>
          </div>

          {/* Small Card 3 (Dark) */}
          <div className="bento-item bento-small dark-accent">
            <h3 className="bento-title">Private Intro</h3>
            <div className="bento-footer" style={{marginTop: 'auto', borderTop: 'none'}}>
              <span>60 MIN</span>
              <div className="bento-icon" style={{border: 'none', width: 'auto'}}>&#128100;</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
