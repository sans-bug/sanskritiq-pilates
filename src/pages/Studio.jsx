import React from 'react';
import '../studio.css';
import imgMain from '../assets/studio_hero.png';
import imgStool from '../assets/fluidity_vases.png';
import imgSprings from '../assets/precision.png';
import imgHall from '../assets/fluidity_wave.png';
import imgLounge from '../assets/centering.png';
import imgWoman from '../assets/hero-image.png';

export default function Studio() {

  return (
    <div className="studio-page">
      {/* Header */}
      <section className="studio-header">
        <div className="st-title-area">
          <div className="st-subtitle">THE SANCTUARY</div>
          <h1 className="st-title">
            Space for <br/><i>Intentional</i><br/>Movement.
          </h1>
        </div>
        <p className="st-intro">
          A curated environment designed to quiet the mind and challenge the body. Our studio is built on the principles of light, breath, and structural integrity.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="studio-gallery">
        <div className="gal-item gal-main">
          <img src={imgMain} alt="Reformer Studio" className="gal-img" />
        </div>
        <div className="gal-item gal-top-right">
          <img src={imgStool} alt="Minimal decor" className="gal-img" />
        </div>
        <div className="gal-item gal-bot-right">
          <img src={imgSprings} alt="Precision springs" className="gal-img" />
          <div className="gal-badge">PRECISION</div>
        </div>
        <div className="gal-item gal-bot-left">
          <img src={imgHall} alt="Sunlit hall" className="gal-img" />
          <div className="gal-overlay-bot">
            <div className="gal-quote">&quot;Let light be your first instructor&quot;</div>
          </div>
        </div>
        <div className="gal-item gal-bot-mid-right" style={{backgroundColor: '#e7d8ce'}}>
          <img src={imgLounge} alt="Lounge Area" className="gal-img" style={{opacity: 0.6}}/>
          <div className="gal-text-overlay">
            <h3 className="gal-o-title" style={{color: '#5a2b30'}}>The Transition Lounge</h3>
            <div className="gal-o-desc" style={{color: '#5a2b30'}}>A SPACE TO GROUND YOURSELF BEFORE AND AFTER PRACTICE</div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="arch-section">
        <div className="arch-img-col">
          <img src={imgWoman} alt="Pilates workout" className="arch-img" />
          <div className="arch-floating-block">
            <div className="arch-f-icon">&#10045;</div>
            <div className="arch-f-text">
              Elevating the standards of private wellness through curated environment.
            </div>
          </div>
        </div>

        <div className="arch-text-col">
          <h2 className="arch-title">Architectural <br/><i>Purity.</i></h2>
          
          <div className="arch-feature">
            <div className="arch-feat-icon">&#8748;</div>
            <div>
              <div className="arch-feat-title">HEPA-FILTERED AIRFLOW</div>
              <p className="arch-feat-desc">Continuous ventilation systems designed for optimal respiratory focus during deep work.</p>
            </div>
          </div>

          <div className="arch-feature">
            <div className="arch-feat-icon">&#9728;</div>
            <div>
              <div className="arch-feat-title">CIRCADIAN LIGHTING</div>
              <p className="arch-feat-desc">Studio lighting that shifts color temperature to match the natural external rhythm of the day.</p>
            </div>
          </div>

          <div className="arch-feature">
            <div className="arch-feat-icon">&#9842;</div>
            <div>
              <div className="arch-feat-title">SUSTAINABLY SOURCED</div>
              <p className="arch-feat-desc">Our equipment features FSC-certified wood and non-toxic, hypoallergenic upholstery.</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="s-cta-section">
        <h2 className="s-cta-title">Ready to step inside?</h2>
        <p className="s-cta-desc">Join us for a private orientation and experience the Sanskritiq environment firsthand.</p>
        <div className="s-cta-btns">
          <button className="btn-white">VIEW AVAILABILITY</button>
          <button className="btn-outline-white">TAKE VIRTUAL TOUR</button>
        </div>
      </section>
    </div>
  );
}
