import React from "react";
import reactLogo from "/images/react.svg";

export function PageContent() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen ">
      <img
        src={reactLogo}
        className="h-[120px] w-[120px] animate-spin "
        alt="React logo"
      />
      <div>PageContent</div>
    </div>
  );
}

export default PageContent;
