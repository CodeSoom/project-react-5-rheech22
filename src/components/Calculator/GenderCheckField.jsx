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
        text="남"
        gender={gender}
        onChange={onChange}
      />
      <CheckBox
        text="여"
        gender={gender}
        onChange={onChange}
      />
    </Container>
  );
}
