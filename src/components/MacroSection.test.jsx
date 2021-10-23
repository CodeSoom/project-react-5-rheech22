import { render } from '@testing-library/react';

import MacroSection from './MacroSection';

describe('MacroSection', () => {
  it('renders macro examples', () => {
    const { container } = render((
      <MacroSection
        result={1000}
      />
    ));

    expect(container).toHaveTextContent('저탄수 고단백');
    expect(container).toHaveTextContent('고탄수 고단백');
    expect(container).toHaveTextContent('저탄수 고지방');
  });
});
