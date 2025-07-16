import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import { themes as initialThemes } from "./assets/db.js";
import Theme from "./components/Theme.jsx";
import AddThemeForm from "./components/AddThemeForm.jsx";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

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

  /*   
= useLocalStorageState("themes", { defaultValue: 0 });
--------------
localStorage.setItem("name", "Alex");
localStorage.setItem("age", 28);
localStorage.setItem("isOnline", true); 
---------------
const name = localStorage.getItem("name"); // → "Alex"
const age = localStorage.getItem("age"); // → 28
const isOnline = localStorage.getItem("isOnline"); // → true
--------------
localStorage.removeItem("name");
--------------
localStorage.clear();

---------------
const user = {
  name: "Alex",
  age: 28,
  isOnline: true,
};

localStorage.setItem("user", JSON.stringify(user));
---------------

const user = JSON.parse(localStorage.getItem("user"));
----------------
// store data
function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// retrieve data
function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}
  ---------------------
setItem("user", {
  name: "Alex",
  age: 28,
  isOnline: true,
});
setItem("count", 42);

const user = getItem("user");
const count = getItem("count");
--------------------
*/

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
