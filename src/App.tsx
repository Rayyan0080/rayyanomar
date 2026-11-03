import { Routes, Route } from 'react-router-dom';
import Terminal from './components/Terminal';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Interests from './pages/Interests';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Terminal>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Terminal>
  );
}
