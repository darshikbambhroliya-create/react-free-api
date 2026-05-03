import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const response = async () => {
    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/randomusers"
      );
      const data = await res.json();
      setUser(data.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="app">
      <button className="btn" onClick={response}>
        Load Data
      </button>

      <div className="grid">
        {user.map((u) => (
          <div className="card" key={u.email}>
            <img src={u.picture.medium} alt="user" className="avatar" />

            <p className="name">
              {u.name.first} {u.name.last}
            </p>

            <p className="text">
              📍 {u.location.city}, {u.location.country}
            </p>

            <p className="text">📧 {u.email}</p>
            <p className="text">📞 {u.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
