import { render } from '@testing-library/react';

import Calculator from './Calculator';

describe('Calculator', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  it('renders inputs', () => {
    const { queryByLabelText } = render((
      <Calculator
        gender=""
        activity={{}}
        goalNumber={null}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));

    expect(queryByLabelText('남')).not.toBeNull();
    expect(queryByLabelText('여')).not.toBeNull();
    expect(queryByLabelText('만 나이')).not.toBeNull();
    expect(queryByLabelText('키(cm)')).not.toBeNull();
    expect(queryByLabelText('몸무게(kg)')).not.toBeNull();
    expect(queryByLabelText('Activity Level')).not.toBeNull();
  });

  it('renders buttons', () => {
    const { getByText } = render((
      <Calculator
        gender=""
        activity={{}}
        goalNumber={null}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));

    expect(getByText('감량')).not.toBeNull();
    expect(getByText('유지')).not.toBeNull();
    expect(getByText('증량')).not.toBeNull();
    expect(getByText('Calculate')).not.toBeNull();
  });
});
