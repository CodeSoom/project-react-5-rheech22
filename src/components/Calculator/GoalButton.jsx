import styled from '@emotion/styled';

import { getGoalNumber, getGoalText } from '../../utils';

const Button = styled.button(({ active }) => ({
  border: 'none',
  borderRadius: '.7em',
  padding: '2em',
  fontSize: '.5em',
  background: active ? '#2ecc71' : '#D3D3D3',
  color: active ? 'white' : 'black',
  cursor: 'pointer',
  opacity: active ? '1' : '.5',
  '&:hover': {
    opacity: '1',
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
