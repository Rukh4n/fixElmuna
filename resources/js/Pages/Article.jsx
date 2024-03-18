import React from "react";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/footer";

const Article = ({ article }) => {
    // Membersihkan teks dari spasi tambahan
    const cleanDescription = article.description.replace(/&nbsp;/g, ' ');

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="d-grid justify-content-center">
                <h3 className="m-3">{article.title}</h3>
                </div>
                <div className="row d-flex alignt-item-center justify-content-center">
                    <div className="card" style={{ width: "100%" }}>
                        <div className="d-grid justify-content-center">
                            <img src={article.image} className="m-3" alt="" style={{ width: "300px" }} />
                        </div>
                    </div>
                </div>
                {/* Menggunakan dangerouslySetInnerHTML untuk menampilkan teks HTML */}
                <div className="m-3" dangerouslySetInnerHTML={{ __html: cleanDescription }}></div>
            </div>
            <Footer />
        </>
    );
}

export default Article;
