import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Header() {
  return (
    <header className="header">
      <div className="fakediv"> </div>
      <div className="header__title">
        <a href="/">
          <h1>
            HOME<br></br>PRESSURE
          </h1>
        </a>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link to="/shop">SHOP</Link>
          </li>
        </ul>
      </nav>
      <span>
        <FontAwesomeIcon icon={faSearch} />
      </span>

      <div className="mobile__menu">
        <Dropdown>
          <Dropdown.Toggle variant="succeess" id="dropdown_basic">
            <span>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/">Home</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/shop">Shop</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
}

export default Header;
