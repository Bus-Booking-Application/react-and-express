import { useState } from "react"

export default function RegisterForm(){

    const [data,setdata]=useState({
        id:"",
        CompanyName:"",
        password:"",
        sector:"",
        role:""
    })

    const handleChange=(event)=>{
        setFormData(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preveventDefault()
    }

    return(
        <div className="p-4">
            <div className="mb-4">
                <form onSubmit={handleSubmit} mb-4>
                <label className="font-semibold">ID:</label>
                <input
                type="Number"
                name="id"
                placeholder="id"
                value={setdatadata.id}
                onChange={handleChange}
                className="border p-2 m-2" 
                />
                <label className="font-semibold">Company Name:</label>
                <input 
                type="text" 
                name="CompanyName" 
                placeholder="Company Name" 
                value={setdata.CompanyName} 
                onChange={handleChange} 
                className="border p-2 m-2" />
                <label className="font-semibold">Email:</label>
                <input 
                type="text" 
                name="email" 
                placeholder="email" 
                value={setdata.email} 
                onChange={handleChange} 
                className="border p-2 m-2" />
                <label className="font-semibold">Password:</label>
                <input 
                type="text" 
                name="password" 
                placeholder="password" 
                value={setdata.password} 
                onChange={handleChange} 
                className="border p-2 m-2" />
                <label className="font-semibold">Sector:</label>
                <select name="sector" value={setdata.sector} onChange={handleChange} className="border p-2 m-2">
                    <option value="private">Private</option>
                    <option value="government">Government</option>
                </select>   
                </form>
            </div>
        </div>
       
    )
}