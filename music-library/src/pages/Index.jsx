import { useAppContext } from "../store/Store"
import Layout from "../components/Layout";
import Album from "../components/Album";

export default function Index() {
  const store = useAppContext();

  return (
    <Layout>
      {store.items.map(item =>
        <Album info={item} key={item.id} />
      )}
    </Layout>
  )
}