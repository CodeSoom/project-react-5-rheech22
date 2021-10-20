import styled from '@emotion/styled';

import { getGoalNumber } from './utils';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginBottom: '2em',
  '& h6': {
    padding: '0',
    margin: '0',
    fontSize: '1.5em',
    fontWeight: '300',
  },
});

const Buttons = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '18em',
});

const Button = styled.button(({ active }) => ({
  border: 'none',
  borderRadius: '.7em',
  padding: '2em',
  fontSize: '.5em',
  background: active ? '#2ecc71' : '#EEE',
  color: active ? '#EEE' : 'black',
  cursor: 'pointer',
}));

export default function GoalButtons({ goalNumber, onChange }) {
  const handleClick = (event) => {
    const { target: { innerText } } = event;
    const value = getGoalNumber(innerText);

    onChange({ name: 'goalNumber', value });
  };

  function getGoalText(value) {
    const goalText = {
      0.8: '감량',
      1: '유지',
      1.2: '증량',
    };

    return goalText[value];
  }

  return (
    <Container>
      <h6>Goal Setting</h6>
      <p>목표를 설정해주세요</p>
      <Buttons>
        <Button type="button" onClick={handleClick} active={goalNumber && getGoalText(goalNumber) === '감량' ? 1 : 0}>감량</Button>
        <Button type="button" onClick={handleClick} active={goalNumber && getGoalText(goalNumber) === '유지' ? 1 : 0}>유지</Button>
        <Button type="button" onClick={handleClick} active={goalNumber && getGoalText(goalNumber) === '증량' ? 1 : 0}>증량</Button>
      </Buttons>
    </Container>
  );
}
