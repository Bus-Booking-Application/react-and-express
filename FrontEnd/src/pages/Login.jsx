// import { useState } from "react";
// import { useAuth } from "../context/AuthContext.jsx";

// export default function Login() {
//   const { login } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     login({ email, role: "employee" });
//   };

//   return (
//     <div className="max-w-sm mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-4">Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block mb-2">Email</label>
//           <input
//             type="email"
//             className="w-full p-2 border border-gray-300 rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Password</label>
//           <input
//             type="password"
//             className="w-full p-2 border border-gray-300 rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
//       </form>
//     </div>
//   );
// }
