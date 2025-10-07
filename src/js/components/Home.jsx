import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [selectedColor, setSelecetedColor] = useState("red");
  return (
    <div className="text-center mt-5">
      <div className="poll mx-auto"></div>
      <div className="traffic-light">
        <div
          className={"light red " + (selectedColor === "red" ? "glow" : "")}
          onClick={() => setSelecetedColor("red")}
        ></div>
        <div
          className={
            "light yellow " + (selectedColor === "yellow" ? "glow" : "")
          }
          onClick={() => setSelecetedColor("yellow")}
        ></div>
        <div
          className={"light green " + (selectedColor === "green" ? "glow" : "")}
          onClick={() => setSelecetedColor("green")}
        ></div>
      </div>
    </div>
  );
};

export default Home;
