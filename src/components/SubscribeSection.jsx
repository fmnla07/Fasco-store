import React from "react";

function SubsribeSection () {
    return (
        <div className='container-fluid subscribe-section text-center py-5'>
            <div className='row align-items-center'>
              <div className='col-md-3 d-none d-md-block'>
                <img src="images/sub1.png" alt='left-sub' className='img-fluid' />
              </div>
              <div className='col-md-6'>
                <h2 className='fw-bold mb-3'>Subscribe To Our Newsletter</h2>
                <p className='text-muted mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
                  duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
                  sollicitudin.
                </p>
                <div className='d-flex justify-content-center'>
                  <input type='email' className='form-control w-50 me-2' placeholder='michael@ymail.com' />
                </div>
                <button className='btn btn-dark my-2'>Subscribe Now</button>
              </div>
              <div className='col-md-3 d-none d-md-block'>
                <img src="images/sub2.png" alt='right-sub' className='img-fluid' />
              </div>
            </div>
        </div>
    )
}
export default SubsribeSection