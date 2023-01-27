import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div className={css.option}>
      <p className={css.good}>Good: {good}</p>
      <p className={css.neutral}>Neutral: {neutral}</p>
      <p className={css.bad}>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p className={css.positive}>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
