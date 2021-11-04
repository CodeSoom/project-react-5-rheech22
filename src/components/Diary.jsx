import DiaryForm from './Diary/DiaryForm';

export default function Diary({ calories }) {
  return (
    <div>
      <DiaryForm calories={calories} />
    </div>
  );
}
