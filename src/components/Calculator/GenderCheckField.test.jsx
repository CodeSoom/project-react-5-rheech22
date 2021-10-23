import { render } from '@testing-library/react';

import GenderCheckField from './GenderCheckField';

describe('GenderCheckField', () => {
  const handleChange = jest.fn();

  it('renders check boxes', () => {
    const { getByLabelText } = render(
      <GenderCheckField
        gender=""
        onChange={handleChange}
      />,
    );

    expect(getByLabelText('남')).not.toBeNull();
    expect(getByLabelText('여')).not.toBeNull();
  });

  it('checks a box depends on gender prop', () => {
    const { getByLabelText } = render(
      <GenderCheckField
        gender="male"
        onChange={handleChange}
      />,
    );

    expect(getByLabelText('남')).toBeChecked();
  });
});
