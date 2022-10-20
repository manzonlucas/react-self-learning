import { useAppContext } from "../store/Store"
import Layout from "../components/Layout";
import AlbumCard from "../components/AlbumCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Index() {
  const store = useAppContext();

  return (
    <Layout>
      {store.items.map(item =>
        <AlbumCard album={item} key={item.id} />
      )}
      {/* <FontAwesomeIcon icon="fa-regular fa-circle-plus" /> */}
    </Layout>
  )
}