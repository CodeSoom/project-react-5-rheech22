import styled from '@emotion/styled';

import { getGoalNumber, getGoalText } from '../../utils';

const Button = styled.button(({ active }) => ({
  border: 'none',
  fontSize: '1em',
  padding: '.5em',
  borderRadius: '.3em',
  width: '100%',
  height: '100%',
  background: active ? '#A777A1' : '#9CADBC',
  color: active ? 'white' : 'black',
  cursor: 'pointer',
  '&:hover': {
    background: active ? '#A777A1' : '#C37B9D',
  },
}));

export default function GoalButton({ goalNumber, text, onChange }) {
  const handleClick = (event) => {
    const { target: { innerText } } = event;
    const value = getGoalNumber(innerText);

    onChange({ name: 'goalNumber', value });
  };

  return (
    <>
      <Button
        type="button"
        onClick={handleClick}
        active={goalNumber && getGoalText(goalNumber) === text ? 1 : 0}
      >
        {text}
      </Button>
    </>
  );
}
