import React, { useState } from "react";
import axios from "axios";
import "./dishes.css";

function DishItem({ dish, user }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const postFavoriteDishes = async (dishId, userId) => {
    const addFavoriteDish = await axios.post("/api/favorites", {
      dishId,
      userId,
    });
    console.log(addFavoriteDish);
  };

  const deleteFavoriteDish = async (dishId, userId) => {
    const deleteFavotiteDish = await axios.delete(`/api/favorites/users/${userId}/dishes/${dishId}`);
    console.log(deleteFavotiteDish);
  };

  return (
    <>
      <div className="dish_img">
        <img src={dish.img} alt="very tasty dish" />
      </div>
      {user ? (
        <div className="dish_description">
          <svg
            onClick={() =>
              isClicked
                ? (handleClick(), deleteFavoriteDish(dish.id, user.id))
                : (handleClick(), postFavoriteDishes(dish.id, user.id))
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
          <h2><a href={`/dishes/${dish.id}`}>{dish.title}</a></h2>
          <p style={{ padding: "5px" }}>{dish.ingredients}</p>
          <p style={{ paddingBottom: "0px", marginBottom: "0px" }}><strong>Время приготовления:</strong></p>
          <p style={{ paddingTop: "0px", marginTop: "0px" }}>{dish.cookingTime} минут</p>
        </div>
      ) : (
        <div className="dish_description">
          <h2><a href={`/dishes/${dish.id}`}>{dish.title}</a></h2>
          <p style={{ padding: "5px" }}>{dish.ingredients}</p>
        </div>
      )}
    </>
  );
}

export default DishItem;
