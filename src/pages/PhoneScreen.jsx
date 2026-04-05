import { useState, useRef } from "react";
import { Link } from "react-router-dom";

function formatPhone(raw) {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  let result = "";
  for (let i = 0; i < digits.length; i++) {
    if (i === 0) result += "+";
    if (i === 1) result += " ";
    if (i === 4) result += " ";
    if (i === 7) result += " ";
    if (i === 9) result += " ";
    result += digits[i];
  }
  return result;
}

function validatePhone(phone) {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 11 && digits[0] === "7";
}
export default function PhoneScreen({ onBack, onContinue }) {
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);
  const inputRef = useRef(null);

  const isValid = validatePhone(phone);
  const hasValue = phone.length > 0;
  const showError = touched && hasValue && !isValid;

  const handleChange = (e) => {
    const raw = e.target.value;
    // Если пользователь стирает — убираем форматирование тоже
    const digits = raw.replace(/\D/g, "");
    // Автоподставляем 7 если начали с 8 или просто цифры
    const normalized =
      digits.length > 0 && digits[0] !== "7"
        ? "7" + digits.slice(digits[0] === "8" ? 1 : 0)
        : digits;
    setPhone(formatPhone(normalized));
  };

  const handleClear = () => {
    setPhone("");
    setTouched(false);
    inputRef.current?.focus();
  };

  const handleSubmit = () => {
    setTouched(true);
    if (isValid) onContinue?.(phone);
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

          <h1 className="es-title">Укажите свой телефон</h1>
          <p className="es-subtitle">
            Это необходимо для входа или регистрации
          </p>

          <div className="es-input-wrap">
            <input
              ref={inputRef}
              className={`es-input${showError ? " error" : ""}`}
              type="tel"
              placeholder="+7 987 654 32 10"
              value={phone}
              onChange={handleChange}
              onBlur={() => hasValue && setTouched(true)}
              autoComplete="tel"
              inputMode="tel"
            />
            <button
              className={`es-clear${hasValue ? " visible" : ""}`}
              onClick={handleClear}
              tabIndex={-1}
              aria-label="Очистить"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 16C12.3765 16 16 12.3686 16 8C16 3.62353 12.3686 0 7.99216 0C3.62353 0 0 3.62353 0 8C0 12.3686 3.63137 16 8 16ZM5.36471 11.2941C5.00392 11.2941 4.72157 11.0039 4.72157 10.6431C4.72157 10.4706 4.78431 10.3059 4.9098 10.1882L7.08235 8.00784L4.9098 5.83529C4.78431 5.7098 4.72157 5.55294 4.72157 5.38039C4.72157 5.01177 5.00392 4.73726 5.36471 4.73726C5.5451 4.73726 5.68628 4.8 5.81177 4.91765L8 7.09804L10.2039 4.9098C10.3373 4.77647 10.4784 4.72157 10.651 4.72157C11.0118 4.72157 11.302 5.00392 11.302 5.36471C11.302 5.5451 11.2471 5.68628 11.1059 5.82745L8.92549 8.00784L11.098 10.1804C11.2314 10.298 11.2941 10.4627 11.2941 10.6431C11.2941 11.0039 11.0039 11.2941 10.6353 11.2941C10.4549 11.2941 10.2902 11.2314 10.1725 11.1059L8 8.92549L5.83529 11.1059C5.7098 11.2314 5.5451 11.2941 5.36471 11.2941Z"
                  fill="#8E8E93"
                />
              </svg>
            </button>
          </div>

          <div className={`es-error${showError ? "" : " hidden"}`}>
            {showError ? "Некорректный номер телефона" : "\u00A0"}
          </div>

          <Link
            to={"/password-screen-phone"}
            className="es-submit"
            onClick={handleSubmit}
            disabled={!hasValue}
          >
            Продолжить
          </Link>
        </div>
      </div>
    </>
  );
}
