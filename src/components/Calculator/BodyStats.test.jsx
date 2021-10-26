import { render } from '@testing-library/react';

import BodyStats from './BodyStats';

describe('BodyStats', () => {
  it('renders inputs', () => {
    const { queryByLabelText, getByText } = render((
      <BodyStats />
    ));

    expect(getByText('남')).not.toBeNull();
    expect(getByText('여')).not.toBeNull();
    expect(queryByLabelText('만 나이')).not.toBeNull();
    expect(queryByLabelText('키(cm)')).not.toBeNull();
    expect(queryByLabelText('몸무게(kg)')).not.toBeNull();
  });
});
