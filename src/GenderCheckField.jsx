import styled from '@emotion/styled';

import CheckBox from './CheckBox';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  width: '6em',
  marginBottom: '1em',
});

export default function GenderCheckField({
  gender,
  onChange,
}) {
  const isMale = gender === 'male';
  const isFemale = gender === 'female';

  return (
    <Container>
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
    </Container>
  );
}
