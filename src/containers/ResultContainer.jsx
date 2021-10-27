import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import CaloriesSection from '../components/CaloriesSection';
import MacroSection from '../components/MacroSection';

import CurveTop from '../components/CurveTop';

import { get } from '../utils';

const Container = styled.article({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  paddingTop: '10em',
  width: '100vw',
  height: '150vh',
  background: '#3F627A',
  color: 'black',
});

export default function ResultContainer() {
  const {
    bmr,
    tdee,
    result,
  } = useSelector(get('calories'));

  if (!bmr || !tdee || !result) {
    return (
      <>
      </>
    );
  }

  return (
    <Container>
      <CurveTop />
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
