// > styled-components 
import styled from 'styled-components';

// > 
import { useState, useEffect } from 'react';
import axios from 'axios';

// > 
import { API_KEY, BASE_PATH } from '../../Api';

// > components 
import MainSlider from '../Slider/MainSlider';

const Home = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

	const nowPlayingGetMovies = async () => {
		await axios
			.get(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko`)
			.then((res) => {
				setNowPlayingMovies(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	};

  useEffect( () => {
    nowPlayingGetMovies();
  }, [])

  return(
    <>
      <Container>
        <MainSlider nowPlayingMovies={nowPlayingMovies} />
      </Container>
    </>
  )
}
export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 10vh;
`;