import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import Calories from './Calories';
import MacroExample from './MacroExample';

import { get } from './utils';

const Container = styled.article({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%',
  height: '100vh',
  paddingTop: '10vh',
  '& h2': {
    marginBottom: '1em',
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#485460',
    color: 'white',
  },
});

const Section = styled.section({
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
    return 'It needs all input values.';
  }

  return (
    <Container>
      <Section>
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
      </Section>
      <h2>
        Macro Examples for
        {' '}
        {result}
        kcal
      </h2>
      <Section>
        <MacroExample
          name="lowCarbs"
          value={result}
        />
        <MacroExample
          name="highCarbs"
          value={result}
        />
        <MacroExample
          name="highFats"
          value={result}
        />
      </Section>
    </Container>
  );
}
