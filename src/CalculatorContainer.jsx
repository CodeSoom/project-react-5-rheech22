import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import BodyStats from './BodyStats';
import ActivityLevel from './ActivityLevel';
import GoalButtons from './GoalButtons';

import { changeBodyStats, calculateCalories } from './slice';

import { get } from './utils';

const Container = styled.div({
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

export default function CalculatorContainer() {
  const dispatch = useDispatch();

  const {
    gender,
    activity,
    goalNumber,
  } = useSelector(get('bodyStats'));

  const handleChangeBodyStats = ({ name, value }) => {
    dispatch(changeBodyStats({ name, value }));
  };

  const handleClickButton = () => {
    dispatch(calculateCalories());
  };

  return (
    <Container>
      <BodyStats
        gender={gender}
        onChange={handleChangeBodyStats}
      />
      <ActivityLevel
        onChange={handleChangeBodyStats}
        activity={activity}
      />
      <GoalButtons
        goalNumber={goalNumber}
        onChange={handleChangeBodyStats}
      />
      <Button
        type="button"
        onClick={handleClickButton}
      >
        Calculate
      </Button>
    </Container>
  );
}
