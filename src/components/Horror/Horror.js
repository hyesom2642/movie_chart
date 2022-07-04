// > css 
import style from './Horror.module.css';

// > 
import { useEffect, useState } from "react";

// > react-slick
import Slider from "react-slick";

// > icons 
import { BiRightArrow } from "react-icons/bi";

// >  react-router-dom@6
import { Link, useNavigate } from 'react-router-dom';

const Horror = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const onClickTitle = () => {
    navigate(`/movie/genre/horror`);
  }

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?genre=Horror&&minimum_rating=8.5")
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.data.movies);
    })
  }, []);

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
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };

  return(
    <>
      <section>
        <div className={`container ${style.container__action}`}>
          <h1 
            className={`title ${style.title__horror}`}
            onClick={ onClickTitle }
          >
            <BiRightArrow />
            Horror
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
export default Horror;