import { Link } from "react-router-dom"

export default function Album({ album }) {

  const capitalize = (str) => str[0].toUpperCase() + str.substring(1);

  return (
    <Link to={`/view/${album.id}`} className="inline-block w-80 text-center p-10 rounded-xl shadow-lg shadow-darkBlue/50 hover:shadow-lg hover:shadow-darkBlue transition-all ">
      <img src={album.cover} alt={album.album} className='w-64 h-64 object-cover m-auto my-2 rounded' />
      <div className='text-darkBlue'>
        <p className="text-xl font-bold">{capitalize(album.artist)}</p>
        <p>{capitalize(album.album)}</p>
      </div>
    </Link>
  )
}