// > css 
import style from './Detail.module.css';

// > 
import { useEffect, useState } from 'react';

// > icons
import { RiArrowGoBackLine } from "react-icons/ri";

// > react-router-dom@6
import { useParams, Link } from 'react-router-dom';

const Detail = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState([]);

  useEffect( () => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setMovie(json.data.movie);
      })
      .catch((error) => {
        console.log(`error: ${error}`)
      });
  });

  return(
    <>
      <div className={`${style.wrapper}`}>
        <img src={movie.background_image_original} alt="" className={`${style.background__images}`} />
        <Link to="..">
          <RiArrowGoBackLine className={`${style.ic__back}`}/>
        </Link>
        <div className={`container ${style.detail__container}`}>
          <div className={`${style.left}`}>
            <img className={`${style.left__poster}`} src={movie.large_cover_image} alt={movie.title} />
          </div>
          <div className={`${style.right}`}>
            <a href={movie.url}>
              <h1 className={`${style.right__title}`}>{movie.title_long}</h1>
            </a>
            <p className={`${style.right__rating}`}>⭐ rate : {movie.rating} / 10.0</p>
            <p className={`${style.right__runtime}`}>🎬 RunTime : {movie.runtime} minutes</p>
            {/* <ul className={`${style.right__genres__list}`}>
              {
                movie.genres.map((g, i) => (
                  <li className={`${style.right__genres__item}`} key={i}>{g}</li>
                ))
              }
            </ul> */}
            {/* {
              movie.description_full.length < 1000
              ? <p className={`${style.right__summary}`}>{movie.description_full}</p>
              : movie.description_full.substr(0,999)+" ..."
            } */}
            <p className={`${style.right__summary}`}>{movie.description_full}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Detail;