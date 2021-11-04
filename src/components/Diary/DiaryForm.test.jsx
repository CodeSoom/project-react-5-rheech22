import { render } from '@testing-library/react';

import DiaryForm from './DiaryForm';

describe('DiaryForm', () => {
  it('renders input with calories', () => {
    const { getByLabelText } = render((
      <DiaryForm calories="2000" />
    ));

    expect(getByLabelText('칼로리')).not.toBeNull();
    expect(getByLabelText('칼로리')).toHaveValue(2000);
  });
  it('renders macro options', () => {
    const { getByLabelText } = render((
      <DiaryForm calories="2000" />
    ));

    expect(getByLabelText('비율')).not.toBeNull();
  });
});
