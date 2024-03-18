export default function NewProduct() {
    return (
        <>
            <section style={{ height: "985px" }}>
                <div className="container my-5">
                    <div className="my-5 d-grid justify-content-center card">
                        <p>Segera <span>Beli</span> Produk Terbaru</p>
                        <h2>Laptop Terpopuler</h2>
                    </div>


                    {/* Start Slide show */}
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">

                                {/* <img src="..." className="d-block w-100" alt="..."/> */}
                                <div className="new-cars-item">
                                    <div className="single-new-cars-item">
                                        <div className="row">
                                            <div className="col-md-7 col-sm-12">
                                                <div className="new-cars-img">
                                                    <img src="assets/images/new-cars-model/ncm1.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-md-5 col-sm-12">
                                                <div className="new-cars-txt">
                                                    <h2><a href="#">Laptop <span> HP SPECTRE X360</span></a></h2>
                                                    <p>
                                                        Laptop HP Spectre x360 hadir dengan prosesor Intel Core yang akan memberikan
                                                        Anda kecepatan untuk memproses data hingga 2.2 Ghz dan bisa di-upgrade
                                                        menjadi turbo hingga 2.5GHz.
                                                    </p>
                                                    <p className="new-cars-para2">
                                                        Harga 19 Jutaan.
                                                    </p>
                                                    <a href="products" className="btn btn-primary" onClick={() => window.location.href = '#'}>
                                                        view details
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/* <img src="..." className="d-block w-100" alt="..."/> */}
                                <div className="new-cars-item">
                                    <div className="single-new-cars-item">
                                        <div className="row">
                                            <div className="col-md-7 col-sm-12">
                                                <div className="new-cars-img">
                                                    <img src="assets/images/new-cars-model/ncm2.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-md-5 col-sm-12">
                                                <div className="new-cars-txt">
                                                    <h2><a href="#">LAPTOP ACER ASPIRE 14 Core i3</a></h2>
                                                    <p>
                                                        Acer Aspire dengan seri E14 menjadi salah satu seri yang menyajikan
                                                        spesifikasi yang cukup komplit. Di sektor dapur pacu, Acer menggunakan
                                                        processor AMD Quad Core A6 6310 APU yang memiliki kecepatan sekitar 2,2 GHz
                                                        yang akan memberikan performa lebih mantap dan juga lebih stabil.
                                                    </p>
                                                    <p className="new-cars-para2">
                                                        Harga 6 Jutaan
                                                    </p>
                                                    <button className="btn btn-primary" onClick={() => window.location.href = 'products'}>
                                                        view details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/* <img src="..." className="d-block w-100" alt="..." /> */}
                                <div className="new-cars-item">
                                    <div className="single-new-cars-item">
                                        <div className="row">
                                            <div className="col-md-7 col-sm-12">
                                                <div className="new-cars-img">
                                                    <img src="assets/images/new-cars-model/ncm3.png" alt="img" style={{ width: "650px" }} />
                                                </div>
                                            </div>
                                            <div className="col-md-5 col-sm-12">
                                                <div className="new-cars-txt">
                                                    <h2><a href="#">Lenovo Thinkpad X280</a></h2>
                                                    <p>
                                                        Karena banyak yang request Laptop Harga Ekonomis tapi Spek Mantap untuk
                                                        Kerja, Belajar Online, Nonton Film dengan Body Slim yang Elegan? Jelas seri
                                                        Lenovo Thinkpad jawabannya dong gaes.
                                                    </p>
                                                    <p className="new-cars-para2">
                                                        2 Jutaan
                                                    </p>
                                                    <button className="btn btn-primary" onClick={() => window.location.href = 'products'}>
                                                        view details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* End Slide show */}
                </div>
            </section>
        </>
    )
}