import React from "react";
import "./featuredproducts.scss";
import Card from "../Card/Card";



const FeaturedProducts = ({type}) => {

    const data = [ 
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Black T-shirt",
            oldPrice: 15,
            price: 10,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Jacket",
            isNew: true,
            oldPrice: 80,
            price: 70,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Cap",
            oldPrice: 40,
            price: 35,
        },
    ];


    return (
        <div className="featuredProducts">

            <div className="top">
                <h2>{type} products</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam blanditiis, nihil quisquam ipsum expedita ut esse asperiores dolores dolorum
                    possimus nulla earum natus culpa praesentium. Neque corrupti ex, vel earum mollitia
                    consectetur nesciunt. Id quae quo nisi architecto, voluptatum hic fugiat rem
                    voluptatem expedita nulla repudiandae sit amet cum odit commodi accusamus odio
                    eveniet deleniti quod? Quas veniam nostrum nulla delectus commodi, deleniti non
                    voluptate rerum officiis! Iusto, dolores doloribus!
                </p>
            </div>

            <div className="bottom">
                {data.map(item =>(
                    <Card item={item} key={item.id} />
                ))}
            </div>




        </div>
    )
};

export default FeaturedProducts

