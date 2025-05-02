import { useState } from 'react';
import axios from 'axios';

export default function ElectorsImport() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/api/electors/import', formData);
      setMessage(`Importados: ${res.data.imported}`);
    } catch (err) {
      setMessage('Erro ao importar.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Importar Eleitores</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept=".xlsx"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Enviar
        </button>
        {message && <p className="mt-2">{message}</p>}
      </form>
    </div>
  );
}
