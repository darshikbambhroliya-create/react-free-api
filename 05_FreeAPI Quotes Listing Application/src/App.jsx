import { useState } from "react";
import "./App.css";

function App() {
  const [Quotes, setQuotes] = useState([]);

  const Response = async () => {
    const res = await fetch("https://api.freeapi.app/api/v1/public/quotes");
    const data = await res.json();
    setQuotes(data.data.data);
  };

  return (
    <div className="app">
      <button className="btn" onClick={Response}>
        Load Quotes
      </button>

      <div className="quote-list">
        {Quotes.map((Quote) => {
          return (
            <div className="card" key={Quote.id}>
              <p className="author">— {Quote.author}</p>
              <p className="content">"{Quote.content}"</p>
              <p className="date">{Quote.dateAdded}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
