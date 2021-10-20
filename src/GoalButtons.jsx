import { getGoalNumber } from './utils';

export default function GoalButtons({ onChange }) {
  function handleClick(event) {
    const { innerText } = event.target;
    const value = getGoalNumber(innerText);
    onChange({ name: 'goalNumber', value });
  }

  return (
    <div>
      <span>목표</span>
      <div>
        <button type="button" onClick={handleClick}>감량</button>
        <button type="button" onClick={handleClick}>유지</button>
        <button type="button" onClick={handleClick}>증량</button>
      </div>
    </div>
  );
}
