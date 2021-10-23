import { render } from '@testing-library/react';

import CaloriesSection from './CaloriesSection';

describe('CaloriesSection', () => {
  it('renders calories', () => {
    const { container } = render((
      <CaloriesSection
        bmr={1000}
        tdee={1500}
        result={2000}
      />
    ));

    expect(container).toHaveTextContent('1000');
    expect(container).toHaveTextContent('1500');
    expect(container).toHaveTextContent('2000');
  });
});
