import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '.5em',
  width: '10em',
  height: '3em',
  '& label': {
    display: 'flex',
    justifyContent: 'start',
    fontSize: '.3em',
    marginBottom: '.3em',
    width: '100%',
  },
});

const Input = styled.input({
  width: '100%',
  height: '100%',
  outline: 'none',
  border: 'none',
  borderRadius: '.2em',
  borderBottom: '1px solid black',
  paddingLeft: '.5em',
  backgroundColor: '#FFECCC',
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
  const placeHolder = `your ${inputName}`;

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
        placeholder={placeHolder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
}
