import React from "react"
import { Link } from "react-router";

function UltimateSale () {
    return(
        <div className='container my-5'>
            <div className='row align-items-center justify-content-center text-center'>
              <div className='col-lg-4 mb-4 curtain'>
                <img src="/images/image1.png" alt='man sitting' className='img-fluid  bg-secondary-subtle' />
              </div>
              <div className='col-lg-4 mb-4'>
                <img src="/images/image3.png" alt='ladies standing' className='img-fluid' />
                <h2 className='text-uppercase fw-normal display-1'>ULTIMATE</h2>
                <h3 className='fw-bold display-1 text-muted'>SALE</h3>
                <p>NEW COLLECTION</p>
                <Link className='btn btn-dark' to="/ShopPage">SHOP NOW</Link>
                <img src="/images/image4.png" alt='ladies laughing' className='img-fluid mt-5' />
              </div>
              <div className='col-lg-4 mb-4 curtain'>
                <img src="/images/image2.png" alt='man sitting' className='img-fluid bg-secondary-subtle' />
              </div>
            </div>
            <div className='container d-flex align-items-center justify-content-center text-center'>
            <div className='row logo'>
              <img src="/images/logo1.png" alt='' className='img-fluid' />
              <img src="/images/logo2.png" alt='' className='img-fluid' />
              <img src="/images/logo3.png" alt='' className='img-fluid' />
              <img src="/images/logo4.png" alt='' className='img-fluid' />
              <img src="/images/logo5.png" alt='' className='img-fluid' />
            </div>
          </div>
        </div> 
    )
}
export default UltimateSale;