import Image from "next/image";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";

export const Referral = () => {
  return (
    <div className="px-4 py-8 grid lg:grid-cols-4">
      <div className="lg:col-span-2 flex flex-col space-y-2 lg:text-left justify-center items-center lg:max-w-[500px] w-full p-8">
        <div className="items-center flex flex-col">
          <h1 className="font-[oxygen] font-bold text-2xl">
            Earn up to $28 worth of crypto
          </h1>
          <p className="font-[oxygen] text-center">
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself.
          </p>
        </div>
        <div className="w-32">
          <button className="w-full items-center p-2 bg-[#0052FF] text-white font-[oxygen] rounded-sm font-medium">
            Start earning
          </button>
        </div>
      </div>
      <div className="col-span-2 flex flex-col lg:border-none border">
        <div className="flex justify-between hover:shadow-md p-6 cursor-pointer lg:border-none border-b">
          <div className="flex items-center gap-x-2">
            <Image
              width={32}
              height={32}
              alt="the graph"
              src={"/images/62365d11-b992-47f4-beed-588a457f71ed.png"}
            />
            <span className="font-bold text-xl font-[inter]">The Graph</span>
            <span className="font-medium text-base font-[oxygen]">GRT</span>
          </div>
          <span className="font-bold text-base font-[inter] text-green-700">
            Earn $4 GRT
          </span>
        </div>
        <div className="flex justify-between hover:shadow-md p-6 cursor-pointer lg:border-none border-b">
          <div className="flex items-center  gap-x-2">
            <Image
              width={32}
              height={32}
              alt="the graph"
              src={"/images/626691ce-b363-4e21-a0a5-f3e6579a85d3.png"}
            />
            <span className="font-bold text-xl font-[inter]">AMP</span>
            <span className="font-medium text-base font-[oxygen]">AMP</span>
          </div>
          <span className="font-bold text-base font-[inter] text-green-700">
            Earn $3 AMP
          </span>
        </div>
        <div className="flex justify-between hover:shadow-md p-6 cursor-pointer lg:border-none border-b">
          <div className="flex items-center gap-x-2">
            <Image
              width={32}
              height={32}
              alt="the graph"
              src={"/images/4c4ea7a0-2905-41a1-8ee5-75e76c14b232.png"}
            />
            <span className="font-bold text-xl font-[inter]">SHPING</span>
            <span className="font-medium text-base font-[oxygen]">SHPING</span>
          </div>
          <span className="font-bold text-base font-[inter] text-green-700">
            Earn $15 SHPING
          </span>
        </div>
        <div className="flex justify-between hover:shadow-md p-6 cursor-pointer lg:border-none border-b">
          <div className="flex items-center  gap-x-2">
            <Image
              width={32}
              height={32}
              alt="the graph"
              src={"/images/3354091c-d5ce-476c-ab50-b2613d96e2ee.png"}
            />
            <span className="font-bold text-xl font-[inter]">
              NEAR Protocol
            </span>
            <span className="font-medium text-base font-[oxygen]">NEAR</span>
          </div>
          <span className="font-bold text-base font-[inter] text-green-700">
            Earn $3 NEAR
          </span>
        </div>
        <div className="p-6 items-center flex text-[#0052FF] border-none">
          <Link href="#reward">
            <h2>View more</h2>
          </Link>
          <CgChevronRight size={20} />
        </div>
      </div>
    </div>
  );
};
