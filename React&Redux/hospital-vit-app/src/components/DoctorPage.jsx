import React from 'react'

function DoctorPage() {
    return (
        <div>
            <section className="doctors py-5 mt-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-4 text-primary">Meet Our Expert Doctors</h2>
                    <p className="text-muted mb-5">Highly qualified specialists dedicated to your health and care.</p>

                    <div className="row g-4">

                    
                        <div className="col-md-4">
                            <div className="card doctor-card shadow-sm border-0">
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT800viVHvzwUbX1aCzZWLnftbEpGGMKlmx9w&s" 
                                    className="card-img-top" 
                                    alt="Doctor 1" 
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Dr. Sonam Singh</h5>
                                    <p className="text-muted">M.B.B.S, OBG (LHMC, Delhi)</p>
                                    <p><i className="fa-solid fa-phone"></i> +91 98765 43210</p>
                                    <div className="social-icons">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 2 */}
                        <div className="col-md-4">
                            <div className="card doctor-card shadow-sm border-0">
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZp5LscvHat8gThL6j6_a_TiQdD9t6Sa5P_Q&s" 
                                    className="card-img-top" 
                                    alt="Doctor 2" 
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Dr. Kunal Kumar Singh</h5>
                                    <p className="text-muted">MD (Cardiology, SGPGI, Lucknow)</p>
                                    <p><i className="fa-solid fa-phone"></i> +91 8102648831</p>
                                    <div className="social-icons">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 3 */}
                        <div className="col-md-4">
                            <div className="card doctor-card shadow-sm border-0">
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_EZpinLhocwrg1_BJFpsVU9IsNToqdhwK9w&s" 
                                    className="card-img-top" 
                                    alt="Doctor 3" 
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Dr. Harswardhan Rai</h5>
                                    <p className="text-muted">M.B.B.S, M.S (Surgeon)</p>
                                    <p><i className="fa-solid fa-phone"></i> +91 91234 56789</p>
                                    <div className="social-icons">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 4 */}
                        <div className="col-md-4">
                            <div className="card doctor-card shadow-sm border-0">
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0kWKPQoHbX88gUNe1A4wVaNckRAE22nBWA&s" 
                                    className="card-img-top" 
                                    alt="Doctor 4" 
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Dr. Thakur Prashant Singh</h5>
                                    <p className="text-muted">M.B.B.S, M.D (Gastroenterology)</p>
                                    <p><i className="fa-solid fa-phone"></i> +91 91234 56789</p>
                                    <div className="social-icons">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 5 */}
                        <div className="col-md-4">
                            <div className="card doctor-card shadow-sm border-0">
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwUUp371bcKofNSlRCp2iE10I6liT1Vy-UQ&s" 
                                    className="card-img-top" 
                                    alt="Doctor 5" 
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Dr. Anup Kumar Dube</h5>
                                    <p className="text-muted">M.B.B.S, M.D (Skin, Cosmetology & Leprosy)</p>
                                    <p><i className="fa-solid fa-phone"></i> +91 91234 56789</p>
                                    <div className="social-icons">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 6 */}
                        <div className="col-md-4">
                            <div className="card doctor-card shadow-sm border-0">
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZhi93gDR2PPrVJz79SJUIPXJmOh8x3PQqw&s" 
                                    className="card-img-top" 
                                    alt="Doctor 6" 
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Dr. Vikash Kumar Singh</h5>
                                    <p className="text-muted">M.B.B.S, M.S (MCh Urology, KGMC LKO)</p>
                                    <p><i className="fa-solid fa-phone"></i> +91 91234 56789</p>
                                    <div className="social-icons">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-4 bg-primary text-white">
                <p className="mb-0">© 2025 Sarvagnya Hospital | All Rights Reserved</p>
            </footer>

        </div>
    );
}

export default DoctorPage;
