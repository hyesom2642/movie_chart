// > styled components 
import styled from 'styled-components';

// > components 
import NavItem from './NavItem';
import NavSign from './NavSign';

// > data 
import NavMenuItems from './NavData';

const Nav = () => {
  return(
    <>
      <NavContainer>
        <NavItem NavMenuItems={NavMenuItems} />
        <NavSign />
      </NavContainer>
    </>
  )
}
export default Nav;

const NavContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 60px;
  padding: 0 30px;
  background-color: inherit;
  z-index: 100;
`;