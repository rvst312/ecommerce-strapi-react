import React from "react";
import Slider from "../../components/Slider/slider";
import "./home.scss";
import FeaturedProducts from "../../components/Featuredproducts/Featuredproducts";
import Categories from "../../components/Categories/Categories";


export const Home = () => {
    return(
        <div className="home">
            <Slider/>
            <FeaturedProducts type="featured"/>
            <Categories/>
            <FeaturedProducts type="trending"/>
        </div>
    )
}

export default Home