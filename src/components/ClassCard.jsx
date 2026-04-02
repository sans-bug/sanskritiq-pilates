// Fulfilling: React Props, React Props Validation (PropTypes)
import React from 'react';
import PropTypes from 'prop-types';

export default function ClassCard({ type, time, title, desc, instructor, isDark, isFull }) {
  const isWaitlist = isFull;
  
  return (
    <div className={`class-card ${isDark ? 'dark' : ''}`}>
      <div className="card-header">
        <span className="class-type-badge">{type}</span>
        <span className="class-time">{time}</span>
      </div>
      
      <h3 className="class-name">{title}</h3>
      <p className="class-desc">{desc}</p>
      
      <div className="instructor-info">
        <div className="instructor-avatar">
           {/* Placeholder for avatar, could be an img tag */}
        </div>
        <span className="instructor-name">Instructor: {instructor}</span>
      </div>
      
      <div className="card-footer">
        {isWaitlist ? (
           <div style={{width: '100%'}}>
              <button className="btn-primary btn-block" style={{backgroundColor: '#6b3036'}}>WAITLIST</button>
              <div className="status-full">CLASS FULL <span className="waitlist-icon">!</span></div>
           </div>
        ) : (
          <button className={`btn-primary btn-block ${isDark ? 'btn-light' : ''}`}>
            {isDark ? 'REQUEST SLOT' : 'SIGN UP'}
          </button>
        )}
      </div>
    </div>
  );
}

// React Props Validation using PropTypes
ClassCard.propTypes = {
  type: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
  isFull: PropTypes.bool
};

ClassCard.defaultProps = {
  isDark: false,
  isFull: false
};
