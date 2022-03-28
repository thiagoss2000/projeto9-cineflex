import Rota from "./Rota";
import Filme from "./Filme";
import Assentos from "./Assentos";
import './Reset.css';
import './App.css';
import './Rota.css';

function App() {
  return (
    <div className="Afpp">
      <header>
          <h1>CINEFLEX</h1>
      </header>
      <Assentos />
    </div>
  );
}

export default App;
