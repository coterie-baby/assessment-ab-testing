import { Link } from "react-router-dom";

import "./MenuItem.scss";

function MenuItem({ text, to }) {
  return (
    <Link to={to} className="menu-item">
      {text}
    </Link>
  );
}

export default MenuItem;
