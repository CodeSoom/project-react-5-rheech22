import { useSelector } from 'react-redux';

import CalculatorContainer from './CalculatorContainer';

import { get } from './utils';

export default function App() {
  const {
    bmr,
    tdee,
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
      </div>
    );
  }

  return (
    <div>
      <h1>TDEE</h1>
      <CalculatorContainer />
      <ResultSheet />
    </div>
  );
}
