import React from "react"
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactCart = () => {

    return(
        <>
           <div className="container">
           <div className="row justify-content-center mt-5 py-5" style={{ gap: '50px' }}>
                    <div className="col-lg-3 col-md-5 col-sm-5 col-10 contact_card p-4">
                        <div className="card-img text-center" >
                            <div className="con-icons mb-5">
                                <IoCall />
                            </div>
                            <h4>Contact</h4>
                            <a href="tel:0987654321">+91 9087654321</a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-sm-5 col-10 contact_card p-4">
                        <div className="card-img text-center" >
                        <div className="con-icons mb-5">
                        <MdEmail />
                            </div>
                            <h4>Email</h4>
                           <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-sm-5 col-10 contact_card p-4">
                        <div className="card-img text-center" >
                        <div className="con-icons mb-5">
                        <FaLocationDot />
                            </div>
                            <h4>Address</h4>
                            <a>Lorem ipsum dolor sit amet consectetur adipisicing </a>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}

export default ContactCart