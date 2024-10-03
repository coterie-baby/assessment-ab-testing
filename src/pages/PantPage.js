import "./PantPage.scss";

const products = [
  { id: 1, name: "The Pant Size 01" },
  { id: 2, name: "The Pant Size 02" },
  { id: 3, name: "The Pant Size 03" },
];

function PantPage() {
  return (
    <div className="pant-page">
      <h1>Our Pant</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PantPage;
