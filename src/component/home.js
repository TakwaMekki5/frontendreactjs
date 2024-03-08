// Import des packages React
import { useEffect, useState } from "react";
import axios from "axios";

// Définition de la fonction Home
export const Home = () => {
     // Utilisation du hook useState pour gérer l'état du message
     const [message, setMessage] = useState('');

     // Utilisation du hook useEffect pour effectuer une action au chargement du composant
     useEffect(() => {
        // Vérification de la présence du jeton d'accès dans le localStorage
        if(localStorage.getItem('access_token') === null) {                   
            // Redirection vers la page de connexion si le jeton d'accès n'est pas présent
            window.location.href = '/login';
        } else {
            // Récupération des données depuis l'API home
            (async () => {
                try {
                    const { data } = await axios.get(   
                        'http://localhost:8000/home/', {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                    );
                    // Mise à jour de l'état du message avec les données reçues
                    setMessage(data.message);
                } catch (e) {
                    // Gestion de l'erreur en cas d'échec de la requête
                    console.log('non authentifié');
                }
            })();
        }
     }, []); // Le tableau vide en tant que deuxième argument indique que useEffect ne s'exécute qu'une seule fois au chargement du composant

     // Rendu du composant Home
     return (
        <div className="form-signin mt-5 text-center">
          <h3>Hi {message}</h3>
        </div>
     );
}
