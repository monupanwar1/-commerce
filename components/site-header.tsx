import Link from "next/link"

const header = () => {
  return (
    <div className=" p-4  glass rounded-md items-center flex justify-between">
        <div className="">
            <Link href="#" className="text-2xl  font-bold text-black">E-commmerse</Link>
        </div>
        <div className="items-center flex gap-4 font-semibold">
            <Link href="/#" className="font-3xl text-black">Add to cart</Link>
            <Link href="/Counter" className="font-3xl text-black">Counter</Link>
            <Link href="/Login" className="font-3xl text-black">Login</Link>
            
        </div>
    </div>
  )
}

export default header