import React, { useState } from "react";
import { Link } from "react-router";
import SubsribeSection from "../components/SubscribeSection";
import FootSection from "../components/FootSection";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [wrapProduct, setWrapProduct] = useState(false);

  const handleQuantity = (type) => {
    if (type === "add") setQuantity(quantity + 1);
    else if (type === "subtract" && quantity > 1) setQuantity(quantity - 1);
  };

  const itemPrice = 14.9;
  const subtotal = itemPrice * quantity + (wrapProduct ? 10 : 0);

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-white py-3">
            <div className="container">
            {/* Brand */}
            <a className="navbar-brand fw-bold" href="/"><img src="/images/FASCO.png" alt="man" /></a>

            {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center navigation links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item mx-2">
              <a className="nav-link small text-dark" href="/">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link small text-dark" href="/ShopPage">
                Shop
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link small text-dark" href="/ProductPage">
                Products
              </a>
            </li>
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle small text-secondary"
                href="#"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Right icons */}
        <div className="d-flex align-items-center gap-3">
          <a href="#" className="text-secondary">
            <i className="bi bi-search"></i>
          </a>
          <a href="#" className="text-secondary">
            <i className="bi bi-person"></i>
          </a>
          <a href="#" className="text-secondary">
            <i className="bi bi-star"></i>
          </a>
          <a href="#" className="text-secondary">
            <i className="bi bi-bag"></i>
          </a>
        </div>
      </div>
    </nav>
    <div className="container my-2 py-5">
      <h2 className="fw-bold  text-center mb-2">Shopping Cart</h2>
      <p className="text-center text-secondary small">
        Home &nbsp; › &nbsp; Your Shopping Cart
      </p>

      {/* Cart Table Header */}
      <div className="row fw-semibold border-bottom py-3">
        <div className="col-md-6">Product</div>
        <div className="col-md-2 text-center">Price</div>
        <div className="col-md-2 text-center">Quantity</div>
        <div className="col-md-2 text-end">Total</div>
      </div>

      {/* Cart Item Row */}
      <div className="row align-items-center border-bottom py-4">
        {/* Product Info */}
        <div className="col-md-6 d-flex align-items-center">
          <img
            src="/images/Shop6.png"
            alt="Denim Jacket"
            className="img-fluid me-3 rounded"
            style={{ width: "100px", height: "120px", objectFit: "cover" }}
          />
          <div>
            <h6 className="fw-semibold mb-1">Mini Dress With Ruffled Straps</h6>
            <p className="mb-1 text-muted small">Color : Red</p>
            <button className="btn btn-link text-decoration-none text-secondary border-bottom p-0 small">
              Remove
            </button>
          </div>
        </div>

        {/* Price */}
        <div className="col-md-2 text-center fw-semibold">${itemPrice.toFixed(2)}</div>

        {/* Quantity Controls */}
        <div className="col-md-2 text-center">
          <div className="d-inline-flex align-items-center border rounded">
            <button
              className="btn btn-sm px-2"
              onClick={() => handleQuantity("subtract")}
            >
              −
            </button>
            <span className="px-3">{quantity}</span>
            <button
              className="btn btn-sm px-2"
              onClick={() => handleQuantity("add")}
            >
              +
            </button>
          </div>
        </div>

        {/* Total */}
        <div className="col-md-2 text-end fw-semibold">
          ${(itemPrice * quantity).toFixed(2)}
        </div>
      </div>

      {/* Wrap Product */}
      <div className="form-check mt-3 mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="wrapProduct"
          checked={wrapProduct}
          onChange={(e) => setWrapProduct(e.target.checked)}
        />
        <label className="form-check-label text-muted" htmlFor="wrapProduct">
          For $10.00 Please Wrap The Product
        </label>
      </div>

      {/* Summary */}
      <div className="d-flex justify-content-end">
        <div style={{ maxWidth: "350px", width: "100%" }}>
          <hr />
          <div className="d-flex justify-content-between fw-bold mb-3">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Link to="/Checkout" className="btn btn-dark w-100 py-2 mb-2 shadow-sm">
            Checkout
          </Link>
          <Link
            to="/productPage"
            className="d-block text-center text-decoration-none text-dark fw-semibold"
          >
            View Cart
          </Link>
        </div>
      </div>
      <SubsribeSection />
      <footer>
        <FootSection />
      </footer>
    </div>
    </div>
  );
};

export default Cart;