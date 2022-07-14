// > styled components 
import styled from 'styled-components';

// > router
import { Link } from 'react-router-dom';

const NavItem = ({NavMenuItems}) => {
  return(
    <>
      <NavItemLogo>
        <Link to="/">
          HYEON CINEMA
        </Link>
      </NavItemLogo>
      <NavMenu>
        <MenuList>
          {
            NavMenuItems.map(({title, path}) => {
              return (
                <MenuItem key={title}>
                  <Link to={`/page/${path}`}>
                    { title }
                  </Link>
                </MenuItem>
              )
            })
          }
        </MenuList>
      </NavMenu>
    </>
  )
}
export default NavItem;

const NavItemLogo = styled.div`
  a {
    font-size: 30px;
    color: #fff;
  }
`;

const NavMenu = styled.div`

`;
const MenuList = styled.ul`
  display: flex;
`;
const MenuItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  a {
    color: #fff;
  }
`;