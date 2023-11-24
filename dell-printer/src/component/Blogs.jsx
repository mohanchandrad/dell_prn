import { Link } from "react-router-dom"


const Blogs = () => {

    return(
        <>
            <div className="blog mt-5">
                <div className="container">
                    <div className="row pb-1 mt-5 justify-content-center" style={{gap: '40px'}}>
                        <div className="blog-card  col-lg-3 col-sm-5 col-11  col-md-5 px-0 pb-4">
                            <div className="overflow-hidden">
                                <img src="https://img.freepik.com/free-photo/home-printer-based-toner_23-2149287457.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais" className="w-100" alt="" />
                            </div>
                            <div className="blog-body px-2">
                                <h3>Endpoint Management</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis.</p>
                                <Link to="/" className="btn-loc">View More</Link>
                            </div>
                        </div>

                        <div className="blog-card  col-lg-3 col-sm-5 col-11 col-md-5 px-0 pb-4">
                            <div className="overflow-hidden">
                                <img src="https://img.freepik.com/free-photo/laptop-wooden-table-with-printer_1232-567.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais" className="w-100" alt="" />
                            </div>
                            <div className="blog-body px-2">
                                <h3>Endpoint Management</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis.</p>
                                <Link to="/" className="btn-loc">View More</Link>
                            </div>
                        </div>

                        <div className="blog-card  col-lg-3 col-sm-5 col-11 col-md-5 px-0 pb-4">
                            <div className="overflow-hidden">
                                <img src="https://img.freepik.com/premium-photo/man-s-hand-making-copies-working-with-printer_93675-58038.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais" className="w-100" alt="" />
                            </div>
                            <div className="blog-body px-2">
                                <h3>Endpoint Management</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis.</p>
                                <Link to="/" className="btn-loc">View More</Link>
                            </div>
                        </div>

                        {/* <div className="blog-card  col-lg-3 col-sm-5 col-11  col-md-5 px-0 pb-4">
                            <div className="overflow-hidden">
                                <img src="https://img.freepik.com/free-photo/submitting-online-internet-loading-progress-website-concept_53876-124769.jpg?size=626&ext=jpg&ga=GA1.1.1326273119.1694753008&semt=ais" className="w-100" alt="" />
                            </div>
                            <div className="blog-body px-2">
                                <h3>Endpoint Management</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis.</p>
                                <a href="#" className="">View More</a>
                            </div>
                        </div>

                        <div className="blog-card  col-lg-3 col-sm-5 col-11 col-md-5 px-0 pb-4">
                            <div className="overflow-hidden">
                                <img src="https://img.freepik.com/free-photo/submitting-online-internet-loading-progress-website-concept_53876-124769.jpg?size=626&ext=jpg&ga=GA1.1.1326273119.1694753008&semt=ais" className="w-100" alt="" />
                            </div>
                            <div className="blog-body px-2">
                                <h3>Endpoint Management</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis.</p>
                                <a href="#" className="">View More</a>
                            </div>
                        </div>

                        <div className="blog-card  col-lg-3 col-sm-5 col-11 col-md-5 px-0 pb-4">
                            <div className="overflow-hidden">
                                <img src="https://img.freepik.com/free-photo/submitting-online-internet-loading-progress-website-concept_53876-124769.jpg?size=626&ext=jpg&ga=GA1.1.1326273119.1694753008&semt=ais" className="w-100" alt="" />
                            </div>
                            <div className="blog-body px-2">
                                <h3>Endpoint Management</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis.</p>
                                <a href="#" className="">View More</a>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs