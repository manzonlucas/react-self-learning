import { useState } from "react";
import { useAppContext } from "../store/Store";
import Input from "../components/Input";
import InputImage from "../components/InputImage";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function Create() {

  const [newAlbum, setnewAlbum] = useState({ id: crypto.randomUUID(), cover: '/assets/image-placeholder.jpg' });
  const store = useAppContext();
  const navigate = useNavigate();

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
    store.createItem(newAlbum);
    navigate('/')
  }

  return (
    <Layout>
      <form
        action=""
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2'
      >
        <h2 className="text-3xl text-darkBlue grow basis-1 text-center font-bold">Album submit</h2>

        <Input name='artist' type='text' onChange={handleChange}></Input>
        <Input name='album' type='text' onChange={handleChange}></Input>
        <Input name='year' type='number' onChange={handleChange}></Input>
        <Input name='tracks' type='number' onChange={handleChange}></Input>
        <Input name='genres' type='text' onChange={handleChange}></Input>

        <InputImage getImage={getImageHandler}></InputImage>

        <input
          type="submit"
          value='Register album'
          className='block w-full text-lg text-white
          mr-4 py-2 px-4 rounded-full border-0 font-semibold
          bg-orange hover:shadow-lg hover:shadow-darkBlue/50 transition-all'
        />
      </form>
    </Layout>
  )
}