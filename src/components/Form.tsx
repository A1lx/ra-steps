// форма для отправки данных

import { useState } from "react";

export interface IForm {
  date: string,
  distance: number,
  id: number
}

interface IhandleFormSubmitProps {
  handleFormSubmit: (formdata: IForm) => void
}

export const Form = ({handleFormSubmit}: IhandleFormSubmitProps) => {
  const [form, setForm] = useState<IForm>({
    date: '',
    distance: 0,
    id: 0
  });

  function handleChange({target}: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    form.id = form.id + 1;
    handleFormSubmit(form);
  }

  return (
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
      <div className="input-box">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input id="date" name="date" className="form-input" type="text" value={form.date} onChange={handleChange}/>
      </div>
      <div className="input-box">
        <label htmlFor="distance">Пройдено км</label>
        <input id="distance" name="distance" className="form-input" type="text" value={form.distance} onChange={handleChange}/>
      </div>
      <button className="btn-input" type="submit">OK</button>
    </form>
  )
}