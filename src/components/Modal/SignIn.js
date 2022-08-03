// 로그인
// > styled-components 
import styled from 'styled-components';

// > icons 
import { AiOutlineClose } from "react-icons/ai";

const SignIn = ({openModal, closeModalHandle}) => {
    return openModal === true ? (
        <>
            <Overlay onClick={closeModalHandle}/>
            <ModalBox>
                <Header>
                    <Title>HYEONCINEMA</Title>
                    <CloseBtn onClick={closeModalHandle}>
                        <AiOutlineClose />
                    </CloseBtn>
                </Header>
                <Content>
                    <Email>
                        <EmailLabel for="user-email">이메일</EmailLabel>
                        <EmailInput required type="email" id="user-email" placeholder='이메일 주소' />
                    </Email>
                    <Password>
                        <PasswordLabel for="user-pw">비밀번호</PasswordLabel>
                        <PasswordInput required type="password" id="user-pw" placeholder='비밀번호' />
                    </Password>
                    <SubmitBtn type="submit">로그인</SubmitBtn>
                </Content>
            </ModalBox>
        </>
    )
    : null
}
export default SignIn;

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
    width: 350px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 25%);
    border: 0;
    background-color: #fff;
    border-radius: 25px;
    z-index: 20;
    text-align: center;
    overflow: hidden;

    @media ${props => props.theme.tablet} {
        width: 500px;
    }
    @media ${props => props.theme.desktop} {
        width: 600px;
    }
`;

const Header = styled.div`
    position: relative;
    background-color: #424242;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding: 10px 0;
`;
const Title = styled.h1`
    font-size: 20px;
    color: #fff;

    @media ${props => props.theme.tablet} {
        font-size: 25px;
    }
    @media ${props => props.theme.desktop} {
        font-size: 30px;
    }
`;
const CloseBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10%;
    top: 25%;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;

    @media ${props => props.theme.tablet} {
        width: 25px;
        height: 25px;
        font-size: 25px;
    }
    @media ${props => props.theme.desktop} {
        width: 30px;
        height: 30px;    
        font-size: 30px;
    }
`;

const Content = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 30px 50px;
`;

const Email = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;
const EmailLabel = styled.label`
    font-size: 20px;
    font-weight: bold;

    @media ${props => props.theme.tablet} {
        fotn-size: 25px;
    }
    @media ${props => props.theme.desktop} {
        font-size: 30px;
    }
`;
const EmailInput = styled.input`
    width: 250px;
    border: 1px solid #eee;
    outline: none;
    padding: 10px;

    &:focus {
        border: 2px solid #202020;
    }

    @media ${props => props.theme.tablet} {
        width: 400px;
    }
    @media ${props => props.theme.desktop} {
        width: 500px;
    }
`;

const Password = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;
const PasswordLabel = styled.label`
    font-size: 20px;
    font-weight: bold;

    @media ${props => props.theme.tablet} {
        fotn-size: 25px;
    }
    @media ${props => props.theme.desktop} {
        font-size: 30px;
    }
`;
const PasswordInput = styled.input`
    width: 250px;
    border: 1px solid #eee;
    outline: none;
    padding: 10px;

    &:focus {
        border: 2px solid #202020;
    }

    @media ${props => props.theme.tablet} {
        width: 400px;
    }
    @media ${props => props.theme.desktop} {
        width: 500px;
    }
`;

const SubmitBtn = styled.button`
    width: 100%;
    background-color: #424242;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    padding: 10px; 0;
    transition: opacity 0.3s ease-in-out;

    &:hover {
        opacity: 0.8;
    }

    @media ${props => props.theme.tablet} {
        fotn-size: 25px;
    }
    @media ${props => props.theme.desktop} {
        font-size: 30px;
    }
`;