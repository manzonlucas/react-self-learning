import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Pets from './components/Pets';
import Details from './components/Details';

export default function Router() {

  const Home = () => <h1 style={{ textAlign: 'center' }}>Home</h1>;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='pets' element={<Pets />}></Route>
            <Route path="pets/:id" element={<Details />}></Route>
          </Route>
          {/* <Route path='*' element={<h1>ERROR 404</h1>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}