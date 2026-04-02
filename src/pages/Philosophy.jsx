import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../philosophy.css';

import precisionImg from '../assets/precision.png';
import centeringImg from '../assets/centering.png';
import waveImg from '../assets/fluidity_wave.png';
import vasesImg from '../assets/fluidity_vases.png';

export default function Philosophy() {
  const navigate = useNavigate();
  return (
    <div className="philosophy-page">
      {/* Header Section */}
      <section className="phil-header">
        <div className="phil-header-content">
          <div className="phil-subtitle">THE ESSENCE OF SANSKRITIQ</div>
          <h1 className="phil-title">The Architecture<br />of Stillness.</h1>
          <p className="phil-quote">
            A philosophy grounded in the dialogue between the skeletal frame and the rhythmic breath.
          </p>
        </div>
      </section>

      {/* 01. Precision Section */}
      <section className="phil-section">
        <div className="phil-img-col">
          <img src={precisionImg} alt="Precision conceptual visualization" className="phil-img" />
        </div>
        <div className="phil-text-col">
          <h2 className="phil-num">01. Precision</h2>
          <div className="drop-cap-wrap">
            <span className="drop-cap">P</span>
            <p className="phil-body" style={{ margin: 0 }}>
              recision is not about rigidity; it is the art of eliminating the superfluous. At Sanskritiq, we believe that the most profound transformations occur in the smallest adjustments. Every fingertip placement, every degree of rotation in the hip, and every centimeter of reach is an intentional choice.
            </p>
          </div>
          <p className="phil-body" style={{ marginTop: '1.5rem' }}>
            We teach our practitioners to listen to the micro-movements of their anatomy. By focusing on the exact alignment of the spine and the engagement of the deep stabilizers, we move beyond generic exercise into the realm of somatic sculpture.
          </p>

          <div className="block-quote">
            &quot;In the pursuit of precision, we find the silence between the noise of habit.&quot;
          </div>
        </div>
      </section>

      {/* 02. Centering Section */}
      <section className="phil-section dark">
        <div className="phil-inner">
          <div className="phil-text-col">
            <div className="phil-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>THE CORE IDENTITY</div>
            <h2 className="phil-num">02. Centering</h2>
            <p className="phil-body" style={{ color: '#f7e8df' }}>
              The &apos;Powerhouse&apos; is more than a physiological center; it is the spiritual anchor of the Sanskritiq method. We approach centering as a meditative practice—pulling focus inward to find the steady, unwavering point from which all external movement originates.
            </p>
            <p className="phil-body" style={{ color: '#f7e8df' }}>
              By establishing a strong, resilient core, the limbs are liberated to move with newfound grace and power. Centering at Sanskritiq is a journey from the periphery back to the self.
            </p>
          </div>
          <div className="phil-img-col">
            <img src={centeringImg} alt="Centering conceptual moon" className="phil-img" />
          </div>
        </div>
      </section>

      {/* 03. Fluidity Section */}
      <section className="phil-section">
        <div className="phil-text-col">
          <h2 className="phil-num">03. Fluidity</h2>
          <p className="phil-body">
            Life is dynamic; movement should be no different. Fluidity is the glue that binds precision and centering into a seamless experience. Our sequences are designed to mimic the natural rhythms of water—constant, adaptable, and deceptively strong.
          </p>

          <div className="fluidity-cards">
            <div className="f-card">
              <h4>Transition</h4>
              <p>The space between poses is as vital as the poses themselves.</p>
            </div>
            <div className="f-card">
              <h4>Resonance</h4>
              <p>Allowing the vibration of the stretch to settle into the muscles.</p>
            </div>
          </div>

          <p className="phil-body">
            A Sanskritiq session is a continuous breath. We eliminate the stops and starts of traditional fitness, opting instead for a &quot;flow-state&quot; that persists long after you leave the studio.
          </p>
        </div>
        <div className="phil-img-col">
          <div className="stacked-imgs">
            <img src={waveImg} alt="Fluidity dark waves" />
            <img src={vasesImg} alt="Minimalist pastel plateau" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-box">
          <div className="cta-watermark">SANSKRITIQ</div>
          <div className="cta-content">
            <h2 className="cta-title">Begin Your Practice.</h2>
            <p className="cta-desc">
              Our philosophy is best understood through experience. Join us for an introductory session and feel the transformation of precision and flow.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => navigate('/book')}>BOOK YOUR FIRST CLASS</button>
              <button className="btn-outline">VIEW OUR JOURNAL</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
