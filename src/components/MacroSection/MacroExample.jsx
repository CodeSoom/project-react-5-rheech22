import styled from '@emotion/styled';

import MacroCharts from './MacroCharts';

import macroInfo from '../../data/macroInfo';

import { getMacros } from '../../utils';

const Container = styled.div({
  display: 'grid',
  gridTemplateAreas: '"h p" "c p"',
  alignItems: 'center',
  marginBottom: '1em',
  backgroundColor: 'rgba(56, 73, 85, 0.5)',
  '@media (max-width: 600px)': {
    '&': {
      gridTemplateAreas: '"h" "c" "p"',
    },
  },

  '&> h3': {
    gridArea: 'h',
    padding: '1em',
    textAlign: 'center',
  },

  '&> p': {
    display: 'flex',
    alignItems: 'center',
    gridArea: 'p',
    width: '25em',
    height: '100%',
    padding: '2em',
    fontSize: '1em',
    fontWeight: '400',
    textAlign: 'justify',
    lineHeight: '3vh',
    backgroundColor: '#384955',
  },

  '&> div': {
    gridArea: 'c',
    width: '25em',
    height: '15em',
  },

  '&:hover': {
    boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
  },
});

export default function MacroExample({ name, value }) {
  const macro = getMacros({ name, value });
  const { carbs, protein, fats } = macro;

  const information = macroInfo.filter((obj) => obj.name === name)[0];
  const { id, title, description } = information;

  return (
    <Container>
      <h3>
        예시
        {' '}
        {id}
        .
        {' '}
        {title}
      </h3>
      <MacroCharts
        carbs={carbs}
        protein={protein}
        fats={fats}
      />
      <p>{description}</p>
    </Container>
  );
}
