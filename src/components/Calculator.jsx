import styled from '@emotion/styled';

import BodyStats from './Calculator/BodyStats';
import ActivityLevel from './Calculator/ActivityLevel';
import GoalButtons from './Calculator/GoalButtons';

const Container = styled.section({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '100%',
  height: '85vh',
});

const Button = styled.button({
  border: 'none',
  borderRadius: '.3em',
  padding: '1em',
  background: 'none',
  fontSize: '1em',
  fontWeight: '400',
  boxShadow: 'rgb(46, 204, 113) 0px 0px 0px 1px, rgb(255, 217, 19) 0px 0px 0px 2px, rgb(255, 156, 85) 0px 0px 0px 3px, rgb(255, 85, 85) 0px 0px 0px 4px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgb(46, 204, 113)',
    color: 'white',
  },
});

export default function Calculator({
  gender, activity,
  goalNumber, onChange,
  onClick,
}) {
  return (
    <Container>
      <BodyStats
        gender={gender}
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
      <Button
        type="button"
        onClick={onClick}
      >
        Calculate
      </Button>
    </Container>
  );
}
