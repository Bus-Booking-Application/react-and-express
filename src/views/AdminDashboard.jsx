
// src/views/AdminDashboard.jsx
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalBusesBooked: 0,
    totalIncome: 0,
    busRoutes: [],
    availableSeats: 0,
    bookingStats: [],
  });

  useEffect(() => {
    // Mock data fetching
    setDashboardData({
      totalBusesBooked: 120,
      totalIncome: 45000,
      busRoutes: ["Route 1", "Route 2", "Route 3"],
      availableSeats: 300,
      bookingStats: [
        { name: "Booked", value: 70 },
        { name: "Available", value: 30 },
      ],
    });
  }, []);

  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Total Buses Booked</h2>
          <p className="text-3xl">{dashboardData.totalBusesBooked}</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Total Income</h2>
          <p className="text-3xl">₹{dashboardData.totalIncome}</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Bus Routes</h2>
          <ul>
            {dashboardData.busRoutes.map((route, index) => (
              <li key={index}>{route}</li>
            ))}
          </ul>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Available Seats</h2>
          <p className="text-3xl">{dashboardData.availableSeats}</p>
        </div>
      </div>
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Booking Statistics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={dashboardData.bookingStats}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {dashboardData.bookingStats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


