import React, { useState } from "react";
//import Button from "../ui/Button";
import axios from "axios";

function DishItem({ dish }) {
  return (
    <div className="dish_item">
        <div><img src={dish.img} alt="very_tasty_dish"/></div>
      <p>{dish.title} </p>
      <p>{dish.ingredients} </p>
      <p>{dish.cookingTime} минут</p>
    </div>
  );
}

export default DishItem;
