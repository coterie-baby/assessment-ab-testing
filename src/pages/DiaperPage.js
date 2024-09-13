import { useSelector } from "react-redux";

import "./DiaperPage.scss";

function DiaperPage() {
  const products = useSelector((state) => state.product);
  console.log(products);
  return (
    <div className="diaper-page">
      <h1>Our Diaper</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DiaperPage;
