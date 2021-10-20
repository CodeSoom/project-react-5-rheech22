import styled from '@emotion/styled';
import GoalButton from './GoalButton';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginBottom: '2em',
  '& h6': {
    padding: '0',
    margin: '0',
    fontSize: '1.5em',
    fontWeight: '300',
  },
});

const Buttons = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '18em',
});

export default function GoalButtons({ goalNumber, onChange }) {
  return (
    <Container>
      <h6>Goal Setting</h6>
      <p>목표를 설정해주세요</p>
      <Buttons>
        <GoalButton goalNumber={goalNumber} onChange={onChange} text="감량" />
        <GoalButton goalNumber={goalNumber} onChange={onChange} text="유지" />
        <GoalButton goalNumber={goalNumber} onChange={onChange} text="증량" />
      </Buttons>
    </Container>
  );
}
