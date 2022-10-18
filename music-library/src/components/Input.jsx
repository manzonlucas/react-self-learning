export default function Input({ name, type, onChange }) {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <section>
      <label htmlFor={name}>
        {capitalizeFirstLetter(name)}
      </label>
      <input type={type}
        name={name}
        id={name}
        onChange={onChange} />
    </section>
  )
}
