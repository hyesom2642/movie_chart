import Action from '../../Action/Action';
import BestMovie from '../../BestMovie/BestMovie';
import Romance from '../../Romance/Romance';
import Horror from '../../Horror/Horror';

const Home = () => {
  return(
    <>
      <BestMovie />
      <Action />
      <Romance />
      <Horror />
    </>
  )
}
export default Home;