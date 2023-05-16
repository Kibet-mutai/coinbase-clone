import Link from "next/link";

export const Explore = () => {
  const bgImage = {
    url: "/images/245d5698473dc72a.webp",
  };
  return (
    <>
      <div className="flex h-[460px] w-[100%]">
        <div className="flex flex-col py-6 px-8 lg:bg-[#F5F8FF] bg-[#113355] justify-center items-center">
          <div className="px-6">
            <h1 className="font-medium text-3xl lg:text-black text-white">
              Earn up to $28 worth of crypto
            </h1>
            <p className="lg:text-black text-white">
              Discover how specific cryptocurrencies work — and get a bit of
              each crypto to try out for yourself.
            </p>
            <div className="w-32">
              <button className="w-full bg-[#0052FF] text-white text-sm font-medium items-center py-2 rounded-sm">
                Start earning
              </button>
            </div>
          </div>
        </div>
        <div
          className="lg:flex hidden py-4 bg-cover bg-no-repeat bg-center w-full h-full"
          style={{ backgroundImage: `url(${bgImage.url})` }}
        ></div>
      </div>
      <div className="flex justify-center px-16">
        <h1 className="text-gray-400 text-xs">
          *Upon purchase of USDC, you will be automatically opted in to rewards.
          If you’d like to opt out or learn more about rewards, you can{" "}
          <Link href="#" className="text-[#0052FF] underline">
            click here
          </Link>
          . The rewards rate is subject to change and can vary by region.
          Customers will be able to see the latest applicable rates directly
          within their accounts.
        </h1>
      </div>
    </>
  );
};
