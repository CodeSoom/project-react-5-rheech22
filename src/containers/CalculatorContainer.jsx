import { useDispatch, useSelector } from 'react-redux';

import Calculator from '../components/Calculator';

import { changeBodyStats, calculateCalories } from '../slice';

import { get } from '../utils';

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

  const handleChangeBodyStats = ({ name, value }) => {
    dispatch(changeBodyStats({ name, value }));
  };

  const handleClickButton = () => {
    dispatch(calculateCalories());
  };

  return (
    <article>
      <Calculator
        gender={gender}
        age={age}
        height={height}
        weight={weight}
        activity={activity}
        goalNumber={goalNumber}
        onChange={handleChangeBodyStats}
        onClick={handleClickButton}
      />
    </article>
  );
}
