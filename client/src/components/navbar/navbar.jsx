import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import "./navbar.scss";


const Navbar = () => {

    const [open, setOpen] = useState(false);
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="items">
                        <div className="item">
                            <img src="/img/en.png" alt="" srcset="" />
                            <KeyboardArrowDownIcon />
                        </div>
                        <div className="item">
                            <span>USD</span>
                            <KeyboardArrowDownIcon />
                        </div>
                        <div className="item">
                            <Link className="link" to="/products/1">Women</Link>
                        </div>
                        <div className="item">
                            <Link className="link" to="/products/2">Men</Link>
                        </div>
                        <div className="item">
                            <Link className="link" to="/products/3">Children</Link>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">LAMASTORE</Link>
                </div>
                <div className="rigth">
                    <div className="item">
                        <Link className="link" to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteIcon />
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    );
};

export default Navbar;