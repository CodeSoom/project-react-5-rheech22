import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import Calorie from './styles/Calorie';

import { get } from './utils';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

const Calories = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
});

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
    <Container>
      <h1>Result Sheet</h1>
      <Calories>
        <Calorie calorie={bmr} />
        <Calorie calorie={result} />
        <Calorie calorie={tdee} />
      </Calories>
    </Container>
  );
}
