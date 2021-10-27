import styled from '@emotion/styled';

import { checkGender } from '../../utils';

const Button = styled.button(({ active }) => ({
  border: 'none',
  borderRadius: '.7em',
  fontSize: '.5em',
  width: '100%',
  height: '100%',
  background: active ? '#A777A1' : '#9CADBC',
  color: active ? 'white' : 'black',
  cursor: 'pointer',
  '&:hover': {
    background: active ? '#A777A1' : '#C37B9D',
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
