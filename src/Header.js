import React from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function Header() {

    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">

            {/* logo part */}
            <Link to="/">
                <img className="header__logo"
                    src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"></img>
            </Link>

            {/* search box  */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            {/* 3 links after search box*/}
            <div className="header__nav">

                {/* 1st link */}

                <Link to={!user && '/login'} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign In'}</span>
                    </div>
                </Link>


                {/* 2nd link */}

                <Link to='/' className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}

                <Link to='/' className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to='/checkout' className="header__link">
                    <div className="header__optionBasket">
                        {/* shoping basket icon */}
                        <ShoppingBasketIcon />
                        {/* number of items in the basket */}
                        <span className="header__optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>

        </nav>
    );
}

export default Header;