// > react-router-dom@6 
import { Routes, Route } from 'react-router-dom';

// > components 
import Nav from './components/Nav/Nav';
import Home from './components/Routes/Home/Home';
import Detail from './components/Routes/Detail/Detail';

const App = () => {
  return(
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </>
  )
}
export default App;