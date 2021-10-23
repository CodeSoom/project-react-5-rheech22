import styled from '@emotion/styled';
import GoalButton from './GoalButton';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginBottom: '2em',
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
      <h2>Goals</h2>
      <p>목표를 설정해주세요</p>
      <Buttons>
        <GoalButton goalNumber={goalNumber} onChange={onChange} text="감량" />
        <GoalButton goalNumber={goalNumber} onChange={onChange} text="유지" />
        <GoalButton goalNumber={goalNumber} onChange={onChange} text="증량" />
      </Buttons>
    </Container>
  );
}
