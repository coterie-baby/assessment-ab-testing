import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

import "./Layout.scss";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
