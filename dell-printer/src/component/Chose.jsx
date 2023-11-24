
import React from "react";
import chose from '../image/chose-1.png'

const Chose = () => {

    return (
        <>
            <section className="chose">
                <div className="container">
                    <div className="sec-ttitle" style={{ marginBottom: '10px' }}>
                        <h2 className="text-center" >Why Choose us</h2>
                        <p className="col-lg-7 col-md-8 mt-3 mx-auto text-center">
                            When providing online support for laptops without hardware support, you'll want to focus on addressing software-related issues. Here are some key sections you can include in your online support</p>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="chose">
                                <h3>Operating System Assistance</h3>
                                <p>Expert assistance for operating system issues. We troubleshoot errors, guide updates, and optimize settings for seamless performance on your laptop</p>
                            </div>

                            <div className="chose my-5">
                                <h3>Data Backup and Recovery</h3>
                                <p>Expert assistance for operating system issues. We troubleshoot errors, guide updates, and optimize settings for seamless performance on your laptop</p>
                            </div>

                            <div className="chose ">
                                <h3>Operating System Assistance</h3>
                                <p>Expert assistance for operating system issues. We troubleshoot errors, guide updates, and optimize settings for seamless performance on your laptop</p>
                            </div>
                        </div>

                        <div className="col-lg-5 text-center col-sm-8  col-md-6">
                            <img src={chose} alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Chose