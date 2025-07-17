import "./Theme.css";
import Card from "./Card.jsx";
import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import EditForm from "./EditForm.jsx";

export default function Theme({ theme, handleDeleteTheme, handleEditTheme }) {
  const [detailed, setDetailed] = useState(false);
  const [editMode, setEditMode] = useState(false);

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
      <button
        className="toggle-button"
        onClick={function (event) {
          if (editMode) {
            setEditMode(!editMode);
          }
          setDetailed(!detailed);
        }}
      >
        <span className="theme-arrow">
          {!detailed ? <ChevronDown /> : editMode ? <X /> : <ChevronUp />}
        </span>
      </button>
      {!detailed ? (
        <ul className="compact-list">
          {theme.colors.map((color) => (
            <li
              key={color.role}
              className="card-color"
              style={{ backgroundColor: color.value }}
            ></li>
          ))}
        </ul>
      ) : !editMode ? (
        <ul>
          <button
            className="delete-button button"
            onClick={function () {
              handleDeleteTheme(theme.id);
            }}
          >
            Delete Theme
          </button>
          <button
            className="edit-button button"
            onClick={() => setEditMode(!editMode)}
          >
            Edit Theme
          </button>

          {theme.colors.map((color) => (
            <li key={color.role}>
              <Card color={color} />
            </li>
          ))}
        </ul>
      ) : (
        <EditForm
          theme={theme}
          handleEditTheme={handleEditTheme}
          setEditMode={setEditMode}
          editMode={editMode}
          setDetailed={setDetailed}
          detailed={detailed}
        />
      )}
    </article>
  );
}
