import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import { themes as initialThemes } from "./assets/db.js";
import Theme from "./components/Theme.jsx";
import AddThemeForm from "./components/AddThemeForm.jsx";

export default function App() {
  const [themes, setThemes] = useState(initialThemes);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

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

  function handleDeleteTheme(id) {
    const newThemes = themes.filter((theme) => {
      if (theme.id !== id) {
        return theme;
      }
    });
    
    setThemes(newThemes);
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
                <Theme theme={theme} handleDeleteTheme={handleDeleteTheme} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
