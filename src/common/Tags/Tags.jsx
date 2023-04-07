import './Tags.scss';

import PropTypes from 'prop-types';

/**
 * Affiche, pour chaque élément de tableau, une pastille colorée
 * indiquant un tag descriptif.
 * @param {Array} liste Un tableau contenant les tags à afficher.
 * @returns 
 */
function Tags({liste}) {

    const tags = liste.map((tag, index) => (
        <li key={'tag_'+index} className='color-white bg-main display-flex align-center justify-center'>
            {tag}
        </li>
    ));
    
    return (
        <ul className='tags display-flex flex-wrap gap-10'>
            {tags}
        </ul>
    );
}

Tags.propTypes = {
    liste: PropTypes.array.isRequired
};

export default Tags;