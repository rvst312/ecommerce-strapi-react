import React from "react";
import { useState } from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

export const Product = () => {

    const [selectImg, setSelectedImg] = useState(0);
    const [quantity, setQuanity] = useState(1);

    const images = [
        "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ];

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectImg]} alt="" />
                </div>

            </div>
            <div className="right">
                <h2>Title</h2>
                <span>$199</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis aliquid non quae obcaecati fugiat,
                    veniam enim tenetur voluptatem labore necessitatibus!</p>

                <div className="quantity">
                    <button onClick={() => setQuanity((prev) => prev === 1 ? 1 : prev - 1)}>
                        -
                    </button>
                    {quantity}
                    <button onClick={() => setQuanity((prev) => prev + 1)}>
                        +
                    </button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon/>
                    ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon/>
                        ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon/>
                        ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr/>
                    <span>ADDITIONAL INFORMATION</span>
                    <hr/>
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    );
};

export default Product;