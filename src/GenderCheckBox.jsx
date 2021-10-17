export default function GenderCheckBox({
  gender,
  onChange,
}) {
  const isMale = gender === 'male';
  const isFemale = gender === 'female';

  function handleChange(event) {
    const { target: { name: value, checked } } = event;

    if (!checked) {
      onChange({ name: 'gender', value: '' });
      return;
    }

    onChange({ name: 'gender', value });
  }

  return (
    <div>
      성별
      <label htmlFor="input-male">
        남
      </label>
      <input id="input-male" type="checkbox" name="male" checked={isMale} onChange={handleChange} />
      <label htmlFor="input-female">
        여
      </label>
      <input id="input-female" type="checkbox" name="female" checked={isFemale} onChange={handleChange} />
    </div>
  );
}
