// > styled-components 
import styled from 'styled-components';

const NavSign = () => {
  return(
    <>
      <NavSignContainer>
        <SignItem>
          로그인
        </SignItem>
        <SignItem>
          회원가입
        </SignItem>
      </NavSignContainer>
    </>
  )
}
export default NavSign;

const NavSignContainer = styled.div`
  display: flex;
`;
const SignItem = styled.div`
  margin-right: 20px;
  color: #fff;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;