import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <Link to={"/#home"}>
        <h1 className="logo-name">JK Production</h1>
      </Link>

      <main className={showMenu ? "menu-link horizontal-menu" : "menu-link"}>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/services"}>Services</Link>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
      </main>

      <div className="hamburger-menu">
        <a href="#">
          <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
        </a>
      </div>
    </nav>
  );
};

export default Header;
