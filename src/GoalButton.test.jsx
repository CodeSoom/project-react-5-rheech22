import { render, fireEvent } from '@testing-library/react';

import GoalButton from './GoalButton';

describe('GoalButton', () => {
  const handleClick = jest.fn();

  it('renders buttons', () => {
    const { getByText } = render((
      <GoalButton
        goalNumber={0.8}
        text="감량"
        onChange={handleClick}
      />
    ));

    expect(getByText('감량')).not.toBeNull();
  });

  it('listens click event', () => {
    const { getByText } = render((
      <GoalButton
        goalNumber={0.8}
        text="감량"
        onChange={handleClick}
      />
    ));

    fireEvent.click(getByText('감량'));

    expect(handleClick).toBeCalled();
  });
});
