export default function bodyStatsInput({
  label, type, inputName, onChange, isChecked,
}) {
  const id = `input-${inputName}`;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  function handleCheck(event) {
    const { target: { name, checked } } = event;

    if (name === 'male' && checked) {
      onChange({ name: 'female', value: !checked });
    }

    if (name === 'female' && checked) {
      onChange({ name: 'male', value: !checked });
    }

    onChange({ name, value: checked });
  }

  if (type === 'range') {
    return (
      <div>
        <label htmlFor={id}>
          {label}
        </label>
        <input id={id} type={type} name={inputName} onChange={handleChange} min="1.2" max="1.9" step="0.001" list="ticks" />
        <datalist id="ticks">
          <option value="1.2" label="a">a</option>
          <option value="1.375" label="b">b</option>
          <option value="1.55" label="c">c</option>
          <option value="1.725" label="d">d</option>
          <option value="1.9" label="e">e</option>
        </datalist>
      </div>
    );
  }

  if (type === 'checkbox') {
    return (
      <div>
        <label htmlFor={id}>
          {label}
        </label>
        <input id={id} type={type} name={inputName} checked={isChecked} onChange={handleCheck} />
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <input id={id} type={type} name={inputName} onChange={handleChange} />
    </div>
  );
}
