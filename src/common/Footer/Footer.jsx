import './Footer.scss';

import logoBlanc from '../../assets/branding/logo_blanc.svg';

const anneeEnCours = () => {
    return new Date().getFullYear();
};

/**
 * Footer du site, affichant le copyrighting avec l'année en cours.
 */
function Footer() {
    return (
        <>
            <footer className='footer color-white bg-black display-flex flex-column align-center justify-center gap-40'>
                <img className='footer-logo' src={logoBlanc} alt='Kasa - location entre particuliers' />
                <p>
                    © {anneeEnCours()} Kasa. All rights reserved
                </p>
            </footer>
        </>
    );
}

export default Footer;