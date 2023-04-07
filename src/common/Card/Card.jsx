import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.scss';

/**
 * Carte clicable affichant une photo d'aperçu d'un logement avec son nom.
 * Utilise le composant natif 'Link' pour rediriger vers la page de logement liée
 * à l'interaction (clic, toucher tactile).
 * @property {String} id Id du logement (passé en pramètre de l'url liée)
 * @property {String} titre Le nom du logement
 * @property {String} sourceImage Le chemin de l'image à afficher 
 */
function Card({id, titre, sourceImage}) {
    
    return (
        <div className='carte fadein display-flex align-end bg-linear-red parentClicable width-100 height-100'>
            <h3 className='carte-titre color-white height-20 text-start z-index-1 width-75'>{titre}</h3>
            <img
                src={sourceImage}
                alt={'Logement ' + titre + 'à louer'}
                className='carte-image image-bg opacity-0-7'
                loading='lazy'
            >
            </img>
            <Link to={`/logement/${id}`} className='z-index-2'/>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    sourceImage: PropTypes.string
};

export default Card;