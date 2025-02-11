
//Admin src/components/Sidebar.jsx
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-primary text-primary-foreground min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-4">
        <Link to="/" className="block">Admin Dashboard</Link>
        <Link to="/register-agent" className="block">Register Agent</Link>
        <Link to="/details" className="block">Details</Link>
        <Link to="/logout" className="block">Logout</Link>
      </nav>
    </div>
  );
}



