import React from "react";
import Slider from "../../components/Slider/slider";
import FeaturedProducts from "../../components/Featuredproducts/Featuredproducts";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import "./home.scss";


export const Home = () => {
    return(
        <div className="home">
            <Slider/>
            <FeaturedProducts type="featured"/>
            <Categories/>
            <FeaturedProducts type="trending"/>
            <Contact/>
        </div>
    )
}

export default Home;