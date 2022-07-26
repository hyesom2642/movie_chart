// > styled-components 
import styled from 'styled-components';

// > 
import { useState, useEffect } from 'react';
import axios from 'axios';

// > 
import { API_KEY, BASE_PATH } from '../../Api';

// > components 
import MainSlider from '../Slider/MainSlider';
import TopRatedSlider from '../Slider/TopRatedSlider';
import UpComingSlider from '../Slider/UpComingSlider';

const Home = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);

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

  const TopRatedGetMovies = async () => {
    await axios
      .get(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&language=ko`)
      .then((res) => {
        setTopRatedMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const UpComingGetMovies = async () => {
    await axios
      .get(`${BASE_PATH}/movie/upcoming?api_key=${API_KEY}&language=ko`)
      .then((res) => {
        setUpComingMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect( () => {
    nowPlayingGetMovies();
    TopRatedGetMovies();
    UpComingGetMovies();
  }, [])

  return(
    <>
      <Container>
        <MainSlider nowPlayingMovies={nowPlayingMovies} />
        <TopRatedSlider topRatedMovies={topRatedMovies} />
        <UpComingSlider upComingMovies={upComingMovies}/>
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