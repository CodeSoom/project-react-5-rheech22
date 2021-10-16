import { render, fireEvent } from '@testing-library/react';

import BodyStatsInput from './BodyStatsInput';

describe('calorieInputs', () => {
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

  it('renders inputs', () => {
    const props = {
      label: '나이',
      type: 'text',
      name: 'age',
    };

    const { queryByLabelText } = renderInputField(props);
    expect(queryByLabelText(props.label)).not.toBeNull();
  });

  it('renders datalist for range', () => {
    const props = {
      label: '활동량',
      type: 'range',
      name: 'activity',
    };

    const { container } = renderInputField(props);
    expect(container).toContainHTML('<datalist');
  });

  it('listens change event', () => {
    const props = {
      label: '키',
      type: 'text',
      name: 'height',
    };

    const { getByLabelText } = renderInputField(props);

    fireEvent.change(getByLabelText('키'), { target: { value: '180' } });

    expect(handleChange).toBeCalledWith({ name: 'height', value: '180' });
  });
});
