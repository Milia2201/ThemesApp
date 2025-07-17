import { useState } from "react";
import "./AddThemeForm.css";

export default function AddThemeForm({ handleSubmit }) {
  const [colors, setColors] = useState({
    primary: "#69b00b", // Default color for primary
    secondary: "#698008", // Default color for secondary
    surface: "#800869", // A50B5EDefault color for surface
    surfaceOn: "#b00b69", // Default color for surface-on
  });

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h4>Create your own theme:</h4>
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
        <textarea
          name="themeName"
          rows="1"
          cols="35"
          maxLength="35"
          className="input"
          placeholder="Theme name"
          required
        ></textarea>
        <button type="submit" className="add-theme-button">
          Add Theme
        </button>
      </form>
    </>
  );
}
