import { render } from '@testing-library/react';

import GoalButtons from './GoalButtons';

describe('GoalButtons', () => {
  const handleClick = jest.fn();

  it('renders buttons', () => {
    const { getByText } = render((
      <GoalButtons
        goalNumber={1}
        onChange={handleClick}
      />
    ));

    expect(getByText('감량')).not.toBeNull();
    expect(getByText('유지')).not.toBeNull();
    expect(getByText('증량')).not.toBeNull();
  });
});
