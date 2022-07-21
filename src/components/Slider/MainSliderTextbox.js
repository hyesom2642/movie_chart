// > styled-components 
import styled from "styled-components";

// > react-router-dom@6 
import { Link } from "react-router-dom";

const MainSliderTextbox = ({id, title, overview}) => {
    return(
        <>
            <Link to={'/page/now_playing'}>
                <NowPlayingText>절찬상영중</NowPlayingText>
            </Link>
            <Link to={`/movie/${id}`}>
                <Title>{title}</Title>
            </Link>
            <Overview>
                {
                    overview.length > 150 ? `${overview.slice(0,149)}...` : overview
                }
            </Overview>
        </>
    )
}
export default MainSliderTextbox;

const NowPlayingText = styled.h1`
    font-size: 30px;
    color: #fff;
    margin-bottom: 10px;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }
`;

const Title = styled.h1`
    font-size: 50px;
    color: #fff;
    margin-bottom: 10px;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.15);
    }
`;
const Overview = styled.div`
    font-size: 20px;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        transform: translateY(5px);
    }

    @media screen and (max-width: 500px){
        display: none;
    }    
`;