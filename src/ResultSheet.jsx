import { useSelector } from 'react-redux';

import { get } from './utils';

export default function ResultSheet() {
  const {
    bmr,
    tdee,
    result,
  } = useSelector(get('calories'));

  if (!bmr || !tdee || !result) {
    return 'Hello';
  }

  return (
    <div>
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
    </div>
  );
}
