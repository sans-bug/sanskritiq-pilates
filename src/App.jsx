import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import Schedule from './pages/Schedule';
import Studio from './pages/Studio';
import Book from './pages/Book';
import DummyPage from './pages/DummyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/journal" element={<DummyPage title="Journal" />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
