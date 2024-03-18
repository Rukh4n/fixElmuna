import React from "react";

const Categories = ({ products }) => {
    console.log(products);
    return (
        <>
            <div className="d-grid justify-content-center align-item-center my-5">
                <h1>Produk Kami</h1>
                <a href="products" className="btn btn-primary rounded-4">Product</a>
            </div>

            <div className="row">
                {/* <div className="my-5 col-lg-6 col-md-6 col-sm-12">
                    <div className="d-flex flex-column align-items-center">
                        <a href="articles">
                            <svg style={{ width: "200px", height: "200px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookshelf" viewBox="0 0 16 16">
                                <path d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5M3 14h10v-3H3zm0-4h10V7H3zm0-4h10V3H3z" />
                            </svg>
                            <h3 className="my-5 text-center">Artikel Kami</h3>
                        </a>
                    </div>
                </div> */}

                {/* <div className="my-5 col-lg-6 col-md-6 col-sm-12">
                    <div className="d-flex flex-column align-items-center">
                        <a href="products">
                            <svg style={{ width:"200px", height:"200px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                            </svg>
                            <h3 className="my-5 text-center">Produk Kami</h3>
                        </a>
                    </div>
                </div> */}

            </div>
        </>
    );
};

export default Categories;

