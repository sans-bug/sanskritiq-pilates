// Fulfilling: React Hooks (useState, useEffect)
import React, { useState, useEffect } from 'react';
import heroImage from '../assets/hero-image.png';

export default function HeroSection() {
  // Using React State via Hook
  const [focusText, setFocusText] = useState("Core Alignment");

  // Using React Lifecycle via Hook
  useEffect(() => {
    const focuses = ["Core Alignment", "Breath Control", "Full Body Flow", "Deep Stretch"];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % focuses.length;
      setFocusText(focuses[i]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Find Your Flow State</h1>
        <p className="hero-subtitle">
          Join our rhythmic movement community. Whether it&apos;s the strength of the Reformer or the focus of Mat work, your practice starts here.
        </p>
      </div>
      <div className="hero-image-container">
        <img 
          src={heroImage}
          alt="Pilates Reformer" 
          className="hero-image" 
        />
        <div className="hero-badge">
          <div className="badge-label">TODAY&apos;S FOCUS</div>
          <div className="badge-value">{focusText}</div>
        </div>
      </div>
    </section>
  );
}
