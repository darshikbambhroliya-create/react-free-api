import { useState } from "react";
import "./App.css";

function App() {
  const [cat, setCat] = useState([]);
  const Response = async () => {
    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/cats/cat/random"
      );
      const data = await res.json();
      setCat([data.data]);
    } catch (error) {
      console.log("error at fetching");
    }
  };
  return (
    <div>
      <button onClick={Response}>Load Data</button>
      {cat.map((c) => {
        return (
          <div id={c.id}>
            <p className="title">{c.name}</p>
            <p>🌍 {c.origin}</p>
            <p>⏳ {c.life_span} years</p>
            <p>😺 {c.temperament}</p>

            <p>🧠 Intelligence: {c.intelligence}/5</p>
            <p>⚡ Energy: {c.energy_level}/5</p>
            <p>❤️ Affection: {c.affection_level}/5</p>
            <img src={c.image} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
