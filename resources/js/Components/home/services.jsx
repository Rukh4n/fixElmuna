import React from "react";

export default function Services() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center">
                        {/* Gambar */}
                        <div className="d-grid justify-content-center my-5">
                            <svg style={{ width: "150px", height: "100px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                            </svg>
                        </div>
                        {/* Selsai gambar */}
                        <h2 className="card-header">
                            Layanan Antar Jemput
                        </h2>
                        <div className="card-body">
                            <p className="card-text">"Layanan antar-jemput kami diselenggarakan dengan tingkat profesionalisme yang tinggi"</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center">
                        {/* Gambar */}
                        <div className="d-grid justify-content-center my-5">
                            <svg style={{ height: "100px", width: "100px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hdd-rack" viewBox="0 0 16 16">
                                <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                                <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-3-4v2H4V7z" />
                            </svg>
                        </div>
                        {/* Selesai Gambar */}
                        <h2 className="card-header">
                            Pilihan Lengkap
                        </h2>
                        <div className="card-body">
                            <p className="card-text">"Kami memiliki pilihan produk yang beragam untuk memenuhi selera dan kebutuhan yang berbeda."</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="d-grid justify-content-center my-5">
                            <svg style={{ height: "100px", width: "100px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                            </svg>
                        </div>
                        <h2 className="card-header">
                            Menerima Sewa Laptop
                        </h2>
                        <div className="card-body">
                            <p className="card-text">"Tingkatkan produktivitas Anda dengan sewa laptop dari kami. Dengan beragam pilihan model dan spesifikasi, kami hadir untuk memenuhi setiap kebutuhan Anda."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
