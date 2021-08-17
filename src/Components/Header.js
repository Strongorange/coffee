import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  const watchMenu = () => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  useEffect(() => {
    watchMenu();
    return watchMenu();
  }, [showMenu]);

  return (
    <header className="header">
      <div className="fakediv"> </div>
      <div className="header__title">
        <h1>
          HOME<br></br>PRESSURE
        </h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <a href="#">COFFEE</a>
          </li>
          <li>
            <a href="#">COLD BREW</a>
          </li>
          <li>
            <a href="#">BAKERY</a>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <a href="#">LOGIN</a>
          </li>
        </ul>
      </nav>
      <span>
        <FontAwesomeIcon icon={faSearch} />
      </span>

      <div className="mobile__menu">
        <span>
          <FontAwesomeIcon
            icon={showMenu ? faWindowClose : faBars}
            onClick={toggleShowMenu}
          />
        </span>
      </div>
      <div className={showMenu ? "side_menu" : "side_menu hide"}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <a href="#">COFFEE</a>
          </li>
          <li>
            <a href="#">COLD BREW</a>
          </li>
          <li>
            <a href="#">BAKERY</a>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <a href="#">LOGIN</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
