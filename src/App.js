import React from "react";
import Instagramm from "./assest/zqpwkLQ.png";
import Facebook from "./assest/facebook (2).png";
import { JoinBlock } from "./components";

const App = () => {
  return (
    <div className="container">
      <div id="wrapper">
        <div className="main-content">
          <div className="header">
            <img src={Instagramm} alt="img" />
          </div>
          <JoinBlock />

          <div className="or_type">
            <span>___________</span>
            <h3>ИЛИ</h3>
            <span>___________</span>
          </div>

          <div className="or_facebook">
            <img className="logo" src={Facebook} alt="sad" />
            <span tabIndex="0">Войти через Facebook</span>
          </div>

          <div className="or_forgot">
            <a href="asdh">Забыли пароль?</a>
          </div>
        </div>
        <div className="sub-content">
          <div className="s-part">
            У вас ещё нет аккаунта?<a href="asdasd"> Зарегистрироваться</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
