import React from 'react'

function ServicsPage() {
  return (
    <div>
      <section className="services-page py-5 mt-5 text-center">
        <div className="container ">
          <h2 className="fw-bold text-primary mb-4">Our Medical Services</h2>
          <div className="row g-4 ">
            <div className="col-md-3  p-5">
              <div className="card service-item p-4  shadow-sm border-0">
                <i className="fa-solid fa-user-nurse fa-2x text-primary mb-3"></i>
                <h5 className=''>Emergency Care</h5>
                <p className="text-muted text-white">24/7 emergency support for critical patients.</p>
              </div>
            </div>
            <div className="col-md-3 p-5">
              <div className="card service-item p-4 shadow-sm border-0">
                <i className="fa-solid fa-x-ray fa-2x text-primary mb-3"></i>
                <h5>Radiology</h5>
                <p className="text-muted">Digital X-rays, MRI, CT scans with precision.</p>
              </div>
            </div>
            <div className="col-md-3 p-5">
              <div className="card service-item p-4 shadow-sm border-0">
                <i  className="fa-solid fa-x-ray fa-2x text-primary mb-3"></i>
                <h5>Laboratory</h5>
                <p className="text-muted">Advanced pathology and blood testing labs.</p>
              </div>
            </div>
            <div className="col-md-3 p-5">
              <div className="card service-item p-4 shadow-sm border-0">
                <i className="fa-solid fa-tooth fa-2x text-primary mb-3"></i>
                <h5>Dental Care</h5>
                <p className="text-muted">Comprehensive dental and oral hygiene services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-4 bg-primary text-white">
        <p class="mb-0">© 2025  Sarvagnya Hospital | All Rights Reserved</p>
      </footer>



    </div>
  )
}

export default ServicsPage
