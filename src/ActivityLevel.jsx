export default function ActivityLevel({ onChange }) {
  const id = 'input-activity';

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <div>
      <label htmlFor={id}>
        활동량
      </label>
      <input id={id} type="range" name="activity" onChange={handleChange} min="1.2" max="1.9" step="0.001" list="ticks" />
      <datalist id="ticks">
        <option value="1.2">a</option>
        <option value="1.375">b</option>
        <option value="1.55">c</option>
        <option value="1.725">d</option>
        <option value="1.9">e</option>
      </datalist>
    </div>
  );
}
