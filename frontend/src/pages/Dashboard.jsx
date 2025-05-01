import Sidebar from '../components/Sidebar';

const Dashboard = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <iframe
        src="https://metabase.seusistema.com/public/dashboard/abc123#bordered=true&titled=true"
        width="100%"
        height="600"
        frameBorder="0"
        allowTransparency
      ></iframe>
    </div>
  </div>
);

export default Dashboard;
