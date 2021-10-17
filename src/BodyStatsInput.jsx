export default function BodyStatsInput({
  label, type, inputName, onChange, unit,
}) {
  const id = `input-${inputName}`;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <input id={id} type={type} name={inputName} onChange={handleChange} />
      {unit}
    </div>
  );
}
