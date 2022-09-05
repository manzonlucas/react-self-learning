import logo from './logo.svg';
import './App.css';
import Saludar from './components/saludar';

function App() {

const user = {
  name: 'Lucas Manzon',
  edad: 29,
  color: 'azul'
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user}/>
      </header>
    </div>
  );
}

export default App;
