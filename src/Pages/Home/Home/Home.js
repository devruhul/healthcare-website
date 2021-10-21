import React from "react";
import Banner from "../Banner/Banner";
import Connect from "../Connect/Connect";
import Services from "../Services/Services";
import Volunteer from "../Volunteers/Volunteer";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Services></Services>
         <Volunteer></Volunteer>
         <Connect></Connect>
      </div>
   );
};

export default Home;
