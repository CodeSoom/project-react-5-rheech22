import styled from '@emotion/styled';

import {
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { useSelector } from 'react-redux';

import CalculatorContainer from '../containers/CalculatorContainer';
import ResultContainer from '../containers/ResultContainer';
import Curve from '../components/Curve';

import { get } from '../utils';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '1em',
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundImage: 'linear-gradient(to right, #0f2b70, #1b3472, #253c73, #304573, #3b4d73, #3a5476, #3b5b78, #3f627a, #37697d, #31707e, #30777c, #367d78)',
  color: 'white',
  '& h1, h2, h3': {
    padding: '0',
    margin: '0',
  },
  '& > h1': {
    zIndex: '5',
    color: '#FFECCC',
    fontSize: '5em',
    fontWeight: '500',
    fontFamily: '"Galada", cursive',
  },
  '& h2': {
    fontSize: '1.6em',
    fontWeight: '300',
  },
  '& h3': {
    fontSize: '1.3em',
    fontWeight: '400',
  },
  '& > p': {
    fontSize: '.5em',
    fontWeight: '400',
    marginTop: '-5em',
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
      <Curve />
      <h1>CalCal</h1>
      <p>당신의 칼로리를 확인하세요</p>
      <CalculatorContainer />
      <ResultContainer />
    </Container>
  );
}
