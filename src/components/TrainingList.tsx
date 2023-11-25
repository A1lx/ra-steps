// список тренировок
import { IForm } from './Form';
import { Item } from "./Item";

interface ITrainingListProps {
  listsArr: IForm[];
}

export const TrainingList = ({listsArr}: ITrainingListProps) => {
  return (
    <>
      <div className="training-list-head">
        <div>Дата ДД.ММ.ГГ</div>
        <div>Пройдено км</div>
        <div>Действия</div>
      </div>
      <div className="training-list-box">
        {listsArr.map((item, index) => (
          <Item key={index} item={item}/>
        ))}
      </div>
    </>
  )
}