import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DiaperPage from "./pages/DiaperPage";
import PantPage from "./pages/PantPage";
import Page from "./pages/Page";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page content="Home Page" />} />
          <Route
            path="/products/diaper"
            element={<Page content={<DiaperPage />} />}
          />
          <Route
            path="/products/pant"
            element={<Page content={<PantPage />} />}
          />
          <Route path="/about" element={<Page content="About Us Page" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
