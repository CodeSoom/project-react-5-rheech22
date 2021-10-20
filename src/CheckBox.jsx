import styled from '@emotion/styled';

import { checkGender } from './utils';

const Input = styled.input({
  cursor: 'pointer',
});

export default function CheckBox({
  label, name,
  gender, onChange,
}) {
  const id = `input-${name}`;
  const isChecked = checkGender({ gender, name });

  const handleChange = (event) => {
    const {
      target: {
        name: value, checked,
      },
    } = event;

    if (!checked) {
      onChange({ name: 'gender', value: '' });
      return;
    }

    onChange({ name: 'gender', value });
  };

  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <Input
        id={id}
        type="checkbox"
        name={name}
        checked={isChecked}
        onChange={handleChange}
      />
    </>
  );
}
