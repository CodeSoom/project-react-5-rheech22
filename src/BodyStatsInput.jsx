import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  width: '10em',
  marginBottom: '1em',
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
  label, type, inputName, onChange,
}) {
  const id = `input-${inputName}`;

  const handleChange = (event) => {
    const { target: { name, value } } = event;
    onChange({ name, value });
  };

  return (
    <Container>
      <label htmlFor={id}>
        {label}
      </label>
      <Input id={id} type={type} name={inputName} onChange={handleChange} />
    </Container>
  );
}
