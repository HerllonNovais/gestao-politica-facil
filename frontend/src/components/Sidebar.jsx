import { Link } from 'react-router-dom';
import { removeToken } from '../utils/auth';

const Sidebar = () => (
  <div className="w-64 h-screen bg-gray-800 text-white p-5">
    <h1 className="text-xl font-bold mb-8">Gestão Política</h1>
    <nav className="flex flex-col gap-4">
      <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      <button
        onClick={() => {
          removeToken();
          window.location.href = '/';
        }}
        className="text-left text-red-400 hover:underline"
      >
        Sair
      </button>
    </nav>
  </div>
);

export default Sidebar;
