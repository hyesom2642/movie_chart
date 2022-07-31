// 로그인
// > css 
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
    width: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 25%);
    border: 0;
    background-color: #fff;
    border-radius: 25px;
    z-index: 20;
    text-align: center;
    overflow: hidden;
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
    padding: 30px 50px;
`;

const Email = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;
const EmailLabel = styled.label`
    font-size: 30px;
    font-weight: bold;
`;
const EmailInput = styled.input`
    border: 1px solid #eee;
`;

const Password = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;
const PasswordLabel = styled.label`
    font-size: 30px;
    font-weight: bold;
`;
const PasswordInput = styled.input`
    border: 1px solid #eee;
`;

const SubmitBtn = styled.button`
    width: 100%;
    background-color: #424242;
    cursor: pointer;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    padding: 10px; 0;
    transition: opacity 0.3s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;