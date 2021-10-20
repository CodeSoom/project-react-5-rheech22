import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import BodyStats from './BodyStats';
import ActivityLevel from './ActivityLevel';

import {
  changeBodyStats,
  calculateCalories,
} from './slice';

import { get, getGoalNumber } from './utils';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

const Button = styled.button({
  background: 'none',
  fontSize: '1em',
  fontWeight: 400,
});

function GoalButtons({ onChange }) {
  function handleClick(event) {
    const { innerText } = event.target;
    const value = getGoalNumber(innerText);
    onChange({ name: 'goalNumber', value });
  }

  return (
    <div>
      <span>목표</span>
      <div>
        <button type="button" onClick={handleClick}>감량</button>
        <button type="button" onClick={handleClick}>유지</button>
        <button type="button" onClick={handleClick}>증량</button>
      </div>
    </div>
  );
}

export default function CalculatorContainer() {
  const dispatch = useDispatch();

  const { gender, activity } = useSelector(get('bodyStats'));

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
        onChange={handleChangeBodyStats}
      />
      <Button type="button" onClick={handleClickButton}>Click to calculate!</Button>
    </Container>
  );
}
