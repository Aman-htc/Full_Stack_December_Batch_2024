// import React from 'react'

const imgURL = "https://thumbs.dreamstime.com/b/doctors-hospital-corridor-nurse-pushing-gurney-stretcher-bed-male-senior-female-patient-32154012.jpg";

function About() {
  return (
    <div>
      <section className="about py-5 mt-5">
        <div className="container">
          <div className="row align-items-center g-5">
            
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={imgURL}
                className="img-fluid rounded shadow p-3 rounded-5"
                alt="Hospital"
              />
            </div>

            <div className="col-lg-6">
              <h2 className="fw-bold text-primary mb-3">About CityCare Hospital</h2>
              <p className="text-muted">
                CityCare Hospital is a multi-specialty healthcare center providing
                world-class treatments and compassionate care. Our team of expert
                doctors and modern facilities ensure patients get the best medical
                experience.
              </p>

              <ul className="list-unstyled mt-3">
                <li><i className="fa-solid fa-check text-primary me-2"></i> 24x7 Emergency Care</li>
                <li><i className="fa-solid fa-check text-primary me-2"></i> Advanced Diagnostic Labs</li>
                <li><i className="fa-solid fa-check text-primary me-2"></i> Experienced Medical Professionals</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <footer className="text-center py-4 mt-5 bg-primary text-white">
        <p className="mb-0">© 2025 Sarvagnya Hospital | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default About;
