import React, { useState } from "react";
//import Button from "../ui/Button";
import axios from "axios";
import "./dishes.css";

function DishItem({ dish }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  //! Логика добавления в избранное для юзера

  //const [favoriteDish, setFavoriteDish] = useState({});

  const postFavoriteDishes = async (dishForAdd) => {
    const addFavoriteDish = await axios.post("/api/favorites", dishForAdd); //? уточнить адрес
  };

  const deleteFavoriteDish = async (id, dishForDelete) => {
    const deleteFavotiteDish = await axios.delete(
      `/api/favorites/${id}`,
      dishForDelete
    ); //? уточнить адрес
  };

  //   useEffect(() => {
  //     getFavoriteDishes();
  //   }, []);

  return (
    <>
      <div className="dish_img">
        <img src={dish.img} alt="very_tasty_dish" />
      </div>
      <div className="dish_description">
        <svg
          onClick={(event) =>
            isClicked
              ? (handleClick(), postFavoriteDishes(dish))
              : (handleClick(), deleteFavoriteDish(dish.id, dish))
          }
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 48 48"
        >
          <path
            className={` ${isClicked ? "clickedBtn" : ""}`}
            fill="white"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"
          />
        </svg>
        <h2>
          <a href="#">{dish.title} </a>
        </h2>
        <p style={{ padding: "5px" }}>{dish.ingredients} </p>
        <p style={{ paddingBottom: "0px", marginBottom: "0px" }}>
          <strong>Время приготовления:</strong>
        </p>
        <p style={{ paddingTop: "0px", marginTop: "0px" }}>
          {dish.cookingTime} минут
        </p>
      </div>
    </>
  );
}

export default DishItem;
