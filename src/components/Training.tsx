import { Form } from "./Form";
import { TrainingList } from "./TrainingList";

export const Training = () => {
  return (
    <div className="container">
      <Form/>
      <TrainingList listsArr={}/>
    </div>
  )
}