
// // import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import Buses from './pages/Buses';
// import Bookings from './pages/Bookings';
// import { AuthProvider, useAuth } from './context/AuthContext';
// // import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './App.css';



// function App() {
//     return (
//       <AuthProvider>
//         <Router>
//           <Navbar />
//           <div className="container mx-auto p-4">
//             <Routes>
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
//               <Route path="/buses" element={<PrivateRoute><Buses /></PrivateRoute>} />
//               <Route path="/bookings" element={<PrivateRoute><Bookings /></PrivateRoute>} />
//               <Route path="*" element={<Navigate to="/login" />} />
//             </Routes>
//           </div>
//         </Router>
//       </AuthProvider>
//     );
//   }
  
//   function PrivateRoute({ children }) {
//     const { user } = useAuth();
//     return user ? children : <Navigate to="/login" />;
//   }

// export default App;