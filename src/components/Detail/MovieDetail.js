// > styled components 
import styled from 'styled-components';

const MovieDetail = ({bgImg, posterImg, title, genres, rating, runtime, overview}) => {
    return(
        <>  
            <MovieWrapper>
                <MovieDetailBg bgImg={bgImg} />
                <MovieContainer>
                    <MoviePoster  posterImg={posterImg} />
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
                        <p>{overview}</p>
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
    height: 100vh;
`;

const MovieDetailBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bgImg});
    background-size: cover;
    background-position: center center;
    filter: brightness(50%);
`;

const MovieContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const MoviePoster = styled.div`
    width: 250px;
    height: 400px;
    background-image: url(${(props) => props.posterImg});
    background-size: cover;
    background-position: center center;
    margin-right: 50px;
`;

const MovieInfo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    color: #fff;

    h1 {
        font-size: 40px;
        margin-bottom: 10px;
    }
    p {
        font-size: 18px;
        margin-bottom: 10px;
    }
`;

const GenreWrapper = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const GenreItems = styled.div`
    margin-right: 10px;
    border: 1px solid #eee;
    border-radius: 50px;
    padding: 5px 15px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #eee;
        color: #000;
        cursor: pointer;
    }
`;
