import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Personajes from './Components/Personajes';

function App() {
  return (
    <div className="App">
    <NavBar />
   <ItemListContainer greeting='Nuevas ofertas 💰'/>
   <Personajes />
    </div>
  );
}

export default App;
