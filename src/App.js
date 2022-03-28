import Rota from "./Rota";
import Filme from "./Filme";
import Assentos from "./Assentos";
import Comprovante from "./Comprovante";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {Header} from "./Styles"
import "./Reset.css";

function App() {
  return (
    <Router>
      <Link to='/' style={{ textDecoration: 'none' }} >
      <Header>
          <h1>CINEFLEX</h1>
      </Header>
      </Link>
      <Routes>
        <Route path="/" element={<Rota />}></Route>
        <Route path="/filme/:idFilme" element={<Filme />}></Route>
        <Route path="/assentos/:idHorario" element={<Assentos />}></Route>
        <Route path="/comp" element={<Comprovante />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
