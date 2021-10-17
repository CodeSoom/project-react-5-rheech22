import { render } from '@testing-library/react';

import BodyStats from './BodyStats';

describe('BodyStats', () => {
  it('renders inputs', () => {
    const { queryByLabelText } = render((
      <BodyStats />
    ));

    expect(queryByLabelText('남')).not.toBeNull();
    expect(queryByLabelText('여')).not.toBeNull();
    expect(queryByLabelText('만 나이(세)')).not.toBeNull();
    expect(queryByLabelText('키(cm)')).not.toBeNull();
    expect(queryByLabelText('몸무게(kg)')).not.toBeNull();
  });
});
