import { useState } from "react";

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
      <label htmlFor="cityInput">Search your city: </label>
      <input id="cityInput" type="text" onChange={handleChange} />
    </form>
  );
}