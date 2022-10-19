import { useAppContext } from "../store/Store"
import Layout from "../components/Layout";
import AlbumCard from "../components/AlbumCard";

export default function Index() {
  const store = useAppContext();

  return (
    <Layout>
      {store.items.map(item =>
        <AlbumCard album={item} key={item.id} />
      )}
    </Layout>
  )
}