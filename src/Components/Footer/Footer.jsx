import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <div className="flex items-center justify-center">
        <hr className="h-px w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex flex-col items-center justify-center pt-4">
        <div className="mb-4">
          <img className="h-16 sm:h-20" src={logo} alt="logo" />
        </div>
        <div className="text-center">
          <p className="text-black text-sm sm:text-base font-inter no-underline normal-case">
            Copyright {year} page by Farman Ali
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
