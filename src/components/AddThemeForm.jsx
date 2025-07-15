import { useState } from "react";
import "./AddThemeForm.css"

export default function AddThemeForm({ handleSubmit }) {
  const [colors, setColors] = useState({
    primary: "#69b00b", // Default color for primary
    secondary: "#698008", // Default color for secondary
    surface: "#800869", // Default color for surface
    surfaceOn: "#b00b69", // Default color for surface-on
  });

  function handleColorChange(event) {
    const name = event.target.name;
    const colorValue = event.target.value;
    setColors({ ...colors, [name]: colorValue });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="color-input"
          onChange={handleColorChange}
          type="color"
          name="primary"
          value={colors.primary}
        />
        <input
          className="color-input"
          onChange={handleColorChange}
          type="color"
          name="secondary"
          value={colors.secondary}
        />
        <input
          className="color-input"
          onChange={handleColorChange}
          type="color"
          name="surface"
          value={colors.surface}
        />
        <input
          className="color-input"
          onChange={handleColorChange}
          type="color"
          name="surfaceOn"
          value={colors.surfaceOn}
        />
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
