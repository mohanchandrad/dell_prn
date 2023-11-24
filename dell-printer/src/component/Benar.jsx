


import React from "react";
import bennar from '../image/bennar.png'
import { Link } from "react-router-dom";

const Benar = () => {

    return (
        <>
            <div className="container-fluide ps-0 pe-0 d-flex align-items-center justify-content-center" id="benar" style={{ minHeight: '85vh' }}>
                <div className="benar h-100">
                    <div className="container">
                        <div className="benar-row pb-4 h-100 row align-items-center">
                            <div className="col-md-6">
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p className="mt-3 mb-4" style={{fontSize: '16px', letterSpacing: '1px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dignissimos recusandae natus? Maxime, impedit? Tempora iusto accusantium dolorem magnam sit!</p>
                                <Link to='/contact' className=" btn-loc py-2" >Contact us</Link>
                            </div>
                            <div className="col-md-6 right-col" style={{height: '90%'}}>
                                <img src={bennar} className='w-100 h-100'  alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benar
