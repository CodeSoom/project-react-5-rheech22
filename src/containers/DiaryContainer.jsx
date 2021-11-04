import { useSelector } from 'react-redux';
import Diary from '../components/Diary';

import { get } from '../utils';

export default function DiaryContainer() {
  const { result } = useSelector(get('calories'));

  return (
    <>
      <Diary calories={result} />
    </>
  );
}
