// список тренировок
import { Item } from "./item"

export const TrainingList = ({listsArr}) => {
  return (
    <>
      <div className="training-list-head">
        <div>Дата ДД.ММ.ГГ</div>
        <div>Пройдено км</div>
        <div>Действия</div>
      </div>
      <div className="training-list-box">
        {listsArr.map(item => (
          <Item key={item.id} item={item}/>
        ))}
      </div>
    </>
  )
}