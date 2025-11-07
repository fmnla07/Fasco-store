import React from "react";
import PeakyBlinders from "../components/PeakyBlinders";
import InstagramSection from "../components/InstagramSection";
import SubsribeSection from "../components/SubscribeSection";
import FootSection from "../components/FootSection";
import Clientnavbar from "../components/Clientnavbar";

const products = [
    {
        id: 1,
        name: "Rounded Red Hat",
        price: "$8.00",
        img: "/images/Shop1.png",
        colors: ["#f00", "#000"],
    },
    {
        id: 2,
        name: "Linen-blend Shirt",
        price: "$17.00",
        img: "/images/Shop2.png",
        colors: ["#f8cfcf", "#d1cfcf"],
    },
    {
        id: 3,
        name: "Long-sleeve Coat",
        price: "$106.00",
        img: "/images/Shop3.png",
        colors: ["#d4e8d4", "#000"],
    },
    {
        id: 4,
        name: "Boxy Denim Hat",
        price: "$25.00",
        img: "/images/Shop4.png",
        colors: ["#1b2a56", "#142c4c"],
    },
    {
        id: 5,
        name: "Linen Plain Top",
        price: "$25.00",
        img: "/images/Shop5.png",
        colors: ["#c5e6c5", "#d1cfcf"],
    },
    {
        id: 6,
        name: "Oversized T-shirt",
        price: "$11.00",
        img: "/images/Shop6.png",
        colors: ["#f8cfcf", "#fff"],
    },
    {
        id: 7,
        name: "Polarized Sunglasses",
        price: "$18.00",
        oldPrice: "$21.00",
        img: "/images/Shop7.png",
        colors: ["#b3a183", "#7e6a54"],
    },
    {
        id: 8,
        name: "Rockstar Jacket",
        price: "$22.00",
        img: "/images/Shop8.png",
        colors: ["#000", "#d1cfcf"],
    },
    {
        id: 9,
        name: "Dotted Black Dress",
        price: "$20.00",
        img: "/images/Shop9.png",
        colors: ["#000", "#8caacb"],
    },
];

const ShopPage = () => {
    return (
        <div>
            <header>
                <Clientnavbar />
            </header>
            <div className="container container-fluid my-4">
                <h2 className="text-center fw-bold mb-4">Fashion</h2>

                <div className="row">
                    {/* FILTER SIDEBAR */}
                    <div className="col-md-3 col-lg-3 mb-4">
                        <div className="p-3 bg-white">
                            <h5 className="fw-bold mb-3">Filters</h5>

                            <div className="mb-4">
                                <h6>Size</h6>
                                <div className="d-flex gap-2">
                                    {["S", "M", "L", "XL"].map((size) => (
                                        <button key={size} className="btn btn-outline-secondary btn-sm">
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h6>Colors</h6>
                                <div className="d-flex flex-wrap gap-2">
                                    {[
                                        "#ff4b4b",
                                        "#ff8a00",
                                        "#ffd400",
                                        "#40c057",
                                        "#228be6",
                                        "#7048e8",
                                        "#f06595",
                                        "#868e96",
                                    ].map((color, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                                backgroundColor: color,
                                                borderRadius: "50%",
                                                display: "inline-block",
                                            }}
                                        ></span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h6>Prices</h6>
                                <ul className="list-unstyled">
                                    {["$0–$50", "$50–$100", "$100–$150", "$150–$200", "$300–$400"].map(
                                        (range, i) => (
                                            <li key={i} className="text-secondary small">{range}</li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div>
                                <h6>Brands</h6>
                                <ul className="list-unstyled small text-muted">
                                    <li>Minimog Retrolie Brook</li>
                                    <li>Learts Vagabond Abby</li>
                                </ul>
                            </div>
                            <div>
                                <h6>Collections</h6>
                                <ul className="list-unstyled small text-muted">
                                    <li>All products</li>
                                    <li>Best sellers</li>
                                    <li>New arrivals</li>
                                    <li>Accessories</li>
                                </ul>
                            </div>
                            <div>
                                <h6>Tags</h6>
                                <ul className="list-unstyled small text-muted">
                                    <li>Fashion Hats Sandal Belt Bags</li>
                                    <li>Snacker Denim Minimog Vagabond</li>
                                    <li>Sunglasses Beachwear</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* PRODUCT GRID */}
                    <div className="col-md-9 col-lg-8">
                        <div className="row g-4">
                            {products.map((p) => (
                                <div key={p.id} className="col-md-4 mb-4">
                                    <div className="card border-0 shadow-sm rounded-3 h-100">
                                        <div className="position-relative">
                                            <img
                                                src={p.img}
                                                alt={p.name}
                                                className="card-img-top rounded-top-3"
                                            />
                                            {p.soldOut && (
                                                <span className="sold-out">SOLD OUT</span>
                                            )}
                                        </div>
                                        <div className="card-body">
                                            <h6 className="card-title mb-2">{p.name}</h6>
                                            <p className="card-text fw-bold mb-1">
                                                {p.price}
                                                {p.oldPrice && (
                                                    <small className="text-decoration-line-through text-muted ms-2">
                                                        {p.oldPrice}
                                                    </small>
                                                )}
                                            </p>
                                            <div className="d-flex gap-2">
                                                {p.colors.map((c, i) => (
                                                    <span
                                                        key={i}
                                                        style={{
                                                            width: "15px",
                                                            height: "15px",
                                                            backgroundColor: c,
                                                            borderRadius: "50%",
                                                            border: "1px solid #ddd",
                                                            display: "inline-block",
                                                        }}
                                                    ></span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* PAGINATION */}
                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <ul className="pagination mb-0">
                                <li className="page-item active">
                                    <button className="page-link border-0">1</button>
                                </li>
                                <li className="page-item">
                                    <button className="page-link border-0">2</button>
                                </li>
                                <li className="page-item">
                                    <button className="page-link border-0">3</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <PeakyBlinders />
            <InstagramSection />
            <SubsribeSection />
            <footer>
                <FootSection />
            </footer>
        </div >
    );
};

export default ShopPage;