import { render } from '@testing-library/react';

import Calories from './Calories';

import caloriesInfo from './data/caloriesInfo';

describe('Calories', () => {
  it('renders contents depends on calories\'s name', () => {
    const { container } = render(
      <Calories
        name="BMR"
        value={1111}
      />,
    );

    const data = caloriesInfo.filter((info) => info.title === 'BMR')[0];

    expect(container).toHaveTextContent(data.title);
    expect(container).toHaveTextContent(data.subtitle);
    expect(container).toHaveTextContent(data.description);
    expect(container).toHaveTextContent(1111);
  });
});
