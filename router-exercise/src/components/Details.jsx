import { useParams, useNavigate } from 'react-router-dom';
import { petList } from '../data';

export default function () {
  const { id } = useParams();
  const navigate = useNavigate();
  const chosenPet = petList.find((pet) => pet.id === Number(id));

  return (
    <>
      <h1>Nombre: {chosenPet.name}</h1>
      <h2>Edad: {chosenPet.age}</h2>
      <img src={chosenPet.image} alt={chosenPet.name} />

      <button onClick={() => navigate(-1)}>← Back</button>
    </>
  )
}