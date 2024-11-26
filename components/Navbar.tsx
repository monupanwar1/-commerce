import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";

const Navabr = () => {
  return (
    <div className="flex justify-between p-6 items-center relative">
      <p className="Logo text-gray-500">
        <Link href="#">E-commerce</Link>
      </p>

      <button type="button" className="cart-icon font-4px flex  text-2xl text-gray-500">
        <AiOutlineShopping  className="z-10 "/>
        <span className="text-red bg-rose-500 rounded-full h-8 w-8 items-center justify-center absolute top-2 right-2 ">
          10
        </span>
      </button>
    </div>
  );
};

export default Navabr;
