import React from "react";

function FootSection () {
    return (
        <section>
          <div className='d-flex flex-wrap justify-content-around align-items-center gap-5'>
            <a className='img-fluid' href='/'><img src="images/FASCO.png" alt='logo' /></a>
            <div className='footer-links ms-5'>
              <a href='#'>Support Center</a>
              <a href='#'>Invoicing</a>
              <a href='#'>Contract</a>
              <a href='#'>Careers</a>
              <a href='#'>Blogs</a>
              <a href='#'>FAQ,s</a>
            </div>
          </div>
          <p className="mt-5">Copyright ©️ 2022 Xpro. All rights reserved.</p>
        </section>
    )
}
export default FootSection;