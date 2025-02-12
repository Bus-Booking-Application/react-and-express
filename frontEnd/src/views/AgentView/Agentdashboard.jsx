//Agentdashboard src/views/AdminDashboard.jsx
import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function AgentDashboard() {
  const [stats] = useState({
    totalBookings: 200,
    totalIncome: 50000,
    availableSeats: 120,
  });

  
const bookingStats = [
  { name: "Booked", value: 70, color: "#ff0000" },
  { name: "Available", value: 30, color: "#00ff00" },
];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Travel Agent Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-100 rounded">
          <p>Total Bookings</p>
          <h3>{stats.totalBookings}</h3>
        </div>
        <div className="p-4 bg-gray-100 rounded">
          <p>Total Income</p>
          <h3>₹{stats.totalIncome}</h3>
        </div>
        <div className="p-4 bg-gray-100 rounded">
          <p>Available Seats</p>
          <h3>{stats.availableSeats}</h3>
        </div>
      </div>
      <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Booking Statistics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={bookingStats}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {bookingStats.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
}
