import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import { themes } from "./assets/db.js";
import Theme from "./components/Theme.jsx";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <header>
        <h1 className="title">Theme Creator</h1>
      </header>
      <main className="main">
        <ul>
          {themes.map((theme) => {
            return (
              <li key={theme.id}>
                <Theme theme={theme} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
