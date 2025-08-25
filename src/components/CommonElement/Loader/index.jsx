import React from "react";
import Image from "../Image";
 
export default function Loader() {
  return (
    <div className="preloader">
      <div className="loading-container">
         <div className="loading"></div>
         <div id="loading-icon"><Image source="small-logo.png" alt="logo" width="50px" imageFor="frontend" /></div>
      </div>
   </div>
  );
}
