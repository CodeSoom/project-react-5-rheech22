import styled from '@emotion/styled';

import { getMacros } from './utils';

import macroInfo from './data/macroInfo';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '30%',
  textAlign: 'justify',
});

export default function MacroExample({ name, value }) {
  const macro = getMacros({ name, value });
  const { carbs, protein, fats } = macro;

  const information = macroInfo.filter((obj) => obj.name === name)[0];
  const { title, description } = information;

  return (
    <Container>
      <span>{title}</span>
      <span>
        {carbs}
        g/
        {protein}
        g/
        {fats}
        g
      </span>
      <p>{description}</p>
    </Container>
  );
}
