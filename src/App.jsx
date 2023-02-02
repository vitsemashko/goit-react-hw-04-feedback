import React from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

const App = () => {
  const [good, setGood] = React.useState(0);
  const [neutral, setNeutral] = React.useState(0);
  const [bad, setBad] = React.useState(0);
  const onGoodClick = e => {
    setGood(s => {
      return s + 1;
    });
  };
  const onNeutralClick = e => {
    setNeutral(s => {
      return s + 1;
    });
  };
  const onBadClick = e => {
    setBad(s => {
      return s + 1;
    });
  };
  const onButtonClick = e => {
    switch (e.target.textContent) {
      case 'good':
        onGoodClick();
        break;
      case 'neutral':
        onNeutralClick();
        break;
      case 'bad':
        onBadClick();
        break;
      default:
        break;
    }
  };
  const onCountTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onClick={onButtonClick}
        />
      </Section>
      <Section title="Statistics">
        {onCountTotalFeedback() ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={onCountTotalFeedback(good, neutral, bad)}
            positiveFeedback={countPositiveFeedbackPercentage(
              good,
              neutral,
              bad
            )}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
