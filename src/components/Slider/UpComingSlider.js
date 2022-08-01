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
                spaceBetween={0}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    900: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1600: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }}            
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
        font-size: 30px;
        font-weight: bold;
        color: #fff;
    }

    @media ${props => props.theme.tablet} {
        a {
            font-size: 40px;
        }
    }
    @media ${props => props.theme.desktop} {
        a {
            font-size: 50px;
        }
    }
`;
    
const UpComingSwiper = styled(Swiper)`
    width: 90vw;

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .swiper-slide > a {
        display: flex;
        justify-content: center;
        align-itmes: center;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        font-size: 40px;
        color: #fff;
        font-weight: bold;
    }

    @media ${props => props.theme.tablet} {
        .swiper-button-next::after,
        .swiper-button-prev::after {
            font-size: 50px;
            color: #fff;
            font-weight: bold;
        }
    }
    @media ${props => props.theme.desktop} {
        .swiper-button-next::after,
        .swiper-button-prev::after {
            font-size: 60px;
            color: #fff;
            font-weight: bold;
        }
    }
`;