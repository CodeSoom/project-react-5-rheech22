import styled from '@emotion/styled';

import CheckBox from './CheckBox';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  width: '6em',
  marginBottom: '1em',
});

export default function GenderCheckField({
  gender, onChange,
}) {
  return (
    <Container>
      <CheckBox
        label="남"
        name="male"
        gender={gender}
        onChange={onChange}
      />
      <CheckBox
        label="여"
        name="female"
        gender={gender}
        onChange={onChange}
      />
    </Container>
  );
}
