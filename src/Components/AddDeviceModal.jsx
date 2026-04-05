import { useState } from "react";

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
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

const DEVICE_TYPES = [
  {
    id: "iphone",
    label: "iPhone / iPad",
    icon: (active) => (
      <svg width="16" height="19" viewBox="0 0 16 19" fill="none">
        <path
          d="M15.489 6.47775C15.375 6.56326 13.3625 7.65967 13.3625 10.0976C13.3625 12.9175 15.9234 13.9151 16 13.9398C15.9882 14.0006 15.5932 15.306 14.6498 16.6362C13.8086 17.8067 12.9301 18.9753 11.5937 18.9753C10.2572 18.9753 9.91328 18.2247 8.37047 18.2247C6.86697 18.2247 6.33239 19 5.10994 19C3.88748 19 3.03452 17.9169 2.0538 16.5868C0.917823 15.0248 0 12.5983 0 10.2952C0 6.60126 2.48422 4.64216 4.92912 4.64216C6.22823 4.64216 7.31114 5.46685 8.12677 5.46685C8.90308 5.46685 10.1137 4.59276 11.5917 4.59276C12.1518 4.59276 14.1644 4.64216 15.489 6.47775ZM10.8901 3.0289C11.5013 2.32773 11.9337 1.35484 11.9337 0.381938C11.9337 0.247025 11.9219 0.110211 11.8963 0C10.9019 0.0361036 9.71871 0.640364 9.00528 1.44034C8.44515 2.05601 7.92237 3.0289 7.92237 4.0151C7.92237 4.16332 7.94792 4.31153 7.95971 4.35904C8.0226 4.37044 8.1248 4.38374 8.227 4.38374C9.11927 4.38374 10.2415 3.80608 10.8901 3.0289Z"
          fill={active ? "#00B3F0" : "#8E8E93"}
        />
      </svg>
    ),
  },
  {
    id: "android",
    label: "Android",
    icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M16.1766 6.9272C16.1188 6.86939 16.0602 6.81314 16.0016 6.75767L17.9422 4.81705C18.0777 4.61417 18.1254 4.45698 18.1254 4.37486C18.1254 4.20901 18.0596 4.04995 17.9422 3.93267C17.8249 3.8154 17.6659 3.74951 17.5 3.74951C17.3342 3.74951 17.1751 3.8154 17.0578 3.93267L15.0266 5.96392C13.556 4.92879 11.801 4.37447 10.0027 4.37712C8.20441 4.37978 6.45105 4.93929 4.9836 5.97877L2.94219 3.93267C2.82492 3.8154 2.66586 3.74951 2.5 3.74951C2.33415 3.74951 2.17509 3.8154 2.05782 3.93267C1.94054 4.04995 1.87466 4.20901 1.87466 4.37486C1.87466 4.54071 1.94054 4.69977 2.05782 4.81705L4.01563 6.77486C2.44464 8.60188 1.24889 12.0083 1.25 13.2131V14.9999C1.25 15.6849 1.86523 16.2499 2.5 16.2499H17.5C18.1348 16.2499 18.75 15.6849 18.75 14.9999V13.1249C18.7532 11.9728 18.5274 10.8316 18.0856 9.76764C17.6438 8.70367 16.9949 7.73814 16.1766 6.9272Z"
          fill={active ? "#00B3F0" : "#8E8E93"}
        />
      </svg>
    ),
  },
  {
    id: "windows",
    label: "Windows",
    icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M18.3333 7.09984V3.3165C18.3333 2.1415 17.8 1.6665 16.475 1.6665H13.1083C11.7833 1.6665 11.25 2.1415 11.25 3.3165V7.0915C11.25 8.27484 11.7833 8.7415 13.1083 8.7415H16.475C17.8 8.74984 18.3333 8.27484 18.3333 7.09984Z"
          fill={active ? "#00B3F0" : "#8E8E93"}
        />
        <path
          d="M18.3333 16.475V13.1083C18.3333 11.7833 17.8 11.25 16.475 11.25H13.1083C11.7833 11.25 11.25 11.7833 11.25 13.1083V16.475C11.25 17.8 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8 18.3333 16.475Z"
          fill={active ? "#00B3F0" : "#8E8E93"}
        />
        <path
          d="M8.75033 7.09984V3.3165C8.75033 2.1415 8.21699 1.6665 6.89199 1.6665H3.52533C2.20033 1.6665 1.66699 2.1415 1.66699 3.3165V7.0915C1.66699 8.27484 2.20033 8.7415 3.52533 8.7415H6.89199C8.21699 8.74984 8.75033 8.27484 8.75033 7.09984Z"
          fill={active ? "#00B3F0" : "#8E8E93"}
        />
        <path
          d="M8.75033 16.475V13.1083C8.75033 11.7833 8.21699 11.25 6.89199 11.25H3.52533C2.20033 11.25 1.66699 11.7833 1.66699 13.1083V16.475C1.66699 17.8 2.20033 18.3333 3.52533 18.3333H6.89199C8.21699 18.3333 8.75033 17.8 8.75033 16.475Z"
          fill={active ? "#00B3F0" : "#8E8E93"}
        />
      </svg>
    ),
  },
  {
    id: "macos",
    label: "macOS",
    icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 3H15M12 3V7M7 21H17C18.1046 21 19 20.1046 19 19V9C19 7.89543 18.1046 7 17 7H7C5.89543 7 5 7.89543 5 9V19C5 20.1046 5.89543 21 7 21Z"
          stroke={active ? "#00B3F0" : "#8E8E93"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "tv",
    label: "TV",
    icon: (active) => (
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
        <path
          d="M12.9667 0H3.675C1.65 0 0 1.65 0 3.675V9.09167V9.25833C0 11.2917 1.65 12.9333 3.675 12.9333H6.875C7.33333 12.9333 7.70833 13.3083 7.70833 13.7667V14.575C7.70833 15.0333 7.33333 15.4083 6.875 15.4083H4.85833C4.51667 15.4083 4.23333 15.6917 4.23333 16.0333C4.23333 16.375 4.50833 16.6667 4.85833 16.6667H11.8167C12.1583 16.6667 12.4417 16.3833 12.4417 16.0417C12.4417 15.7 12.1583 15.4167 11.8167 15.4167H9.8C9.34167 15.4167 8.96667 15.0417 8.96667 14.5833V13.775C8.96667 13.3167 9.34167 12.9417 9.8 12.9417H12.975C15.0083 12.9417 16.65 11.2917 16.65 9.26667V9.1V3.68333C16.6417 1.65 14.9917 0 12.9667 0Z"
          fill={active ? "#00B3F0" : "#8E8E93"}
        />
      </svg>
    ),
  },
  {
    id: "router",
    label: "Роутер",
    icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M18.3332 6.29183C18.3332 6.84183 17.8832 7.29183 17.3332 7.29183H2.6665C2.1165 7.29183 1.6665 6.84183 1.6665 6.29183V6.2835C1.6665 4.37516 3.20817 2.8335 5.1165 2.8335H14.8748C16.7832 2.8335 18.3332 4.3835 18.3332 6.29183Z"
          fill={active ? "#00B3F0" : "#8E8E93"}
        />
        <path
          d="M1.6665 9.5415V13.7165C1.6665 15.6248 3.20817 17.1665 5.1165 17.1665H14.8748C16.7832 17.1665 18.3332 15.6165 18.3332 13.7082V9.5415C18.3332 8.9915 17.8832 8.5415 17.3332 8.5415H2.6665C2.1165 8.5415 1.6665 8.9915 1.6665 9.5415ZM6.6665 14.3748H4.99984C4.65817 14.3748 4.37484 14.0915 4.37484 13.7498C4.37484 13.4082 4.65817 13.1248 4.99984 13.1248H6.6665C7.00817 13.1248 7.2915 13.4082 7.2915 13.7498C7.2915 14.0915 7.00817 14.3748 6.6665 14.3748ZM12.0832 14.3748H8.74984C8.40817 14.3748 8.12484 14.0915 8.12484 13.7498C8.12484 13.4082 8.40817 13.1248 8.74984 13.1248H12.0832C12.4248 13.1248 12.7082 13.4082 12.7082 13.7498C12.7082 14.0915 12.4248 14.3748 12.0832 14.3748Z"
          fill={active ? "#00B3F0" : "#8E8E93"}
        />
      </svg>
    ),
  },
];

