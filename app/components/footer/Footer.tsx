"use client";

import { useState } from "react";
import { Logo } from "../navbar/Logo";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";

// flex md:flex-row flex-col justify-around space-x-4
export const Footer = () => {
  const [showItems, setShowItems] = useState(false);
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around py-8 items-baseline">
        <div className="flex-col flex space-y-6 px-6">
          <Logo />
          <div className="relative w-56">
            <button
              className="flex justify-between px-1 py-1 w-full border items-center hover:border-[#0052FF] rounded-sm"
              onClick={() => setShowItems(!showItems)}
            >
              <h2>English</h2>
              <BiChevronDown className="text-black" />
            </button>
            {showItems && (
              <div className="absolute top-full left-0 right-0 border bg-white">
                <ul className="flex flex-col w-full">
                  <li className="w-full px-3 hover:bg-[#0052FF]">
                    <Link href="#" className="w-full">
                      Deustche
                    </Link>
                  </li>
                  <li className="w-full px-3 hover:bg-[#0052FF]">
                    <Link href="#" className="w-full">
                      Deustche
                    </Link>
                  </li>
                  <li className="w-full px-3 hover:bg-[#0052FF]">
                    <Link href="#" className="w-full">
                      Deustche
                    </Link>
                  </li>
                  <li className="w-full px-3 hover:bg-[#0052FF]">
                    <Link href="#" className="w-full">
                      Deustche
                    </Link>
                  </li>
                  <li className="w-full px-3 hover:bg-[#0052FF]">
                    <Link href="#" className="w-full">
                      Deustche
                    </Link>
                  </li>
                  <li className="w-full px-3 hover:bg-[#0052FF]">
                    <Link href="#" className="w-full">
                      Deustche
                    </Link>
                  </li>
                  <li className="w-full px-3 hover:bg-[#0052FF]">
                    <Link href="#" className="w-full">
                      Deustche
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="text-gray-500">
            <p>&copy; 2023 Coinbase</p>
          </div>
        </div>

        <div className="pt-12 px-6 grid lg:grid-cols-3 space-x-4 grid-cols-2">
          <div className="col-span-1 flex flex-col text-left">
            <p className="font-medium text-lg">Company</p>
            <ul className="text-gray-500 flex flex-col gap-y-2">
              <Link href="#">About</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Affiliates</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Press</Link>
              <Link href="#">Security</Link>
              <Link href="#">Investors</Link>
              <Link href="#">Vendors</Link>
              <Link href="#">Legal & privacy</Link>
              <Link href="#">Cookie policy</Link>
              <Link href="#">Cookie preferences</Link>
              <Link href="#">Digital Asset Disclosure</Link>
            </ul>
            <p className="font-medium text-lg">Learn</p>
            <ul className="text-gray-500 flex flex-col gap-y-2">
              <Link href="#">Etherium Merge</Link>
              <Link href="#">Browse crypto prices</Link>
              <Link href="#">Coinbase bytes newsletter</Link>
              <Link href="#">Crypto Basics</Link>
              <Link href="#">Tips & Tutorials</Link>
              <Link href="#">Market updates</Link>
              <Link href="#">What is Bitcoin?</Link>
              <Link href="#">What is crypto?</Link>
              <Link href="#">What is blockchain?</Link>
              <Link href="#">How to setup a crypto wallet</Link>
              <Link href="#">How to send crypto</Link>
              <Link href="#">Taxes</Link>
            </ul>
            {/* Mobile menu */}
            <div className="md:hidden flex flex-col text-left">
              <p className="font-medium text-lg">Individual</p>
              <ul className="text-gray-500 flex flex-col gap-y-2">
                <Link href="#">Buy & sell</Link>
                <Link href="#">Earn free crypto</Link>
                <Link href="#">Wallet</Link>
                <Link href="#">NFT</Link>
                <Link href="#">Card</Link>
                <Link href="#">Derivatives</Link>
                <Link href="#">Coinbase One</Link>
              </ul>
              <p className="font-medium text-lg">Businesses</p>
              <ul className="text-gray-500 flex flex-col gap-y-2">
                <Link href="#">Institutional</Link>
                <Link href="#">Prime</Link>
                <Link href="#">Asset Hub</Link>
                <Link href="#">Commerce</Link>
              </ul>
              <p className="font-medium text-lg">Developers</p>
              <ul className="text-gray-500 flex flex-col gap-y-2">
                <Link href="#">Cloud</Link>
                <Link href="#">Wallet as a Service</Link>
                <Link href="#">Wallet SDK</Link>
                <Link href="#">Coinbase Wallet Faucet - Get</Link>
                <Link href="#">testnet funds</Link>
                <Link href="#">Coinbase Pay SDK</Link>
                <Link href="#">Node</Link>
                <Link href="#">Commerce</Link>
                <Link href="#">Base</Link>
                <Link href="#">Sign in with Coinbase</Link>
                <Link href="#">Rosetta</Link>
                <Link href="#">Participate</Link>
                <Link href="#">Prime API</Link>
              </ul>
            </div>
            <div className="lg:hidden flex flex-col text-left">
              <p className="font-medium text-lg">Support</p>
              <ul className="text-gray-500 flex flex-col gap-y-2">
                <Link href="#">Help center</Link>
                <Link href="#">Contact us</Link>
                <Link href="#">Create account</Link>
                <Link href="#">ID verification</Link>
                <Link href="#">Account information</Link>
                <Link href="#">Payment methods</Link>
                <Link href="#">Account access</Link>
                <Link href="#">Supported crypto</Link>
                <Link href="#">Supported countries</Link>
                <Link href="#">Status</Link>
              </ul>
            </div>
            {/* Mobile menu end */}
          </div>
          <div className="col-span-1 md:flex hidden flex-col text-left">
            <p className="font-medium text-lg">Individual</p>
            <ul className="text-gray-500 flex flex-col gap-y-2">
              <Link href="#">Buy & sell</Link>
              <Link href="#">Earn free crypto</Link>
              <Link href="#">Wallet</Link>
              <Link href="#">NFT</Link>
              <Link href="#">Card</Link>
              <Link href="#">Derivatives</Link>
              <Link href="#">Coinbase One</Link>
            </ul>
            <p className="font-medium text-lg">Businesses</p>
            <ul className="text-gray-500 flex flex-col gap-y-2">
              <Link href="#">Institutional</Link>
              <Link href="#">Prime</Link>
              <Link href="#">Asset Hub</Link>
              <Link href="#">Commerce</Link>
            </ul>
            <p className="font-medium text-lg">Developers</p>
            <ul className="text-gray-500 flex flex-col gap-y-2">
              <Link href="#">Cloud</Link>
              <Link href="#">Wallet as a Service</Link>
              <Link href="#">Wallet SDK</Link>
              <Link href="#">Coinbase Wallet Faucet - Get</Link>
              <Link href="#">testnet funds</Link>
              <Link href="#">Coinbase Pay SDK</Link>
              <Link href="#">Node</Link>
              <Link href="#">Commerce</Link>
              <Link href="#">Base</Link>
              <Link href="#">Sign in with Coinbase</Link>
              <Link href="#">Rosetta</Link>
              <Link href="#">Participate</Link>
              <Link href="#">Prime API</Link>
            </ul>
          </div>
          <div className="col-span-1 lg:flex hidden flex-col text-left">
            <p className="font-medium text-lg">Support</p>
            <ul className="text-gray-500 flex flex-col gap-y-2">
              <Link href="#">Help center</Link>
              <Link href="#">Contact us</Link>
              <Link href="#">Create account</Link>
              <Link href="#">ID verification</Link>
              <Link href="#">Account information</Link>
              <Link href="#">Payment methods</Link>
              <Link href="#">Account access</Link>
              <Link href="#">Supported crypto</Link>
              <Link href="#">Supported countries</Link>
              <Link href="#">Status</Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
