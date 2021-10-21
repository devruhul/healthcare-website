import React from "react";
import "./Banner.css";

const Banner = () => {
   return (
      <div>
         <div className="hero-image">
            <div className="hero-text">
               <h1 style={{ fontSize: "30px" }}>Older Care</h1>
               <p style={{ fontSize: "40px" }}>
                  Leading care at the heart of our community.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Banner;
