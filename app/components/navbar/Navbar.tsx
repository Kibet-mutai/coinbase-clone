"use client";
import { useState } from "react";
import { Logo } from "./Logo";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export const Navbar = () => {
  const [showBtn, setShowBtn] = useState(false);
  return (
    <div className="flex fixed z-10 shadow-sm bg-white border-b items-center py-[11px] px-5 justify-between w-full min-h-[67]">
      <div className="">
        <Logo />
      </div>
      <div className="hidden lg:flex font-medium text-sm space-x-6 ">
        <Link href="#" className="hover:underline">
          Explore
        </Link>
        <Link href="#" className="hover:underline">
          Web3
        </Link>
        <Link href="#" className="hover:underline">
          Learn
        </Link>
        <Link href="#" className="hover:underline">
          Individuals
        </Link>
        <Link href="#" className="hover:underline">
          Businesses
        </Link>
        <Link href="#" className="hover:underline">
          Developers
        </Link>
        <Link href="#" className="hover:underline">
          Company
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <div className="hidden lg:block">
          <Link href="#" className="font-medium text-sm hover:text-[#0052FF]">
            Sign in
          </Link>
        </div>
        <div className="flex space-x-10 items-center">
          <button className="px-4 py-2 items-center bg-[#0052FF] font-medium text-sm text-white rounded-md hover:bg-blue-700">
            Get started
          </button>
          {/* mobile menu */}
          <div className="lg:hidden block" onClick={() => setShowBtn(!showBtn)}>
            {showBtn ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </div>
          {showBtn && (
            <>
              <div className="absolute left-0 px-6 py-4 right-0 bg-white top-full font-medium text-sm flex flex-col space-y-6 ">
                <Link href="#" className="hover:underline">
                  Explore
                </Link>
                <Link href="#" className="hover:underline">
                  Web3
                </Link>
                <Link href="#" className="hover:underline">
                  Learn
                </Link>
                <Link href="#" className="hover:underline">
                  Individuals
                </Link>
                <Link href="#" className="hover:underline">
                  Businesses
                </Link>
                <Link href="#" className="hover:underline">
                  Developers
                </Link>
                <Link href="#" className="hover:underline">
                  Company
                </Link>
                <div className="flex flex-col-reverse gap-y-4">
                  <div className="w-48 border-[#0052FF] border-2 flex justify-center py-4 hover:border-none duration-75 rounded-md">
                    <Link
                      href="#"
                      className="font-medium text-sm text-[#0052FF]"
                    >
                      Sign in
                    </Link>
                  </div>
                  <div className="w-48">
                    <button className="p-4 w-full items-center bg-[#0052FF] font-medium text-sm text-white rounded-md hover:bg-blue-700">
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* end mobile menu */}
        </div>
      </div>
    </div>
  );
};
