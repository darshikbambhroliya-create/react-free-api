import { useState } from "react";
import "./App.css";

function App() {
  const [product, setProduct] = useState([]);
  const Response = async () => {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/randomproducts"
    );
    const data = await res.json();
    setProduct(data.data.data);
  };
  return (
    <div className="app">
      <button className="btn" onClick={Response}>
        Load Products
      </button>

      <div className="grid">
        {product.map((p) => {
          return (
            <div className="card" key={p.id}>
              <img src={p.thumbnail} alt={p.title} className="img" />

              <p className="title">{p.title}</p>
              <p className="desc">{p.description}</p>

              <p className="price">₹ {p.price}</p>
              <p className="discount">-{p.discountPercentage}% OFF</p>

              <p className="rating">⭐ {p.rating}</p>
              <p className="brand">{p.brand}</p>
              <p className="category">{p.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
