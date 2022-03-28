import Rota from "./Rota";
import Filme from "./Filme";
import Assentos from "./Assentos";
import Comprovante from "./Comprovante";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './Reset.css';
import './App.css';
import './Rota.css';

function App() {
  return (
    <Router>
      <header>
          <h1>CINEFLEX</h1>
      </header>
      <Routes>
        <Route path="/" element={<Assentos />}></Route>
        <Route path="/comp" element={<Comprovante />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
