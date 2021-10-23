import { render } from '@testing-library/react';

import MacroCharts from './MacroCharts';

describe('MacroChart', () => {
  it('renders macronutrients', () => {
    const { container } = render(
      <MacroCharts
        carbs={236}
        protein={236}
        fats={52}
      />,
    );

    expect(container).toHaveTextContent('236g');
    expect(container).toHaveTextContent('52g');
    expect(container).toHaveTextContent('탄수화물');
    expect(container).toHaveTextContent('단백질');
    expect(container).toHaveTextContent('지방');
  });
});
