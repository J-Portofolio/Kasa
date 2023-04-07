import { useRouteError, Link } from "react-router-dom";

import './Erreur.scss';

/**
 * Page d'erreur récupérant et affichant les informations d'erreur retournées
 * par le routage (Code d'erreur).
 */
function Erreur() {

    const erreur = useRouteError();
    let texte = 'Quelque chose s\'est mal passé';

    if (erreur.status === 404) {
        texte = 'Oups! La page que vous demandez n\'existe pas.';
    }

    return (
        <section className='erreur-informations text-center color-main'>
            <h1 className='erreur-titre'>{erreur.status}</h1>
            <p className='erreur-texte'>{texte}</p>
            <Link to='/' className='erreur-lien display-block'>
                Retourner sur la page d’accueil
            </Link>
        </section>
    )
}

export default Erreur;