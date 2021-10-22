import styled from '@emotion/styled';

import {
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { useSelector } from 'react-redux';

import CalculatorContainer from './CalculatorContainer';
import ResultSheet from './ResultSheet';

import { get } from './utils';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& h1': {
    padding: '1em 0 0 0',
    margin: '0',
    fontSize: '2em',
    fontWeight: '400',
  },
});

export default function App() {
  const { result } = useSelector(get('calories'));

  const myRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    if (result) {
      myRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }, [result]);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  return (
    <Container ref={myRef}>
      <h1>My Cal</h1>
      <p>나에게 맞는 목표 칼로리를 계산하세요</p>
      <CalculatorContainer />
      <ResultSheet />
    </Container>
  );
}
