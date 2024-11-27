import { useState } from 'react';
import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarOffCanvas from './components/NavBarOffCanvas';
import Home from './pages/Home';
import JaunProfile from './pages/JaunProfile';
import OtherUser from './pages/OtherUser';
import JaunCertificates from './pages/JaunCertificates'
import JaunProjects from './pages/JaunProjects';
import JaunResume from './pages/JaunResume'
import { MenuProvider } from './components/MenuContext';

function App() {
  const [count, setCount] = useState(0);

  return (
      <MenuProvider>
      <Router basename="/resume2.0">
        <NavbarOffCanvas />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/jaun" element={<JaunProfile />} />
          <Route path="/jauncert" element={<JaunCertificates />} />
          <Route path="/jaunprojects" element={<JaunProjects />} />
          <Route path="/jaunresume" element={<JaunResume />} />
          <Route path="/OtherUser" element={<OtherUser />} />
        </Routes>
      </Router>
    </MenuProvider>
  );
}

export default App;
