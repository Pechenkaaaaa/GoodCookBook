import { useState } from "react";
import requestAxios from "../../services/axios";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "../../services/axios";
import "./AufReg.css";

function Registration({ setUser }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  function validation(login, email, password) {
    if (
      login.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      cpassword.trim() === ""
    ) {
      setError("Заполните поле");
      return false;
    }
    if (password.trim() !== cpassword.trim()) {
      setError("Пароли не совпадают");
      return false;
    }
    return true;
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    if (!validation(login, email, password, cpassword)) {
      return;
    }

    try {
      // сделать проверки на пустые поля
      const { data } = await requestAxios.post("/auth/registration", {
        login,
        email,
        password,
      });
      console.log("=====", data.user);
      if (data.message === "success") {
        // положили билетик
        setAccessToken(data.accessToken);
        setUser(data.user);
        navigate("/");
        return;
      }
    } catch (message) {
      console.log(message.response.data.message);
      setError(message.response.data.message); /// исправить
      console.log(message);
    }
  };

  return (
    <div className="registrationForm">
      <h2 className="registrationTitle">Создать профиль</h2>
      <form className="registration" onSubmit={onHandleSubmit}>
        <label htmlFor="login" className="registrationLabel">
          <input
            type="text"
            placeholder="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          <input
            required
            type="email"
            placeholder="email@chto.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            minLength={5}
          />
        </label>

        <label htmlFor="password">
          <input
            type="password"
            placeholder="password"
            value={password}
            required
            minLength={3}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          <input
            required
            type="password"
            placeholder="check password"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </label>

        <span style={{ color: "#ccffcc" }}>{error && <p>{error}</p>}</span>
        <button className="button-3d" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default Registration;
