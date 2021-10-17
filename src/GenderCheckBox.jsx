export default function GenderCheckBox({
  male,
  female,
  onChange,
}) {
  function handleChange(event) {
    const { target: { name, checked } } = event;

    if (name === 'male' && checked) {
      onChange({ name: 'female', value: !checked });
    }

    if (name === 'female' && checked) {
      onChange({ name: 'male', value: !checked });
    }

    onChange({ name, value: checked });
  }

  return (
    <div>
      성별
      <label htmlFor="input-male">
        남
      </label>
      <input id="input-male" type="checkbox" name="male" checked={male} onChange={handleChange} />
      <label htmlFor="input-female">
        여
      </label>
      <input id="input-female" type="checkbox" name="female" checked={female} onChange={handleChange} />
    </div>
  );
}
