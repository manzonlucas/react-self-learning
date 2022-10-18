import { useState } from "react";

export default function Create() {
  const [info, setInfo] = useState({});

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setInfo({ ...info, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>Album submit</h2>

        <section>
          <label htmlFor="artist">Artist:</label>
          <input type="text" name="artist" id="artist" onChange={handleChange} />
        </section>

        <section>
          <label htmlFor="album">Album:</label>
          <input type="text" name="album" id="album" onChange={handleChange} />
        </section>

        <section>
          <label htmlFor="release">Release year:</label>
          <input type="number" name="release" id="release" onChange={handleChange} />
        </section>

        <section>
          <label htmlFor="tracks">Tracks:</label>
          <input type="number" name="tracks" id="tracks" onChange={handleChange} />
        </section>

        <section>
          <label htmlFor="genre">Genre:</label>
          <input type="text" name="genre" id="genre" onChange={handleChange} />
        </section>

        <section>
          <label htmlFor="moreInfo">Comments: (optional)</label>
          <textarea name="moreInfo" id="moreInfo" cols="30" rows="10" onChange={handleChange} ></textarea>
          <div>
            <img src="" alt="" />
          </div>
        </section>

        <input type="submit" />
      </form>
    </div>
  )
}