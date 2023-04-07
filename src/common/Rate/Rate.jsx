import './Rate.scss';

import PropTypes from 'prop-types';
import {ReactComponent as SvgEtoile} from '../../assets/icons/etoile.svg';

/**
 * Affiche 5 étoiles représentants une note entre 1 et 5.
 * Une étoile remplie de couleur équivaut à 1 point sur les 5 maximals.
 * @property {String} note Chiffre compris entre '1' et '5'. 
 */
function Rate({note}) {

    const noteMax = 5;

    const etoiles = [...Array(noteMax).keys()].map(index => (
        <li key={'etoile_'+index} className='display-flex'>
            <SvgEtoile className={`etoile${[...Array(Number(note)).keys()][index] === undefined ? '' : ' rouge'}`} />
        </li>
    ));
    
    return (
        <ul className='note display-flex gap-7'>
            {etoiles}
        </ul>
    );
}

Rate.propTypes = {
    note: PropTypes.oneOf([
        '1',
        '2',
        '3',
        '4',
        '5'
    ]).isRequired
};


export default Rate;