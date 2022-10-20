import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppContext } from "../store/Store";

export default function View() {
  const [album, setAlbum] = useState(null);
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const albumData = store.getItem(params.id);
    setAlbum(albumData);
  }, [])

  if (!album) {
    return (
      <Layout>
        <h2>Item not founded</h2>
      </Layout>
    )
  }

  return (
    <Layout>
      <img src={album.cover} alt={album.albumName} />
      <h2>{album.artist}</h2>
      <h2>{album.albumName}</h2>
    </Layout>
  )
}