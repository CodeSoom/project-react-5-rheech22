export default function CheckBox({
  label,
  name,
  isChecked,
  onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target: { name: value, checked } } = event;

    if (!checked) {
      onChange({ name: 'gender', value: '' });
      return;
    }

    onChange({ name: 'gender', value });
  }

  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <input id={id} type="checkbox" name={name} checked={isChecked} onChange={handleChange} />
    </>
  );
}
