import React from "react";

export function Page404() {
  var env = import.meta.env;

  return (
    <div className="flex justify-center items-center h-screen text-4xl ">
      404 Page not found |
      <div>
        <div>"{env.VITE_PAGE_NOT1}"</div>
        <div className="flex justify-end text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{env.VITE_PAGE_NOT2}</div>
      </div>
    </div>
  );
}

export default Page404;
