// > css 
import styled from 'styled-components';

import LoadingImg from '../../assets/images/loading.gif';

const Loading = () => {
    return(
        <>
            <Container>
                <LoadingImage src={LoadingImg} alt="Loading" width="50px" />
                <LoadingText>잠시만 기다려주세요.</LoadingText>
            </Container>
        </>
    )
}
export default Loading;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    font-weight: 300;
`;

const LoadingImage = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
`;
const LoadingText = styled.h1`
    font-size: 35px;
    color: #fff;
`;