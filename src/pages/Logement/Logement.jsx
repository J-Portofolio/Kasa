import {useLoaderData} from 'react-router-dom';
import Accordion from '../../common/Accordion/Accordion';
import Carrousel from '../../common/Carrousel/Carrousel';
import Banner from '../../common/Banner/Banner';
import Rate from '../../common/Rate/Rate';
import Tags from '../../common/Tags/Tags';

import './Logement.scss';

/**
 * Page d'un logement.
 */
function Logement() {
    const { logement } = useLoaderData();

    let localisation = logement.location.split(' - ');

    if(localisation.length > 1) {
        localisation = localisation[1]+', '+localisation[0];
    } else {
        localisation = logement.location;
    }

    return (
        <>
            <section className='logement-photos'>
                {/* 
                    Affichage conditionnel du carrousel ou de la bannière d'image
                    (Nul besoin de charger un carrousel pour une seule image)
                */}
                {
                    logement.pictures.length > 1 ?
                        <Carrousel images={logement.pictures} prefixeAlt={'Logement_'} />
                    :
                        <Banner image={{
                            'src':logement.pictures[0],
                            'alt':'Logement'
                        }} />
            
                }
            </section>
            <section className='color-main logement-intitule color-main display-flex flex-wrap space-between'>
                <article className='width-100-sm-md width-75-md'>
                    <h1>{logement.title}</h1>
                    <p>{localisation}</p>
                    <Tags liste={logement.tags}/>
                </article>

                <article className='width-100-sm-md width-25-md display-flex flex-column-md flex-wrap align-center-sm-md align-end-md space-between'>
                    <figure className='identite display-flex align-center gap-10 order-1-sm-md'>
                        <div className='photo-proprio bg-second order-1'>
                            <img src={logement.host.picture} alt={logement.host.name}/>
                        </div>
                        <figcaption className='nom-proprio text-end'>
                            {logement.host.name}
                        </figcaption>
                    </figure>
                    <Rate note={logement.rating}/>
                </article>
            </section>
            <section className='logement-informations display-flex flex-wrap align-start-lg space-between-lg gap-20-sm-lg'>
                <Accordion titre='Description' contenu={logement.description}/>
                <Accordion titre='Équipements' contenu={logement.equipments}/>
            </section>
        </>
    );
}

export default Logement;