import React, { useState } from "react";
//import Button from "../ui/Button";
import axios from "axios";
import "./dishes.css"

function DishItem({ dish }) {
  return (
    <>
      <div className="dish_img">
        <img src={dish.img} alt="very_tasty_dish" />
      </div>
      <div className="dish_description">
        <h2 ><a href="#">{dish.title} </a></h2>
        <p style={{padding: "5px"}}>{dish.ingredients} </p>
        <p style={{paddingBottom: "0px", marginBottom: "0px"}}><strong>Время приготовления:</strong></p>
        <p style={{paddingTop: "0px", marginTop: "0px"}}>{dish.cookingTime} минут</p>
      </div>
    </>
  );
}

export default DishItem;
