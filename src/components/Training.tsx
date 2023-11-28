import { useState } from "react";
import { Form, IForm } from "./Form";
import { TrainingList } from "./TrainingList";

export const Training = () => {
  const [trainingList, setTrainingList] = useState<IForm[]>([]);
  // получение данных из формы
  const handleFormSubmit = (formData: IForm) => {
    // нашли повторяющийся элемент
    const repeatingItem = trainingList.find((item) => item.date === formData.date);
    const distance = formData.distance;

    if (repeatingItem) {
      // почему без преобразования получается строковый тип?
      repeatingItem.distance = Number(repeatingItem.distance) + Number(distance);
      setTrainingList([...trainingList]);
    } else {
      setTrainingList([...trainingList, formData]);
    }
  }
  // сортировка по дате
  const sortList = [...trainingList].sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate.getTime() - aDate.getTime();
  });
  // удаление по кнопке
  const handleDelete = (target: IForm) => {
    const filterList = trainingList.filter((item: IForm): boolean => item.id !== target.id);
    setTrainingList(filterList);
  }

  return (
    <div className="container">
      <Form handleFormSubmit={handleFormSubmit}/>
      <TrainingList listsArr={sortList} handleDelete={handleDelete}/>
    </div>
  )
}