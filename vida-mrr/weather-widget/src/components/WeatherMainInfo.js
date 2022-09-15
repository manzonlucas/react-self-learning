export default function WeatherMainInfo({ weather }) {
  return (
    <main>
      <h2>{weather?.location.name}</h2>
      <h3>{weather?.location.country}</h3>
      <img
        src={`http:${weather?.current.condition.icon}`}
        alt={weather?.current.condition.text}
        width="128px"
      />
      <section>
        <p>{weather?.current.temp_c}°</p>
        <p>{weather?.current.condition.text}</p>
      </section>

      <iframe
        title='map'
        src={`https://maps.google.com/maps?q=${weather?.location.lat},${weather?.location.lon}&t=&z=15&ie=UTF8&iwloc=&output=embed `}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </main >
  );
}
