import { render, fireEvent } from '@testing-library/react';

import CheckBox from './CheckBox';

describe('CheckBox', () => {
  const handleChange = jest.fn();

  it('renders range input', () => {
    const { getByLabelText } = render(
      <CheckBox
        label="male"
        name="male"
        isChecked
        onChange={handleChange}
      />,
    );

    expect(getByLabelText('male')).not.toBeNull();
  });

  it('listens change event', () => {
    const { getByLabelText } = render(
      <CheckBox
        label="female"
        name="female"
        isChecked={false}
        onChange={handleChange}
      />,
    );

    fireEvent.click(getByLabelText('female'));

    expect(handleChange).toBeCalled();
  });
});
