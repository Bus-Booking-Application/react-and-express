//Admin src/views/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate logout process
    setTimeout(() => navigate("/"), 1000);
  }, [navigate]);

  return <div className="p-4">Logging out...</div>;
}


//agent src/views/Logout.jsx
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Logout() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     setTimeout(() => navigate("/"), 1000);
//   }, [navigate]);

//   return <div className="p-4">Logging out...</div>;
// }
