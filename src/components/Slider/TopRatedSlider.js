// > styled components
import styled from 'styled-components';

// > react-router-dom@6 
import { Link } from 'react-router-dom';

// > api
import { IMAGE_BASE_URL } from '../../Api';

// > Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// > Import Swiper React components
import { Navigation, Autoplay } from "swiper";

// > components 
import MovieCard from '../Card/MovieCard';

const TopRatedSlider = ({topRatedMovies}) => {    
    return(
        <>
            <LatestTitle>
                <Link to={"/page/latest"}>
                    평점 높은 영화
                </Link>
            </LatestTitle>
            <LatestSwiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={5}
                navigation
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            >
                {
                    topRatedMovies && topRatedMovies.map((topRatedMovie) => (
                        <SwiperSlide key={topRatedMovie.id}>
                            <MovieCard 
                                id={topRatedMovie.id}
                                posterUrl={`${IMAGE_BASE_URL}original${topRatedMovie.poster_path}`}
                                title={topRatedMovie.title}
                                vote={topRatedMovie.vote_average}
                            />
                        </SwiperSlide>
                    ))
                }
            </LatestSwiper>
        </>
    )
}
export default TopRatedSlider;

const LatestTitle = styled.div`
    margin: 20px 0;
    text-align: center;

    a {
        font-size: 50px;
        font-weight: bold;
        color: #fff;
    }
`;

const LatestSwiper = styled(Swiper)`
    width: 90%;

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .swiper-slide:last-child {
        a {
            margin-right: 0;
        }
    }
    .swiper-button-next::after,
    .swiper-button-prev::after {
        font-size: 60px;
        color: #fff;
        font-weight: bold;
    }
`;