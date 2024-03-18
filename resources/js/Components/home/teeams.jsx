import React from 'react';
import Stars from '../Stars';
export default function Teams() {
    return (
        <>

            <div className="container-fluid d-grid justify-content-center m-5">
                <h1>Penilaian Customer</h1>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                    <div className="col">
                        <div className="card text-center">
                            <div className="card-header">
                                <img src="assets/images/clients/c1.JPG" className="rounded-circle" alt="image of clients person" style={{ width: "100px", height: "100px" }} />
                            </div>
                            <Stars></Stars>
                            <div className="card-body">
                                <p className="card-text">salma Anisa Rinanti</p>
                            </div>
                            <div className="card-footer text-body-secondary">
                                Harganya Murah banget, rekomend buat mahasiswa mendang mending sih.
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card text-center">
                            <div className="card-header">
                                <img src="assets/images/clients/c2.jpeg" alt="image of clients person" className="rounded-circle" style={{ width: "100px", height: "100px" }} />
                            </div>
                            <Stars></Stars>
                            <div className="card-body">
                                <p className="card-text">Faul Isnaeni</p>
                            </div>
                            <div className="card-footer text-body-secondary">
                                Barang yang dijual lengkap dan berkualitas banget dech.
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card text-center">
                            <div className="card-header">
                                <img src="assets/images/clients/c3.jpeg" alt="image of clients person" className="rounded-circle" style={{ width: "100px", height: "100px" }} />
                            </div>
                            <Stars></Stars>
                            <div className="card-body">
                                <p className="card-text">Nur Hisyam Ali Nugroho</p>
                            </div>
                            <div className="card-footer text-body-secondary">
                                 Udah mudah cara belinya lengkap juga eh bisa cod juga dong.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
