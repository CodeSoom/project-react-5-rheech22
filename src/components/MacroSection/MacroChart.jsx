import styled from '@emotion/styled';

import { PieChart } from 'react-minimal-pie-chart';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& > svg': {
    height: '10em',
  },
  '& > span': {
    fontWeight: '400',
  },
});

export default function MacroChart({
  totalValue, value, color, text,
}) {
  return (
    <Container>
      <PieChart
        data={[{ value, color }]}
        totalValue={totalValue}
        lineWidth={10}
        startAngle={90}
        radius={40}
        rounded
        label={({ dataEntry }) => `${dataEntry.value}g`}
        labelStyle={{
          fontSize: '25px',
          fontFamily: 'sans-serif',
          fill: color,
        }}
        labelPosition={0}
        animate
        animationDuration={3000}
        viewBoxSize={[100, 100]}
      />
      <span>
        {text}
      </span>
    </Container>
  );
}
