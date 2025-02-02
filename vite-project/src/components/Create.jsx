import axios from "axios";
import React, { useState } from "react"

const Register = () => {
    const form = {
        CompanyName: "",
        email: "",
        password: "",
        sector: "",
        role: "",
        from: "",
        to: ""
    }
    const [data, setdata] = useState(form);

    const handlechange = (event) => {
        const { name, value } = event.target
        setdata((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const submit = async () => {
        try {
            const response = await axios.post("http://localhost:7000/v1/travel", data)
            console.log(response);

        } catch (error) {
            console.log(error);

        }
    }


    return (
        <>
            <div>
                <div>
                    <h1 className="text-center font-bold text-2xl">Create Your Account</h1>
                    <div>
                        <div>
                            <form>
                                <input type="text"
                                    value={data.CompanyName}
                                    onChange={handlechange}
                                    name="CompanyName"
                                    placeholder="Enter a CompanyName"
                                    className="border border-red-500 outline-none p-2 rounded"
                                />
                                <input type="text"
                                    value={data.email}
                                    onChange={handlechange}
                                    name="email"
                                    placeholder="Enter a email"
                                    className="border border-red-500 outline-none p-2 rounded"
                                />
                                <input type="text"
                                    value={data.password}
                                    onChange={handlechange}
                                    name="password"
                                    placeholder="Enter a password"
                                    className="border border-red-500 outline-none p-2 rounded"
                                />
                                <input type="text"
                                    value={data.role}
                                    onChange={handlechange}
                                    name="role"
                                    placeholder="Enter a role"
                                    className="border border-red-500 outline-none p-2 rounded"
                                />
                                <input type="text"
                                    value={data.from}
                                    onChange={handlechange}
                                    name="from"
                                    placeholder="Enter a from"
                                    className="border border-red-500 outline-none p-2 rounded"
                                />
                                <input type="text"
                                    value={data.to}
                                    onChange={handlechange}
                                    name="to"
                                    placeholder="Enter a to"
                                    className="border border-red-500 outline-none p-2 rounded"
                                />

                            </form>
                        </div>
                        <button type="submit" onClick={submit} className="bg-blue-500 rounded text-white">sumbit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register
