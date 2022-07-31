// 회원가입
// > css 
import styled from 'styled-components';

// > icons 
import { AiOutlineClose } from "react-icons/ai";

const SignUp = ({openModal, closeModalHandle}) => {
    return openModal === true ? (
        <>
            <Overlay onClick={closeModalHandle} />
            <ModalBox>
                <Header>
                    <Title>HYEONCINEMA</Title>
                    <CloseBtn onClick={closeModalHandle}>
                        <AiOutlineClose />
                    </CloseBtn>
                </Header>
                <Content>

                </Content>
            </ModalBox>
        </>
    )
    : null
}
export default SignUp;

const Overlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 19;
`;

const ModalBox = styled.div`
    position: absolute;
    width: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 25%);
    border: 0;
    background-color: #fff;
    border-radius: 25px;
    z-index: 20;
    text-align: center;
`;

const Header = styled.div`
    position: relative;
    background-color: #424242;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding: 10px 0;
`;
const Title = styled.h1`
    font-size: 30px;
    color: #fff;
`;
const CloseBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 10%;
    top: 25%;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 50px;
`;