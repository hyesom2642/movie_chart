// > styled-components 
import styled from 'styled-components';

// > react-router-dom@6 
import { Link } from 'react-router-dom';

// > Import Swiper styles 
import "swiper/css";

const MainSliderCard = ({id, title, imgurl}) => {
    return(
        <>
            <Link to={`/movie_chart/movie/${id}`}>
                <SlideImage>
                    <img src={imgurl} alt={title} />
                </SlideImage>
            </Link>
        </>
    )
}
export default MainSliderCard;

const SlideImage = styled.div`
    width: 100%;
    height: 100%;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }
`;