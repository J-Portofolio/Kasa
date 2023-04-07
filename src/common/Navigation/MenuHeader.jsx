import { NavLink } from 'react-router-dom';

import './MenuHeader.scss';
import liens from '../../datas/menu_header.json';

/**
 * Menu de navigation spécifique à l'en-tête de site.
 * Génère les liens à partir du fichier 'src/datas/menu_header.json'.
 * Utilise le composant natif 'NavLink' pour suivre l'état actif ou non d'un lien.
 */
function MenuHeader() {
    const navlinks = liens.map(lien => (
        <li key={lien.url}>
            <NavLink
                to={lien.url}
                className={ ({ isActive }) => `lien color-main ${isActive ? 'actuel' : ''}`}
            >
                {lien.nom}
            </NavLink>
        </li>
    ));

    return (
        <ul className='liens-header display-flex gap-10-sm-md gap-57-md'>
            {navlinks}
        </ul>
    );
}

export default MenuHeader;