const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">
                            <img src="logo.png" alt="" />
                        </a>

                        <form className="d-flex m-auto " role="search">
                            <input className="form-control me-2" type="search" placeholder="Search here..." aria-label="Search" style={{ backgroundColor: "#F8F9FA" }} />
                            <div className="search-icon d-flex justify-content-center align-items-center ">
                                <i class="fa-solid fa-magnifying-glass "
                                    style={{ color: "#ffffff" }}></i>
                            </div>
                        </form>
                        <div className="d-flex justify-content-center align-items-center ">
                            <div className="px-2 d-flex justify-content-center align-items-center ">
                                <i class="fa-solid fa-compass" style={{ color: "#B197FC" }}></i>
                                <a className="nav-link text-dark  fw-bolder " aria-current="page" href="#">Explore</a>
                            </div>

                            <div className="px-2 d-flex justify-content-center align-items-center ">
                                <i class="fa-solid fa-star" style={{ color: "#B197FC" }}></i>
                                <a className="nav-link text-dark fw-bolder " href="#">Hobbies</a>
                            </div>

                            <div className="d-flex justify-content-center align-items-center" >
                                <a className="nav-link" href="#">
                                    <i class="fa-solid fa-bookmark" style={{ color: "#B197FC" }}></i>
                                </a>

                                <a className="nav-link" href="#">
                                    <i class="fa-solid fa-bell" style={{ color: "#B197FC" }}></i>
                                </a>

                                <a className="nav-link" href="#">
                                    <i class="fa-solid fa-cart-shopping" style={{ color: "#B197FC" }}></i>
                                </a>
                                <button class="btn mt-3 " type="submit">Sign in</button>
                            </div>


                        </div>
                    </div>
                </div >
            </nav >
        </div >
    )
}
export default Navbar