// > styled components 
import styled from 'styled-components';

// > components 
import NavItem from './NavItem';

// > data 
import NavItem_Obj from './NavData';

// > 
import { useState, useEffect } from 'react';

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);

  const scrollPosition = () => {
    setScrollY(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollPosition);
  }, [scrollY]);

  return(
    <>
      <Container className={scrollY > 50 ? "bgColor" : null}>
        <NavItem NavItem_Obj={NavItem_Obj} />
      </Container>
    </>
  )
}
export default Nav;

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 60px;
  padding: 0 30px;
  background-color: inherit;
  z-index: 10;

  &.bgColor {
    background-color: #000;
  }
`;