const MOCK_KEY = "ss/vsovsdPSOOOXOASDODFosd012012abcdef...";

export default function AddDeviceModal({ onClose, onDone, onTopUp }) {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState(null);
  const [payMethod, setPayMethod] = useState(null); // "balance" | "topup"
  const [deviceName, setDeviceName] = useState("");
  const [keyCopied, setKeyCopied] = useState(false);

  const handleCopyKey = () => {
    navigator.clipboard?.writeText(MOCK_KEY);
    setKeyCopied(true);
    setTimeout(() => setKeyCopied(false), 2000);
  };

  const closeBtn = (
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
  );

  return (
    <div className="db-modal-overlay" onClick={onClose}>
      <div className="tu-modal ad-modal" onClick={(e) => e.stopPropagation()}>
        {/* STEP 1 — Выберите устройство */}
        {step === 1 && (
          <>
            <div className="tu-header">
              <span className="tu-title">Выберите устройство</span>
              {closeBtn}
            </div>
            <div className="ad-list">
              {DEVICE_TYPES.map((d, i) => {
                const active = selectedType === d.id;
                return (
                  <div key={d.id}>
                    <button
                      className={`ad-list-item${active ? " active" : ""}`}
                      onClick={() => setSelectedType(d.id)}
                    >
                      <span className="ad-list-icon">{d.icon(active)}</span>
                      <span className="ad-list-label">{d.label}</span>
                      {active && <CheckIcon />}
                    </button>
                    {i < DEVICE_TYPES.length - 1 && (
                      <div className="ad-divider" />
                    )}
                  </div>
                );
              })}
            </div>
            <button
              className="tu-pay-btn"
              style={{ marginTop: 20 }}
              disabled={!selectedType}
              onClick={() => setStep(2)}
            >
              Выбрать
            </button>
          </>
        )}

        {/* STEP 2 — Выберите способ */}
        {step === 2 && (
          <>
            <div className="tu-header">
              <span className="tu-title">Выберите способ</span>
              {closeBtn}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <button
                className="tu-pay-btn"
                onClick={() => {
                  setPayMethod("balance");
                  setStep(3);
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 7V12L15 15"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  Списать с баланса
                </span>
              </button>
              <button
                className="tu-pay-btn"
                style={{ background: "#00b3f01a", color: "#00b3f0" }}
                onClick={() => {
                  if (onTopUp) {
                    onTopUp();
                  } else {
                    setPayMethod("topup");
                    setStep(3);
                  }
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#00b3f0"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 8V16M8 12H16"
                      stroke="#00b3f0"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  Пополнить баланс
                </span>
              </button>
            </div>
          </>
        )}

        {/* STEP 3 — Придумайте название */}
        {step === 3 && (
          <>
            <div className="tu-header">
              <span className="tu-title">Придумайте название</span>
              {closeBtn}
            </div>
            <p className="ad-subtitle">
              Придумайте название для своего устройства, для лучшей навигации
            </p>
            <div className="ad-input-wrap">
              <input
                className="ad-input"
                placeholder="Название"
                value={deviceName}
                onChange={(e) => setDeviceName(e.target.value)}
                autoFocus
              />
              {deviceName.length > 0 && (
                <button
                  className="ad-input-clear"
                  onClick={() => setDeviceName("")}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 16C12.3765 16 16 12.3686 16 8C16 3.62353 12.3686 0 7.99216 0C3.62353 0 0 3.62353 0 8C0 12.3686 3.63137 16 8 16ZM5.36471 11.2941C5.00392 11.2941 4.72157 11.0039 4.72157 10.6431C4.72157 10.4706 4.78431 10.3059 4.9098 10.1882L7.08235 8.00784L4.9098 5.83529C4.78431 5.7098 4.72157 5.55294 4.72157 5.38039C4.72157 5.01177 5.00392 4.73726 5.36471 4.73726C5.5451 4.73726 5.68628 4.8 5.81177 4.91765L8 7.09804L10.2039 4.9098C10.3373 4.77647 10.4784 4.72157 10.651 4.72157C11.0118 4.72157 11.302 5.00392 11.302 5.36471C11.302 5.5451 11.2471 5.68628 11.1059 5.82745L8.92549 8.00784L11.098 10.1804C11.2314 10.298 11.2941 10.4627 11.2941 10.6431C11.2941 11.0039 11.0039 11.2941 10.6353 11.2941C10.4549 11.2941 10.2902 11.2314 10.1725 11.1059L8 8.92549L5.83529 11.1059C5.7098 11.2314 5.5451 11.2941 5.36471 11.2941Z"
                      fill="#8E8E93"
                    />
                  </svg>
                </button>
              )}
            </div>
            <button
              className="tu-pay-btn"
              style={{ marginTop: 16 }}
              onClick={() => setStep(4)}
            >
              Продолжить
            </button>
          </>
        )}

        {/* STEP 4 — Автопродление */}
        {step === 4 && (
          <>
            <div className="tu-header">
              <span className="tu-title">Автопродление</span>
              {closeBtn}
            </div>
            <p className="ad-subtitle">
              Вы можете воспользоваться автопродлением, нажав на кнопку
              «Пополнить» и пополнить баланс на n₽ — VPN продлится
              автоматически.
            </p>
            <button
              className="tu-pay-btn"
              style={{ marginTop: 8 }}
              onClick={() => setStep(5)}
            >
              Понятно
            </button>
          </>
        )}

        {/* STEP 5 — Ваш ключ */}
        {step === 5 && (
          <>
            <div className="tu-header">
              <span className="tu-title">Ваш ключ</span>
              {closeBtn}
            </div>
            <p className="ad-subtitle">
              Это ключ для настройки приложения VPN, устройство (
              {deviceName || "название"}) - (
              {DEVICE_TYPES.find((d) => d.id === selectedType)?.label || "тип"}
              ).
            </p>
            <div className="db-modal-key" style={{ marginBottom: 12 }}>
              {MOCK_KEY}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <button className="tu-pay-btn" onClick={handleCopyKey}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M12 9.675V12.825C12 15.45 10.95 16.5 8.325 16.5H5.175C2.55 16.5 1.5 15.45 1.5 12.825V9.675C1.5 7.05 2.55 6 5.175 6H8.325C10.95 6 12 7.05 12 9.675Z"
                      fill="white"
                    />
                    <path
                      d="M12.8253 1.5H9.67531C7.46288 1.5 6.37452 2.25121 6.08673 4.05369C5.99892 4.60363 6.4628 5.0625 7.01972 5.0625H8.32531C11.4753 5.0625 12.9378 6.525 12.9378 9.675V10.9806C12.9378 11.5375 13.3967 12.0014 13.9466 11.9136C15.7491 11.6258 16.5003 10.5374 16.5003 8.325V5.175C16.5003 2.55 15.4503 1.5 12.8253 1.5Z"
                      fill="white"
                    />
                  </svg>
                  {keyCopied ? "Скопировано!" : "Скопировать"}
                </span>
              </button>
              <button
                className="tu-pay-btn"
                style={{ background: "#00b3f01a", color: "#00b3f0" }}
                onClick={() => {
                  onDone?.();
                  onClose();
                }}
              >
                Смотреть инструкции
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
