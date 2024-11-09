import { useState } from 'react';
import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarOffCanvas from './components/NavBarOffCanvas';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarOffCanvas />
      <Route path="/" element={<Home />} />
      <p>Testing</p>
    </>
  );
}

export default App;
