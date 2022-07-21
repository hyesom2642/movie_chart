// > css 
import styled from 'styled-components';

// > router
import { Link } from 'react-router-dom';

const NavItem = ({NavItem_Obj}) => {
    // const navigate = useNavigate();

    return(
        <>
                <NavItemLogo>
                    <Link to="/">
                        HYEONCINEMA
                    </Link>
                </NavItemLogo>
                <NavMenu>
                    <NavMenuList>
                        {
                            NavItem_Obj.map(({title, path}) => {
                                return(
                                    <NavMenuItem key={title}>
                                        <Link to={`/page/${path}`}>
                                            {title}
                                        </Link>
                                    </NavMenuItem>
                                )
                            })
                        }
                    </NavMenuList>
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
const NavMenu= styled.div`

`;

const NavMenuList = styled.ul`
    display: flex;
    list-style: none;
`;

const NavMenuItem = styled.li`
    margin-right: 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
        font-weight: bold;
    }
    &:last-child {
        margin-right: 0;
    }
    
    a {
        color: #fff;
    }
`;