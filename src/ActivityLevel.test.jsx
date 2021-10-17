import { render, fireEvent } from '@testing-library/react';

import ActivityLevel from './ActivityLevel';

describe('ActivityLevel', () => {
  const handleChange = jest.fn();

  it('renders range input', () => {
    const { getByLabelText } = render(
      <ActivityLevel onChange={handleChange} />,
    );

    expect(getByLabelText('활동량')).not.toBeNull();
  });

  it('listens change event', () => {
    const { getByLabelText } = render(
      <ActivityLevel onChange={handleChange} />,
    );

    fireEvent.change(getByLabelText('활동량'), { target: { value: 1.5 } });

    expect(handleChange).toBeCalledWith({ name: 'activity', value: '1.5' });
  });
});
