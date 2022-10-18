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
      <label htmlFor="cover">Cover</label>
      <input type="file" name="cover" id="cover" onChange={handleChangeFile} />
      <div>
        <img
          src={cover}
          alt="Uploaded cover preview"
          style={{ width: '300px' }} />
      </div>
    </section>
  )
}
