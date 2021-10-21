import React from "react";
import volunteer from "../../../images/Collaboratives-sml.jpg";
import "./Volunteer.css";

const Volunteer = () => {
   return (
      <div style={{ backgroundColor: "#e7f5fc" }} className="overflow-hidden">
         <h1 className="text-center my-5 pt-3" style={{ color: "#a31987" }}>
            Meet our volunteers
         </h1>
         <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 p-5">
               {" "}
               <img className="img-fluid" src={volunteer} alt="" />{" "}
            </div>
            <div className="col-lg-5 col-md-6  p-5">
               Our volunteers are valued and valuable members of our
               organisation and we currently have over 200 working across the
               organisation and in the community. Across our services we have
               volunteers dedicating their time, expertise and experience and
               supporting the work our staff members do. From patient experts
               and buddies in our HOPE specialist service through to the
               award-winning work our Collaboratives carry out. Our volunteers
               make a real difference to the services we provide and to the
               health and wellbeing of our whole community.
            </div>
         </div>
      </div>
   );
};

export default Volunteer;
