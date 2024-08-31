import React, { useState } from 'react';  // Corrected useState import

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';


const Menu = () => (
<>
<p><a href="#home">Home</a></p>
          <p><a href="#web">What is Web</a></p> {/* Corrected href from `#wweb` to `#web` */}
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p> {/* Corrected `#featueres` to `#features` */}
          <p><a href="#blog">Library</a></p>
</>
)

// BEM -> Block Element Modifier
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="web__navbar">
      <div className="web__navbar-links">
        <div className="web__navbar-links_logo">
          <img src={logo} alt="Logo" /> {/* Self-closed img tag */}
        </div>
        <div className="web__navbar-links_container">
          <Menu/>
        </div>
      </div>

      <div className="web__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>

      <div className="web__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <div className="web__navbar-menu_container scale-up-center">
            <div className="web__navbar-menu_container-links">
            <Menu/>
            </div>
            <div className="web__navbar-menu_container-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

