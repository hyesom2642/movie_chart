// > styled-components 
import styled from "styled-components";

// > react-router-dom@6 
import { Link } from "react-router-dom";

const MainSliderTextbox = ({id, title, overview}) => {
    return(
        <>
        <Container>
            <Link to={'/movie_chart/page/now_playing'}>
                <NowPlayingText>절찬상영중</NowPlayingText>
            </Link>
            <Link to={`/movie_chart/movie/${id}`}>
                <Title>{title}</Title>
            </Link>
            <Overview>
                {
                    overview.length > 150 ? `${overview.slice(0,149)}...` : overview
                }
            </Overview>
        </Container>
        </>
    )
}
export default MainSliderTextbox;

const Container = styled.div`
    width: 100vw;
    height: 100%;
    text-align: center;

    @media ${props => props.theme.tablet} {
        width: 40vw;
        text-align: left;
    }
`;

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
    font-size: 30px;
    color: #fff;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

    @media ${props => props.theme.tablet} {
        font-size: 40px;
    }
    @media ${props => props.theme.desktop} {
        font-size: 50px;

        &:hover {
            transform: scale(1.15);
        }
    }
`;
const Overview = styled.div`
    display: none;
    color: #fff;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(5px);
    }

    @media ${props => props.theme.tablet} {
        display: none;
    }
    @media ${props => props.theme.desktop} {
        display: block;
    }
`;