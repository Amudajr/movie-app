import HomePage from './pages/Home';
import MoviePage from './pages/Movie';
import TvShowPage from './pages/TvShow';
import { Routes, Route } from 'react-router-dom';
import BlogPage from './pages/Blog ';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movies' element={<MoviePage />} />
      <Route path='/tv-shows' element={<TvShowPage />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  );
}

export default App;
