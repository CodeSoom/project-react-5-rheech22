import styled from '@emotion/styled';

import CheckBox from './CheckBox';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: '.5em',
  width: '10em',
  height: '3em',
  zIndex: 5,
  '& > span': {
    fontSize: '.3em',
    marginBottom: '.3em',
  },
  '& > div': {
    display: 'grid',
    justifyContent: 'space-evenly',
    borderRadius: '.2em',
    padding: '.1em',
    gap: '.2em',
    width: '100%',
    height: '100%',
    backgroundColor: '#9CADBC',
    gridTemplateColumns: '1fr 1fr',
  },
});

export default function GenderCheckField({
  gender, onChange,
}) {
  return (
    <Container>
      <span>
        성별
      </span>
      <div>
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
      </div>
    </Container>
  );
}
