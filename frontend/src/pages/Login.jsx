import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../utils/auth';

const Login = () => {
  const [email, setEmail] = useState('admin@sistema.com');
  const [password, setPassword] = useState('admin');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/auth/login', { email, password });
      setToken(data.token);
      navigate('/dashboard');
    } catch {
      alert('Erro no login');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow rounded w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 mb-3 border" placeholder="Email" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 mb-3 border" placeholder="Senha" />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
