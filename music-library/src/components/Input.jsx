export default function Input({ name, type, onChange }) {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className='-mx-3 md:flex mb-6'>
      <section className='px-3 mb-0 w-96'>
        <label
          htmlFor={name}
          className="block w-full tracking-wide text-darkBlue text-xs font-bold mb-1">
          {capitalizeFirstLetter(name)}
        </label>
        <input type={type}
          name={name}
          id={name}
          required
          onChange={onChange}
          // className="border border-solid border-darkBlue rounded-lg"
          className='w-full block bg-grey-lighter text-blue border rounded py-2 px-4 mb-3'
        />
      </section>
    </div>
  )
}
