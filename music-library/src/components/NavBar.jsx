import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function NavBar() {
  const [isHome, setIsHome] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  useEffect(() => {
    if (window.location.href === 'http://localhost:3000/') {
      console.log('we are in home');
    } if (window.location.href === 'http://localhost:3000/create') {
      console.log('we are in create');
    }
  }, [window.location.href])

  return (
    <header className="shrink-0 bg-blue text-white flex content-center	items-center justify-between h-12">
      <h1 className="text-3xl text-orange grow basis-1">
        {/* <img src="/assets/disc-icon.png" alt="disc-icon" /> */}
        <span className="m-5 font-bold">My music library</span>
      </h1>
      <nav className="grow basis-1 text-center">
        <Link to='/' className="text-lg p-2 m-5 rounded-xl hover:bg-orange">Home</Link>
        <Link to='/create' className="text-lg p-2 m-5 rounded-xl hover:bg-orange">Create</Link>
      </nav>
      <div className="grow basis-1">
      </div>
    </header>
  )
}