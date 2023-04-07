import './Carrousel.scss';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as SvgFleche} from '../../assets/icons/fleche.svg';

/**
 * Affiche un carrousel arrondi permettant de faire défiler plusieurs images:
 * - Automatiquement (Toutes les x secondes et sans changement d'image, la suivante est affichée).
 * - Manuellement (à l'aide de l'utilisation des flèches gauche et droite).
 * @property {Array} images Tableau contenant les chemins des images à afficher 
 * @property {String} prefixeAlt Texte à utiliser comme préfixe des descriptions d'images, pour les distinguer.
 */
function Carrousel({images, prefixeAlt=null}) {

    const [slide, setSlide] = useState({
        min: 1,
        max: images.length,
        actuel: 1 // Ou index de la source d'image affichée.
    });

    useEffect(() => {
        // Ajuste l'image à afficher à la première ou dernière au besoin.
        if(slide.actuel < slide.min){
            setSlide({
                ...slide,
                actuel: slide.max
            });
        }

        if(slide.actuel > slide.max){
            setSlide({
                ...slide,
                actuel: slide.min
            });
        }

        // Slides automatiques
        // Toutes les 25 secondes (Reset de minuteur au changement de slide)
        const palier = 25000;

        const minuteur = setTimeout(() => {
            setSlide({
                ...slide,
                actuel: slide.actuel + 1
            })
        }, palier);

        // Nettoyage du timer si le composant Carrousel n'est plus utilisé.
        return () => clearTimeout(minuteur);
    },[slide]);

    // Cercles clicables, indiquant l'image actuellement affichée.
    const points = [...Array(slide.max).keys()].map(index => (
        <li 
            key={'point_'+index}
            className={`point ${index + 1 === slide.actuel ? 'actuel' : ''}`}
            onClick={() => setSlide({
                ...slide,
                actuel: index +1
            })}
        >
        </li>
    ));

    return (
        <div className='carrousel width-100 height-100 display-flex space-between'>
            <button 
                className='fleche'
                onClick={() => setSlide({
                    ...slide,
                    actuel: slide.actuel - 1
                })}
            >
                <SvgFleche className='icone retour' />
            </button>
            {/* 
                L'attribut key est utilisé sur l'image pour faciliter son identification par React (Montage et remontage)
                et appliquer sereinement les aanimations css souhaitées lors de la sélection (Effet de fondu ici).
            */}
            <img
                key={'slide_'+slide.actuel}
                src={images[slide.actuel - 1]}
                alt={prefixeAlt + slide.actuel}
                className='slide fadein image-bg'
            >
            </img>
            <div className='indicateur color-white back bg-black alpha-0-3 display-none-sm-md display-block-md'>
                <span className='numerique'>{slide.actuel}/{slide.max}</span>
                {/* Pour afficher les points clicables, retirer la classe "display-none". */}
                <ul className='visuel display-none display-flex space-around gap-5'>
                    {points}
                </ul>
            </div>
            <button 
                className='fleche'
                onClick={() => setSlide({
                    ...slide,
                    actuel: slide.actuel + 1
                })}
            >
                <SvgFleche className='icone'/>
            </button>
        </div>
    );
}

Carrousel.propTypes = {
    images: PropTypes.array.isRequired,
    prefixeAlt: PropTypes.string
};

export default Carrousel