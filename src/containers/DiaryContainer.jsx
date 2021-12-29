import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Diary from '../components/Diary';

import { calculateMacro, setDiaryCalories } from '../slice';

import { get } from '../utils';

export default function DiaryContainer() {
  const dispatch = useDispatch();

  const { result } = useSelector(get('calories'));
  const { calories } = useSelector(get('diaryValues'));

  useEffect(() => {
    dispatch(setDiaryCalories(result));
  }, []);

  // useEffect(() => {
  //   dispatch(calculateMacro(null));
  // }, [calories]);

  const handleChangeValues = (value) => {
    dispatch(setDiaryCalories(value));
  };

  const handleChangeOptions = (value) => {
    dispatch(calculateMacro(value));
  };

  if (!calories) {
    return (
      <>
      </>
    );
  }

  return (
    <>
      <Diary
        calories={calories}
        onChangeCalories={handleChangeValues}
        onChangeOptions={handleChangeOptions}
      />
    </>
  );
}
