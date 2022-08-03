// > styled components
import styled from 'styled-components';

// > react-router-dom@6 
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MovieCard = ({id, title, posterUrl, vote}) => {
    const [show, setShow] = useState(false);


    return(
        <>
            <Link to={`/movie/${id}`}>
                <Movie onMouseMove={() => {setShow(true)}}
                        onMouseLeave={() => {setShow(false)}}>
                    <img src={posterUrl} alt={title} 
                    />
                    {
                        show === true 
                        ? <TextBox>
                            <p>{title}</p>
                            <p>{vote} / 10</p>
                        </TextBox>
                        : null
                    }

                </Movie>
            </Link>
        </>
    )
}
export default MovieCard;

const Movie = styled.div`
    position: relative;
    width: 200px;
    height: 300px;
    transition: all 0.3s ease-in-out;

    &:hover {
        opacity: 0.8;
        transform: scale(1.05);
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

const TextBox= styled.div`
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        text-align: center;
        font-size: 18px;
        font-weight: bold;
    }
`;