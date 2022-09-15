import { useEffect, useState } from "react"
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import styles from './WeatherApp.module.css';

export default function WeatherApp() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ? weather?.location.name : 'Fetching...'}`
  }, [weather]);

  async function loadInfo(city = 'rosario') {
    try {
      const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
      const data = await request.json();
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.log('Fetching error in loadInfo()');
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <main>
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather} />
    </main>
  )
}