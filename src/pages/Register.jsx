import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">
      <img className="register-img" src="/img/ballon.svg" alt="" />
      <h1 className="register-title">
        Добро пожаловать <br /> в Jesko VPN!
      </h1>
      <p className="register-subtitle">
        Создайте аккаунт и пользуйтесь <br /> VPN без ограничений
      </p>
      <div className="buttons">
        <Link to="/continue-with-telegram">
          <div className="tg-button">
            {" "}
            <img src="/icons/tg-icon.svg" alt="" />
            Войти по Telegram
          </div>
        </Link>
        <Link className="email-button" to="/continue-with-email">
          Продолжить по E-mail
        </Link>
        <Link className="phone-button" to="/continue-with-phone">
          Продолжить по Tелефону
        </Link>
      </div>
    </div>
  );
}

export default Register;
