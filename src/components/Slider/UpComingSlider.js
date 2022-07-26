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

const UpComingSlider = ({upComingMovies}) => {
    return(
        <>
            <UpComingTitle>
                <Link to={"/page/latest"}>
                    상영 예정작
                </Link>
            </UpComingTitle>
            <UpComingSwiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                // slidesPerGroup={5}
                slidesPerView={5}
                navigation
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                
            
            >
                {
                    upComingMovies && upComingMovies.map((upcomingMovie) => (
                        <SwiperSlide key={upcomingMovie.id}>
                            <MovieCard 
                                id={upcomingMovie.id}
                                posterUrl={`${IMAGE_BASE_URL}original${upcomingMovie.poster_path}`}
                                title={upcomingMovie.title}
                                vote={upcomingMovie.vote_average}
                            />
                        </SwiperSlide>
                    ))
                }
            </UpComingSwiper>
        </>
    )
}
export default UpComingSlider;

const UpComingTitle = styled.div`
    margin: 20px 0;
    text-align: center;

    a {
        font-size: 50px;
        font-weight: bold;
        color: #fff;
    }
`;
    
const UpComingSwiper = styled(Swiper)`
    position: relative;
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