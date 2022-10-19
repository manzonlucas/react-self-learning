import { Link } from "react-router-dom"

export default function Album({ album }) {
  return (
    <Link to={`/view/${album.id}`}>

      <img src={album.cover} alt={album.albumName} />
      <p>{album.artist}</p>
      <p>{album.albumName}</p>

    </Link>
  )
}