import React from "react";
import "./styles/Card.css";
function Card(props) {
  const cars = props.cars;
  const theme = cars.theme;
  console.log(theme);

  return <div className={`organizmo-contenedor ${theme}`}>{props.children}</div>;
}
export default Card;
