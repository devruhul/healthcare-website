import React from "react";

import notFound from "../../../images/notfound.jpg";

const NotFound = () => {
   return (
      <div>
         <img src={notFound} className="img-fluid w-100" alt="" />
         <a href="/home">
            <div className="text-center">
               <button className="btn btn-warning"> Go Back Home </button>
            </div>
         </a>
      </div>
   );
};

export default NotFound;
