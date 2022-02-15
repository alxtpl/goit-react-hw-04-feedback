import { useState } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.jsx';
import Notification from './components/Notification/Notification.jsx';
import Section from './components/Section/Section.jsx';
import Statistics from './components/Statistics/Statistics.jsx';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allFeedback = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositivePercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={allFeedback} onLeaveFeedback={onLeaveFeedback} />

      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositivePercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};

export default App;
