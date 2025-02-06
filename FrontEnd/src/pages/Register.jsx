// "use client"

// import { useState } from "react"
// import { Button } from "./components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
// import { Input } from "./components/ui/input"
// import { Label } from "./components/ui/label"
// import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"

// export default function RegisterPage() {
//   const [isEditing, setIsEditing] = useState(false)
//   const [formData, setFormData] = useState({
//     companyName: "",
//     email: "",
//     sector: "private",
//     role: "traveler",
//   })

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
  
//   const handleSelectChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setIsEditing(false);
//   };
  

//   return (
//     <Card className="max-w-2xl mx-auto">
//       <CardHeader>
//         <CardTitle>Register Traveler</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="companyName">Company Name</Label>
//             <Input
//               id="companyName"
//               name="companyName"
//               value={formData.companyName}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">Email ID</Label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//             />
//           </div>
//           <div className="space-y-2">
//             <Label>Sector</Label>
//             <RadioGroup
//               value={formData.sector}
//               onValueChange={(value) => handleSelectChange("sector", value)}
//               disabled={!isEditing}
//             >
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem value="private" id="private" />
//                 <Label htmlFor="private">Private</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem value="government" id="government" />
//                 <Label htmlFor="government">Government</Label>
//               </div>
//             </RadioGroup>
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="role">Role</Label>
//             <Select
//               value={formData.role}
//               onValueChange={(value) => handleSelectChange("role", value)}
//               disabled={!isEditing}
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Select a role" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="traveler">Traveler</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <div className="flex justify-end space-x-2">
//             <Button type="button" variant="outline" onClick={() => setIsEditing(!isEditing)}>
//               {isEditing ? "Cancel" : "Edit"}
//             </Button>
//             <Button type="submit" disabled={!isEditing}>
//               Submit
//             </Button>
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }

