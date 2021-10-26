import styled from '@emotion/styled';

import { checkGender } from '../../utils';

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

export default function CheckBox({
  text, gender,
  onChange,
}) {
  const handleClick = (event) => {
    const { target: { innerText: value } } = event;

    const isChecked = checkGender({ gender, text });

    if (isChecked === true) {
      onChange({ name: 'gender', value: '' });
      return;
    }

    onChange({ name: 'gender', value });
  };

  return (
    <>
      <Button
        type="button"
        onClick={handleClick}
        active={gender && gender === text ? 1 : 0}
      >
        {text}
      </Button>
    </>
  );
}
