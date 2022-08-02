// > styled components
import styled from 'styled-components';

const MovieDetail = ({bgImg, posterImg, title, genres, rating, runtime, overview}) => {
    return(
        <>  
            <MovieWrapper>
                <MovieDetailBg bgImg={bgImg} posterImg={posterImg} />
                <MovieContainer>
                    <MoviePoster posterImg={posterImg} />
                    <MovieInfo>
                        <h1>{title}</h1>
                        <GenreWrapper>
                            {
                                genres && genres.map((genre, i) => (
                                    <GenreItems key={i}>{genre.name}</GenreItems>
                                ))
                            }
                        </GenreWrapper>
                        <p>🎬 {runtime} 분</p>
                        <p>⭐ {rating} / 10.0 </p>
                        <p className="content">
                            {
                                overview && overview.length > 150 ? `${overview.slice(0, 149)}...` : overview
                            }
                        </p>
                    </MovieInfo>
                </MovieContainer>
            </MovieWrapper>
        </>
    )
}
export default MovieDetail;

const MovieWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100%;
`;

const MovieDetailBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.posterImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: brightness(50%);

    @media ${props => props.theme.tablet} {
        background-image: url(${props => props.bgImg});
    }
`;

const MovieContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    @media ${props => props.theme.desktop} {
        flex-direction: row;
    }
`;

const MoviePoster = styled.div`
    display: block;
    width: 250px;
    height: 400px;
    margin-bottom: 10px;
    background-image: url(${(props) => props.posterImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    @media ${props => props.theme.desktop} {
        margin-bottom: 0;
    }
`;

const MovieInfo = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    color: #fff;
    
    h1 {
        font-size: 30px;
        margin-bottom: 10px;
    }
    p {
        font-size: 18px;
        margin-bottom: 5px;
    }
    p.content {
        padding: 0 20px;
        margin-bottom: 0;
    }

    @media ${props => props.theme.tablet} {
        h1 {
            font-size: 35px;
        }
        p {
            font-size: 20px;
            margin-bottom: 10px;
        }
        p.content {
            padding: 0 60px;
        }
    }

    @media ${props => props.theme.desktop} {
        width: 60vw;
        padding: 0 30px;

        h1 {
            font-size: 40px;
        }
        p {
            font-size: 22px;
        }
        p.content {
            padding: 0;
        }
    }
`;

const GenreWrapper = styled.div`
    display: flex;
    margin-bottom: 5px;

    @media ${props => props.theme.desktop} {
        margin-bottom: 10px;
    }
`;

const GenreItems = styled.div`
    font-size: 14px;
    margin-right: 10px;
    border: 1px solid #eee;
    border-radius: 50px;
    padding: 5px 15px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #eee;
        color: #000;
        font-weight: bold;
        cursor: pointer;
    }

    &:last-child {
        margin-right: 0;
    }
`;
