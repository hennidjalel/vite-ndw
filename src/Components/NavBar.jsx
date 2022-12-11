import '../style/App.css'

// ::: icons ::: //
import { IoClose } from 'react-icons/io5'
import { CgMenuLeft } from 'react-icons/cg'
import { HiOutlineLocationMarker } from 'react-icons/hi'

// ::: Image ::: //
import Logo from '../image/Logo.png'

// React hooks //
import { useState } from 'react'

const NavBar = () => {

    const [sidebar, setSidebar] = useState(false)

    return (
        <>
            <div className='nav__toggle' id='nav-toggle' onClick={() => {
                setSidebar(true)
            }}>
                <CgMenuLeft />
            </div>
            <div className={`sidebar ${sidebar && 'show-sidebar'}`} id='sidebar'>
                <nav className='nav'>
                    <div className='nav__logo'>
                        <a href='#home' className='nav__logo-text'>
                            <img src={Logo} alt='new digital way' className='nav__logo-img' />
                        </a>
                    </div>

                    <div className='nav__menu'>
                        <div className='menu'>
                            <ul className='nav__list'>

                                <li className='nav__item'>
                                    <a href='#home' className='nav__link' onClick={() => {
                                        setSidebar(false)
                                    }}>Accueil</a>
                                </li>

                                <li className='nav__item' onClick={() => {
                                    setSidebar(false)
                                }}>
                                    <a href='#about' className='nav__link'>A propos</a>
                                </li>

                                <li className='nav__item' onClick={() => {
                                    setSidebar(false)
                                }}>
                                    <a href='#service' className='nav__link' onClick={() => {
                                        setSidebar(false)
                                    }}>Services</a>
                                </li>

                                {/* <li className='nav__item'>
                                <a href='#work' className='nav__link' onClick={()=>{
                                    setSidebar(false)
                                }}>Projets</a>
                            </li> */}


                                <li className='nav__item'>
                                    <a href='#contact' className='nav__link' onClick={() => {
                                        setSidebar(false)
                                    }}>Contact</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <a className='button'>
                        <div className="">Join us</div>
                    </a>

                    <div className='nav__close' onClick={() => {
                        setSidebar(false)
                    }}>
                        <IoClose />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar