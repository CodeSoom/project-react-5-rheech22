import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import CaloriesSection from '../components/CaloriesSection';
import MacroSection from '../components/MacroSection';

import { get } from '../utils';

const Container = styled.article({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%',
  height: '100vh',
  paddingTop: '10vh',
});

export default function ResultContainer() {
  const {
    bmr,
    tdee,
    result,
  } = useSelector(get('calories'));

  if (!bmr || !tdee || !result) {
    return 'It needs all input values.';
  }

  return (
    <Container>
      <CaloriesSection
        bmr={bmr}
        tdee={tdee}
        result={result}
      />
      <MacroSection
        result={result}
      />
    </Container>
  );
}
