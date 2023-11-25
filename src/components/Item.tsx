// отдельная строка списка
import { IForm } from "./Form";

interface IItem {
  item: IForm
}

export const Item = ({item}: IItem) => {
  return (
    <div className="item">
      <div>{item.date}</div>
      <div>{item.distance}</div>
    </div>
  )
}