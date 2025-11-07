import React from "react";

function Deals () {
    return (
         <div className='container my-5'>
            <div className='row align-items-center'>
              <div className='col-lg-4 mb-4'>
                <h3 className='fw-bold'>Deals Of The Month</h3>
                <p className='text-muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Deleniti fugiat ducimus temporaconsequatur totam facilis
                </p>
                <button className='btn btn-dark mb-3 px-4'>Buy Now</button>
                <h6 className='fw-bold mt-3'>Hurry, Before It's Too Late!</h6>
                <div className='d-flex gap-3 mt-3'>
                  <div className='text-center border rounded p-2'>
                    <h5>02</h5>
                    <small>Days</small>
                  </div>
                  <div className='text-center border rounded p-2'>
                    <h5>06</h5>
                    <small>Hr</small>
                  </div>
                  <div className='text-center border rounded p-2'>
                    <h5>05</h5>
                    <small>Mins</small>
                  </div>
                  <div className='text-center border rounded p-2'>
                    <h5>30</h5>
                    <small>Sec</small>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div id='dealCarousel' className='carousel slide' data-bs-ride='carousel'>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <div className='d-flex justify-content-center'>
                        <div className='deal'>
                          <img src="/images/Deal1.png" alt='product 1' className='d-block mx-2' />
                        </div>
                        <div className='deal'>
                          <img src="/images/Deal2.png" alt='product 2' className='d-block mx-2' />
                        </div>
                        <div className='deal'>
                          <img src="/images/Deal3.png" alt='product 3' className='d-block mx-2' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>        
        </div>
    )
}
export default Deals;