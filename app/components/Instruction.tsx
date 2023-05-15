export const Instruction = () => {
  return (
    <div className="py-12">
      <div className="items-center flex flex-col space-y-4">
        <div className="text-left">
          <h1 className="font-bold text-4xl">Get started in a few minutes</h1>
          <p className="text-gray-400">
            Coinbase supports a variety of the most popular digital currencies.
          </p>
        </div>
        <div className="flex justify-evenly items-center pt-10">
          <div className="flex flex-col items-center">
            <svg
              width="64"
              height="60"
              viewBox="0 0 64 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 16C36.4183 16 40 12.4183 40 8C40 3.58172 36.4183 0 32 0C27.5817 0 24 3.58172 24 8C24 12.4183 27.5817 16 32 16Z"
                fill="#56B4FC"
              ></path>
              <path
                d="M32 20C20.95 20 12 27.16 12 36V54H52V36C52 27.16 43.05 20 32 20Z"
                fill="#56B4FC"
              ></path>
              <path d="M64 36H0V60H64V36Z" fill="#BFE9FF"></path>
              <path d="M52 36H12V60H52V36Z" fill="#1652F0"></path>
              <path d="M33 42H31V54H33V42Z" fill="white"></path>
              <path d="M38 49V47H26V49H38Z" fill="white"></path>
            </svg>
            <p className="font-bold text-xl">Create an account</p>
          </div>
          <span className="w-40 border-t px-4 border-gray-500"></span>
          <div className="flex flex-col items-center">
            <svg
              width="65"
              height="56"
              viewBox="0 0 65 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M57.0298 20H7.02979V44H57.0298V20Z"
                  fill="#BFE9FF"
                ></path>
                <path
                  d="M60.03 52V48H52.03V16.06L64 16.1L64.01 12L32.06 0L0.01 12L0 15.9L12.03 15.94V48H4.03V52H0.03V56H64.03V52H60.03ZM44.03 48H36.03V16.01L44.03 16.04V48ZM20.03 15.96L28.03 15.99V48H20.03V15.96Z"
                  fill="#56B4FC"
                ></path>
                <path
                  d="M52.0298 20H12.0298V44H52.0298V20Z"
                  fill="#1652F0"
                ></path>
                <path
                  d="M36.4099 34.38C36.4099 32.04 34.9899 31.26 32.2399 30.88C30.2099 30.59 29.8199 30.11 29.8199 29.16C29.8199 28.26 30.5099 27.62 31.8299 27.62C33.1699 27.62 33.8699 28.14 34.0899 29.37H36.0799C35.8899 27.51 34.8199 26.41 33.0199 26.09V24H31.0199V26.05C29.0399 26.33 27.7599 27.65 27.7599 29.34C27.7599 31.53 29.0799 32.38 31.8799 32.76C33.7799 33.07 34.3199 33.48 34.3199 34.56C34.3199 35.64 33.3999 36.36 32.1099 36.36C30.1299 36.36 29.6599 35.38 29.5099 34.2H27.4199C27.5599 36.14 28.6199 37.6 31.0299 37.92V40H33.0299V37.92C35.0899 37.59 36.4099 36.15 36.4099 34.38Z"
                  fill="white"
                ></path>
              </g>
            </svg>
            <p className="font-bold text-xl">Link your bank account</p>
          </div>
          <span className="w-40 border-t px-4 border-gray-500"></span>
          <div className="flex flex-col items-center">
            <svg
              width="61"
              height="56"
              viewBox="0 0 61 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M40 40.5V39.51C40 38.62 39.41 37.83 38.55 37.59L29.34 34.96C27.21 34.35 24.92 34.65 23.03 35.79L16 40V48V52H31.65C34.53 52 37.38 51.48 40.08 50.47L60 43C60.9 40.74 59.07 38.33 56.65 38.61L40 40.5Z"
                  fill="#56B4FC"
                ></path>
                <path d="M16 36H0V56H16V36Z" fill="#BFE9FF"></path>
                <path d="M16 40H0V52H16V40Z" fill="#1652F0"></path>
                <path
                  d="M28 20C33.5228 20 38 15.5228 38 10C38 4.47715 33.5228 0 28 0C22.4772 0 18 4.47715 18 10C18 15.5228 22.4772 20 28 20Z"
                  fill="#56B4FC"
                ></path>
                <path
                  d="M48 36C53.5228 36 58 31.5228 58 26C58 20.4772 53.5228 16 48 16C42.4772 16 38 20.4772 38 26C38 31.5228 42.4772 36 48 36Z"
                  fill="#1652F0"
                ></path>
                <path
                  d="M32 9H29V6H27V9H24V11H27V14H29V11H32V9Z"
                  fill="white"
                ></path>
                <path d="M52 27V25H44V27H52Z" fill="white"></path>
              </g>
            </svg>
            <p className="font-bold text-xl">Start buying & selling</p>
          </div>
        </div>
      </div>
    </div>
  );
};
