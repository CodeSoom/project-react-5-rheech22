import GenderCheckField from './GenderCheckField';
import BodyStatsInput from './BodyStatsInput';

export default function BodyStats({
  gender,
  onChange,
}) {
  return (
    <div>
      <GenderCheckField
        gender={gender}
        onChange={onChange}
      />
      <BodyStatsInput
        label="나이 만"
        type="number"
        inputName="age"
        unit="세"
        onChange={onChange}
      />
      <BodyStatsInput
        label="키"
        type="number"
        inputName="height"
        unit="cm"
        onChange={onChange}
      />
      <BodyStatsInput
        label="몸무게"
        type="number"
        inputName="weight"
        unit="kg"
        onChange={onChange}
      />
    </div>
  );
}
