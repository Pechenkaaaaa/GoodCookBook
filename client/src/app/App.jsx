import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import requestAxios from "../services/axios";
import { setAccessToken } from "../services/axios";

// импорт компонентов

import Dishes from "../components/dishes/Dishes";
import Navbar from "../components/navbar/Navbar";
import Registration from "../components/auth/Registration";
import Authorization from "../components/auth/Authorization";
import DishPage from "../components/dishes/DishPage";

function App() {
  const [user, setUser] = useState(null);

  const axiosUsers = async (id) => {
    const { data } = await requestAxios.get(`/users/${id}`);

    if (data.message === "success") {
      setUser(data.users);
    }
  };

  const AxiosChekUser = async () => {
    const { data } = await requestAxios.get("/tokens/refresh");
    console.log(data);
    if (data.message === "success") {
      setUser(data.user);
      setAccessToken(data.accessToken);
    }
  };

  useEffect(() => {
    AxiosChekUser();
    axiosUsers();
    // функция очистки наложенных эффектов
    // return ()=> clearTimeout
  }, []);
  // возращает разметку

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <h1 className="rotating-text">Cook Book</h1>

      <Routes>
        <Route path="/" element={<Dishes />} />
        <Route
          path="/registration"
          element={<Registration setUser={setUser} />}
        />
        <Route
          path="/authorization"
          element={<Authorization setUser={setUser} />}
        />
        <Route path="/dishes/:id" element={<DishPage setDishes={Dishes}/>} />
        {/* <Route
          path='/fermas/:fermaId'
          element={<Animals user={user} animals={animals} setAnimals={setAnimals} />} // фото компонент
          /> */}

        {/* <Route path='*' element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
