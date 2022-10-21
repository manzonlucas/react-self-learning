import styles from './WeatherMainInfo.module.css';

export default function WeatherMainInfo({ weather }) {
  return (
    <section>
      <div>
        <h2 className={styles.city}>{weather?.location.name}</h2>
        <h3 className={styles.country}>{weather?.location.country}</h3>
      </div>
      <div className={styles.row}>
        <img
          src={`http:${weather?.current.condition.icon}`}
          alt={weather?.current.condition.text}
          width="128px"
        />
        <div className={styles.condition}>
          <p className={styles.currentText}>{weather?.current.condition.text}</p>
          <p className={styles.currentTemp}>{weather?.current.temp_c}°</p>
        </div>
      </div>

      <iframe
        title='map'
        src={`https://maps.google.com/maps?q=${weather?.location.lat},${weather?.location.lon}&t=&z=15&ie=UTF8&iwloc=&output=embed `}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section >
  );
}
