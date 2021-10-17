import { render, fireEvent } from '@testing-library/react';

import BodyStatsInput from './BodyStatsInput';

describe('BodyStatsInput', () => {
  const handleChange = jest.fn();

  function renderInputField({ label, type, name }) {
    return render(
      <BodyStatsInput
        label={label}
        type={type}
        inputName={name}
        onChange={handleChange}
      />,
    );
  }

  it('renders input', () => {
    const props = {
      label: '나이',
      type: 'text',
      name: 'age',
    };

    const { queryByLabelText } = renderInputField(props);
    expect(queryByLabelText(props.label)).not.toBeNull();
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
