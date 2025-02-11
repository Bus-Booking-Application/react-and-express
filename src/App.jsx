
//Admin src/App.jsx
import ThemeProvider from "./components/ThemeProvider";
import AdminDashboard from "./views/AdminDashboard";
import RegisterAgent from "./views/RegisterAgent";
import AgentDetails from "./views/AgentDetails";
import Logout from "./views/Logout";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/register-agent" element={<RegisterAgent />} />
              <Route path="/details" element={<AgentDetails />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;



