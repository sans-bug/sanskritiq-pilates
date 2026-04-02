import React, { useState } from 'react';
import '../book.css';
import heroImage from '../assets/hero-image.png';

const sessionTypes = [
  { id: 'private', title: 'Private', desc: '1-on-1 personalized attention.', price: 120, icon: '👤' },
  { id: 'semi', title: 'Semi-Private', desc: 'Focused group of 3-4 people.', price: 65, icon: '👥' },
  { id: 'duet', title: 'Duet', desc: 'Perfect for couples or friends.', price: 85, icon: '🧘‍♀️' },
];

const instructors = [
  { id: 'elena', name: 'Elena R.', init: 'ER' },
  { id: 'marcus', name: 'Marcus T.', init: 'MT' },
  { id: 'sofia', name: 'Sofia K.', init: 'SK' },
  { id: 'lila', name: 'Lila V.', init: 'LV' },
];

const times = ['08:00 AM', '09:30 AM', '11:00 AM', '01:00 PM', '04:30 PM', '06:00 PM'];

const dates = [
  { day: 'MON', date: 28, faded: true, full: 'Oct 28, 2026' },
  { day: 'TUE', date: 29, faded: true, full: 'Oct 29, 2026' },
  { day: 'WED', date: 30, faded: true, full: 'Oct 30, 2026' },
  { day: 'THU', date: 1, faded: false, full: 'Nov 1, 2026' },
  { day: 'FRI', date: 2, faded: false, full: 'Nov 2, 2026' },
  { day: 'SAT', date: 3, faded: false, full: 'Nov 3, 2026' },
  { day: 'SUN', date: 4, faded: false, full: 'Nov 4, 2026' },
  
  { day: '', date: 5, faded: false, full: 'Nov 5, 2026' },
  { day: '', date: 6, faded: false, full: 'Nov 6, 2026' },
  { day: '', date: 7, faded: false, full: 'Nov 7, 2026' },
  { day: '', date: 8, faded: false, full: 'Nov 8, 2026' },
  { day: '', date: 9, faded: false, full: 'Nov 9, 2026' },
  { day: '', date: 10, faded: false, full: 'Nov 10, 2026' },
  { day: '', date: 11, faded: false, full: 'Nov 11, 2026' },
];

export default function Book() {
  const [session, setSession] = useState(sessionTypes[0]);
  const [instructor, setInstructor] = useState(instructors[0]);
  const [dateObj, setDateObj] = useState(dates[9]); // preset to Nov 7
  const [time, setTime] = useState(times[1]); // preset 09:30 AM

  const handleBooking = () => {
    alert(`Successfully booked! \nSession: ${session.title}\nInstructor: ${instructor.name}\nDate: ${dateObj.full} at ${time}`);
  };

  return (
    <div className="book-page">
      {/* Header */}
      <section className="book-header">
        <div className="bh-text">
          <div className="bh-subtitle">RESERVATION</div>
          <h1 className="bh-title">Define Your<br/><i>Flow.</i></h1>
          <p className="bh-desc">
            Select your preferred session type and instructor to begin your journey toward rhythmic balance and physical strength.
          </p>
        </div>
        <div className="bh-image-wrapper">
          <img src={heroImage} alt="Pilates definition" className="bh-image" />
        </div>
      </section>

      <div className="book-content">
        {/* Left Form Area */}
        <div className="bc-left">
          
          {/* Session Type */}
          <div className="form-section">
            <h2 className="section-title">Choose Session Type</h2>
            <div className="session-cards">
              {sessionTypes.map(st => (
                <div 
                  key={st.id} 
                  className={`scard ${session.id === st.id ? 'active' : ''}`}
                  onClick={() => setSession(st)}
                >
                  <div className="scard-icon">{st.icon}</div>
                  <h3 className="scard-title">{st.title}</h3>
                  <p className="scard-desc">{st.desc}</p>
                  <div className="scard-price">${st.price}/hr</div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructor Selection */}
          <div className="form-section">
            <h2 className="section-title">Select Instructor</h2>
            <div className="instructor-list">
              {instructors.map(inst => (
                <div 
                  key={inst.id} 
                  className={`instructor-item ${instructor.id === inst.id ? 'active' : ''}`}
                  onClick={() => setInstructor(inst)}
                >
                  <div className="inst-avatar">{inst.init}</div>
                  <div className="inst-name">{inst.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Date Picker (Calendar mock) */}
          <div className="form-section">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h2 className="section-title">Choose Date</h2>
              <div className="cal-header">
                <div className="cal-nav">&lt;</div>
                <div className="cal-nav">&gt;</div>
              </div>
            </div>
            <div className="calendar-wrap">
              <div className="cal-grid">
                {dates.slice(0, 7).map((d, i) => (
                  <div key={i} className="cal-day-name">{d.day}</div>
                ))}
                
                {dates.map((d, i) => (
                  <div 
                    key={i} 
                    className={`cal-date ${d.faded ? 'faded' : ''} ${dateObj.date === d.date && !d.faded ? 'active' : ''}`}
                    onClick={() => !d.faded && setDateObj(d)}
                  >
                    {d.date}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Time Selection */}
          <div className="form-section">
            <h2 className="section-title">Available Time</h2>
            <div className="time-pills">
              {times.map(t => (
                <button 
                  key={t}
                  className={`tpill ${time === t ? 'active' : ''}`}
                  onClick={() => setTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Summary Sidebar */}
        <div className="bc-right">
          <div className="summary-pane">
            <h3 className="sum-title">Booking Summary</h3>
            
            <div className="sum-row">
              <span className="sum-label">SESSION</span>
              <div>
                <div className="sum-val">{session.title} Reformer</div>
                <span className="sum-sub">with {instructor.name}</span>
              </div>
            </div>

            <div className="sum-row">
              <span className="sum-label">DATE</span>
              <span className="sum-val">{dateObj.full}</span>
            </div>

            <div className="sum-row">
              <span className="sum-label">TIME</span>
              <span className="sum-val">{time}</span>
            </div>

            <div className="sum-row sum-total-row">
              <span className="sum-label">Total</span>
              <span className="sum-total-val">${session.price.toFixed(2)}</span>
            </div>

            <button className="btn-primary btn-confirm" onClick={handleBooking}>
              Confirm Booking
            </button>
            <p className="sum-policy">
              Cancellation policy: Free cancellation up to 24 hours before your session starts.
            </p>
          </div>

          {/* Prepare for Flow Graphic */}
          <div className="prepare-flow">
            <h4 className="pf-title">Prepare for Flow</h4>
            <p className="pf-desc">Arrive 10 minutes early to settle in and enjoy a complimentary organic tea.</p>
            <div className="pf-icon">&#10046;</div>
          </div>
        </div>

      </div>
    </div>
  );
}
