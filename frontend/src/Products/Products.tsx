import products from "./data";

export default function Products() {
  return (
    <div>
      <h1>Product Catalog</h1>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          listStyle: "none",
          padding: 0,
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
              width: "250px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                marginBottom: "10px",
                borderRadius: "4px",
              }}
            />
            <h3 style={{ fontSize: "1.1rem", marginBottom: "5px" }}>
              {product.name}
            </h3>
            <p style={{ fontWeight: "bold", margin: "5px 0" }}>
              ${product.price.toFixed(2)}
            </p>
            <p style={{ fontSize: "0.9rem", color: "#444" }}>
              {product.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
