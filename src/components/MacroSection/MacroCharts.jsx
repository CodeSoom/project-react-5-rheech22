import styled from '@emotion/styled';

import MacroChart from './MacroChart';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1em 0 1em 0',
  width: '100%',
});

export default function MacroCharts({ carbs, protein, fats }) {
  const totalValue = carbs + protein + fats;

  return (
    <Container>
      <MacroChart
        totalValue={totalValue}
        value={carbs}
        color="#c23616"
        text="탄수화물"
      />
      <MacroChart
        totalValue={totalValue}
        value={protein}
        color="#192a56"
        text="단백질"
      />
      <MacroChart
        totalValue={totalValue}
        value={fats}
        color="#e1b12c"
        text="지방"
      />
    </Container>
  );
}
