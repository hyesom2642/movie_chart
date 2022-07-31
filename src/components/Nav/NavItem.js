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

    @media ${props => props.theme.tablet} {
        a {
            font-size: 35px;
        }
    }
`;
const NavMenu= styled.div`
    display: none;

    @media ${props => props.theme.desktop} {
        display: block;
    }
`;
const NavMenuList = styled.ul`
    display: flex;
    list-style: none;
`;
const NavMenuItem = styled.li`
    margin-right: 20px;
    transition: all 0.3s ease-in-out;

    a {
        color: #fff;
    }
    
    &:hover {
        font-weight: bold;
    }
    &:last-child {
        margin-right: 0;
    }    
`;