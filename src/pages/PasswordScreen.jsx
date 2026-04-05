import { useState } from "react";
import { Link } from "react-router-dom";

const EyeIcon = ({ open }) =>
  open ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.2699 9.17981C20.9799 8.71981 20.6699 8.28981 20.3499 7.88981C19.9799 7.41981 19.2799 7.37981 18.8599 7.79981L15.8599 10.7998C16.0799 11.4598 16.1199 12.2198 15.9199 13.0098C15.5699 14.4198 14.4299 15.5598 13.0199 15.9098C12.2299 16.1098 11.4699 16.0698 10.8099 15.8498C10.8099 15.8498 9.37995 17.2798 8.34995 18.3098C7.84995 18.8098 8.00995 19.6898 8.67995 19.9498C9.74995 20.3598 10.8599 20.5698 11.9999 20.5698C13.7799 20.5698 15.5099 20.0498 17.0899 19.0798C18.6999 18.0798 20.1499 16.6098 21.3199 14.7398C22.2699 13.2298 22.2199 10.6898 21.2699 9.17981Z"
        fill="#8E8E93"
      />
      <path
        d="M14.0199 9.98014L9.97989 14.0201C9.46989 13.5001 9.13989 12.7801 9.13989 12.0001C9.13989 10.4301 10.4199 9.14014 11.9999 9.14014C12.7799 9.14014 13.4999 9.47014 14.0199 9.98014Z"
        fill="#8E8E93"
      />
      <path
        d="M18.25 5.75018L14.86 9.14018C14.13 8.40018 13.12 7.96018 12 7.96018C9.76 7.96018 7.96 9.77018 7.96 12.0002C7.96 13.1202 8.41 14.1302 9.14 14.8602L5.76 18.2502H5.75C4.64 17.3502 3.62 16.2002 2.75 14.8402C1.75 13.2702 1.75 10.7202 2.75 9.15018C3.91 7.33017 5.33 5.90018 6.91 4.92018C8.49 3.96018 10.22 3.43018 12 3.43018C14.23 3.43018 16.39 4.25018 18.25 5.75018Z"
        fill="#8E8E93"
      />
      <path
        d="M14.8601 12.0001C14.8601 13.5701 13.5801 14.8601 12.0001 14.8601C11.9401 14.8601 11.8901 14.8601 11.8301 14.8401L14.8401 11.8301C14.8601 11.8901 14.8601 11.9401 14.8601 12.0001Z"
        fill="#8E8E93"
      />
      <path
        d="M21.7699 2.22988C21.4699 1.92988 20.9799 1.92988 20.6799 2.22988L2.22988 20.6899C1.92988 20.9899 1.92988 21.4799 2.22988 21.7799C2.37988 21.9199 2.56988 21.9999 2.76988 21.9999C2.96988 21.9999 3.15988 21.9199 3.30988 21.7699L21.7699 3.30988C22.0799 3.00988 22.0799 2.52988 21.7699 2.22988Z"
        fill="#8E8E93"
      />
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.25 9.15018C18.94 5.52017 15.56 3.43018 12 3.43018C10.22 3.43018 8.49 3.95018 6.91 4.92018C5.33 5.90018 3.91 7.33017 2.75 9.15018C1.75 10.7202 1.75 13.2702 2.75 14.8402C5.06 18.4802 8.44 20.5602 12 20.5602C13.78 20.5602 15.51 20.0402 17.09 19.0702C18.67 18.0902 20.09 16.6602 21.25 14.8402C22.25 13.2802 22.25 10.7202 21.25 9.15018ZM12 16.0402C9.76 16.0402 7.96 14.2302 7.96 12.0002C7.96 9.77018 9.76 7.96018 12 7.96018C14.24 7.96018 16.04 9.77018 16.04 12.0002C16.04 14.2302 14.24 16.0402 12 16.0402Z"
        fill="#8E8E93"
      />
      <path
        d="M12 9.14014C10.43 9.14014 9.15002 10.4201 9.15002 12.0001C9.15002 13.5701 10.43 14.8501 12 14.8501C13.57 14.8501 14.86 13.5701 14.86 12.0001C14.86 10.4301 13.57 9.14014 12 9.14014Z"
        fill="#8E8E93"
      />
    </svg>
  );

export default function PasswordScreen({ onBack, onContinue }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [touched, setTouched] = useState(false);

  const hasValue = password.length > 0 && confirm.length > 0;
  const passwordsMatch = password === confirm;
  const showError = touched && hasValue && !passwordsMatch;

  const handleSubmit = () => {
    setTouched(true);
    if (hasValue && passwordsMatch) onContinue?.(password);
  };

  return (
    <>
      <div className="es-root">
        <div className="es-container">
          <Link to={"/register"} className="es-back" onClick={onBack}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Назад
          </Link>

          <h1 className="es-title">Введите пароль</h1>
          <p className="es-subtitle">Защитите свой аккаунт паролем</p>

          <div className="es-input-wrap">
            <input
              className={`es-input${showError ? " error" : ""}`}
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => confirm.length > 0 && setTouched(true)}
              autoComplete="new-password"
            />
            <button
              className="es-clear visible"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
              aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
            >
              <EyeIcon open={showPassword} />
            </button>
          </div>

          <div className="es-input-wrap" style={{ marginTop: 12 }}>
            <input
              className={`es-input${showError ? " error" : ""}`}
              type={showConfirm ? "text" : "password"}
              placeholder="Повторите пароль"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              onBlur={() => password.length > 0 && setTouched(true)}
              autoComplete="new-password"
            />
            <button
              className="es-clear visible"
              onClick={() => setShowConfirm((v) => !v)}
              tabIndex={-1}
              aria-label={showConfirm ? "Скрыть пароль" : "Показать пароль"}
            >
              <EyeIcon open={showConfirm} />
            </button>
          </div>

          <div className={`es-error${showError ? "" : " hidden"}`}>
            {showError ? "Пароли не совпадают" : "\u00A0"}
          </div>

          <button
            className="es-submit"
            onClick={handleSubmit}
            disabled={!hasValue}
          >
            Продолжить
          </button>
        </div>
      </div>
    </>
  );
}
