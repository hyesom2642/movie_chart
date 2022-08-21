// > styled-components 
import { Container, NavLogo, NavbarMenu, NavbarMenuItem, MenuIcon, Sidebar } from './NavbarElement';

// > icons 
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

// > data 
import { NavMenu, NavSignMenu } from './NavData';

// > router 
import { Link } from 'react-router-dom';

// > 
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuToggle, setMenuToggle] = useState(false);

  const scrollPosition = () => {
    setScrollY(window.scrollY);
  }
  const menuHandler = () => {
    setMenuToggle(!menuToggle);
  }

  useEffect( () => {
    window.addEventListener('scroll', scrollPosition);

    return () => {
      window.removeEventListener('scroll', scrollPosition);
    }
  }, []);
  return(
    <>
        {
          menuToggle === false 
          ? <MenuIcon onClick={ menuHandler }>
              <GiHamburgerMenu />
            </MenuIcon>
          : <>
            <MenuIcon onClick={ menuHandler }>
              <AiOutlineClose />
            </MenuIcon>
            <Sidebar>
              <NavLogo>
                <a href="/">
                  HEYON CINEMA
                </a>
              </NavLogo>
              <NavbarMenu>
                {
                  NavMenu.map( (NavMenu, i) => {
                    return (
                      <NavbarMenuItem key={i}>
                        <Link to={`/movie_chart/page/${NavMenu.path}`}>
                          {NavMenu.title}
                        </Link>
                      </NavbarMenuItem>
                    )
                  })
                }
              </NavbarMenu>
              <NavbarMenu>
                {
                  NavSignMenu.map( (NavSignMenu, i) => {
                    return (
                      <NavbarMenuItem key={i}>
                        {NavSignMenu.title}
                      </NavbarMenuItem>
                    )
                  })
                }
              </NavbarMenu>
            </Sidebar>
          </>
        }


      <Container className={ scrollY > 60 ? 'bgColor': null}>
        <NavLogo>
          <Link to="/">
            HEYON CINEMA
          </Link>
        </NavLogo>
        <NavbarMenu>
          {
            NavMenu.map( (NavMenu, i) => {
              return (
                <NavbarMenuItem key={i}>
                  <Link to={`/movie_chart/page/${NavMenu.path}`}>
                    {NavMenu.title}
                  </Link>
                </NavbarMenuItem>
              )
            })
          }
        </NavbarMenu>
        <NavbarMenu>
          {
            NavSignMenu.map( (NavSignMenu, i) => {
              return (
                <NavbarMenuItem key={i}>
                  {NavSignMenu.title}
                </NavbarMenuItem>
              )
            })
          }
        </NavbarMenu>
      </Container>
    </>
  )
}
export default Navbar;