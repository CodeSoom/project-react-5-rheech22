import styled from '@emotion/styled';

import Calories from './CaloriesSection/Calories';

const Container = styled.section({
  display: 'grid',
  gridTemplateAreas: '"h h h" "c1 c2 c3" "p p p"',
  marginBottom: '1em',
  '& h1': {
    gridArea: 'h',
    height: '3em',
    fontSize: '3em',
    fontFamily: '"Galada", cursive',
    textAlign: 'center',
    width: '100%',
    zIndex: '5',
    color: 'black',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gridArea: 'p',
    height: '5em',
    textAlign: 'center',
    color: 'white',
    textDecoration: 'underline',
  },
  '@media (max-width: 600px)': {
    gridTemplateAreas: '"h" "c1" "c2" "c3" "p"',
    '& h1': {
      fontSize: '2em',
    },
    '& >div:first-of-type': {
      transform: 'none',
    },
    '& >div:nth-of-type(2)': {
      transform: 'translate(0, -3em)',
    },
    '& >div:nth-of-type(3)': {
      transform: 'translate(0, -6em)',
    },
    '& > p': {
      marginTop: '-5em',
    },
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
