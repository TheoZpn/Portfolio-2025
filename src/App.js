import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sobre from './pages/Sobre/sobre.jsx';
import Contato from './pages/Contatos/contatos.jsx';
import Projetos from './pages/Projetos/projetos.jsx';
import Educacao from './pages/Educacao/educacao.jsx';
import './App.css';

const LINKS = [
  { to: "/", label: "Sobre" },
  { to: "/projetos", label: "Projetos" },
  { to: "/educacao", label: "Educacao" },
  { to: "/contato", label: "Contato" }
];

function App() {
  return (
    <Router>
      <header>
        <Link to="/" className="logo">Théo Penteado Zepponi</Link>
        <nav>
          <ul>
            {LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/educacao" element={<Educacao />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
