import React from "react";
import "./randomize.css";
import image from "./images.json";


const Randomize = props => (
    <div className="card">
    <div className="img-container">
      <button>
      {/* <img alt="" src={props.image} /> */}
      {image.map(imageSrc=> <img key={image.id} alt="" src={imageSrc}/>)}
       {props.children}
      </button>
    </div>
    </div>
);

export default Randomize;

