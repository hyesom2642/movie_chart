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
    display: flex;
    width: 100vw;
    height: calc(100vh-60px);
    min-height: 500px;

    .swiper-button-next,
    .swiper-button-prev {
        width: 100px;
        height: 100px;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
        font-size: 80px;
        color: #fff;
    }
`;

const Text = styled.div`
    position: absolute;
    top: 15%;
    left: 5%;
    width: 40%;
    height: 50%;
    color: #fff;
    z-index: 50;
`;