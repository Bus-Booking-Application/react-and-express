//Agent src/App.jsx
import ThemeProvider from "./components/AgentComponents/AgentThemeProvider";
import AgentDashboard from "./views/AgentView/Agentdashboard";
import RegisterCustomer from "./views/AgentView/RegisterCustomer";
import CustomerDetails from "./views/AgentView/CustomerDetails";
import Logout from "./views/AgentView/AgentOut";
import Sidebar from "./components/AgentComponents/AgentSidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function AgentApp() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<AgentDashboard />} />
              {/* <Route path="/register-customer" element={<RegisterCustomer />} /> */}
              <Route path="/details" element={<CustomerDetails />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default AgentApp;
