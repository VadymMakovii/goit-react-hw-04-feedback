import { useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Container } from 'components/App/App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const positivePercentage = Math.round((good * 100) / total) ?? 0;

  const stateKeys = Object.keys({ good, neutral, bad });

  const handleButtonClick = e => {
    switch (e.currentTarget.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        setBad(bad + 1);
    }
  };

  return (
    <Container>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={handleButtonClick}
          />
        }
      />
      <Section
        title="Statistics"
        children={
          total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )
        }
      />
    </Container>
  );
};


