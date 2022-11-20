import React from "react";
import reactLogo from "/images/react.svg";


export function PageContent() {

  
  return (
    
        <div className="h-screen w-screen bg-red-300">
          <img
                  src={reactLogo}
                  className="h-[120px] w-[120px] animate-spin "
                  alt="React logo"
                />
        </div>
     
  );
}

export default PageContent;
