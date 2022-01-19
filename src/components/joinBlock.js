import axios from "axios";
import React, { useState } from "react";

const JoinBlock = () => {
  const [getName, setName] = useState("");
  const [getPasword, setPassword] = useState("");
  const [boolen, setBoolen] = useState(false);

  const handLeClick = async () => {
    await axios.post("/", { name: getName, password: getPasword });
  };
  return (
    <div className="l-part">
      <input
        type="text"
        placeholder="Телефон, имя пользователя или эл. адрес"
        className="input-1"
        value={getName}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="overlap-text">
        <input
          type={!boolen ? "password" : "text"}
          placeholder="Пароль"
          value={getPasword}
          className="input-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        {!getPasword.length > 0 ? null : (
          <p className="a" onClick={() => setBoolen(() => !boolen)}>
            {!boolen ? "Покозать" : "Скрить"}
          </p>
        )}
      </div>
      <button className="btn" onClick={handLeClick}>
        Войти
      </button>
    </div>
  );
};

export default JoinBlock;
