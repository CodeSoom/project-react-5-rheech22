const Inputs = ({ label, type, name }) => {
  const id = `input-${name}`;

  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <input type={type} id={id} name={name} />
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h1>TDEE</h1>
      <span>성별</span>
      <Inputs label="남성" type="checkbox" name="male" />
      <Inputs label="여성" type="checkbox" name="female" />
      <Inputs label="나이" type="text" name="age" />
      <Inputs label="키" type="text" name="height" />
      <Inputs label="몸무게" type="text" name="weight" />
      <div>
        <label htmlFor="input-activity">
          활동량
        </label>
        <input type="range" min="1.2" max="1.9" step="0.001" id="input-activity" name="activity" list="ticks" />
        <datalist id="ticks">
          <option value="1.2" label="a">a</option>
          <option value="1.375" label="b">b</option>
          <option value="1.55" label="c">c</option>
          <option value="1.725" label="d">d</option>
          <option value="1.9" label="e">e</option>
        </datalist>
      </div>
      <button type="button">계산</button>
    </div>
  );
}
