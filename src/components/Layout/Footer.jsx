const Footer = () => {
    return (
        <section>
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-6 col-lg-3 mb-4  ">
                        <h6>Hobbycue</h6>
                        <p className="description">About us</p>
                        <p className="description">Our Services</p>
                        <p className="description">Work with us</p>
                        <p className="description">FAQ</p>
                        <p className="description">Contact us</p>
                    </div>
                    <div className="col-6 col-lg-3 mb-4 ">
                        <h6>How Do I</h6>
                        <p className="description">Sign up</p>
                        <p className="description">Add a Listing</p>
                        <p className="description">Claim Listing</p>
                        <p className="description">Past a Query</p>
                        <p className="description">Add a Blog Post</p>
                        <p className="description">Other Queries</p>
                    </div>
                    <div className="col-6 col-lg-3 mb-4 ">
                        <h6>Quick Links</h6>
                        <p className="description">Listings</p>
                        <p className="description">Blog Posts</p>
                        <p className="description">Shop / Store</p>
                        <p className="description">Community</p>
                    </div>
                    <div className="col-6 col-lg-3 mb-4 ">
                        <h6>Social Media</h6>
                        <i class="fa-brands fa-facebook-f mx-2 "
                            style={{ color: "#6D747A" }}></i>
                        <i class="fa-brands fa-twitter mx-2"
                            style={{ color: "#6D747A" }}></i>
                        <i class="fa-brands fa-instagram mx-2"
                            style={{ color: "#6D747A" }}></i>
                        <i class="fa-brands fa-pinterest mx-2"
                            style={{ color: "#6D747A" }}></i>
                        <i class="fa-brands fa-google mx-2"
                            style={{ color: "#6D747A" }}></i>
                        <i class="fa-brands fa-youtube mx-2"
                            style={{ color: "#6D747A" }}></i>
                        <i class="fa-brands fa-telegram mx-2"
                            style={{ color: "#6D747A" }}></i>
                        <i class="fa-brands fa-envelope mx-2"
                            style={{ color: "#6D747A" }}></i>

                        <h6>Invite Friends</h6>
                        <form className="d-flex m-auto mt-4  " role="search">
                            <input className="form-control me-2" type="search" placeholder="Search here..." aria-label="Search" style={{ backgroundColor: "#EBEDF0" }} />
                            <div className="search-icon d-flex justify-content-center align-items-center ">
                                <i class="fa-solid fa-magnifying-glass "
                                    style={{ color: "#ffffff" }}></i>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="bg-secondary p-4 mb-4  ">
                    <h6 className="text-center">© Purple Cues Private Limited</h6>
                </div>
            </div>
        </section>
    )
}
export default Footer