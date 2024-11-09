import { useState } from 'react';
import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarOffCanvas from './components/NavBarOffCanvas';
import Home from './pages/Home';
import JaunProfile from './pages/JaunProfile';

function App() {
  const [count, setCount] = useState(0);

  return (
      <Router>
      <NavbarOffCanvas />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jaun" element={<JaunProfile />} />
      </Routes>
      </Router>
  );
}

export default App;
