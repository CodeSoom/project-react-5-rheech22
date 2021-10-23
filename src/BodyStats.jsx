import styled from '@emotion/styled';

import GenderCheckField from './GenderCheckField';
import BodyStatsInput from './BodyStatsInput';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginBottom: '.3em',
});

export default function BodyStats({
  gender, onChange,
}) {
  return (
    <Container>
      <GenderCheckField
        gender={gender}
        onChange={onChange}
      />
      <BodyStatsInput
        label="만 나이"
        type="number"
        inputName="age"
        onChange={onChange}
      />
      <BodyStatsInput
        label="키(cm)"
        type="number"
        inputName="height"
        onChange={onChange}
      />
      <BodyStatsInput
        label="몸무게(kg)"
        type="number"
        inputName="weight"
        onChange={onChange}
      />
    </Container>
  );
}
