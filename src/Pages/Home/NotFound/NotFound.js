import React from "react";
import { Link } from "react-router-dom";

import notFound from "../../../images/notfound.jpg";

const NotFound = () => {
  return (
    <div>
      <img src={notFound} className="img-fluid w-100" alt="" />
      <Link to="/home">
        <div className="text-center">
          <button className="btn btn-warning"> Go Back Home </button>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
