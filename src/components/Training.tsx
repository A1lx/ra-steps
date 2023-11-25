import { useState } from "react";
import { Form, IForm } from "./Form";
import { TrainingList } from "./TrainingList";

export const Training = () => {
  const [trainingList, setTrainingList] = useState<IForm[]>([]);

  const handleFormSubmit = (formData: IForm) => {
    setTrainingList([...trainingList, formData]);
    console.log('work');
  }

  return (
    <div className="container">
      <Form onSubmit={handleFormSubmit}/>
      <TrainingList listsArr={trainingList}/>
    </div>
  )
}