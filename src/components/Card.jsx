import { useState } from "react";
import "./Card.css";

export default function Card({color}) {

    function cardColor() {
        
    }
    console.log(color)
  return (
    <article className="card">
      <div 
      className="card-grey"
      >
        <h3>{color.role}</h3>
        <p>{color.value}</p>
      </div>
      <div className="card-color"
      style={{backgroundColor: color.value}}></div>
    </article>
  );
}
