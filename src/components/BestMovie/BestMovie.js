// > css 
import style from './BestMovie.module.css';

// > 
import { useState, useEffect } from 'react';

// > react-slick 
import Slider from "react-slick";

// > icons 
import { BiRightArrow } from "react-icons/bi";

// > react-router-dom@6 
import { Link } from 'react-router-dom';

const BestMovie = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    // slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    cssEase: "linear"
  };

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0")
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.data.movies);
    })
  }, []);

  return(
    <>
      <section>
        <div className={`container ${style.container__bestmovie}`}>
          <h1 className={`title ${style.title__bestmovie}`}>
            <BiRightArrow />
            Best Movie
          </h1>
          <Slider {...settings}>
            {
              movies.map( (movie, i) => (
                <Link to={`/movie/${movie.id}`} key={i}>
                  <div className={`${style.slide__img__wrapper}`}>
                    <img src={movie.medium_cover_image} alt={movie.title}/>
                  </div>
                </Link>
              ))
            }
          </Slider>
        </div>
      </section>
    </>
  )
}
export default BestMovie;