import { useState } from "react";
import "./App.css";

function App() {
  const [jokes, setJoke] = useState([]);

  const Response = async () => {
    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/randomjokes"
      );
      const data = await res.json();
      setJoke(data.data.data);
    } catch (error) {
      console.log("Error At Fetching");
    }
  };

  return (
    <div className="app">
      <button className="btn" onClick={Response}>
        Load Jokes
      </button>

      <div className="joke-list">
        {jokes.map((joke) => {
          return (
            <div className="card" key={joke.id}>
              <p className="text">😂 {joke.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
