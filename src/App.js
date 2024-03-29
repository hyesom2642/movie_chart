// > react-router-dom@6 
import { Routes, Route } from 'react-router-dom';

// > 
import { useState, useEffect } from 'react';

// > components 
import Navbar from './components/Nav/Navbar';
// import Nav from './components/Nav/Nav';
import Home from './components/Routes/Home';
import MovieMenu from './components/Routes/MovieMenu';
import Detail from './components/Routes/Detail';
import Loading from './components/Loading/Loading';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    setLoading(false);
  }, [])

  return(
    <>
    {
      loading === true
      ? <Loading />
      :
      <>
        <Navbar />
        <Routes>
          <Route path={`/movie_chart`} element={<Home />} />
          <Route path={`/movie_chart/page/:menu`} element={<MovieMenu />} />
          <Route path={`/movie_chart/movie/:movieId`} element={<Detail />} />
        </Routes>
      </>
    }
    </>
  )
}
export default App;