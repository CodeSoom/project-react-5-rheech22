import styled from '@emotion/styled';

import caloriesInfo from './data/caloriesInfo';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '30%',
  textAlign: 'justify',
});

export default function Calories({ name, value }) {
  const information = caloriesInfo.filter((info) => info.title === name)[0];

  const {
    title,
    subtitle,
    description,
  } = information;

  return (
    <Container>
      <span>{title}</span>
      <span>{subtitle}</span>
      <span>{value}</span>
      <p>{description}</p>
    </Container>
  );
}
