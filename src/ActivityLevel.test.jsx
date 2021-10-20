import { render, fireEvent } from '@testing-library/react';

import ActivityLevel from './ActivityLevel';

import { getActivityDescription } from './utils';

describe('ActivityLevel', () => {
  const handleChange = jest.fn();

  const activity = {
    level: 1,
    description: getActivityDescription(1),
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

  it('renders activity level and description', () => {
    const { container } = render(
      <ActivityLevel
        activity={activity}
        onChange={handleChange}
      />,
    );

    expect(container).toHaveTextContent(activity.level);
    expect(container).toHaveTextContent(activity.description);
  });

  it('listens change event', () => {
    const { getByLabelText } = render(
      <ActivityLevel
        activity={activity}
        onChange={handleChange}
      />,
    );

    fireEvent.change(getByLabelText('Activity Level'), { target: { value: 2 } });

    expect(handleChange).toBeCalledWith({
      name: 'activity',
      value: {
        level: '2',
        description: getActivityDescription('2'),
      },
    });
  });
});
