import { useDispatch, useSelector } from 'react-redux';

import BodyStatsInput from './BodyStatsInput';

import {
  changeBodyStats,
  calculateCalories,
} from './slice';

import { get } from './utils';

export default function App() {
  const dispatch = useDispatch();

  const {
    male,
    female,
    age,
    height,
    weight,
    activity,
  } = useSelector(get('bodyStats'));

  const {
    bmr,
    tdee,
  } = useSelector(get('calories'));

  const handleChangeBodyStats = ({ name, value }) => {
    dispatch(changeBodyStats({ name, value }));
  };

  const handleClickButton = () => {
    if (!age || !height || !weight || !activity || !(male || female)) {
      return;
    }
    dispatch(calculateCalories());
  };

  return (
    <div>
      <h1>TDEE</h1>
      <div>
        <span>성별</span>
        <BodyStatsInput
          label="남성"
          type="checkbox"
          inputName="male"
          onChange={handleChangeBodyStats}
          isChecked={male}
        />
        <BodyStatsInput
          label="여성"
          type="checkbox"
          inputName="female"
          onChange={handleChangeBodyStats}
          isChecked={female}
        />
      </div>
      <BodyStatsInput
        label="나이"
        type="text"
        inputName="age"
        onChange={handleChangeBodyStats}
      />
      <BodyStatsInput
        label="키"
        type="text"
        inputName="height"
        onChange={handleChangeBodyStats}
      />
      <BodyStatsInput
        label="몸무게"
        type="text"
        inputName="weight"
        onChange={handleChangeBodyStats}
      />
      <BodyStatsInput
        label="활동량"
        type="range"
        inputName="activity"
        onChange={handleChangeBodyStats}
      />
      <button type="button" onClick={handleClickButton}>Calculate</button>
      <div>
        BMR:
        {' '}
        {bmr}
        {' '}
        TDEE:
        {' '}
        {tdee}
      </div>
    </div>
  );
}
