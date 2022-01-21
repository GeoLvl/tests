import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav-style">
        <div className="nav-logo">
          {/* <img src="/public/logoBleu.128ab591.png" alt="logo boaton" /> */}
        </div>
        <div className="nav-link">
          <ul>
            <li>
              <Link exact to="/blog">Le blog</Link>
            </li>
            <li>
              <Link exact to="/profil">Mon profil</Link>
            </li>
          </ul>
        </div>
        <hr />
      </nav>
    );
  }
}

export default Navbar;
