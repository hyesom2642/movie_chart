import Action from '../../Action/Action';
import Anime from '../../Anime/Anime';
// import BestMovie from '../../BestMovie/BestMovie';
import Drama from '../../Drama/Drama';
import Romance from '../../Romance/Romance';
import Horror from '../../Horror/Horror';

const Home = () => {
  return(
    <>
      {/* <BestMovie /> */}
      <Action />
      <Anime />
      <Drama />
      <Romance />
      <Horror />
    </>
  )
}
export default Home;