// > react-router-dom@6 
import { Routes, Route } from 'react-router-dom';

// > components 
import Nav from './components/Nav/Nav';
import Home from './components/Routes/Home/Home';
import Detail from './components/Routes/Detail/Detail';
import ActionGenreDetail from './components/Routes/GenreDetail/ActionGenreDetail';
import AnimeGenreDetail from './components/Routes/GenreDetail/AnimeGenreDetail';
import DramaGenreDetail from './components/Routes/GenreDetail/DramaGenreDetail';
import RomanceGenreDetail from './components/Routes/GenreDetail/RomanceGenreDetail';
import HorrorGenreDetail from './components/Routes/GenreDetail/HorrorGenreDetail';

const App = () => {
  return(
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/movie/genre">
          <Route path="/movie/genre/action" element={<ActionGenreDetail />} />
          <Route path="/movie/genre/animation" element={<AnimeGenreDetail />} />
          <Route path="/movie/genre/drama" element={<DramaGenreDetail />} />
          <Route path="/movie/genre/romance" element={<RomanceGenreDetail />} />
          <Route path="/movie/genre/horror" element={<HorrorGenreDetail />} />
        </Route>
      </Routes>
    </>
  )
}
export default App;