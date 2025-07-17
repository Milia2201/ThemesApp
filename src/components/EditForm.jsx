import "./EditForm.css";
import { useState } from "react";

export default function EditForm({
  theme,
  handleEditTheme,
  setEditMode,
  editMode,
  setDetailed,
  detailed,
}) {
  const colors = {
    primary: theme.colors[0].value,
    secondary: theme.colors[1].value,
    surface: theme.colors[2].value,
    surfaceOn: theme.colors[3].value,
  };

  return (
    <article className="card">
      <form
        onSubmit={function (event) {
          handleEditTheme(event, theme.id);
          setEditMode(!editMode);
          setDetailed(!detailed);
        }}
        className="edit-form form"
      >
        <input
          name="themeName"
          rows="1"
          cols="35"
          maxLength="35"
          className="edit-input"
          defaultValue={theme.name}
          required
        ></input>
        <div className="color-input-wrapper">
          <input
            className="color-input"
            type="color"
            name="primary"
            defaultValue={colors.primary}
          />
        </div>
        <div className="color-input-wrapper">
          <input
            className="color-input"
            type="color"
            name="secondary"
            defaultValue={colors.secondary}
          />
        </div>
        <div className="color-input-wrapper">
          <input
            className="color-input"
            type="color"
            name="surface"
            defaultValue={colors.surface}
          />
        </div>
        <div className="color-input-wrapper">
          <input
            className="color-input"
            type="color"
            name="surfaceOn"
            defaultValue={colors.surfaceOn}
          />
        </div>

        <button type="submit" className="edit-theme-button">
          Save Theme
        </button>
      </form>
    </article>
  );
}
