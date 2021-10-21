import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import Calories from './Calories';

import { get, getMacros } from './utils';

const Container = styled.article({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

const Section = styled.section({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
});

function Nutrition({ name, calories }) {
  const macros = getMacros({ name, calories });
  const { carbs, protein, fats } = macros;

  return (
    <div>
      <div>
        {carbs}
        g
      </div>
      <div>
        {protein}
        g
      </div>
      <div>
        {fats}
        g
      </div>
    </div>
  );
}

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
      <h2>Result Sheet</h2>
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
      <h3>Macro Nutrition</h3>
      <Section>
        <Nutrition
          name="highCarbs"
          calories={result}
        />
        <Nutrition
          name="lowCarbs"
          calories={result}
        />
        <Nutrition
          name="highFats"
          calories={result}
        />
      </Section>
    </Container>
  );
}
