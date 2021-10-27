import styled from '@emotion/styled';

import BodyStats from './Calculator/BodyStats';
import ActivityLevel from './Calculator/ActivityLevel';
import GoalButtons from './Calculator/GoalButtons';

import Button from '../styles/button';

const Container = styled.section({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  '& > p': {
    marginBottom: '1em',
    height: '1em',
    color: '#FFECCC',
    fontWeight: '500',
  },
});

export default function Calculator({
  gender, age,
  height, weight,
  activity, goalNumber,
  onChange, onClick,
  calculatorMessage,
}) {
  return (
    <Container>
      <BodyStats
        gender={gender}
        age={age}
        height={height}
        weight={weight}
        onChange={onChange}
      />
      <ActivityLevel
        onChange={onChange}
        activity={activity}
      />
      <GoalButtons
        goalNumber={goalNumber}
        onChange={onChange}
      />
      <p>{calculatorMessage}</p>
      <Button
        type="button"
        onClick={onClick}
      >
        calculate
      </Button>
    </Container>
  );
}
