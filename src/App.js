import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Materia from './pages/Materia';
import MateriaDetails from './pages/MateriaDetails';
import ProjetoIntegrador from './pages/Projeto-Integrador';
import EngenhariaSoftware from './pages/EngenhariaSoftware';
import MatematicaDiscreta from './pages/MatematicaDiscreta';
import LinguaInglesa from './pages/LinguaInglesa';
import BancoDados from './pages/BancoDados';
import GestaoAgil from './pages/GestaAgil';
import EstruturaDados from './pages/EstruturaDados';
import InteracaoHumano from './pages/InteraçãoHumano';
import TecnicasAvancadas from './pages/TecnicasAvancadas';
import TecnicasWeb from './pages/TecnicasWeb';
import InteligenciaCorporativa from './pages/InteligenciaCorporativa';


function App() {
  return (
    <Router basename="/portifolio">
      <div className="app">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Materia" element={<Materia />} />
            <Route path="/materias" element={<MateriaDetails />} />
            <Route path="/materias/:materiaId" element={<MateriaDetails />} />
            <Route path="/projeto-integrador" element={<ProjetoIntegrador />} />
            <Route path="/engenhariasoftware" element={<EngenhariaSoftware />} />
            <Route path="/linguainglesa" element={<LinguaInglesa />} />
            <Route path="/estruturadados" element={<EstruturaDados />} />
            <Route path="/gestaoagil" element={<GestaoAgil />} />
            <Route path="/bancodados" element={<BancoDados />} />
            <Route path="/interacaohumano" element={<InteracaoHumano />} />
                        <Route path="/tecnicasavancadas" element={<TecnicasAvancadas />} />
            <Route path="/tecnicasweb" element={<TecnicasWeb />} />
            <Route path="/inteligenciacorporativa" element={<InteligenciaCorporativa />} />




            <Route path="/contact" element={<Contact />} />

          </Routes>

        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;