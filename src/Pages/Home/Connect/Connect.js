import React from "react";
import image from "../../../images/wayfinding-promo.png";

const Connect = () => {
   return (
      <div
         style={{ backgroundColor: "#782327" }}
         className="my-5 overflow-hidden"
      >
         <div className="row">
            <div className="col-lg-6 col-md-6 ">
               <h2 className="p-5 text-white">
                  Let Us Help You Find Your Way at Older Care
               </h2>
               <ul className="p-5 text-white">
                  <h4>Let Us Help You Find Your Way at Older Care</h4>
                  <li>Get step-by-step directions to appointments.</li>
                  <li>Locate and save your parking spot.</li>
                  <li>Find amenities and services along your way.</li>
                  <li>Search for a physician or provider.</li>
                  <li>Access MyChart.</li>
               </ul>
            </div>
            <div className="col-lg-6 col-md-6 p-5">
               <img className="img-fluids w-100 " src={image} alt="" />
            </div>
         </div>
      </div>
   );
};

export default Connect;
