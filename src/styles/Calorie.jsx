import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '30%',
  textAlign: 'justify',
});

export default function Calorie({ calorie }) {
  return (
    <Container>
      <span>title</span>
      <span>subtitle</span>
      <span>{calorie}</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Atque dolorum qui quisquam labore? Doloribus,
        beatae quaerat recusandae nobis voluptas animi?
        Recusandae nesciunt praesentium adipisci ullam ea magni, ratione aspernatur asperiores?
      </p>
    </Container>
  );
}
