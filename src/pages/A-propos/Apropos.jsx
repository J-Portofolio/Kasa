import './Apropos.scss';

import Accordion from '../../common/Accordion/Accordion';
import Banner from '../../common/Banner/Banner';
import Image from '../../assets/images/paysage_de_montagne.webp';

import {useLoaderData} from "react-router-dom";

/**
 * Page À propos.
 */
function Apropos() {

    const { rubriques } = useLoaderData();

    const imageBanniere = {
        'src': Image,
        'alt': 'Une vallée en montagne'
    };

    const accordeonsRubriques = rubriques.map((rubrique, index) => (
        <Accordion key={'accordeon_'+index} titre={rubrique.titre} contenu={rubrique.contenu} />
    ));

    return (
        <>
            <section className='a-propos-banniere'>
                <Banner className='test' image={imageBanniere} overlay='black' opacity='0-7'/>
            </section>
            <section className='a-propos-informations width-86-md display-flex flex-wrap'>
                {accordeonsRubriques}
            </section>
        </>
    );
}

export default Apropos;