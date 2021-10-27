import styled from '@emotion/styled';

import Calories from './CaloriesSection/Calories';

const Container = styled.section({
  display: 'grid',
  gridTemplateAreas: '"h h h" "c1 c2 c3" "p p p"',
  marginBottom: '10em',
  height: '100vh',
  '& h1': {
    gridArea: 'h',
    fontSize: '3em',
    fontFamily: '"Galada", cursive',
    textAlign: 'center',
    width: '100%',
    zIndex: '5',
  },
  '& > div': {
    borderRadius: '50%',
    padding: '3em 2em',
    width: '20em',
    height: '20em',
  },
  '& >div:first-of-type': {
    gridArea: 'c1',
    backgroundColor: '#A58C72',
    transform: 'translate(3em)',
  },
  '& >div:nth-of-type(2)': {
    gridArea: 'c2',
    backgroundColor: '#E99A27',
    zIndex: '2',
  },
  '& >div:last-of-type': {
    gridArea: 'c3',
    backgroundColor: '#FFECCC',
    transform: 'translate(-3em)',
  },
  '& > p': {
    gridArea: 'p',
    paddingTop: '1em',
    textAlign: 'center',
    color: 'white',
    textDecoration: 'underline',
  },
});

export default function CaloriesSection({
  bmr, tdee,
  result,
}) {
  return (
    <Container>
      <h1>Your Personal Result</h1>
      <Calories
        name="BMR"
        value={bmr}
      />
      <Calories
        name="목표 칼로리"
        value={result}
      />
      <Calories
        name="TDEE"
        value={tdee}
      />
      <p>obtained by Mifflin St Jeor equation</p>
    </Container>
  );
}
