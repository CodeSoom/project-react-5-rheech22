import DiaryForm from './Diary/DiaryForm';

export default function Diary({
  calories, onChangeCalories,
  onChangeOptions,
}) {
  return (
    <div>
      <DiaryForm
        calories={calories}
        onChangeCalories={onChangeCalories}
        onChangeOptions={onChangeOptions}
      />
    </div>
  );
}
