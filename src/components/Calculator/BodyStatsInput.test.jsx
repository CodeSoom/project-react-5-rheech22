import { render, fireEvent } from '@testing-library/react';

import BodyStatsInput from './BodyStatsInput';

describe('BodyStatsInput', () => {
  const handleChange = jest.fn();

  function renderInputField({ label, value, name }) {
    return render(
      <BodyStatsInput
        label={label}
        inputName={name}
        inputValue={value}
        onChange={handleChange}
      />,
    );
  }

  it('renders input and values', () => {
    const props = {
      label: '나이',
      name: 'age',
      value: '23',
    };

    const { queryByLabelText } = renderInputField(props);

    expect(queryByLabelText('나이')).not.toBeNull();
    expect(queryByLabelText('나이')).toHaveValue(23);
  });

  it('listens change event', () => {
    const props = {
      label: '키',
      type: 'text',
      name: 'height',
    };

    const { getByLabelText } = renderInputField(props);

    fireEvent.change(getByLabelText('키'), { target: { value: 180 } });

    expect(handleChange).toBeCalledWith({ name: 'height', value: '180' });
  });

  it('listens change event', () => {
    const props = {
      label: '키',
      type: 'text',
      name: 'height',
    };

    const { getByLabelText } = renderInputField(props);

    fireEvent.change(getByLabelText('키'), { target: { value: 180 } });

    expect(handleChange).toBeCalledWith({ name: 'height', value: '180' });
  });
});
