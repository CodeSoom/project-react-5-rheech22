import { render, fireEvent } from '@testing-library/react';

import CheckBox from './CheckBox';

describe('CheckBox', () => {
  const handleChange = jest.fn();

  it('renders range input', () => {
    const { getByLabelText } = render(
      <CheckBox
        label="male"
        name="male"
        gender="male"
        onChange={handleChange}
      />,
    );

    expect(getByLabelText('male')).not.toBeNull();
  });

  it('check a box by gender prop', () => {
    const { getByLabelText } = render(
      <CheckBox
        label="male"
        name="male"
        gender="male"
        onChange={handleChange}
      />,
    );

    expect(getByLabelText('male')).toBeChecked();
  });

  it('listens change event', () => {
    const { getByLabelText } = render(
      <CheckBox
        label="female"
        name="female"
        gender="male"
        onChange={handleChange}
      />,
    );

    fireEvent.click(getByLabelText('female'));

    expect(handleChange).toBeCalledWith({
      name: 'gender',
      value: 'female',
    });
  });
});
