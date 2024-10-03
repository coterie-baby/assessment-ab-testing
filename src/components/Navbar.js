import MenuItem from "./MenuItem";

import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <MenuItem text="Home" to="/" />
      <MenuItem text="Our Diaper" to="/products/diaper" />
      <MenuItem text="About Us" to="/about" />
    </nav>
  );
}

export default Navbar;
