// форма для отправки данных

import { useState } from "react"

export interface IForm {
  date: string,
  distance: number,
  id: number
}

export const Form = () => {
  const [form, setForm] = useState<IForm>({
    date: '',
    distance: 0,
    id: 0
  });

  const { date, distance } = form;

  function handleChange({target}: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
      <div className="input-box">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input id="date" name="date" className="form-input" type="text" value={date} onChange={handleChange}/>
      </div>
      <div className="input-box">
        <label htmlFor="distance">Пройдено км</label>
        <input id="distance" name="distance" className="form-input" type="text" value={distance} onChange={handleChange}/>
      </div>
      <button className="btn-input" type="submit">OK</button>
    </form>
  )
}