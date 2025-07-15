import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import { themes as initialThemes } from "./assets/db.js";
import Theme from "./components/Theme.jsx";
import AddThemeForm from "./components/AddThemeForm.jsx";

export default function App() {
  const [themes, setThemes] = useState(initialThemes);
  console.log("newThemes: ", themes);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    const newTheme = {
      id: crypto.randomUUID(),
      name: data.themeName,
      colors: [
        { role: "primary", value: data.primary },
        { role: "secondary", value: data.secondary },
        { role: "surface", value: data.surface },
        { role: "surface-on", value: data.surfaceOn },
      ],
    };

    setThemes([newTheme, ...themes]);
    event.target.reset();
  }
  return (
    <>
      <header>
        <h1 className="title">Theme Creator</h1>
      </header>
      <main className="main">
        <AddThemeForm handleSubmit={handleSubmit} />
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
