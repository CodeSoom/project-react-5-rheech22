import styled from '@emotion/styled';

import MacroChart from './MacroChart';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

export default function MacroCharts({
  carbs, protein,
  fats,
}) {
  const totalValue = carbs + protein + fats;

  return (
    <Container>
      <MacroChart
        totalValue={totalValue}
        value={carbs}
        color="#C37B9D"
        text="탄수화물"
      />
      <MacroChart
        totalValue={totalValue}
        value={protein}
        color="#00A8A4"
        text="단백질"
      />
      <MacroChart
        totalValue={totalValue}
        value={fats}
        color="#FFF7D6"
        text="지방"
      />
    </Container>
  );
}
