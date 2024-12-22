import { IBanner } from "@/Types";
import Image from "next/image";

type Props = {
    heroBanner: IBanner;
};

const Page = ({ heroBanner }: Props) => {
    return (
        <div className="hero-banner flex items-center justify-between bg-[#DCDCDC] rounded-lg shadow-lg p-24 h-96 w-full">
            {/* Left Section */}
            <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-700 tracking-wide">
                    Beats SOLO AIR
                </p>
                <h1 className="text-4xl font-bold text-black">Summer Sale</h1>
                <h2 className="text-6xl font-extrabold text-indigo-900 animate-pulse">
                    Boat
                </h2>
                <p className="text-gray-600 max-w-md">
                    Experience unmatched sound quality with the most comfortable headphones
                    in the market. Limited time offer, grab yours now!
                </p>
                <button className="rounded-md text-white px-6 py-2 mt-6 bg-[#F02D34] hover:bg-[#d82a2e] transition-all duration-300 shadow-lg">
                    Shop Now
                </button>
            </div>

            {/* Right Section */}
            <div className=" o  flex items-center space-x-8">
                {/* Product Image */}
                <Image
                    className="drop-shadow-lg transition-transform duration-200 hover:scale-105"
                    width={390}
                    height={600}
                    src="/Headphone.png"
                    alt="Headphone"
                />



            </div>
        </div>
    );
};

export default Page;
