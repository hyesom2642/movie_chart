// > css 
import styled from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi";

// > components 
import SignUp from '../Modal/SignUp';
import SignIn from '../Modal/SignIn';

// > 
import { useState } from 'react';

const NavSign = () => {
    const [openModal, setOpenModal] = useState(false);
    const [changeModal, setChangeModal] = useState("로그인");
    const openModalHandle = (e) => {
        if (e.target.getAttribute("name") === "로그인") {
            setChangeModal("로그인");
		} else {
			setChangeModal("회원가입");
		}
		setOpenModal(true);
    }
    const closeModalHandle = () => {
        setOpenModal(false);
    }

    return(
        <>
            <SignContainer>
                <SignItem name="회원가입" onClick={openModalHandle}>
                    회원가입
                </SignItem>
                <SignItem name="로그인" onClick={openModalHandle}>
                    로그인
                </SignItem>
            </SignContainer>
            <MenuIcon>
                <GiHamburgerMenu />
            </MenuIcon>
            {
                changeModal === "회원가입" && (
                    <SignUp openModal={openModal} closeModalHandle={closeModalHandle} />
                )
            }
            {
                changeModal === "로그인" && (
                    <SignIn openModal={openModal} closeModalHandle={closeModalHandle} />
                )         
            }
        </>
    )
}
export default NavSign;

const SignContainer = styled.ul`
    display: none;

    @media ${props => props.theme.desktop} {
        display: flex;
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