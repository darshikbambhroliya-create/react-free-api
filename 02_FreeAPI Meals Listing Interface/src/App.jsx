import { useState } from "react";
import "./App.css";

function App() {
  const [meal, setMeal] = useState([]);

  const Response = async () => {
    try {
      const res = await fetch("https://api.freeapi.app/api/v1/public/meals");
      const data = await res.json();
      setMeal(data.data.data);
    } catch (error) {
      console.log("Error At Fetching");
    }
  };

  return (
    <div className="app">
      <button className="btn" onClick={Response}>
        Get Menu
      </button>

      <div className="grid">
        {meal.map((m) => {
          return (
            <div className="card" key={m.idMeal}>
              <p className="title">{m.strMeal}</p>
              <p className="area">{m.strArea}</p>
              <p className="tags">{m.strTags}</p>
              <p className="link">▶️{m.strYoutube}</p>
              <p className="link">{m.strSource}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
