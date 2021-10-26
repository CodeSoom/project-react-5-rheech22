import { render } from '@testing-library/react';

import GenderCheckField from './GenderCheckField';

describe('GenderCheckField', () => {
  const handleChange = jest.fn();

  it('renders check boxes', () => {
    const { getByText } = render(
      <GenderCheckField
        gender=""
        onChange={handleChange}
      />,
    );

    expect(getByText('남')).not.toBeNull();
    expect(getByText('여')).not.toBeNull();
  });
});
