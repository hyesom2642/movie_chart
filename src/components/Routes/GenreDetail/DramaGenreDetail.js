// > css 
import style from './AnimeGenreDetail.module.css';

// > 
import { useEffect, useState } from 'react';

// >  react-router-dom@6
// import { Link } from 'react-router-dom';

const DramaGenreDetail = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://yts.mx/api/v2/list_movies.json?genre=drama&&minimum_rating=8.5")
        .then((response) => response.json())
        .then((json) => {
        setMovies(json.data.movies);
        })
    }, []);

    return(
        <>
            <div className={`container ${style.genre__container}`}>
                {
                    movies.map( (movie) => (
                        <div className={`${style.image__wrapper}`} key={movie.id}>
                            <img src={movie.medium_cover_image} alt={movie.title} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default DramaGenreDetail;