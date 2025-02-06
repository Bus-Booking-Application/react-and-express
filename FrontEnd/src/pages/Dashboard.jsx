// import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

// const data = [
//   { name: "Total Bookings", value: 400 },
//   { name: "Buses Available", value: 300 },
//   { name: "Payments", value: 300 },
//   { name: "Routes", value: 200 },
// ]

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

// export default function Dashboard() {
//   return (
//     <div className="space-y-4">
//       <h1 className="text-2xl font-bold">Bus Ticket Booking Admin Dashboard</h1>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{data[0].value}</div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Buses Available</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{data[1].value}</div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Payments</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">${data[2].value}</div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Routes</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{data[3].value}</div>
//           </CardContent>
//         </Card>
//       </div>
//       <Card className="col-span-4">
//         <CardHeader>
//           <CardTitle>Overview</CardTitle>
//         </CardHeader>
//         <CardContent className="pl-2">
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

