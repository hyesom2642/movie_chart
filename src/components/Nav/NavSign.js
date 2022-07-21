// > css 
import styled from 'styled-components';

const NavSign = () => {
    return(
        <>
            <SignContainer>
                <SignItem>
                    회원가입
                </SignItem>
                <SignItem>
                    로그인
                </SignItem>
            </SignContainer>
        </>
    )
}
export default NavSign;

const SignContainer = styled.ul`
    display: flex;
`;
const SignItem = styled.li`
    cursor: pointer;
    color: #fff;
    margin-right: 20px;
    transition: all 0.3s ease-in-out;
    
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        font-weight: bold;
    }
`;