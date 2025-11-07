import React from "react";

function PeakyBlinders () {
    return (
        <div className='container py-5'>
            <div className='row align-items-center'>
              <div className='col-md-6 text-center'>
                <div className='position-relative point'>
                  <img src="/images/points.png" alt='sitting' className='img-fluid' />
                </div>
              </div>
              <div className='col-md-6 peaky'>
                <h6 className='text-muted'>Women Collection</h6>
                <h2>Peaky Blinders</h2>
                <p className='text-decoration-underline'>DESCRIPTION</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur<br />
                  adipisicing elit. Cupiditate, quidem delectus.<br />
                  consectetur adipisicing elit. Architecto <br />distinctio 
                  aspernatur rem earum quaerat similique<br /> modi commodi 
                  pariatur eius dolore
                </p>
                <div className='my-3'>
                  <label className='me-2'>Size:</label>
                  <button className='btn btn-dark px-3 py-0'>M</button>
                  <h4 className='my-2'>$100</h4>
                  <button className='btn btn-dark my-2 mb-3 px-4'>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="row text-center mt-5">
              <div className="col-md-3">
                <i className="bi bi-award fs-3"></i>
                <p>High Quality<br />Crafted from top materials</p>
              </div>
              <div className="col-md-3">
                <i className="bi bi-shield-check fs-3"></i>
                <p>Warranty Protection<br />Over 2 years</p>
              </div>
              <div className="col-md-3">
                <i className="bi bi-truck fs-3"></i>
                <p>Free Shipping<br />Orders over $50</p>
              </div>
              <div className="col-md-3">
                <i className="bi bi-headset fs-3"></i>
                <p>24/7 Support<br />Dedicated support</p>
              </div>
            </div>
        </div>
    )
}
export default PeakyBlinders;