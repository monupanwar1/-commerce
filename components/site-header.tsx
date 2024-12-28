"use client"

import { useAuthStore } from "@/Store/AuthStore"
import UseCartStore from "@/Store/CartStore"
import Link from "next/link"

const user ={
  name:"john Doe",
  email:"johnDoe@gmail.com",
  avatar:"/images/user.png"
}

const header = () => {
  const user =useAuthStore((state)=>state.user)
  const items = UseCartStore((state)=>state.items)
  return (
    <div className=" p-4  glass rounded-md items-center flex justify-between">
        <div className="">
            <Link href="/" className="text-2xl  font-bold text-black">E-commmerse</Link>
        </div>
        <div className="items-center flex gap-4 font-semibold">
            <Link href="/Cart" className="font-3xl text-black">Cart
            <span className=" bg-red-500 text-white rounded-full w-5 h-5 absolute top-2 flex items-cenetr justify-center text-xs">
                {items.reduce((sum,items)=>sum+items.quantity,0)}
              </span>
            
             </Link>
            <Link href="/Counter" className="font-3xl text-black">Counter</Link>
            {user?(
              <Link href="/Profile" className="font-3xl text-black">Profile</Link>

            ):(<Link href="/login" className="font-3xl text-black">Login</Link>)}
            
        </div>
    </div>
  )
}

export default header