import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./dishPage.css"

function DishPage() {
  const [dish, setDish] = useState({});
  const { id } = useParams();
  const getDishById = async () => {
    const responseDish = await axios.get(`/api/dishes/${id}`);
    setDish(responseDish.data.dishes);
  };
  useEffect(() => {
    getDishById();
  }, []);
  return (
    <>
      {Object.keys(dish).length && (
        <div className="dish_conteiner">
          <div><img src={dish.img} alt="ooochen' vkuuusno dish"/></div>
          <div><h2>{dish.title}</h2></div>
          <div>{dish.ingredients}</div>
          <div>Время приготовления: <strong>{dish.cookingTime} минут</strong></div>
          <div>{dish.recipe}</div>
        </div>
      )}
    </>
  );
}

export default DishPage;
