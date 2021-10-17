import CheckBox from './CheckBox';

export default function GenderCheckField({
  gender,
  onChange,
}) {
  const isMale = gender === 'male';
  const isFemale = gender === 'female';

  return (
    <div>
      성별
      {' '}
      <CheckBox
        label="남"
        name="male"
        isChecked={isMale}
        onChange={onChange}
      />
      <CheckBox
        label="여"
        name="female"
        isChecked={isFemale}
        onChange={onChange}
      />
    </div>
  );
}
