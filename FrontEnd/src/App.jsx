
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




//Agent src/App.jsx
// import ThemeProvider from "./components/ThemeProvider";
// import AdminDashboard from "./views/AdminDashboard";
// import RegisterCustomer from "./views/RegisterCustomer";
// import CustomerDetails from "./views/CustomerDetails";
// import Logout from "./views/Logout";
// import Sidebar from "./components/Sidebar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import RegisterAgent from "./views/RegisterAgent";
// import AgentDetails from "./views/AgentDetails";


// export default function App() {
//   return (
//     <ThemeProvider>
//       <Router>
//         <div className="flex flex-col min-h-screen">
//           <Header />
//           <div className="flex flex-1">
//             <Sidebar />
//             <main className="flex-1 p-4">
//               <Routes>
//                 <Route path="/" element={<AdminDashboard />} />
//                 <Route path="/register-agent" element={<RegisterAgent />} />
//                 <Route path="/details" element={<AgentDetails />} />
//                 <Route path="/customers" element={<CustomerDetails />} />
//                 <Route path="/logout" element={<Logout />} />
//               </Routes>
//             </main>
//           </div>
//           <Footer />
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;
