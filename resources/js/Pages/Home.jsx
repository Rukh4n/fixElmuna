import React from "react";

// import Componenst
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/footer";
import Headers from "@/Components/home/headers";
import NewProduct from "@/Components/home/newProduct";
import Services from "@/Components/home/services";
import Teams from "@/Components/home/teeams";
import Colaboration from "@/Components/home/colaboration";
import Categories from "@/Components/Categories";
import Products from "./Products";

const Home = () => {
    return (
        <>
            <NavBar />
            <Headers></Headers>
            <Categories></Categories>     
            <NewProduct></NewProduct>
            <Services></Services>
            <Teams></Teams>
            <Colaboration></Colaboration>
            <Footer />
        </>
    )
}
export default Home