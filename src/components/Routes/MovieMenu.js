// > styled-components 
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// > api 
import { IMAGE_BASE_URL, BASE_PATH, API_KEY } from '../../Api';

// > components 
import MovieCard from '../Card/MovieCard';


const MovieMenu = () => {
    const { menu } = useParams();
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const getMovies = async () => {
        if( menu === "now_playing"){
            await axios
                .get(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko`)
                .then((res) => {
                    setMovies(res.data.results);
                })
                .catch((err) => {
                    console.log(err);
                })
        } else if ( menu === "popular") {
            await axios
                .get(`${BASE_PATH}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${currentPage}&language=ko`)
                .then((res) => {
                    setMovies(res.data.results);
                })
                .catch((err) => {
                    console.log(err);
                })
        } else if ( menu === "top_rated") {
            await axios
                .get(`${BASE_PATH}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&page=${currentPage}&language=ko`)
                .then((res) => {
                    setMovies(res.data.results);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if ( menu === "up_coming") {
            await axios
                .get(`${BASE_PATH}/discover/movie?api_key=${API_KEY}&sort_by=primary_release_date.desc&page=${currentPage}&language=ko`)
                .then((res) => {
                    setMovies(res.data.results);
                })
                .catch((err) => {
                    console.log(err);
                })
        }   
    }

    useEffect( () => {
        setCurrentPage(1);
    }, [menu]);

    useEffect( () => {
        if( 
            menu !== "now_playing" &&
            menu !== "popular" &&
            menu !== "top_rated" &&
            menu !== "up_coming"
        ) {
            navigate("/404", { replace: true });
        } else {
            getMovies();
        }
    });

    return(
        <>
            <Container>
                <Movies>
                    {
                        movies.map((movie) => (
                            <MovieCard 
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                posterUrl={`${IMAGE_BASE_URL}original${movie.poster_path}`}
                                vote={movie.vote_average}
                            />
                        ))

                    }
                </Movies>
            </Container>
        </>
    )
}
export default MovieMenu;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    width: 100%;
    margin-top: 100px;

    @media ${props => props.theme.tablet} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 15px;
        width: 80%;
        margin-top: 100px;
    }
    @media ${props => props.theme.desktop} {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 15px;
        width: 80%;
        margin-top: 100px;
    }
`;