import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { themes } from "./assets/db.js";

function App() {
  const [count, setCount] = useState(0);
  console.log(themes[0].colors);

  return (
    <>
      <header>
        <h1>Theme Creator</h1>
      </header>
      <main className="main">
        <article>
          <h2>{themes[0].name}</h2>
          <ul>
            {themes[0].colors.map((color) => {
              return (
                <li key={color.role}>
                  <Card color={color} />
                </li>
              );
            })}
          </ul>
        </article>
      </main>
    </>
  );
}

export default App;
console.log();
