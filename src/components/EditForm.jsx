import "./EditForm.css";
import { useState } from "react";

export default function EditForm({
  theme,
  handleEditTheme,
  setEditMode,
  editMode,
}) {
  const [colors, setColors] = useState({
    primary: theme.colors[0].value,
    secondary: theme.colors[1].value,
    surface: theme.colors[2].value,
    surfaceOn: theme.colors[3].value,
  });
  console.log("theme: ", theme);

  function handleColorChange(event) {
    const name = event.target.name;
    const colorValue = event.target.value;
    setColors({ ...colors, [name]: colorValue });
  }
  //textarea durch input ersetzen

  return (
    <article className="card">
      <form
        onSubmit={function (event) {
          handleEditTheme(event, theme.id);
          setEditMode(!editMode);
        }}
        className="edit-form form"
      >
        <textarea
          name="themeName"
          rows="1"
          cols="35"
          maxLength="35"
          className="edit-input"
          placeholder={theme.name}
          required
        ></textarea>
        <div className="color-input-wrapper">
          <input
            className="color-input"
            onChange={handleColorChange}
            type="color"
            name="primary"
            value={colors.primary}
          />
        </div>
        <div className="color-input-wrapper">
          <input
            className="color-input"
            onChange={handleColorChange}
            type="color"
            name="secondary"
            value={colors.secondary}
          />
        </div>
        <div className="color-input-wrapper">
          <input
            className="color-input"
            onChange={handleColorChange}
            type="color"
            name="surface"
            value={colors.surface}
          />
        </div>
        <div className="color-input-wrapper">
          <input
            className="color-input"
            onChange={handleColorChange}
            type="color"
            name="surfaceOn"
            value={colors.surfaceOn}
          />
        </div>

        <button type="submit" className="edit-theme-button">
          Save Theme
        </button>
      </form>
    </article>
  );
}
