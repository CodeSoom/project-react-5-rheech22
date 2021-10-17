import GenderCheckBox from './GenderCheckBox';
import BodyStatsInput from './BodyStatsInput';

export default function BodyStats({
  male,
  female,
  onChange,
}) {
  return (
    <div>
      <GenderCheckBox
        male={male}
        female={female}
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
