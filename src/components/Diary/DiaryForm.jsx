export default function DiaryForm({ calories }) {
  return (
    <div>
      <h1>식단 페이지</h1>
      <label htmlFor="input-calories">
        칼로리
      </label>
      <input
        id="input-calories"
        type="number"
        value={calories}
        name="calories"
      />
      <label htmlFor="input-macro">
        비율
      </label>
      <select name="macro" id="input-macro">
        <option value="">--Please choose an option--</option>
        <option value="532">고단백(Carb 50%/Protein 30%/Fats 20%)</option>
        <option value="442">저탄수고단백(Carb 40%/Protein 40%/Fats 20%)</option>
        <option value="226">저탄수고지방(Carb 20%/Protein 20%/Fats 60%)</option>
        <option value="433">저탄수(Carb 40%/Protein 30%/Fats 30%)</option>
      </select>
    </div>
  );
}
