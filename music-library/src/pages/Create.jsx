import { useState } from "react";
import Input from "../components/Input";
import InputImage from "../components/InputImage";

export default function Create() {
  const [newAlbum, setnewAlbum] = useState({ id: crypto.randomUUID() });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setnewAlbum({ ...newAlbum, [key]: value });
  }

  function getImageHandler(image) {
    setnewAlbum({ ...newAlbum, cover: image })
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Album submit</h2>

      <Input name='artist' type='text' onChange={handleChange}></Input>
      <Input name='album' type='text' onChange={handleChange}></Input>
      <Input name='year' type='number' onChange={handleChange}></Input>
      <Input name='tracks' type='number' onChange={handleChange}></Input>
      <Input name='genre' type='text' onChange={handleChange}></Input>

      <InputImage getImage={getImageHandler}></InputImage>

      <input type="submit" value='Register album' />
    </form>
  )
}