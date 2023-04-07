// Layout
import Layout from '../layout/Layout';

// Pages
import Accueil from '../pages/Accueil/Accueil';
import Apropos from '../pages/A-propos/Apropos';
import Logement from '../pages/Logement/Logement';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

/**
 * Routage du site, utilisant l'ensemble des pages comme des composants enfants du composant 'Layout'.
 * intercepte si nécessaire les erreurs rencontrées
 * pour retourner la page d'erreur à la place de la page demandée.
 */
const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <Layout erreur={true}/>,
        children: [
            {
                path: "/",
                element: <Accueil />,
                loader: async () => {// Pré-chargement des logements.
                    const logementsList = require('../datas/logements.json');
                    return { logementsList };
                }
            },
            {
                path: "/a-propos",
                element: <Apropos />,
                loader: async () => {// Pré-chargement du contenu de la page 'à propos'.
                    const rubriques = require('../datas/a_propos.json');
                    return { rubriques };
                }
            },
            {
                path: "/logement/:id",
                element: <Logement />,
                loader: async ({ params }) => {// Pré-chargement des informations d'un logement spécifique.
                    const logementsList = require('../datas/logements.json');
                    const logement = logementsList.find(logement => logement.id === params.id);
                    if (logement) {// Test d'existence du logement (Retourne une erreur 404 si non trouvé, au lieu d'une erreur React).
                        return { logement };
                    } else {
                        throw new Response('', { status: 404 });// Affichera la page d'erreur 404, le cas échéant.
                    }
                }
            },
        ]
    },
    {// Affichera la page d'erreur 404, si aucune route ne correspond. Intercepte les warning console.
        path:"*",
        element: <Layout />,
        errorElement: <Layout erreur={true}/>,
        loader: () => {
            throw new Response('', { status: 404 });
        }
    }
]);

function Routing() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default Routing;