import { render } from '@testing-library/react';

import Diary from './Diary';

describe('Diary', () => {
  it('renders input with calories', () => {
    const { getByLabelText } = render((
      <Diary calories="2000" />
    ));

    expect(getByLabelText('칼로리')).not.toBeNull();
    expect(getByLabelText('칼로리')).toHaveValue(2000);
  });
  it('renders macro options', () => {
    const { getByLabelText } = render((
      <Diary calories="2000" />
    ));

    expect(getByLabelText('비율')).not.toBeNull();
  });
});
