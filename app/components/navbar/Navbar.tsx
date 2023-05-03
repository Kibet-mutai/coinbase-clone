import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <div className="fixed z-10 shadow-sm bg-white border-b items-center py-[11px] px-5 flex justify-around w-full">
      <Logo />
      <div className=" font-medium flex gap-8 ">
        <a
          href="#"
          className="hover:border-b-[#0052FF] hover:border-b-4 duration-300"
        >
          Explore
        </a>
        <a
          href="#"
          className="hover:border-b-[#0052FF] hover:border-b-4 duration-300"
        >
          Web3
        </a>
        <a
          href="#"
          className="hover:border-b-[#0052FF] hover:border-b-4 duration-300"
        >
          Learn
        </a>
        <a
          href="#"
          className="hover:border-b-[#0052FF] hover:border-b-4 duration-300"
        >
          Individuals
        </a>
        <a
          href="#"
          className="hover:border-b-[#0052FF] hover:border-b-4 duration-300"
        >
          Businesses
        </a>
        <a
          href="#"
          className="hover:border-b-[#0052FF] hover:border-b-4 duration-300"
        >
          Developers
        </a>
        <a
          href="#"
          className="hover:border-b-[#0052FF] hover:border-b-4 duration-300"
        >
          Company
        </a>
      </div>
      <div className="flex gap-3 items-center">
        <a href="#" className="font-medium hover:text-[#0052FF]">
          Sign in
        </a>
        <button className="p-[6px] items-center bg-[#0052FF] font-medium text-white rounded-md hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
};
