import styled from '@emotion/styled';

import Calories from './CaloriesSection/Calories';

const Container = styled.section({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
});

export default function CaloriesSection({
  bmr, tdee,
  result,
}) {
  return (
    <Container>
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
    </Container>
  );
}
