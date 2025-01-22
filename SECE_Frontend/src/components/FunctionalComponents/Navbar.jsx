import { useState } from "react";

import "../../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDrop] = useState(false);

  return (
    <header>
      <nav>
        <ol className="navbar">
          <li><Link to="/home" className="link">Home</Link></li>
          <li><Link to="/card" className="link">Card</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
          <li><Link to="/profile" className="link">Profile</Link></li>
          <li><Link to="/contact" className="link">Contact</Link></li>
          <div
            className="dropdown-container"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
          >
            <span className="dropdown-trigger">Hooks</span>
            {dropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/use-state" className="link">Use State</Link></li>
                <li><Link to="/use-effect" className="link">Use Effect</Link></li>
              </ul>
            )}
          </div>
        </ol>
      </nav>
    </header>
  );
};

export default Navbar;
