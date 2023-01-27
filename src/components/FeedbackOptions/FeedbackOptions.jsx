import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onClick }) => {
  const options = [
    { id: '1', title: 'Good', variant: 'primary' },
    { id: '2', title: 'Neutral', variant: 'secondary' },
    { id: '3', title: 'Bad', variant: 'danger' },
  ];
  return (
    <div className={css.feedbackOptions}>
      {options.map(option => {
        return (
          <Button key={option.id} onClick={onClick} variant={option.variant}>
            {option.title}
          </Button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
