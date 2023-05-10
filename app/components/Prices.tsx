import Image from "next/image";
import Link from "next/link";
import { FaBitcoin } from "react-icons/fa";

const Prices = () => {
  return (
    <div className="items-center py-8 px-10">
      <table className="w-full text-lg text-left border">
        <thead className="font-medium text-gray-400 border-b ">
          <tr>
            <th scope="col" className="pl-6 py-3">
              #
            </th>
            <th scope="col" className="pr-12 py-3">
              Name
            </th>
            <th scope="col" className="pl-16 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Change
            </th>
            <th scope="col" className="px-6 py-3">
              Chart
            </th>
            <th scope="col" className="px-6 py-3">
              Trade
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b ">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              1
            </th>
            <th
              scope="row"
              className="pr-12 py-4 font-medium whitespace-nowrap"
            >
              <Link href="#" className="flex space-x-2 items-center">
                <FaBitcoin size={32} className="text-orange-400" />{" "}
                <h2>Bitcoin</h2>
                <span className="text-gray-400">BTC</span>
              </Link>
            </th>
            <td className="pl-16 py-4">KES 3,766,984.77</td>
            <td className="px-6 py-4 text-red-600">-0.57%</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <button className="font-medium bg-green-700 text-white items-center p-2 rounded-md w-16">
                Buy
              </button>
            </td>
          </tr>
          <tr className="border-b ">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              2
            </th>
            <th
              scope="row"
              className="pr-12 py-4 font-medium whitespace-nowrap"
            >
              <Link href="#" className="flex space-x-2 items-center">
                <Image
                  alt="eth"
                  width={32}
                  height={32}
                  className="object-cover"
                  src={
                    "/images/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png"
                  }
                />
                <h2>Etherium</h2>
                <span className="text-gray-400">ETH</span>
              </Link>
            </th>
            <td className="pl-16 py-4">KES 251,489.98</td>
            <td className="px-6 py-4 text-red-600">-0.39%</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">
              <button className="font-medium bg-green-700 text-white items-center p-2 rounded-md w-16">
                Buy
              </button>
            </td>
          </tr>
          <tr className="border-b ">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              3
            </th>
            <th
              scope="row"
              className="pr-12 py-4 font-medium whitespace-nowrap"
            >
              <Link href="#" className="flex space-x-2 items-center">
                <Image
                  width={32}
                  height={32}
                  alt="ADA"
                  src={
                    "/images/a55046bc53c5de686bf82a2d9d280b006bd8d2aa1f3bbb4eba28f0c69c7597da.png"
                  }
                  className="text-orange-400"
                />{" "}
                <h2>Cardano</h2>
                <span className="text-gray-400">ADA</span>
              </Link>
            </th>
            <td className="pl-16 py-4">KES 49.52</td>
            <td className="px-6 py-4 text-red-600">-1.00%</td>
            <td className="px-6 py-4">$99</td>
            <td className="px-6 py-4">
              <button className="font-medium bg-green-700 text-white items-center p-2 rounded-md w-16">
                Buy
              </button>
            </td>
          </tr>
          <tr className="border-b ">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              4
            </th>
            <th
              scope="row"
              className="pr-12 py-4 font-medium whitespace-nowrap"
            >
              <Link href="#" className="flex space-x-2 items-center">
                <Image
                  width={32}
                  height={32}
                  alt="SOL"
                  src={
                    "/images/fd6899026b1e517bbb7995e5c992c71dc33b85edb3b28b66591579d6706deab2.png"
                  }
                  className="text-orange-400"
                />{" "}
                <h2>Solana</h2>
                <span className="text-gray-400">SOL</span>
              </Link>
            </th>
            <td className="pl-16 py-4">KES 2810.89</td>
            <td className="px-6 py-4 text-red-600">-3.06%</td>
            <td className="px-6 py-4">$799</td>
            <td className="px-6 py-4">
              <button className="font-medium bg-green-700 text-white items-center p-2 rounded-md w-16">
                Buy
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Prices;
