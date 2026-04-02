// Fulfilling: React Components (Class), Component API, Lifecycle, Constructors, State
import React, { Component } from 'react';
import ClassCard from './ClassCard';

export default class WeeklySchedule extends Component {
  // Fulfilling requirement: React Constructors
  constructor(props) {
    super(props);
    // Fulfilling requirement: React State
    this.state = {
      activeDay: 21,
      isLoading: true
    };
    
    // Binding methods (Component API)
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  // Fulfilling requirement: React Component Lifecycle
  componentDidMount() {
    // Simulating API call component lifecycle behavior
    this.timer = setTimeout(() => {
      this.setState({ isLoading: false }); // Component API: setState
    }, 800);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  handleDayClick(dayNumber) {
    this.setState({ activeDay: dayNumber, isLoading: true });
    // Simulate fake load on day change
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 300);
  }

  render() {
    const days = [
      { name: 'MON', num: 21 },
      { name: 'TUE', num: 22 },
      { name: 'WED', num: 23 },
      { name: 'THU', num: 24 },
      { name: 'FRI', num: 25 },
      { name: 'SAT', num: 26 },
      { name: 'SUN', num: 27 },
    ];

    // Array logic using Component API to map through children
    const classData = [
      {
        type: 'REFORMER', time: '07:00 AM — 45 min', title: 'Advanced Flow',
        desc: 'Focus on eccentric control and breath coordination with Elena.',
        instructor: 'Elena Rossi', isDark: false, isFull: false
      },
      {
        type: 'MAT CLASS', time: '09:30 AM — 60 min', title: 'Foundational Mat',
        desc: 'Perfect for beginners. Mastering the 34 original exercises with Julian.',
        instructor: 'Julian Thorne', isDark: false, isFull: false
      },
      {
        type: 'PRIVATE', time: '11:00 AM — 50 min', title: 'Bespoke Session',
        desc: 'Tailored rehabilitation or performance conditioning with Sophia.',
        instructor: 'Sophia Chen', isDark: true, isFull: false
      },
      {
        type: 'REFORMER', time: '04:30 PM — 45 min', title: 'Athletic Reformer',
        desc: 'High-intensity sequences designed to build power and stamina.',
        instructor: 'Elena Rossi', isDark: false, isFull: true
      },
      {
        type: 'MAT CLASS', time: '06:00 PM — 75 min', title: 'Candlelight Yin Pilates',
        desc: 'A restorative evening practice combining classical mat work with deep fascia stretching.',
        instructor: 'Sophia Chen', isDark: false, isFull: false
      }
    ];

    return (
      <section className="schedule-section">
        <div className="schedule-header">
          <h2 className="schedule-title">Weekly Schedule</h2>
          <div className="date-navigator">
            <button className="date-nav-btn">&lt;</button>
            <span>OCTOBER 21 - 27</span>
            <button className="date-nav-btn">&gt;</button>
          </div>
        </div>

        <div className="day-selector">
          {days.map((day) => (
            <div 
              key={day.num} 
              className={`day-pill ${this.state.activeDay === day.num ? 'active' : ''}`}
              onClick={() => this.handleDayClick(day.num)}
            >
              <span className="day-name">{day.name}</span>
              <span className="day-number">{day.num}</span>
              {this.state.activeDay === day.num && <span style={{fontSize:'20px', lineHeight:'10px'}}>•</span>}
            </div>
          ))}
        </div>

        {this.state.isLoading ? (
          <div style={{textAlign: 'center', padding: '4rem', color: 'var(--primary)'}}>Loading schedule...</div>
        ) : (
          <div className="classes-grid">
            {classData.map((cls, index) => (
              <ClassCard 
                key={index}
                type={cls.type}
                time={cls.time}
                title={cls.title}
                desc={cls.desc}
                instructor={cls.instructor}
                isDark={cls.isDark}
                isFull={cls.isFull}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
