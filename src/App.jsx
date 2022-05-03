import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound/NotFound'
import Legal from './pages/Legal/Legal';
import Home from './pages/Home/Home';
import Privacy from './pages/Privacy/Privacy';
import Contacto from './pages/Contacto/Contacto';

function App() {

  return (
    <div>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='aviso-legal' element={<Legal/>} />
        <Route path='contacto' element={<Contacto />} />
        <Route path='privacidad' element={<Privacy/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  )
}

export default App
