import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import Calculator from '../components/Calculator';

import {
  changeBodyStats,
  calculateCalories,
} from '../slice';

import { get } from '../utils';

const Container = styled.section({
  width: '100%',
});

export default function CalculatorContainer() {
  const dispatch = useDispatch();

  const {
    gender,
    age,
    height,
    weight,
    activity,
    goalNumber,
  } = useSelector(get('bodyStats'));

  const calculatorMessage = useSelector(get('calculatorMessage'));

  const handleChangeBodyStats = ({ name, value }) => {
    dispatch(changeBodyStats({ name, value }));
  };

  const handleClickButton = () => {
    dispatch(calculateCalories());
  };

  return (
    <Container>
      <Calculator
        gender={gender}
        age={age}
        height={height}
        weight={weight}
        activity={activity}
        goalNumber={goalNumber}
        calculatorMessage={calculatorMessage}
        onChange={handleChangeBodyStats}
        onClick={handleClickButton}
      />
    </Container>
  );
}
