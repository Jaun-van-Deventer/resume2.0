import { useState } from 'react';
import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarOffCanvas from './components/NavBarOffCanvas';
import Home from './pages/Home';
import JaunProfile from './pages/JaunProfile';
import ChevonneProfile from './pages/ChevonneProfile';
import JaunCertificates from './pages/JaunCertificates'
import JaunProjects from './pages/JaunProjects';
import { MenuProvider } from './components/MenuContext';

function App() {
  const [count, setCount] = useState(0);

  return (
    <MenuProvider>
      <Router>
        <NavbarOffCanvas />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/jaun" element={<JaunProfile />} />
          <Route path="/jauncert" element={<JaunCertificates />} />
          <Route path="/jaunprojects" element={<JaunProjects />} />
          <Route path="/chevonne" element={<ChevonneProfile />} />
        </Routes>
      </Router>
    </MenuProvider>
  );
}

export default App;
