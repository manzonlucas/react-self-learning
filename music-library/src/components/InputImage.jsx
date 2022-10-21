import { useState } from "react";

export default function InputImage({ getImage }) {

  const [cover, setCover] = useState('/assets/image-placeholder.jpg');

  function handleChangeFile(e) {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCover(reader.result.toString());
      getImage(reader.result.toString());
    }
  }

  return (
    <section>
      <label
        htmlFor="cover"
        className="block w-full tracking-wide text-darkBlue text-xs font-bold mb-1"
      >Cover</label>
      <input
        type="file"
        name="cover"
        id="cover"
        onChange={handleChangeFile}
        className='block w-full text-sm text-red
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-darkBlue file:text-white
      hover:file:bg-orange'
      />
      <div>
        <img
          src={cover}
          alt="Uploaded cover preview"
          className='w-64 h-64 object-cover m-auto my-2 rounded'
        />
      </div>
    </section>
  )
}
