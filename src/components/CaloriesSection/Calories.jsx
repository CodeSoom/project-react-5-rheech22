import styled from '@emotion/styled';

import caloriesInfo from '../../data/caloriesInfo';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontWeight: '400',
  opacity: '.8',
  cursor: 'pointer',
  '& > h2': {
    fontSize: '1.5em',
    fontWeight: '400',
  },
  '& > h3': {
    fontSize: '1em',
    fontWeight: '400',
  },
  '&> span': {
    fontSize: '3em',
    marginTop: '1em',
    color: '#3F627A',
  },
  '& p': {
    display: 'none',
    fontSize: '.5em',
    padding: '1em',
    textAlign: 'center',
    wordBreak: 'keep-all',
    lineHeight: '3vh',
  },
  '&:hover': {
    opacity: '1',
    zIndex: '3',
  },
  '&:hover > p': {
    display: 'block',
  },
  '&:hover > span': {
    display: 'none',
  },
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
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <span>
        {value}
        kcal
      </span>
      <p>{description}</p>
    </Container>
  );
}
