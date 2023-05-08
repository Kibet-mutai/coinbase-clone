import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <div className="fixed z-10 shadow-sm bg-white border-b items-center py-[11px] px-5 flex justify-around w-full min-h-[67px]">
      <Logo />
      <div className=" font-medium text-sm flex gap-8 ">
        <a href="#" className="hover:underline">
          Explore
        </a>
        <a href="#" className="hover:underline">
          Web3
        </a>
        <a href="#" className="hover:underline">
          Learn
        </a>
        <a href="#" className="hover:underline">
          Individuals
        </a>
        <a href="#" className="hover:underline">
          Businesses
        </a>
        <a href="#" className="hover:underline">
          Developers
        </a>
        <a href="#" className="hover:underline">
          Company
        </a>
      </div>
      <div className="flex gap-3 items-center">
        <a href="#" className="font-medium text-sm hover:text-[#0052FF]">
          Sign in
        </a>
        <button className="p-[6px] items-center bg-[#0052FF] font-medium text-sm text-white rounded-md hover:bg-blue-700">
          Get started
        </button>
      </div>
    </div>
  );
};
