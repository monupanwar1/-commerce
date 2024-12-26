"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react"
import toast from "react-hot-toast";

 interface loginData{
    email:string;
    password:string;

  }

   


export default function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleSumbit =(e:React.FormEvent)=>{
    e.preventDefault();
    const loginData:loginData={email,password};
    router.push("/");
    toast.success("logined succesfully");

}



 

 
  return (
    <div className="flex items-center justify-center min-h-screen bg-white rouded-lg ">
      <form onSubmit={handleSumbit} >
      <div className="h-[400] w-80 bg-gay-100 shadow-lg items-center justify-center flex flex-col shadow-lg border-2">
        
          <label className="text-black" htmlFor="email">Email</label>
        <input className="bg-gray-300 rounded-md p-2 placeholder:text-center"
          type="email"
          id="email"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
        <label htmlFor="email">Password</label>
        <input className="bg-gray-300 rounded-md p-2 placeholder:text-center"
          type="password"
          id="password"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />

        <button type="submit" className="px-4 mt-4 py-2 rounded-md bg-blue-500">Login</button>
    
      </div>
        </form>
      </div>
  
  )
}
