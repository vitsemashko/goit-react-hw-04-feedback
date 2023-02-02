import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onClick }) => {
  return (
    <div className={css.feedbackOptions}>
      {options.map(option => {
        return (
          <button key={option} className={css.optionBtn} onClick={onClick}>
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
