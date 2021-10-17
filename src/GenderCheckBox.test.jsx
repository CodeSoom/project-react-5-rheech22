import { render, fireEvent } from '@testing-library/react';

import GenderCheckBox from './GenderCheckBox';

describe('GenderCheckBox', () => {
  const handleChange = jest.fn();

  it('renders range input', () => {
    const { getByLabelText } = render(
      <GenderCheckBox
        male={false}
        female={false}
        onChange={handleChange}
      />,
    );

    expect(getByLabelText('남')).not.toBeNull();
    expect(getByLabelText('여')).not.toBeNull();
  });

  it('checks a box depends on props', () => {
    const { getByLabelText } = render(
      <GenderCheckBox
        male
        female={false}
        onChange={handleChange}
      />,
    );

    expect(getByLabelText('남')).toBeChecked();
  });

  it('listens change event', () => {
    const { getByLabelText } = render(
      <GenderCheckBox
        male
        female={false}
        onChange={handleChange}
      />,
    );

    fireEvent.click(getByLabelText('여'));

    expect(handleChange).toBeCalled();
  });
});
