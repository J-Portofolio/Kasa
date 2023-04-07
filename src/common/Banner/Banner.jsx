import './Banner.scss';
import PropTypes from 'prop-types';

/**
 * Bannière arrondie, d'affichage d'image avec masque.
 * Avec possibilité d'ajouter du texte.
 * Il est également possible de spécifier:
 * - La couleur du masque
 * - L'opacité du masque
 * @property {Object} image
 * {
 *  - 'src': 'image.src' -> Chemin de l'image à afficher.
 *  - 'alt': 'Texte' -> Le texte à afficher comme valeur attribut 'alt'.
 * }
 * @property {Object} titre
 * {
 *  - 'texte': 'Texte' -> Titre à afficher.
 *  - 'niveau': 'Niveau' -> Correspond au niveau d'en-tête de balise html ('1' pour h1 etc...)
 * }
 * @property {String} overlay parmi les clé définies dans le tableau $liste-couleurs dans 'src/styles/_variables.scss'.
 * @property {String} opacity à définir entre '0-1' (0,1) et '1'
 */
function Banner({image, titre=null, overlay=false, opacity='1'}) {
    let HeaderTag = null;

    if(titre !== null) {
        const Balise = `h${titre.niveau}`;
        HeaderTag = <Balise className='banniere-titre z-index-1'>{titre.texte}</Balise>;
    }

    return (
        <div className={`banniere width-100 height-100 display-flex align-center justify-center-md${overlay === false ? '' : ' bg-'+overlay}`}>
            {HeaderTag}
            <img src={image.src} alt={image.alt} className={`image-bg${opacity === false ? '' : ' opacity-'+opacity}`}></img>
        </div>
    );
}

Banner.propTypes = {
    image: PropTypes.object.isRequired,
    titre: PropTypes.object,
    overlay: PropTypes.string,
    opacity: PropTypes.string
};

export default Banner;