import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
   const { id, img, name, desc } = service;
   return (
      <div className="service pb-3">
         <img className="img-fluid" src={img} alt="" />
         <h4 className="ms-2">{name}</h4>
         <p className="px-3">{desc?.slice(0, 175)}...</p>
         <div className="text-center ">
            <Link to={`/service/${id}`}>
               <button className="btn btn-primary btn-style pe-5 ps-5">
                  Details
               </button>
            </Link>
         </div>
      </div>
   );
};

{
   /* <Link to={`/booking/${id}`}>
   <button className="btn btn-warning">Book {name.toLowerCase()}</button>
</Link>; */
}
export default Service;
