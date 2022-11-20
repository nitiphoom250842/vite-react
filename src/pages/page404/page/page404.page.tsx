import React from "react";

export function Page404() {
  var env = import.meta.env;

  return (
    <div className="flex justify-center items-center h-screen text-4xl ">
      404 Page not found | {env.VITE_PAGE_NOT}
    </div>
  );
}

export default Page404;
