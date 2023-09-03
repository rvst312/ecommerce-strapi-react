import React from "react";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h2>Categories</h2>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>

                <div className="item">
                    <h2>Links</h2>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>

                <div className="item">
                    <h2>About</h2>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt rerum nesciunt harum voluptatum esse neque officiis 
                        possimus quas soluta velit ex error, aliquid explicabo voluptates 
                        non! Itaque in dolor a debitis quos
                    </span>
                </div>
                <div className="item">
                <h2>Contact</h2>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt rerum nesciunt harum voluptatum esse neque officiis 
                        possimus quas soluta velit ex error, aliquid explicabo voluptates 
                        non! Itaque in dolor a debitis quos
                    </span>
                </div>
            </div>

            <div className="bottom">
                <div className="left">
                    <span className="logo">Lamastore</span>
                    <span className="copyright">
                        Copyright 2023. All Right Reserved
                    </span>

                </div>

                <div className="right">
                    <img src="/img/payment.png" alt="" />

                </div>
            </div>
        </div>
    )
}

export default Footer
