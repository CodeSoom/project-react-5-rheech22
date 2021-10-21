import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import Calories from './Calories';

import { get } from './utils';

const Container = styled.article({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

const CaloriesSection = styled.section({
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
      <CaloriesSection>
        <Calories
          name="BMR"
          value={bmr}
        />
        <Calories
          name="My Calories"
          value={result}
        />
        <Calories
          name="TDEE"
          value={tdee}
        />
      </CaloriesSection>
    </Container>
  );
}
