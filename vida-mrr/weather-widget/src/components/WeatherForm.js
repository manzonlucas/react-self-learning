import { useState } from "react";
import './WeatherForm.module.css';

export default function WeatherForm({ onChangeCity }) {

  const [city, setCity] = useState('')

  function handleChange(e) {
    const value = e.target.value;

    if (value !== '') {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id="cityInput" type="text" onChange={handleChange} placeholder='Input your city:' />
    </form>
  );
}