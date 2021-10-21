import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
   return (
      <div>
         <div className="contact-us">
            <h1 className=" fw-bolder p-5 ">Contact Us</h1>
         </div>
         <div className="p-5 row container ">
            <div className="col-lg-8  col-md-6">
               <div className="mb-3">
                  <label for="exampleFormControlInput1" classname="form-label">
                     Your Name:
                  </label>
                  <input
                     type="text"
                     className="form-control"
                     id="exampleFormControlInput1"
                     placeholder="Your Name"
                  />
               </div>
               <div className="mb-3">
                  <label for="exampleFormControlInput1" classname="form-label">
                     Email:
                  </label>
                  <input
                     type="email"
                     className="form-control"
                     id="exampleFormControlInput1"
                     placeholder="Your Email"
                  />
               </div>
               <div className="mb-3">
                  <label for="exampleFormControlInput1" classname="form-label">
                     Phone:
                  </label>
                  <input
                     type="text"
                     className="form-control"
                     id="exampleFormControlInput1"
                     placeholder="Your Phone"
                  />
               </div>
               <div className="mb-3">
                  <label
                     for="exampleFormControlTextarea1"
                     className="form-label"
                  >
                     Your Message
                  </label>
                  <textarea
                     className="form-control"
                     id="exampleFormControlTextarea1"
                     rows="3"
                  ></textarea>
                  <br />
                  <input
                     type="button"
                     value="Submit"
                     className="text-white p-2 rounded-3"
                     style={{ backgroundColor: "#a31987" }}
                  />
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <h2 style={{ color: "#a31987" }}>Contact information</h2>
               <div>
                  <div className="d-flex">
                     <i
                        class="fas fa-phone me-3"
                        style={{ fontSize: "40px", color: "#a31987" }}
                     ></i>
                     <div>
                        <h2 style={{ color: "#a31987" }}>Phone</h2>
                        <p>01472 266999</p>
                     </div>
                  </div>
                  <div className="d-flex">
                     <i
                        class="fas fa-map-marker-alt me-3"
                        style={{ fontSize: "40px", color: "#a31987" }}
                     ></i>
                     <div>
                        <h2 style={{ color: "#a31987" }}>Address</h2>
                        <p>
                           Eldery Group The Val Waterhouse Centre 41-43 Kent
                           Street Grimsby DN32 7DH
                        </p>
                     </div>
                  </div>
                  <div className="d-flex">
                     <i
                        class="fas fa-envelope me-3"
                        style={{ fontSize: "40px", color: "#a31987" }}
                     ></i>
                     <div>
                        <h2 style={{ color: "#a31987" }}>Email</h2>
                        <p>01472 266999</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactUs;
