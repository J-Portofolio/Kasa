import './Accueil.scss';
import Card from '../../common/Card/Card';
import Banner from '../../common/Banner/Banner';
import Image from '../../assets/images/crique_en_bord_de_mer.webp';

import {useLoaderData} from "react-router-dom";

/**
 * Page d'accueil.
 */
function Accueil() {
    const { logementsList } = useLoaderData();

    const cartesLogements = logementsList.map(logement => (
        <article key={'carte_'+logement.id} className='width-100-sm-md width-47-md-lg width-30-lg'>
            <Card id={logement.id} titre={logement.title} sourceImage={logement.cover} />
        </article>
    ));

    const imageBanniere = {
        'src': Image,
        'alt': 'Une crique dans la brume'
    }

    const titreBanniere = {
        'texte': 'Chez vous, partout et ailleurs',
        'niveau': 1
    };

    return (
        <>
            <section className='accueil-banniere color-white'>
                <Banner image={imageBanniere} titre={titreBanniere} overlay='black' opacity='0-7' />
            </section>

            <section className='accueil-cartes bg-second-md display-flex flex-wrap'>
                {cartesLogements}
            </section>
        </>
    );
}

export default Accueil;