import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <>
          <div>{dish.img}</div>
          <div>{dish.title}</div>
          <div>{dish.ingredients}</div>
          <div>{dish.cookingTime}</div>
          <div>{dish.recipe}</div>
        </>
      )}
    </>
  );
}

export default DishPage;
