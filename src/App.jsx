import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import CalculatorContainer from './CalculatorContainer';

import { get } from './utils';

const Title = styled.h1({
  display: 'flex',
  justifyContent: 'center',
});

export default function App() {
  const {
    bmr,
    tdee,
    result,
  } = useSelector(get('calories'));

  function ResultSheet() {
    return (
      <div>
        BMR:
        {' '}
        {bmr}
        {' '}
        TDEE:
        {' '}
        {tdee}
        {' '}
        RESULT:
        {' '}
        {result}
      </div>
    );
  }

  return (
    <div>
      <Title>TDEE</Title>
      <CalculatorContainer />
      <ResultSheet />
    </div>
  );
}
