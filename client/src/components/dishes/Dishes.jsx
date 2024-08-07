import  { useState, useEffect } from "react";
import axios from "axios";
import DishItem from "./DishItem";
import "./dishes.css"
import DishPage from "./DishPage";

function Dishes({user}) {
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
        <div className="dish_item" key={dish.id}>
          <DishItem dish={dish} user={user} />
        </div>
      ))}
      <footer>© Все права защищены, но это не точно. ООО "CoockersЪ"</footer>
    </div>
  );
}
export default Dishes;
