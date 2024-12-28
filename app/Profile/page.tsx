"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface User{
    name:string;
    email:string;
    age:number;
    image:string;
    role:string;

}

const getUser =():User |null=>{
    return{
    name: "John Doe",
    email: "john@example.com",
    age: 30,
    image: "/images/user.png?height=128&width=128",
    role: "Student",
    }
}

export default function profilePage(){
    const[user,setUser] =useState<User|null>(null);
    const router =useRouter();

    useEffect(()=>{
        const userData =getUser();
        setUser(userData);
    },[])
    const handleLogout=()=>{
        setUser(null);
        router.push("/");
    };
    const handleLogin=()=>{

        router.push('/Login')
    }

   

    if(!user){
        return(
            <div className="items-center justify-center flex flex-cols  min-h-screen bg-white">
                <div className="h-80 w-80 rounded-lg bg-gray-100 items-center justify-center flex-col space-y-2">
                <h1 className="text-3xl text-center text-gray-900">Not logged IN</h1>
                <p className="text-center">You need to log in to view your profile.</p>
                <div className="flex justify-center">
                <button className="px-4 py-2 ronded-md bg-blue-500">
                    <Link href={"/login"}>Login</Link>
                </button>
                </div>

                </div>
            </div>
        )
    }



    return(
        <div className="min-h-screen bg-white flex items-center justify-center flex-col">
           <h1 className=" mb-2 text-3xl font-bold text-gray-900">User Profile</h1>
           <div className=" h-96  w-80 border-2 bg-gray-200 shadow-lg">
            <div className="items-center justify-center flex mt-2 ">
            <Image 
                src="/images/user.png"
                alt="not-found"
                width={120}
                height={120}
                className=" rounded-full" 
                />
                </div>
                <div className="space-y-2 text-center ">
                    <p>
                        <strong>Name:</strong>{user.name}
                    </p>
                    <p>
                        <strong>Email:</strong>{user.email}
                    </p>
                    <p>
                        <strong>Age:</strong>{user.age}
                    </p>
                    <p>
                        <strong>Role:</strong>{user.role}
                    </p>

                </div>

                <button className="px-4 py-2 rounded-">Logout</button>
                
            

           </div>

        </div>
    )
}