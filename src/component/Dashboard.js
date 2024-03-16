import React from 'react';

export const Dashboard = () => {
  return (
    <div className="text-center mb-4">
      <h2>Dashboard</h2>
      <div className="d-grid gap-2 col-6 mx-auto">
        
        <div className="d-grid gap-2 mt-3">
            <a href="/log" className="btn btn-primary login-button">Consulter les logs</a>
          </div>
        <div className="d-grid gap-2 mt-3">
            <a href="/part" className="btn btn-primary login-button">Afficher les informations du partenaire</a>
          </div>
          <div className="d-grid gap-2 mt-3">
            <a href="/login" className="btn btn-primary login-button">Exit</a>
          </div>
      </div>
    </div>
  );
};

