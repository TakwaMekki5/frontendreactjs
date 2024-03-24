import axios from "axios";
import { useState } from "react";

// Définition de la fonction Login.
export const Password = () => {
  const [Email, setEmail] = useState('');

  // Création de la méthode de soumission.
  const submit = async e => {
    e.preventDefault();
    const user = {
      Email: Email
    };

    // Création de la requête POST
    try {
      const { data } = await axios.post(
        'http://localhost:8000/token/',
        user,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );

      // Initialisation des tokens d'accès et de rafraîchissement dans le local storage
      localStorage.clear();
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);

      // Configuration du header pour inclure le token d'accès dans chaque requête
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;

      // Redirection vers la page d'accueil
      window.location.href = '/';
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };

  // Rendu du composant
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title login-title">Reset Password</h3>
          <div className="form-group mt-3">
            <input
              className="form-control mt-1"
              placeholder="Email*"
              name="Email"
              type="text"
              value={Email}
              required
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
           <a href="/changepassword" className="btn btn-primary login-button">RESET MY PASSWORD</a>
          </div>
          <div className="mt-3">
           Return to <a href="/login" className="black-link">Sign in</a>
           </div>
        </div>
      </form>
    </div>
  );
};
