// > react-router-dom@6 
import { Routes, Route } from 'react-router-dom';

// > components 
import Nav from './components/Nav/Nav';
import Home from './components/Routes/Home';

const App = () => {
  return(
    <>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </>
  )
}
export default App;