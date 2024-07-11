import React, { useState, useEffect } from "react";
import axios from "axios";
import DishItem from "./DishItem";

function Dishes() {
  const [dishes, setDishes] = useState([]);

  const getDishes = async () => {
    const dishesFromServer = await axios.get("/api/dishes");
    //массив объектов
    setDishes(dishesFromServer.data.dishes);
  };

  useEffect(() => {
    getDishes();
  }, []);
  return (
    <div className="dishes_container">
      {dishes.map((dish) => (
        <div key={dish.id}>
          <DishItem dish={dish}  />
        </div>
      ))}
    </div>
  );
}
export default Dishes;
