// > styled-components 
import styled from 'styled-components';

import backIcon from '../../assets/images/backIcon.png';

// > components 
import MovieDetail from '../Detail/MovieDetail';

// > 
import { useState, useEffect } from 'react';

// > react-router-dom@6 
import { useParams, Link } from 'react-router-dom';

// > axios 
import axios from 'axios';

// > api 
import { BASE_PATH, API_KEY, IMAGE_BASE_URL } from '../../Api';

const Detail = () => {
    const { movieId } = useParams();
    const [movieDetail, setMovieDetails] = useState([]);

    const getDetailMovies = async () => {
        await axios
            .get(`${BASE_PATH}/movie/${movieId}?api_key=${API_KEY}&language=ko`)
            .then((res) => {
                setMovieDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect( () => {
        getDetailMovies();
    });

    return(
        <>
            <DetailContainer>
                <Link to="/">
                    <BackIcon />
                </Link>
                <MovieDetail 
                    id = {movieDetail.id}
                    bgImg = {`${IMAGE_BASE_URL}original${movieDetail.backdrop_path}`}
                    posterImg = {`${IMAGE_BASE_URL}original${movieDetail.poster_path}`}
                    title = {movieDetail.title}
                    genres = {movieDetail.genres}
                    rating = {movieDetail.vote_average}
                    runtime = {movieDetail.runtime}
                    overview = {movieDetail.overview}
                />
            </DetailContainer>
        </>
    )
}
export default Detail;

const DetailContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

const BackIcon = styled.div`
    position: absolute;
    top: 100px;
    left: 15%;
    width: 60px;
    height: 60px;
    z-index: 100;
    background-image: url(${backIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        opacity: 0.8;
    }
`;