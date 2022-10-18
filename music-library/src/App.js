import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Create from './pages/Create';
import View from './pages/View';
import Store from './store/Store';

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='create' element={<Create />}></Route>
          <Route path='view/:albumId' element={<View></View>}></Route>
        </Routes >
      </BrowserRouter>
    </Store>
  );
}

export default App;
