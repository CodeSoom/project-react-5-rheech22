import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import BodyStats from './BodyStats';
import ActivityLevel from './ActivityLevel';

import {
  changeBodyStats,
  calculateCalories,
} from './slice';

import { get } from './utils';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

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
      <button type="button" onClick={handleClickButton}>Calculate</button>
    </Container>
  );
}
