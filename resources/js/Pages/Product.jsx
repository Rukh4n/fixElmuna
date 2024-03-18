import React, { useState } from "react";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/footer";

const Product = ({ product }) => {
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleBuyNow = () => {
        setShowModal(true);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const totalPrice = product.price * quantity;

    const sendMessage = () => {
        const url = `https://wa.me/6285325636373?text=Nama%20Produk%3A%20${product.name}%0AQuantity%3A%20${quantity}%0ATotal%20Harga%3A%20${totalPrice}%0AApakah%20Masih%20ada?`;
        window.open(url, '_blank');
    }

    return (
        <>
            <NavBar />
            <div className="row">
                <div className="col-auto m-3" style={{ width : "355px" }}>
                    <div className="card">
                        <img src={product.image} alt="" className="card-img-top"/>
                        <div className="card-body">
                            <div className="d-grid gap-2">
                                <button className="btn btn-success my-3" onClick={handleBuyNow}>Beli Sekarang</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-auto m-3" style={{ width: '600px' }}>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">{product.name}</h3>
                            <p className="card-text">Rp {product.price}</p>
                            <p className="card-text">Jumlah : {product.stok}</p>
                            <p className="card-text">Deskripsi Barang</p>
                            <p className="card-text p-3">{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{product.name}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Rp {product.price}</p>
                                <div className="form-group">
                                    <label htmlFor="quantity">Jumlah:</label>
                                    <input type="number" className="form-control" id="quantity" value={quantity} onChange={handleQuantityChange} />
                                </div>
                                {/* <p>Total Harga: Rp {totalPrice}</p> */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Tutup</button>
                                <button type="button" className="btn btn-primary" onClick={sendMessage}>Beli</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};

export default Product;
