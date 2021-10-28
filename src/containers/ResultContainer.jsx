import styled from '@emotion/styled';

import {
  useCallback,
  useEffect,
  useRef,
} from 'react';

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
  height: 'fit-content',
  backgroundImage: 'linear-gradient(to left top, #d16ba5, #af6dad, #8c6eac, #6b6ea3, #516a94, #517496, #577e96, #628695, #80a1aa, #a0bcbf, #c3d8d7, #e6f4f1)',
  color: '#3F627A',
});

export default function ResultContainer() {
  const {
    bmr,
    tdee,
    result,
  } = useSelector(get('calories'));

  const myRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    if (result) {
      myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
    }
  }, [result]);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  if (!bmr || !tdee || !result) {
    return (
      <>
      </>
    );
  }

  return (
    <Container ref={myRef}>
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
