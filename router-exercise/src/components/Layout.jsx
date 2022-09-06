import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around', border: "2px solid black", width: '50%', margin:'auto' }}>
        <Link to={'/'}>Home</Link>
        <Link to={'/pets'}>Pets</Link>
      </div>
      <Outlet />
    </>
  )
}