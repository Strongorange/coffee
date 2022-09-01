import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { UserContext } from "../Contexts/Context";
import { signOut } from "firebase/auth";
import { FBauth } from "../Firebase/FB";

function Header() {
  // States, Variables
  const { isLoggedIn } = useContext(UserContext);

  // Funtions
  const onSignOut = () => {
    signOut(FBauth)
      .then(() => console.log("로그아웃 성공"))
      .catch((error) => console.log(`from onSignout Header.js ${error}`));
  };

  return (
    <header className="header">
      <div className="fakediv"> </div>
      <div className="header__title">
        <Link to="/">
          <h1>
            HOME<br></br>PRESSURE
          </h1>
          <h1>Logged In : &nbsp;{String(isLoggedIn)}</h1>
        </Link>
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
          <Dropdown.Toggle variant="succeess" id="dropdown_basic" size="md">
            <span>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="header_drop_menu">
              <Dropdown.Item>
                <Link to="/">Home</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/shop">Shop</Link>
              </Dropdown.Item>
              {isLoggedIn ? (
                <>
                  <Dropdown.Item>
                    <Link to="/profile">Profile</Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={onSignOut}>Log Out</Dropdown.Item>
                </>
              ) : (
                <>
                  <Dropdown.Item>
                    <Link to="/login">Log In</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/signup">Sign Up</Link>
                  </Dropdown.Item>
                </>
              )}
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
}

export default Header;
