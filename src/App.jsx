import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarOffCanvas from './components/NavBarOffCanvas';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarOffCanvas />
      <Home />
      <p>Testing</p>
    </>
  );
}

export default App;
