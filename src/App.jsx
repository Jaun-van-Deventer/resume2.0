import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarOffCanvas from './components/NavBarOffCanvas';
import JaunProfile from './pages/JaunProfile';
import JaunCertificates from './pages/JaunCertificates'
import JaunProjects from './pages/JaunProjects';
import JaunResume from './pages/JaunResume'
import { MenuProvider } from './components/MenuContext';
import { DarkModeProvider } from './components/DarkModeContext';
import BlogPage from './pages/BlogPage';
import BlogPost from './components/BlogPost';

function App() {

  return (
    <DarkModeProvider>
        <MenuProvider>
        <Router basename="/">
          <NavbarOffCanvas />
        <Routes>
          <Route path="/" element={<JaunProfile />} />
            <Route path="/jaun" element={<JaunProfile />} />
            <Route path="/jauncert" element={<JaunCertificates />} />
            <Route path="/jaunprojects" element={<JaunProjects />} />
            <Route path="/jaunresume" element={<JaunResume />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </Router>
      </MenuProvider>
    </DarkModeProvider>
  );
}

export default App;