import { render, fireEvent } from '@testing-library/react';

import ActivityLevel from './ActivityLevel';

describe('ActivityLevel', () => {
  const handleChange = jest.fn();

  const activity = {
    level: 1,
    description: '운동 거의 안함',
  };

  it('renders range input', () => {
    const { getByLabelText } = render(
      <ActivityLevel
        activity={activity}
        onChange={handleChange}
      />,
    );

    expect(getByLabelText('Activity Level')).not.toBeNull();
  });

  it('listens change event', () => {
    const { getByLabelText } = render(
      <ActivityLevel
        activity={activity}
        onChange={handleChange}
      />,
    );

    fireEvent.change(getByLabelText('Activity Level'), { target: { value: 2 } });

    expect(handleChange).toBeCalledWith({ name: 'activity', value: '2' });
  });

  it('show description depends on activity level', () => {
    const activityTemp = {
      level: 2,
      description: '주 1-2회 운동',
    };

    const { container } = render(
      <ActivityLevel
        activity={activityTemp}
        onChange={handleChange}
      />,
    );

    expect(container).toHaveTextContent(activityTemp.description);
  });
});
