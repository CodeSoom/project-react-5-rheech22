import styled from '@emotion/styled';
import GoalButton from './GoalButton';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '20em',
  marginBottom: '1em',
  '& > h3': {
    marginBottom: '.5em',
    fontWeight: '300',
  },
});

const Buttons = styled.div({
  display: 'grid',
  justifyContent: 'space-evenly',
  borderRadius: '.2em',
  padding: '.2em',
  gap: '.2em',
  width: '100%',
  height: '100%',
  backgroundColor: '#9CADBC',
  gridTemplateColumns: '1fr 1fr 1fr',
});

export default function GoalButtons({ goalNumber, onChange }) {
  return (
    <Container>
      <h3>목표를 설정해주세요</h3>
      <Buttons>
        <GoalButton goalNumber={goalNumber} onChange={onChange} text="감량" />
        <GoalButton goalNumber={goalNumber} onChange={onChange} text="유지" />
        <GoalButton goalNumber={goalNumber} onChange={onChange} text="증량" />
      </Buttons>
    </Container>
  );
}
