import { Component } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.jsx';
import Notification from './components/Notification/Notification.jsx';
import Section from './components/Section/Section.jsx';
import Statistics from './components/Statistics/Statistics.jsx';

;
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,

  };
  onLeaveFeedback = (e) => {
    const target = e.target.value;
    this.setState((prev) => ({ [target]: prev[target] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositivePercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    return total ? Math.ceil((good / total) * 100) : 0;

  }
  render() {
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, countPositivePercentage, onLeaveFeedback } = this
    return (
      
        <Section title="Please leave feedback">


          <FeedbackOptions options={this.state} onLeaveFeedback={onLeaveFeedback} />

          {(countTotalFeedback() > 0) ?
            <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositivePercentage()} /> :
            <Notification message="There is no feedback" />}
          
          </Section>
        );
  }
}

        export default App;


