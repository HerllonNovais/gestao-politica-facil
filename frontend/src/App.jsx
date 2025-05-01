import React from 'react';

export default function App() {
  return (
    <div className="p-4 text-xl">
      <h1>Gestão Política - Painel Inicial</h1>
      <iframe
        title="Metabase Dashboard"
        src="https://dash.gestaopolitica.com/public/dashboard"
        style={{ width: '100%', height: '600px', border: 'none' }}
      ></iframe>
    </div>
  );
}
