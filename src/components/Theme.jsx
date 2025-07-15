import "./Theme.css";
import Card from "./Card.jsx";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Theme({ theme, handleDeleteTheme }) {
  const [detailed, setDetailed] = useState(false);

  if (detailed) {
    const detailedCard = theme.colors.map((color) => (
      <li key={color.role}>
        <Card color={color} />
      </li>
    ));
  } else {
    const compactCard = theme.colors.map((color) => (
      <li key={color.role} style={{ backgroundColor: color.value }}></li>
    ));
  }

  return (
    <article className="card">
      <h2 className="theme-title">{theme.name}</h2>
      <button className="toggle-button" onClick={() => setDetailed(!detailed)}>
        <span className="theme-arrow">
          {detailed ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      {detailed ? (
        <ul>
          <button
            className="delete-button"
            onClick={function () {
              handleDeleteTheme(theme.id);
            }}
          >
            Delete Theme
          </button>
          {theme.colors.map((color) => (
            <li key={color.role}>
              <Card color={color} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="compact-list">
          {theme.colors.map((color) => (
            <li
              key={color.role}
              className="card-color"
              style={{ backgroundColor: color.value }}
            ></li>
          ))}
        </ul>
      )}
    </article>
  );
}
