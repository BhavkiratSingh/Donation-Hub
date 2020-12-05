import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase.js";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const username = !user ? "Guest" : "back," + user.email.split("@")[0];

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
          dispatch({
            type: "EMPTY_CART",
          });
  };
  return (
    <div className="header">
      <Link className="link" to="/">
        <img
          className="header__logo"
          src="https://www.freelogodesign.org/file/app/client/thumb/b8451d38-94a7-4440-b694-35bc5e6f1b45_200x200.png?1605436258746"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link className="link" to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Welcome {username}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link className="link" to="/request">
          <div className="header__option">
            <span className="header__optionLineOne">Request</span>
            <span className="header__optionLineTwo">Medicine</span>
          </div>
        </Link>
        <Link className="link" to="/donate">
          <div className="header__option">
            <span className="header__optionLineOne">Donate</span>
            <span className="header__optionLineTwo">Medicine</span>
          </div>
        </Link>
        <Link className="link" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
