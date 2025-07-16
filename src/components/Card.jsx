import { useEffect, useState } from "react";
import "./Card.css";

export default function Card({ color }) {
  return (
    <article className="color-card">
      <div className="card-grey">
        <h3>{color.role}</h3>
        <h4 className="color-name">
          <FetchColorName colorCode={color.value} />{" "}
        </h4>
        <p className="color-code">{color.value}</p>
      </div>
      <div
        className="card-color"
        style={{ backgroundColor: color.value }}
      ></div>
    </article>
  );
}

function FetchColorName({ colorCode }) {
  const [colorName, setColorName] = useState([]);
  const colorCodeWithoutHash = colorCode.replace("#", "");

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${colorCodeWithoutHash}`
      );
      const colorName = await response.json();

      setColorName(colorName.name.value);
    }

    startFetching();
  }, []);

  return colorName;
}
