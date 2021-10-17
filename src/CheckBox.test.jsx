import { render, fireEvent } from '@testing-library/react';

import CheckBox from './CheckBox';

describe('CheckBox', () => {
  const handleChange = jest.fn();

  it('renders range input', () => {
    const { getByLabelText } = render(
      <CheckBox
        label="남"
        name="male"
        isChecked
        onChange={handleChange}
      />,
    );

    expect(getByLabelText('남')).not.toBeNull();
  });

  it('listens change event', () => {
    const { getByLabelText } = render(
      <CheckBox
        label="여"
        name="female"
        isChecked={false}
        onChange={handleChange}
      />,
    );

    fireEvent.click(getByLabelText('여'));

    expect(handleChange).toBeCalled();
  });
});
