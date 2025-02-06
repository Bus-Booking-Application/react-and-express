// // import React from "react";
// import SideMenu from "./SideMenu.jsx";

// const SideMenu = ({ setSelectedSection }) => {
//   const menuItems = ["Dashboard", "Bookings", "Buses", "Routes", "Customers", "Employees", "Earnings"];
//   return (
//     <div className="h-screen w-1/4 bg-gray-800 text-white">
//       <h2 className="text-2xl font-bold p-4">Admin Panel</h2>
//       <ul className="space-y-2 p-4">
//         {menuItems.map((item) => (
//           <li
//             key={item}
//             className="cursor-pointer hover:bg-gray-700 p-2 rounded"
//             onClick={() => setSelectedSection(item)}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SideMenu;