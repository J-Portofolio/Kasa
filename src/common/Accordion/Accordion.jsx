import './Accordion.scss';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as SvgFleche} from '../../assets/icons/fleche.svg';

/**
 * Accordéon replié par défaut et pouvant s'ouvrir lorsque l'on
 * appuie sur la flêche de l'en-tête (clic ou pression tactile)
 * @property {String} titre Titre de l'en-tête.
 * @property {String|Array} contenu Le texte simple sera affiché dans un paragraphe tandis que le tableau, dans une liste.
 */
function Accordion({titre, contenu}) {
    const [ouverture, setOuverture] = useState(false);

    // Formatage HTML en fonction du type de contenu passé en prop.
    const renduContenu = typeof(contenu) === 'object' ?
        <ul className='accordeon-texte list-style-none height-100'> 
            {
                contenu.map((objet, index) => (
                    <li key={'element_liste_accordeon_'+index}>
                        {objet}
                    </li>
                    ))
            }
        </ul>
        :
        <p className='accordeon-texte height-100'>
            {contenu}
        </p>;

    return (
        <article className={`accordeon bg-third display-flex flex-column${ouverture === true ? ' ouvert' : ''}`}>
            <div className='accordeon-en-tete bg-main display-flex align-center space-between'>
                <h3 className='accordeon-titre'>{titre}</h3>
                <button className='accordeon-tiroir' onClick={() => setOuverture(ouverture === true ? false : true)}>
                    <SvgFleche className='accordeon-icone' />
                </button>
            </div>
            <div className='accordeon-contenu'>
                {renduContenu}
            </div>
        </article>
    )
}

Accordion.propTypes = {
    titre: PropTypes.string.isRequired,
    contenu: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]).isRequired
};

export default Accordion;