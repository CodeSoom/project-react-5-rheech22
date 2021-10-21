import styled from '@emotion/styled';

import calories from './data/calories';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '30%',
  textAlign: 'justify',
});

export default function Calories({ name, value }) {
  const CALORIES = calories.filter((obj) => obj.title === name)[0];

  const {
    title,
    subtitle,
    description,
  } = CALORIES;

  return (
    <Container>
      <span>{title}</span>
      <span>{subtitle}</span>
      <span>{value}</span>
      <p>{description}</p>
    </Container>
  );
}
