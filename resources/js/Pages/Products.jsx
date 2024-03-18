import React from "react";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/footer";
import Stars from "@/Components/Stars";

const Products = ({ products }) => {
    
    return (
        <>
            <NavBar />
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {products.map((product, index) => {
                        return (
                            <div className="col d-flex justify-content-center" key={index}>
                                <a href={`/products/${product.sku}`} className="btn">
                                    <div className="card">
                                        <img src={product.image} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">{product.name}</p>
                                            <Stars></Stars>
                                            <p className="card-text">Rp {product.price}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Products;
