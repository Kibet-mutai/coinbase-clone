import { FaBitcoin } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { MainLogo } from "./MainLogo";

export const MainSect = () => {
  return (
    <div className="py-10 flex flex-col">
      <div className="grid lg:grid-cols-4 items-center py-32 lg:px-28 px-4">
        <div className="col-span-2 flex flex-col gap-y-6">
          <div className="flex gap-2 items-center text-[#0052FF]">
            <FaBitcoin className="cursor-pointer w-6 h-6" />
            <a href="#" className="font-medium  hover:underline">
              Jump start your portfolio
            </a>
            <BsArrowRight className="cursor-pointer font-medium text-xl" />
          </div>
          <h1 className="md:text-6xl text-4xl font-medium sm:max-w-[425px]">
            Jump start your crypto portfolio
          </h1>
          <p className="font-medium text-xl md:font-[inter] font-[Fira]">
            Coinbase is the easiest place to buy and sell cryptocurrency. Sign
            up and get started today.
          </p>
          <div className="flex md:flex-row flex-col gap-2">
            <input
              type="email"
              name="email"
              id="email"
              className="h-14 md:w-60 w-[100%] px-2 border rounded-sm"
              autoComplete="off"
              placeholder="Email address"
            />

            <button className="bg-[#0052FF] p-3 items-center h-14 md:w-40 w-[100%] font-medium text-sm rounded-sm text-white">
              Get started
            </button>
          </div>
        </div>
        <div className="col-span-2 lg:block hidden">
          <MainLogo />
        </div>
      </div>
      <div className="flex bg-[#0A0B0D] justify-center items-center gap-x-8 py-4">
        <div className="sect-image">
          <img src="/images/image_26.webp" className="" alt="sect-image" />
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-white text-5xl">
            Explore web3 profiles, and claim one for free
          </h3>
          <p className="text-xl text-white">
            Create and customize your web3 profile, check out other profiles,
            and explore popular NFT collections and tokens.
          </p>
          <button className="bg-[#0052FF] items-center px-2 py-3 rounded-3xl w-40 flex justify-between">
            <a href="#" className="text-sm font-medium">
              Learn more
            </a>
            <BsArrowRight className="w-8 h6" />
          </button>
        </div>
      </div>
    </div>
  );
};
