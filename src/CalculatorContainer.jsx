import { useDispatch, useSelector } from 'react-redux';

import BodyStats from './BodyStats';
import ActivityLevel from './ActivityLevel';

import {
  changeBodyStats,
  calculateCalories,
} from './slice';

import { get } from './utils';

export default function CalculatorContainer() {
  const dispatch = useDispatch();

  const { male, female } = useSelector(get('bodyStats'));

  const handleChangeBodyStats = ({ name, value }) => {
    dispatch(changeBodyStats({ name, value }));
  };

  const handleClickButton = () => {
    dispatch(calculateCalories());
  };

  return (
    <div>
      <BodyStats
        male={male}
        female={female}
        onChange={handleChangeBodyStats}
      />
      <ActivityLevel onChange={handleChangeBodyStats} />
      <button type="button" onClick={handleClickButton}>Calculate</button>
    </div>
  );
}
