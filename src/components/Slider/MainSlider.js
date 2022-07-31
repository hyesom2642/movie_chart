// > styled components
import styled from 'styled-components';

// > Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// > Import Swiper React components
import { Navigation, Autoplay } from "swiper";

// > Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// > components 
import MainSliderCard from './MainSliderCard';
import MainSliderTextbox from './MainSliderTextbox';

// > 
import { IMAGE_BASE_URL } from '../../Api';

const MainSlider = ({nowPlayingMovies}) => {
    return(
        <>
            <MainSwiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            >
                {
                    nowPlayingMovies && nowPlayingMovies.slice(0, 6).map((nowPlayMovie) => (
                        <SwiperSlide key={nowPlayMovie.id}>
                            <MainSliderCard
                                id={nowPlayMovie.id}
                                title={nowPlayMovie.title}
                                imgurl={`${IMAGE_BASE_URL}original${nowPlayMovie.backdrop_path}`}
                            />
                            <Text>
                                <MainSliderTextbox
                                    id={nowPlayMovie.id}
                                    title={nowPlayMovie.title}
                                    overview={nowPlayMovie.overview}
                                />
                            </Text>
                        </SwiperSlide>
                    ))
                }
            </MainSwiper>
        </>
    )
}
export default MainSlider;

const MainSwiper = styled(Swiper)`
    position: relative;
    width: 100vw;
    height: calc(100vh-60px);

    .swiper-button-next,
    .swiper-button-prev {
        width: 40px;
        height: 40px;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
        font-size: 40px;
        color: #fff;
    }

    @media ${props => props.theme.tablet} {
        .swiper-button-next,
        .swiper-button-prev {
            width: 60px;
            height: 60px;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
            font-size: 60px;
            color: #fff;
        }
    }
    @media ${props => props.theme.desktop} {
        max-height: 85vh;
        
        .swiper-button-next,
        .swiper-button-prev {
            width: 80px;
            height: 80px;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
            font-size: 80px;
            color: #fff;
        }
    }
`;
const Text = styled.div`
    position: absolute;
    left: 0;
    top: 60px;
    width: 100%;
    height: 100%;
    color: #fff;
    z-index: 50;

    @media ${props => props.theme.tablet} {
        height: 50%;
        left: 10%;
        top: 20%;
    }
    
`;

// const MainSwiper = styled(Swiper)`
//     position: relative;
//     display: flex;
//     width: 100vw;
//     height: calc(100vh-60px);
//     min-height: 500px;

//     .swiper-button-next,
//     .swiper-button-prev {
//         width: 100px;
//         height: 100px;
//     }
//     .swiper-button-prev::after,
//     .swiper-button-next::after {
//         font-size: 80px;
//         color: #fff;
//     }

//     // tablet
//     @media ${props => props.theme.md} {
//     }

//     // mobile
//     @media ${props => props.theme.sm} {
//         min-height: 0;

//         .swiper-button-next,
//         .swiper-button-prev {
//             width: 50px;
//             height: 50px;
//         }
//         .swiper-button-prev::after,
//         .swiper-button-next::after {
//             font-size: 50px;
//         }
//     }
// `;