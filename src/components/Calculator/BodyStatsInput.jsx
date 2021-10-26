import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  width: '10em',
  padding: '.3em',
  '& label': {
    display: 'flex',
    justifyContent: 'center',
    width: '5em',
  },
});

const Input = styled.input({
  width: '5em',
  border: 'none',
  borderBottom: '1px solid black',
  textAlign: 'center',
  '&::-webkit-inner-spin-button': {
    margin: '0',
    appearance: 'none',
  },
});

export default function BodyStatsInput({
  label, inputValue,
  inputName, onChange,
}) {
  const id = `input-${inputName}`;

  const handleChange = (event) => {
    const { target: { name, value } } = event;
    if (value.length > 3) {
      return;
    }
    const newValue = value.replace(/(^0+)/, '');
    onChange({ name, value: newValue });
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 187 || e.keyCode === 189) {
      e.preventDefault();
    }
    return true;
  };

  return (
    <Container>
      <label htmlFor={id}>
        {label}
      </label>
      <Input
        id={id}
        type="number"
        value={inputValue}
        name={inputName}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
}
