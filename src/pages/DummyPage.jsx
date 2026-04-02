import React from 'react';
import PropTypes from 'prop-types';

export default function DummyPage({ title }) {
  return (
    <div className="dummy-page">
      <h2>{title}</h2>
      <p>This is a placeholder page demonstrating React Router navigation.</p>
    </div>
  );
}

// React Props Validation
DummyPage.propTypes = {
  title: PropTypes.string.isRequired,
};
