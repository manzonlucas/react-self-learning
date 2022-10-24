import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppContext } from "../store/Store";

export default function View() {
  const [album, setAlbum] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const params = useParams();
  const store = useAppContext();

  const capitalize = (str) => str[0].toUpperCase() + str.substring(1);

  useEffect(() => {
    const albumData = store.getItem(params.id);
    setAlbum(albumData);
  }, []);

  function handleClickEdit() {
    setIsEdit(true);
  };

  if (!album) {
    return (
      <Layout>
        <h2>Item not founded</h2>
      </Layout>
    )
  }

  if (!isEdit) return (
    <Layout>
      <section className="flex justify-between lg:flex-row md:flex-col sm:flex-col text-2xl">
        <img
          src={album.cover}
          alt={album.albumName}
          className="w-full h-full max-w-xl h object-cover m-auto my-2 rounded"
        />

        <div className="flex flex-col justify-center w-full p-8 md:text-center sm:text-center">
          <div>
            <span className="font-bold">Artist: </span>
            <span>{capitalize(album.artist)}</span>
          </div>

          <div>
            <span className="font-bold">Album: </span>
            <span>{capitalize(album.album)}</span>
          </div>

          <div>
            <span className="font-bold">Release year: </span>
            <span>{album.year}</span>
          </div>

          <div>
            <span className="font-bold">Number of tracks: </span>
            <span>{album.tracks}</span>
          </div>
          <div>
            <span className="font-bold">Genre: </span>
            <span>{album.genre}</span>
          </div>
          {/* <br />
          <button
            className='block w-full text-sm mr-4 py-2 px-4 rounded-full border-0 font-semibold bg-darkBlue text-white hover:bg-orange'
          onClick={handleClickEdit}
          >
            Edit info
          </button> */}
        </div>
      </section>
    </Layout>
  )

  // Edit function under development
  // if (isEdit) return (
  //   <Layout>
  //     <section className="flex justify-between lg:flex-row md:flex-col sm:flex-col text-2xl">
  //       <img
  //         src={album.cover}
  //         alt={album.albumName}
  //         className="w-full h-full max-w-xl h object-cover m-auto my-2 rounded"
  //       />

  //       <div className="flex flex-col justify-center w-full p-8 md:text-center sm:text-center">
  //         <div>
  //           <span className="font-bold">Artist: </span>
  //           <input type="text"
  //             value={capitalize(album.artist)}
  //             onChange={handleChangeEdit}
  //           />
  //         </div>

  //         <div>
  //           <span className="font-bold">Album: </span>
  //           <span>{capitalize(album.album)}</span>
  //         </div>

  //         <div>
  //           <span className="font-bold">Release year: </span>
  //           <span>{album.year}</span>
  //         </div>

  //         <div>
  //           <span className="font-bold">Number of tracks: </span>
  //           <span>{album.tracks}</span>
  //         </div>
  //         <div>
  //           <span className="font-bold">Genre: </span>
  //           <span>{album.genre}</span>
  //         </div>
  //         <br />
  //         <button
  //           className='block w-full text-sm mr-4 py-2 px-4 rounded-full border-0 font-semibold bg-darkBlue text-white hover:bg-orange'
  //           onClick={handleClickEdit}
  //         >
  //           Edit info
  //         </button>
  //       </div>
  //     </section>
  // </Layout >
  // )
}