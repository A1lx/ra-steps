// отдельная строка списка
import { IForm } from "./Form";

interface IItemProps {
  item: IForm,
  handleDelete: (formdata: IForm) => void
}

export const Item = ({item, handleDelete}: IItemProps) => {
  return (
    <div className="item">
      <div>{item.date}</div>
      <div>{item.distance}</div>
      <button className="btn" onClick={() => {handleDelete(item)}}>Удалить</button>
    </div>
  )
}