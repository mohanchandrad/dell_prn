
import React from "react";

const AboutCart = () => {

    return (
        <>
            <div className="container mt-5 py-4 pb-5">
                <div className="sec-ttitle">
                    <h2 className="text-center">Lorem ipsum dolor sit amet.</h2>
                    <p className="col-lg-7 col-md-8 mt-3 mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam doloremque nihil expedita eum omnis aliquam, delectus ab corporis ipsa incidunt rerum vero </p>
                </div>
                <div className="row justify-content-center" style={{ gap: '50px' }}>
                    <div className="col-lg-3 col-md-5 col-sm-5 col-10 abort-card p-4">
                        <div className="card-img text-center" >
                            <img src="https://img.freepik.com/free-vector/printer-with-paper-illustration_138676-2396.jpg?w=740&t=st=1700804968~exp=1700805568~hmac=efbe7ec0e186ae02df60d7a5fdb48e8731e5efd609d8e00e766adcbf4916035d" className="w-50" alt="" />
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, optio.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-sm-5 col-10 abort-card p-4">
                        <div className="card-img text-center" >
                            <img src="https://img.freepik.com/free-vector/illustration-printer_53876-5572.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais" className="w-50" alt="" />
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, optio.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-sm-5 col-10 abort-card p-4">
                        <div className="card-img text-center" >
                            <img src="https://img.freepik.com/premium-vector/printer-picture-cartoon-flat-cartoon-style_75802-238.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais" className="w-50" alt="" />
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, optio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCart

// transform: perspective(500px) rotatey(340deg);