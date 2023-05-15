import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";
import { Instruction } from "./Instruction";

export const TestimonialsSect = () => {
  return (
    <>
      <div className="items-center flex flex-col px-20 py-4">
        <div className="text-center">
          <h1 className="font-bold text-3xl">
            The most trusted cryptocurrency platform
          </h1>
          <p className="text-gray-500">
            Here are a few reasons why you should choose Coinbase
          </p>
        </div>
        <div className="lg:grid grid-cols-3 lg:space-x-4 flex flex-col space-y-4 items-center lg:px-10 px-16 py-8">
          <div className="col-span-1 flex flex-col items-center text-center px-4">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M56 0H8V50H56V0Z" fill="#BFE9FF"></path>
              <path d="M64 10H0V58H64V10Z" fill="#56B4FC"></path>
              <path d="M56 10H8V50H56V10Z" fill="#1652F0"></path>
              <path d="M10 16H6V24H10V16Z" fill="#1652F0"></path>
              <path d="M10 36H6V44H10V36Z" fill="#1652F0"></path>
              <path d="M64 58H56V64H64V58Z" fill="#56B4FC"></path>
              <path d="M8 58H0V64H8V58Z" fill="#56B4FC"></path>
              <path
                d="M41.1905 20.81C36.1205 15.74 27.8705 15.74 22.8105 20.81C17.7505 25.88 17.7405 34.13 22.8105 39.19C25.3405 41.72 28.6705 42.99 32.0005 42.99C35.3305 42.99 38.6605 41.72 41.1905 39.19C46.2605 34.12 46.2605 25.88 41.1905 20.81ZM32.0005 19C34.5005 19 37.0005 19.85 39.0405 21.55L36.1905 24.4C34.9805 23.5 33.5305 23 32.0005 23C30.4705 23 29.0205 23.5 27.8105 24.4L24.9605 21.55C27.0005 19.86 29.5005 19 32.0005 19ZM35.5405 33.54C34.5905 34.48 33.3405 35 32.0005 35C30.6605 35 29.4105 34.48 28.4605 33.54C27.5105 32.6 27.0005 31.33 27.0005 30C27.0005 28.67 27.5205 27.41 28.4605 26.46C29.4005 25.51 30.6605 25 32.0005 25C33.3405 25 34.5905 25.52 35.5405 26.46C36.4905 27.4 37.0005 28.67 37.0005 30C37.0005 31.33 36.4805 32.59 35.5405 33.54ZM23.5505 22.96L26.4005 25.81C25.5005 27.02 25.0005 28.47 25.0005 30C25.0005 31.53 25.5005 32.98 26.4005 34.19L23.5505 37.04C20.1605 32.97 20.1605 27.03 23.5505 22.96ZM24.9605 38.45L27.8105 35.6C29.0105 36.5 30.4705 37 32.0005 37C33.5305 37 34.9805 36.5 36.1905 35.6L39.0405 38.45C34.9705 41.84 29.0305 41.84 24.9605 38.45ZM40.4505 37.04L37.6005 34.19C38.5005 32.99 39.0005 31.54 39.0005 30C39.0005 28.47 38.5005 27.02 37.6005 25.81L40.4505 22.96C43.8405 27.03 43.8405 32.97 40.4505 37.04Z"
                fill="white"
              ></path>
            </svg>
            <div className="text-center">
              <h1 className="font-bold text-xl pt-2">Secure strorage</h1>
              <p className="text-gray-500">
                We store the vast majority of the digital assets in secure
                offline storage.
              </p>
              <div className="mt-8 mb-10 text-sm text-[#0052FF]">
                <Link href="#">
                  <p>
                    Learn how Coinbase keeps your funds safe and secure{" "}
                    {/* <CgChevronRight /> */}
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center text-center px-4">
            <svg
              width="64"
              height="56"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56 56H48V64H56C60.42 64 64 60.42 64 56H56Z"
                fill="#BFE9FF"
              ></path>
              <path
                d="M48 56V0H0V56C0 60.42 3.58 64 8 64H48H56C51.58 64 48 60.42 48 56Z"
                fill="#56B4FC"
              ></path>
              <path
                d="M48 56H0C0 60.42 3.58 64 8 64H56C51.58 64 48 60.42 48 56Z"
                fill="#1652F0"
              ></path>
              <path d="M40 30H8V32H40V30Z" fill="white"></path>
              <path d="M40 36H8V38H40V36Z" fill="white"></path>
              <path d="M40 42H8V44H40V42Z" fill="white"></path>
              <path d="M32 48H16V50H32V48Z" fill="white"></path>
              <path
                d="M23.4998 24.66L20.2598 18.74L14.3398 15.5L20.2598 12.26L23.4998 6.34L26.7398 12.26L32.6598 15.5L26.7398 18.74L23.4998 24.66ZM18.5098 15.5L21.7298 17.26L23.4898 20.48L25.2498 17.26L28.4698 15.5L25.2498 13.74L23.4898 10.52L21.7298 13.74L18.5098 15.5Z"
                fill="white"
              ></path>
            </svg>
            <div className="text-center">
              <h1 className="font-bold text-xl pt-2">Protected assets</h1>
              <p className="text-gray-500">
                Our risk management measures are designed to protect your
                assets.
              </p>
              <div className="mt-8 mb-10 text-sm text-[#0052FF]">
                <Link href="#">
                  <p>
                    Learn about how your assets are protected
                    {/* <CgChevronRight /> */}
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center text-center px-4">
            <svg
              width="64"
              height="64"
              viewBox="0 0 56 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M56 0H24V64H56V0Z" fill="#BFE9FF"></path>
              <path
                d="M0 8V36C0 49.25 24 60 24 60C24 60 48 49.25 48 36V8H0Z"
                fill="#56B4FC"
              ></path>
              <path
                d="M24 8V60C24 60 48 49.25 48 36V8H24Z"
                fill="#1652F0"
              ></path>
              <path
                d="M7 15V36C7 40.92 15.57 47.72 23.53 51.97L24 52.22L24.47 51.97C32.43 47.72 41 40.92 41 36V15H7ZM39 17V23H9V17H39ZM24 49.95C15.55 45.35 9 39.28 9 36V25H39V36C39 39.28 32.45 45.35 24 49.95Z"
                fill="white"
              ></path>
            </svg>
            <div className="text-center">
              <h1 className="font-bold text-xl pt-2">
                Industry best practices
              </h1>
              <p className="text-gray-500">
                Coinbase supports a variety of the most popular digital
                currencies.
              </p>
              <div className="mt-8 mb-10 text-sm text-[#0052FF]">
                <Link href="#">
                  <p>
                    Learn how we implement industry best practices for account
                    security
                    {/* <CgChevronRight /> */}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 py-16 bg-[#0052FF] text-white items-center flex md:flex-row flex-col space-y-3 justify-around">
        <div className="flex flex-col space-y-4">
          <span className="font-medium text-6xl">$145B</span>
          <p className="text-gray-400">Quarterly volume traded</p>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-medium text-6xl">100+</span>
          <p className="text-gray-400">Countries supported</p>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-medium text-6xl">$130B</span>
          <p className="text-gray-400">Assest on the platform</p>
        </div>
      </div>
      <Instruction />
    </>
  );
};
