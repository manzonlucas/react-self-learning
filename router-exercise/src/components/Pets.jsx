import { Link, Outlet } from 'react-router-dom';
import { petList } from '../data';

export default function Pets() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Pets</h1>
      {petList.map((pet) => {
        return (
          <p key={pet.id} style={{ textAlign: 'center' }}>
            <Link to={`${pet.id}`}>{pet.name}</Link>
          </p>
        )
      })}
    </div>
  )
}