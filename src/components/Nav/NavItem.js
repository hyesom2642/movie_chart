// > css 
import styled from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

// > router
import { Link } from 'react-router-dom';

// > componoentns 
import NavSign from './NavSign';

// > 
import { useState } from 'react';

const NavItem = ({NavItem_Obj}) => {
    const [menuToggle, setMenuToggle] = useState(false);
    const menuHandler = () => {
        setMenuToggle(!menuToggle);
    }

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
            <NavSign />
            <MenuIcon>
                <GiHamburgerMenu onClick={menuHandler} />
                <OpenMenu className={menuToggle === false ? "show" : "hide"}>
                    <CloseIcon onClick={menuHandler} >
                        <AiOutlineClose />
                    </CloseIcon>
                    {
                        NavItem_Obj.map(({title, path}) => {
                            return(
                                <>
                                    <NavMenuItem key={title}>
                                        <Link to={`/page/${path}`}>
                                            {title}
                                        </Link>
                                    </NavMenuItem>
                                    <NavSign />
                                </>
                            )
                        })
                    }
                </OpenMenu>
            </MenuIcon>
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

const MenuIcon= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: 30px;
    color: #fff;
    cursor: pointer;

    @media ${props => props.theme.tablet} {
        width: 40px;
        height: 40px;
        font-size: 40px;
    }
    @media ${props => props.theme.desktop} {
        display: none;
    }
`;

const OpenMenu = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 200;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.show {
        display: block;
    }
    &.hide {
        display: none;
    }
`;

const CloseIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-size: 40px;
    color: #fff;
    margin-bottom: 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;