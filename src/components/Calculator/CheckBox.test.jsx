import { render, fireEvent } from '@testing-library/react';

import CheckBox from './CheckBox';

describe('CheckBox', () => {
  const handleClick = jest.fn();

  it('renders range input', () => {
    const { getByText } = render(
      <CheckBox
        text="남"
        gender="남"
        onChange={handleClick}
      />,
    );

    expect(getByText('남')).not.toBeNull();
  });

  it('listens change event', () => {
    const { getByText } = render(
      <CheckBox
        text="여"
        gender="남"
        onChange={handleClick}
      />,
    );

    fireEvent.click(getByText('여'));

    expect(handleClick).toBeCalled();
  });
});
