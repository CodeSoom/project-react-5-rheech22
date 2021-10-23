import styled from '@emotion/styled';

import caloriesInfo from '../../data/caloriesInfo';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '30%',
  '& span:first-of-type': {
    fontSize: '1.5em',
    fontWeight: '600',
  },
  '& span:last-of-type': {
    marginBottom: '.5em',
  },
  '& div': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15vh',
    height: '15vh',
    borderRadius: '50%',
    fontSize: '1em',
    backgroundColor: '#c23616',
    color: 'white',
  },
  '& p': {
    padding: '1vh',
    fontSize: '1vh',
    fontWeight: '400',
    textAlign: 'center',
    wordBreak: 'keep-all',
    lineHeight: '3vh',
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
      <span>{title}</span>
      <span>{subtitle}</span>
      <div>
        <span>
          {value}
          kcal
        </span>
      </div>
      <p>{description}</p>
    </Container>
  );
}
