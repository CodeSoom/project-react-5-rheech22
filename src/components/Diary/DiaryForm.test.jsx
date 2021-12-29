import { render } from '@testing-library/react';

import DiaryForm from './DiaryForm';

describe('DiaryForm', () => {
  // const handleChangeCalories = jest.fn();
  // const handleChangeOptions = jest.fn();

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

  // it('listens change events', () => {
  //   const { getByLabelText } = render((
  //     <DiaryForm calories="2000" />
  //   ));

  //   fireEvent.change((getByLabelText('비율')));
  //   expect(handleChangeOptions).toBeCalled();
  // });
});
