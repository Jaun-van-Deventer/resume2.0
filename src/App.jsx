import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarOffCanvas from './components/NavBarOffCanvas';
import ScrollToTop from './components/ScrollToTop';
import JaunProfile from './pages/JaunProfile';
import JaunCertificates from './pages/JaunCertificates';
import JaunProjects from './pages/JaunProjects';
import JaunResume from './pages/JaunResume';
import { MenuProvider } from './components/MenuContext';
import { DarkModeProvider } from './components/DarkModeContext';
import BlogPage from './pages/BlogPage';
import BlogPost from './components/BlogPost';
import NotFound from './pages/NotFound';

function App() {
    return (
        <DarkModeProvider>
            <MenuProvider>
                <Router basename="/">
                    <ScrollToTop />
                    <NavbarOffCanvas />
                    <Routes>
                        <Route path="/"            element={<JaunProfile />} />
                        <Route path="/jaun"        element={<JaunProfile />} />
                        <Route path="/jauncert"    element={<JaunCertificates />} />
                        <Route path="/jaunprojects" element={<JaunProjects />} />
                        <Route path="/jaunresume"  element={<JaunResume />} />
                        <Route path="/blog"        element={<BlogPage />} />
                        <Route path="/blog/:id"    element={<BlogPost />} />
                        <Route path="*"            element={<NotFound />} />
                    </Routes>
                </Router>
            </MenuProvider>
        </DarkModeProvider>
    );
}

export default App;