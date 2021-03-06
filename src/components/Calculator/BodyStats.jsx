import styled from '@emotion/styled';

import GenderCheckField from './GenderCheckField';
import BodyStatsInput from './BodyStatsInput';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginBottom: '1em',
});

export default function BodyStats({
  gender, age,
  height, weight,
  onChange,
}) {
  return (
    <Container>
      <GenderCheckField
        gender={gender}
        onChange={onChange}
      />
      <BodyStatsInput
        label="만 나이"
        inputName="age"
        inputValue={age}
        onChange={onChange}
      />
      <BodyStatsInput
        label="키(cm)"
        inputName="height"
        inputValue={height}
        onChange={onChange}
      />
      <BodyStatsInput
        label="몸무게(kg)"
        inputName="weight"
        inputValue={weight}
        onChange={onChange}
      />
    </Container>
  );
}
