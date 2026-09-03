// import React from 'react'


// imgURL=

function HomePage() {
    return (
        <div>
            <section className="hero d-flex align-items-center">
                <div className="container text-center text-lg-start">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="fw-bold">Your Health is Our Priority</h1>
                            <p className="lead text-muted">Professional care, trusted doctors, and modern facilities at your service.</p>
                            <a href="#" className="btn btn-primary me-2">Book Appointment</a>
                            <a href="#" className="btn btn-outline-primary">Learn More</a>
                        </div>
                        <div className="col-lg-6 text-center mt-5">
                            <img src="https://t4.ftcdn.net/jpg/02/24/17/37/360_F_224173795_7GUjeO0BwB5EVnk6MxDvCtSrX6q8xCVv.jpg" alt="Doctor" class="img-fluid hero-img rounded-5" className="w-100"/>
                        </div>
                    </div>
                </div>
            </section> 

            
            <section className="services py-5 bg-light text-center">
                <div className="container">
                    <h2 className="fw-bold mb-4">Our Services</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card service-card p-4 shadow-sm">
                                <i className="fa-solid fa-stethoscope fa-2x text-primary mb-3"></i>
                                <h5>General Checkup</h5>
                                <p className="text-muted">Routine health checks and diagnostics for your wellbeing.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card service-card p-4 shadow-sm">
                                <i className="fa-solid fa-heart-pulse fa-2x text-primary mb-3"></i>
                                <h5>Cardiology</h5>
                                <p className="text-muted">Comprehensive heart care and advanced treatments.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card service-card p-4 shadow-sm">
                                <i className="fa-solid fa-x-ray fa-2x text-primary mb-3"></i>
                                <h5>Gastroenterology</h5>
                                <p className="text-muted">Accurate lab testing and imaging facilities.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card service-card p-4 shadow-sm">
                                <i className="fa-solid fa-x-ray fa-2x text-primary mb-3"></i>
                                <h5>Cosmetology & skin</h5>
                                <p className="text-muted">Accurate lab testing and imaging facilities.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card service-card p-4 shadow-sm">
                                <i className="fa-solid fa-x-ray fa-2x text-primary mb-3"></i>
                                <h5>Urology </h5>
                                <p className="text-muted">Accurate lab testing and imaging facilities.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card service-card p-4 shadow-sm">
                                <i className="fa-solid fa-x-ray fa-2x text-primary mb-3"></i>
                                <h5>OBG </h5>
                                <p className="text-muted">Accurate lab testing and imaging facilities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- 🔹 Footer --> */}
            <footer className="text-center py-4 bg-primary text-white">
                <p className="mb-0">© 2025 Sarvagnya Hospital | All Rights Reserved</p>
            </footer>

        </div>
    )
}

export default HomePage
