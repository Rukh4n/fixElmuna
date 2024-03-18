import React from "react";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/footer";

const Articles = ({ articles }) => {
    return (
        <>
        <NavBar/>
        <div className="container">
            <div className="row d-grid justify-content-center align-items-center">
                {articles.map((article, index) => (
                    <div key={index} className="col-auto">
                        <a href={`/articles/${article.id}`} className="text-decoration-none">
                            <div className="card" style={{ width: "200px" }}>
                                <img src={article.image} className="p-3 card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">{article.title}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
    </>
    );
}

export default Articles;
