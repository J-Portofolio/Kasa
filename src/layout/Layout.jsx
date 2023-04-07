import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';

import Erreur from '../pages/Erreur/Erreur';

import PropTypes from 'prop-types';
import {Outlet} from "react-router-dom";

/**
 * Composant parent des pages du site, affiche en permanence l'en-tête, le footer
 *  et contextuellement:
 * - La page d'erreur avec son code / texte correspondant.
 * - La page à afficher, si aucune erreur n'est relevée lors du routage.
 * @property {Boolean} erreur Booléen déterminant l'affichage ou non de la page d'erreur.
 */
function Layout({erreur=false}) {
    return (
        <>
            <Header />
            <main className='contenuPage'>
                {erreur === true ? <Erreur /> : <Outlet />}
            </main>
            <Footer />
        </>
    );
}

Layout.propTypes = {
    erreur: PropTypes.bool
};

export default Layout;