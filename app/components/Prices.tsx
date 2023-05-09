import Link from "next/link";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { TbCurrencySolana } from "react-icons/tb";

const Prices = () => {
  return (
    <div className="items-center py-8 px-10">
      <table className="w-full text-sm text-left border">
        <thead className="font-medium text-gray-400 border-b ">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
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
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              <Link href="#" className="flex space-x-2 items-center">
                <FaBitcoin size={24} className="text-orange-400" />{" "}
                <h2>Bitcoin</h2>
                <span className="text-gray-400">BTC</span>
              </Link>
            </th>
            <td className="px-6 py-4">KES 3,766,984.77</td>
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
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              <Link href="#" className="flex space-x-2 items-center">
                <FaEthereum
                  size={24}
                  className="text-gray-400 bg-violet-400 rounded-full p-1"
                />{" "}
                <h2>Etherium</h2>
                <span className="text-gray-400">ETH</span>
              </Link>
            </th>
            <td className="px-6 py-4">KES 251,489.98</td>
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
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              <Link href="#" className="flex space-x-2 items-center">
                <FaBitcoin size={24} className="text-orange-400" />{" "}
                <h2>Cardano</h2>
                <span className="text-gray-400">ADA</span>
              </Link>
            </th>
            <td className="px-6 py-4">KES 49.52</td>
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
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              <Link href="#" className="flex space-x-2 items-center">
                <TbCurrencySolana size={24} className="text-orange-400" />{" "}
                <h2>Solana</h2>
                <span className="text-gray-400">SOL</span>
              </Link>
            </th>
            <td className="px-6 py-4">KES 2810.89</td>
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
