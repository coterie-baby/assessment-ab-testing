import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Page from "./pages/Page";

import "./App.scss";
import DiaperPage from "./pages/DiaperPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page content="Home Page" />} />
          <Route path="/products/diaper" element={<Page content={<DiaperPage />} />} />
          <Route path="/about" element={<Page content="About Us Page" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
