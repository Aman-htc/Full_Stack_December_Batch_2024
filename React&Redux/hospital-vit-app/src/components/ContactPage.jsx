import React from 'react'

function ContactPage() {
  return (
    <div>
      

      <section className="contact py-5 mt-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold text-primary mb-4">Book Your Appointment</h2>

              <form className="p-4 shadow rounded bg-white" id="Appointment">
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input type="text" className="form-control" id="name" name="fullName" placeholder="Enter your name" />
                  <span className="nameerror error"></span>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />
                  <span className="Eerror error"></span>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="number">Phone Number</label>
                  <input type="text" className="form-control" id="number" name="phoneNumber" placeholder="Enter your phone" />
                  <span className="Nerror error"></span>
                </div>

                <div className="mb-3">
                  <label className="form-label">Select Department</label>
                  <select className="form-select" name="department">
                    <option>Cardiology</option>
                    <option>Cosmetology & Leprosy</option>
                    <option>Urology</option>
                    <option>Dental</option>
                    <option>General Surgeon</option>
                    <option>Gastroenterology</option>
                    <option>OBG</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="date">Preferred Date</label>
                  <input type="date" className="form-control" id="date" name="date" />
                </div>

                <button type="submit" className="btn btn-primary w-100">Submit</button>
              </form>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="https://images.stockcake.com/public/8/a/a/8aac237b-5962-4ddc-87d6-1e24ad77a8ba_large/hospital-patient-care-stockcake.jpg"
                className="img-fluid p-lg-5 mt-4"
                alt="Appointment"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-4 bg-primary text-white">
        <p className="mb-0">© 2025 Sarvagnya Hospital | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default ContactPage;
