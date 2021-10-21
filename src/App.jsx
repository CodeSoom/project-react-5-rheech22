import styled from '@emotion/styled';

import CalculatorContainer from './CalculatorContainer';
import ResultSheet from './ResultSheet';

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
  return (
    <Container>
      <h1>My Cal</h1>
      <p>나에게 맞는 목표 칼로리를 계산하세요</p>
      <CalculatorContainer />
      <ResultSheet />
    </Container>
  );
}
