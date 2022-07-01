// import { AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
// import { BsMoon, BsFillBrightnessHighFill} from "react-icons/bs"; 

// > css 
import style from './Nav.module.css';

const Nav = () => {
  return(
    <>
      <header className={`container ${style.container__header}`}>
        <div className={`${style.left}`}>
          <a href="/" className={`${style.logo}`} aria-label="logo">
            MOVIE
          </a>
          {/* <AiOutlineMenu className={`${style.ic__menu}`}/> */}
        </div>
        {/* <div className="center">
          <input placeholder='Find Your Love Movies' />
          <AiOutlineSearch />
        </div> */}
        <div className={`${style.right}`}>
          {/* <BsMoon className={`${style.ic__moon}`} />
          <BsFillBrightnessHighFill className={`${style.ic__sun}`}/> */}
        </div>
      </header>
    </>
  )
}
export default Nav;