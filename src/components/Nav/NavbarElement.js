// > styled-components 
import styled from 'styled-components';

const Container = styled.div`
  display: none;

  @media ${props => props.theme.tablet} {
    display: none;
  }
  @media ${props => props.theme.desktop} {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 60px;
    padding: 0 30px;
    background-color: inherit;
    z-index: 100;
  
    &.bgColor {
      background-color: #000;
    }
  }
`;

const NavLogo = styled.h1`
  a {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
  }
`;

const NavbarMenu = styled.ul`
  display: flex;
  justify-cotnent: center;
  align-items: center;
  color: #fff;
`;
const NavbarMenuItem = styled.li`
  cursor: pointer;
  margin-right: 20px;
  transition: all 0.3s ease-in-out;

  &:last-child {
      margin-right: 0;
  } 
  &:hover {
      font-weight: bold;
  }
`;

const MenuIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  z-index: 100;

  GiHamburgerMenu {
    width: 100%;
    height: 100%;
  }
  AiOutlineClose {
    width: 100%;
    height: 100%;
  }

  @media ${props => props.theme.tablet} {
    font-size: 15px;
    height: 15px;
    width: 50px;
    height: 50px;
    font-size: 50px;
  }
  @media ${props => props.theme.desktop} {
    display: none;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  z-index: 99;

  h1 {
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  li {
    margin-right: 0;
  }

  @media ${props => props.theme.tablet} {
    h1 {
      a {
        font-size: 50px;
      }
    }

    ul {
      font-size: 25px;
    }
  }

  @media ${props => props.theme.desktop} {
    display: none;
  }
`;

export { Container, NavLogo, NavbarMenu, NavbarMenuItem, MenuIcon, Sidebar };