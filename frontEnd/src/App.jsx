
//Admin src/App.jsx
import ThemeProvider from "./components/AdminComponents/ThemeProvider";
import AdminDashboard from "./views/Admin/AdminDashboard";
import RegisterAgent from "./views/Admin/RegisterAgent";
import AgentDetails from "./views/Admin/AgentDetails";
import Logout from "./views/Admin/Logout";
import Sidebar from "./components/AdminComponents/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/NewTheme";

function App() {
  return (
    <ThemeProvider>
      {/* <Header> */}
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
      {/* </Header> */}
    </ThemeProvider>
  );
}

export default App;



