import { Link } from "react-router"

function NavBar () {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand fw-bold" href="/"><img src="/images/FASCO.png" alt="man" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Deals</a> 
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">New Arrivals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Packages</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Signin">Sign in</Link>
        </li>
        <Link className="btn btn-dark ms-2" to="/SignUp">Sign up</Link>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar;