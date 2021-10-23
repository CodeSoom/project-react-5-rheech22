import { render } from '@testing-library/react';

import MacroChart from './MacroChart';

describe('MacroChart', () => {
  it('renders macro value', () => {
    const { container } = render(
      <MacroChart
        totalValue={500}
        value={125}
        color="red"
        text="탄수화물"
      />,
    );

    expect(container).toHaveTextContent('125g');
    expect(container).toHaveTextContent('탄수화물');
  });
});
