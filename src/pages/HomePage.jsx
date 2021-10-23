import styled from '@emotion/styled';

import {
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { useSelector } from 'react-redux';

import CalculatorContainer from '../containers/CalculatorContainer';
import ResultContainer from '../containers/ResultContainer';

import { get } from '../utils';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '1em',
  '& h1, h2, h3': {
    padding: '0',
    margin: '0',
  },
  '& h1': {
    fontSize: '2em',
    fontWeight: '300',
  },
  '& h2': {
    fontSize: '1.6em',
    fontWeight: '300',
  },
  '& h3': {
    fontSize: '1.3em',
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
      <p>당신의 칼로리를 확인하세요</p>
      <CalculatorContainer />
      <ResultContainer />
    </Container>
  );
}
