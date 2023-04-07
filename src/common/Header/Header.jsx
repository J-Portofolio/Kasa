import { useLocation, Link } from "react-router-dom"

import MenuHeader from '../Navigation/MenuHeader';

import './Header.scss'
import logo from '../../assets/branding/logo.svg';

/**
 * Header du site avec logo, affichant un menu de navigation
 * Utilise le composant 'MenuHeader' le menu de navigation.
 */
function Header() {
    const location = useLocation();

    return (
        <>
            <header className='header display-flex align-center space-between'>
                <div className='logo parentClicable'>
                    {
                        location.pathname === "/" ?  "" : <Link to="/" />
                    }
                    <img src={logo} alt='Kasa - La location partout en France' className='width-100 height-100'/>
                </div>
                <nav className='navbar-header'>
                    <MenuHeader />
                </nav>
            </header>
        </>
    );
}

export default Header;