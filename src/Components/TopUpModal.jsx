import { useState } from "react";

const AMOUNTS = [50, 100, 150, 200, 250, 300, 400, 500, 600];

const SbpIcon = ({ color = "#8E8E93" }) => (
  <svg
    width="16"
    height="20"
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 5.71182L11.4164 5.71617L9.16432 4.32789L9.17682 10.0524L15.9904 14.2838H15.99L6.78281 20L8.37878 17.1118L6.78255 20L6.78125 11.4359L0.00273438 15.6437L0 4.35335L6.78125 8.56462V0L16 5.71182ZM9.17695 15.6676L11.4108 14.2895V14.2894L9.17695 12.9008V15.6676ZM6.79115 11.4297L7.8763 12.0924L6.80065 11.4238L6.79115 11.4297ZM2.3901 11.3231L4.51484 10.003L2.3901 8.68243V11.3231ZM9.17695 9.9475V7.10722L11.4165 5.71617L16 5.71182L9.17695 9.9475Z"
      fill={color}
    />
  </svg>
);

const CardIcon = ({ color = "#8e8e93" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3332 6.29183C18.3332 6.84183 17.8832 7.29183 17.3332 7.29183H2.6665C2.1165 7.29183 1.6665 6.84183 1.6665 6.29183V6.2835C1.6665 4.37516 3.20817 2.8335 5.1165 2.8335H14.8748C16.7832 2.8335 18.3332 4.3835 18.3332 6.29183Z"
      fill={color}
    />
    <path
      d="M1.6665 9.5415V13.7165C1.6665 15.6248 3.20817 17.1665 5.1165 17.1665H14.8748C16.7832 17.1665 18.3332 15.6165 18.3332 13.7082V9.5415C18.3332 8.9915 17.8832 8.5415 17.3332 8.5415H2.6665C2.1165 8.5415 1.6665 8.9915 1.6665 9.5415ZM6.6665 14.3748H4.99984C4.65817 14.3748 4.37484 14.0915 4.37484 13.7498C4.37484 13.4082 4.65817 13.1248 4.99984 13.1248H6.6665C7.00817 13.1248 7.2915 13.4082 7.2915 13.7498C7.2915 14.0915 7.00817 14.3748 6.6665 14.3748ZM12.0832 14.3748H8.74984C8.40817 14.3748 8.12484 14.0915 8.12484 13.7498C8.12484 13.4082 8.40817 13.1248 8.74984 13.1248H12.0832C12.4248 13.1248 12.7082 13.4082 12.7082 13.7498C12.7082 14.0915 12.4248 14.3748 12.0832 14.3748Z"
      fill={color}
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="22" height="22" rx="11" fill="#00B3F0" />
    <path
      d="M6.75 12L9.75 15.5L15.25 7.5"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TopUpModal({ onClose, onPay }) {
  const [amount, setAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [payMethod, setPayMethod] = useState(null);

  const handleAmountChip = (val) => {
    setSelectedAmount(val);
    setAmount(String(val));
  };

  const handleInput = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    setAmount(raw);
    setSelectedAmount(null);
  };

  const isZero = !amount || amount === "0";

  return (
    <div className="db-modal-overlay" onClick={onClose}>
      <div className="tu-modal" onClick={(e) => e.stopPropagation()}>
        <div className="tu-header">
          <span className="tu-title">Пополнить баланс</span>
          <button className="tu-close" onClick={onClose}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8e8e93"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="tu-label">Выберите сумму</div>

        <div className="tu-amount-box">
          <div className="tu-amount-display">
            <input
              className={`tu-amount-input${isZero ? " zero" : ""}`}
              type="text"
              inputMode="numeric"
              value={isZero ? "" : amount}
              onChange={handleInput}
              placeholder="0"
            />
            <span className={`tu-rub-sign${isZero ? " zero" : ""}`}>₽</span>
          </div>
          <div className="tu-chips">
            {AMOUNTS.map((val) => (
              <button
                key={val}
                className={`tu-chip${selectedAmount === val ? " active" : ""}`}
                onClick={() => handleAmountChip(val)}
              >
                {val} ₽
              </button>
            ))}
          </div>
        </div>

        <div className="tu-label" style={{ marginTop: 20 }}>
          Способ оплаты
        </div>
        <div className="tu-methods">
          <button
            className={`tu-method${payMethod === "sbp" ? " active" : ""}`}
            onClick={() => setPayMethod("sbp")}
          >
            <SbpIcon color={payMethod === "sbp" ? "#00B3F0" : "#8E8E93"} />
            <span>СБП</span>
            {payMethod === "sbp" && (
              <span style={{ marginLeft: "auto" }}>
                <CheckIcon />
              </span>
            )}
          </button>

          <button
            className={`tu-method${payMethod === "card" ? " active" : ""}`}
            onClick={() => setPayMethod("card")}
          >
            <CardIcon color={payMethod === "card" ? "#00B3F0" : "#8E8E93"} />
            <span>Банковская карта</span>
            {payMethod === "card" && (
              <span style={{ marginLeft: "auto" }}>
                <CheckIcon />
              </span>
            )}
          </button>
        </div>

        <button
          className="tu-pay-btn"
          disabled={isZero || !payMethod}
          onClick={() => onPay?.({ amount, payMethod })}
        >
          Оплатить
        </button>
      </div>
    </div>
  );
}
