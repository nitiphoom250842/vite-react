import React from "react";
import reactLogo from "/images/react.svg";
import viteLogo from "/images/vite.svg";
var env = import.meta.env;
export function PageHome() {
  return (
    <div className=" h-screen w-screen">
      <div className="flex flex-col justify-center items-center h-full gap-4">
        <div className="flex ">
          <img
            src={viteLogo}
            className="h-[120px] w-[120px]  "
            alt="React logo"
          />
          <div className="flex justify-center items-center text-8xl">+</div>
          <img
            src={reactLogo}
            className="h-[120px] w-[120px]  animate-spin "
            alt="React logo"
          />
        </div>
        <div className="text-2xl">{env.VITE_PAGE_HOME}</div>
        <div>
          <div className="text-5xl">"{env.VITE_PAGE_AKA1}"</div>
          <div className="flex justify-end text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-pink-600">
            {env.VITE_PAGE_AKA2}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHome;
