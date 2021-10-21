import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
   const [singleItem, setSingleItem] = useState([]);
   const { serviceId } = useParams();
   console.log(singleItem);
   useEffect(() => {
      fetch("https://bakhtiarabid.github.io/serviceapi/services.json")
         .then((res) => res.json())
         .then((data) => setSingleItem(data));
   }, []);

   const exactItem = singleItem.filter(
      (item) => parseInt(item?._id) === parseInt(serviceId)
   );
   //    const { serviceId } = useParams();
   console.log(exactItem);
   return (
      <div className="my-5">
         <div class="card mb-3" style={{ maxWidth: "5400px" }}>
            <div class="row g-0">
               <div class="col-md-4">
                  <img
                     src={exactItem[0]?.img}
                     class="img-fluid rounded-start"
                     alt="..."
                  />
               </div>
               <div class="col-md-8">
                  <div class="card-body">
                     <h5 class="card-title">{exactItem[0]?.name}</h5>
                     <p class="card-text">{exactItem[0]?.desc}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServiceDetail;
