import Card from "../components/Cards/Card"
import Join_in from "../components/Join in/Join_in"
import Layout from "../components/Layout/Layout"
import Sign_in from "../components/Sign in/Sign_in"

const HomePage = () => {
    return (
        <Layout>
            <section className="hero-section p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="content">
                                <h2 className="title">Explore your <span
                                    style={{ color: '#0096C8' }}>hobby</span> or <span style={{ color: '#8064A2' }}>passion</span></h2>
                                <p className="description">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
                                <p className="description">If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.</p>
                                <div className="banner-image order-1 ">
                                    <img src="banner.png" alt="banner-image" />
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-lg-6 col-md-12 ">
                            <div >
                                <div className="d-flex gap-5 mb-4 ">
                                    <a href="" className="btn-link">Sign in</a>
                                    <a href="" className="btn-link">Join in</a>
                                </div>
                                <Sign_in />
                                {/* <Join_in /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Card />

            {/* Add your own section */}
            <section className="container">
                <div className="row">
                    <div className="col-12 bg-light mt-5 ">

                        <div className="border border-1 m-lg-5 px-3 py-3 bg-white  ">
                            <div className="d-flex gap-3 ">
                                <i class="fa-solid fa-circle-plus" style={{ color: "#74C0FC" }}></i>
                                <p className="description fw-bolder ">Add your own</p>
                            </div>
                            <p className="description w-75 fw-medium  ">Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
                            <button className="action-btn w-auto px-4 py-1 ">Add new</button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Your hobby your community */}
            <section className="container">
                <div className="row">
                    <div className="col-12 bg-light mt-5 px-3 py-5  ">
                        <h2 className="title">Your <span style={{ color: '#8064A2' }}>Hobby</span> , Your <span style={{ color: '#0096C8' }}>Community</span></h2>
                        <button style={{ backgroundColor: '#8064A2', color: "#ffffff" }} className="btn w-auto px-4 " >Get started</button>
                        <div>
                            <img src="banner2.png" alt="" width={'1100px'} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default HomePage