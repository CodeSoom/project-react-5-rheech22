import styled from '@emotion/styled';

import MacroCharts from './MacroCharts';

import macroInfo from '../../data/macroInfo';

import { getMacros } from '../../utils';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '30%',
  '& span': {
    height: '1em',
  },
  '& p': {
    padding: '2em',
    fontSize: '.5em',
    fontWeight: '400',
    textAlign: 'center',
    wordBreak: 'keep-all',
    lineHeight: '3vh',
  },
});

export default function MacroExample({ name, value }) {
  const macro = getMacros({ name, value });
  const { carbs, protein, fats } = macro;

  const information = macroInfo.filter((obj) => obj.name === name)[0];
  const { title, subtitle, description } = information;

  return (
    <Container>
      <h3>{title}</h3>
      <span>{subtitle}</span>
      <MacroCharts
        carbs={carbs}
        protein={protein}
        fats={fats}
      />
      <p>{description}</p>
    </Container>
  );
}
