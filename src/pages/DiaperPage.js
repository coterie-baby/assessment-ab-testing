import "./DiaperPage.scss";

const products = [
  { id: 1, name: "The Diaper Size 01" },
  { id: 2, name: "The Diaper Size 02" },
  { id: 3, name: "The Diaper Size 03" },
];

function DiaperPage() {
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
