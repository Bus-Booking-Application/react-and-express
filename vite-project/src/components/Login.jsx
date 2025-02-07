import React, { useState } from 'react'



const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [number , setNumber] = useState('')
  const [role , setRole] = useState('')
  const [age , setAge] = useState('')

  return (
    <form  className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
        {state === 'Sign Up'
          ? <div className='w-full'>
            <p>Full Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
          </div>
          : null
        }
        <div className='w-full '>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full '>
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>
       
       { state === 'Sign Up'
       ?
        <div className='w-full '>
          <p>Phone no</p>
          <input onChange={(e) => setNumber(e.target.value)} value={number} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="number" required />
        </div> 
        :null}
        {state === 'Sign Up'
        ?
        <div className='w-full '>
          <p>Role</p>
          <input onChange={(e) => setRole(e.target.value)} value={role} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="role" required />
        </div>
        :null}
       {state === 'Sign Up'
       ? <div className='w-full '>
          <p>Age</p>
          <input onChange={(e) => setAge(e.target.value)} value={age} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="number" required />
        </div>:null}
        {state === 'Sign Up'
        ?<div className='w-full'>
  <label htmlFor="">Gender :
           <select className='ml-8'> 
            <option>Male</option>
            <option>Female</option>
           </select>
            </label>
            </div> :null}
          
            
  
        <button className='bg-blue-600 text-white w-full py-2 my-2 rounded-md text-base'>{state === 'Sign Up' ? 'Create account' : 'Login'}</button>
        {state === 'Sign Up'
          ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-blue-600 underline cursor-pointer'>Login here</span></p>
          : <p>Create an new account? <span onClick={() => setState('Sign Up')} className='text-blue-600 underline cursor-pointer'>Click here</span></p>
        }
  
      </div>
    </form>
  )
}

export default Login   