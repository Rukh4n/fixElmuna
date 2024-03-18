import React from "react";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/footer";

const Profile = () => {
    return (
        <>
            <NavBar />
            <div className="d-flex justify-content-center align-item-center">
                <div className="d-grid justify-content-center m-5">
                    <img src="assets/logo/elmuna logo.png" alt="" width={200} />
                </div>
            </div>
            <div className="container my-5">
                <p>
                Elmuna Computindo sendiri berdiri sejak tahun 2003, berawal dari hobby dengan dunia komputer akhirnya menjadi sebuah usaha yang bergerak dibidang jual beli komputer. Elmuna Computindo melayani jual beli laptop second ataupun baru dengan harga yang terjangkau, barang yang terjamin kualitasnya dan pelayanan yang ramah dan adanya jaminan garansi dari setiap produk yang dijual. Elmuna Computindo  juga melayani tukar tambah laptop second ataupun baru dengan harga yang saling menguntungkan.
                </p>
                <p>
                Elmuna Computindo juga  memberikan layanan antar jemput bagi pemesanan yang di daerah kebumen dan bagi yang di luar area kebumen ada layanan paket serta  layanan service antar jemput sehingga pelanggan tidak harus datang ke lokasi kami.
                </p>
                <h3>
                    Kami Menyediakan :
                </h3>
                <p>
                    <li>
                        Jual Beli laptop dengan Harga Terbaik!

                    </li>
                    <li>
                        Tukar Tambah Laptop

                    </li>
                    <li>
                            
                        Service Laptop dan Komputer

                    </li>
                    <li>

                        Menyediakan Sparepart lainnya seperti : Monitor, CPU, Keyboard, Flashdisk, Mouse, Batteray, dll

                    </li>
                </p>
                <h3>
                    Hubungi Kami :
                </h3>
                <p>
                     <li>
                        WA   : 0821-3748-3931 / 0853-2563-6373

                     </li>
                    <li>
                        IG     : @elmunacomputindo

                    </li>
                     <li>
                            
                        FB    : Elmuna Computindo

                    </li>
                    <li>

                        Email : computindoelmuna@gmail.com

                    </li>
                </p>
                <h3>
                    Alamat Kami :
                </h3>
                <p>
                     <li>
                     Angganayan, Bendogarap RT.02/RW.01,  Kec. Klirong, Kabupaten Kebumen, Jawa Tengah 54381

                     </li>
                </p>

            </div>
            <Footer />
        </>
    )
}
export default Profile;