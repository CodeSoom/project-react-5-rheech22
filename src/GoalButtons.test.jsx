import { render, fireEvent } from '@testing-library/react';

import GoalButtons from './GoalButtons';

describe('GoalButtons', () => {
  const handleClick = jest.fn();

  it('renders buttons', () => {
    const { getByText } = render((
      <GoalButtons onChange={handleClick} />
    ));

    expect(getByText('감량')).not.toBeNull();
    expect(getByText('유지')).not.toBeNull();
    expect(getByText('증량')).not.toBeNull();
  });

  it('listens click event', () => {
    const { getByText } = render((
      <GoalButtons onChange={handleClick} />
    ));

    fireEvent.click(getByText('감량'));

    expect(handleClick).toBeCalled();
  });
});
