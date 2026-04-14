import { useState, useEffect, useRef } from "react";

import TopUpModal from "../Components/TopUpModal";
import AddDeviceModal from "../Components/AddDeviceModal";
import { Link } from "react-router-dom";

// Заглушки для иконок платформ — замени на свои
const AppleIcon = () => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.489 6.47775C17.375 6.56326 15.3625 7.65967 15.3625 10.0976C15.3625 12.9175 17.9234 13.9151 18 13.9398C17.9882 14.0006 17.5932 15.306 16.6498 16.6362C15.8086 17.8067 14.9301 18.9753 13.5937 18.9753C12.2572 18.9753 11.9133 18.2247 10.3705 18.2247C8.86697 18.2247 8.33239 19 7.10994 19C5.88748 19 5.03452 17.9169 4.0538 16.5868C2.91782 15.0248 2 12.5983 2 10.2952C2 6.60126 4.48422 4.64216 6.92912 4.64216C8.22823 4.64216 9.31114 5.46685 10.1268 5.46685C10.9031 5.46685 12.1137 4.59276 13.5917 4.59276C14.1518 4.59276 16.1644 4.64216 17.489 6.47775ZM12.8901 3.0289C13.5013 2.32773 13.9337 1.35484 13.9337 0.381938C13.9337 0.247025 13.9219 0.110211 13.8963 0C12.9019 0.0361036 11.7187 0.640364 11.0053 1.44034C10.4452 2.05601 9.92237 3.0289 9.92237 4.0151C9.92237 4.16332 9.94792 4.31153 9.95971 4.35904C10.0226 4.37044 10.1248 4.38374 10.227 4.38374C11.1193 4.38374 12.2415 3.80608 12.8901 3.0289Z"
      fill="#00B3F0"
    />
  </svg>
);

const WindowsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3333 7.09984V3.3165C18.3333 2.1415 17.8 1.6665 16.475 1.6665H13.1083C11.7833 1.6665 11.25 2.1415 11.25 3.3165V7.0915C11.25 8.27484 11.7833 8.7415 13.1083 8.7415H16.475C17.8 8.74984 18.3333 8.27484 18.3333 7.09984Z"
      fill="#00B3F0"
    />
    <path
      d="M18.3333 16.475V13.1083C18.3333 11.7833 17.8 11.25 16.475 11.25H13.1083C11.7833 11.25 11.25 11.7833 11.25 13.1083V16.475C11.25 17.8 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8 18.3333 16.475Z"
      fill="#00B3F0"
    />
    <path
      d="M8.75033 7.09984V3.3165C8.75033 2.1415 8.21699 1.6665 6.89199 1.6665H3.52533C2.20033 1.6665 1.66699 2.1415 1.66699 3.3165V7.0915C1.66699 8.27484 2.20033 8.7415 3.52533 8.7415H6.89199C8.21699 8.74984 8.75033 8.27484 8.75033 7.09984Z"
      fill="#00B3F0"
    />
    <path
      d="M8.75033 16.475V13.1083C8.75033 11.7833 8.21699 11.25 6.89199 11.25H3.52533C2.20033 11.25 1.66699 11.7833 1.66699 13.1083V16.475C1.66699 17.8 2.20033 18.3333 3.52533 18.3333H6.89199C8.21699 18.3333 8.75033 17.8 8.75033 16.475Z"
      fill="#00B3F0"
    />
  </svg>
);

const AndroidIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1.5c-.96 0-1.86.23-2.66.63L7.88.65c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 8h12a5.983 5.983 0 0 0-2.47-5.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
  </svg>
);

const TvIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
  </svg>
);

const GreyAppleIcon = () => (
  <svg
    width="16"
    height="19"
    viewBox="0 0 16 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.489 6.47775C15.375 6.56326 13.3625 7.65967 13.3625 10.0976C13.3625 12.9175 15.9234 13.9151 16 13.9398C15.9882 14.0006 15.5932 15.306 14.6498 16.6362C13.8086 17.8067 12.9301 18.9753 11.5937 18.9753C10.2572 18.9753 9.91328 18.2247 8.37047 18.2247C6.86697 18.2247 6.33239 19 5.10994 19C3.88748 19 3.03452 17.9169 2.0538 16.5868C0.917823 15.0248 0 12.5983 0 10.2952C0 6.60126 2.48422 4.64216 4.92912 4.64216C6.22823 4.64216 7.31114 5.46685 8.12677 5.46685C8.90308 5.46685 10.1137 4.59276 11.5917 4.59276C12.1518 4.59276 14.1644 4.64216 15.489 6.47775ZM10.8901 3.0289C11.5013 2.32773 11.9337 1.35484 11.9337 0.381938C11.9337 0.247025 11.9219 0.110211 11.8963 0C10.9019 0.0361036 9.71871 0.640364 9.00528 1.44034C8.44515 2.05601 7.92237 3.0289 7.92237 4.0151C7.92237 4.16332 7.94792 4.31153 7.95971 4.35904C8.0226 4.37044 8.1248 4.38374 8.227 4.38374C9.11927 4.38374 10.2415 3.80608 10.8901 3.0289Z"
      fill="#8E8E93"
    />
  </svg>
);

const GreyAndroidIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.1766 6.9272C16.1188 6.86939 16.0602 6.81314 16.0016 6.75767L17.9422 4.81705C18.0003 4.75898 18.0463 4.69004 18.0777 4.61417C18.1092 4.5383 18.1254 4.45698 18.1254 4.37486C18.1254 4.29274 18.1092 4.21142 18.0777 4.13555C18.0463 4.05968 18.0003 3.99074 17.9422 3.93267C17.8841 3.8746 17.8152 3.82854 17.7393 3.79711C17.6634 3.76569 17.5821 3.74951 17.5 3.74951C17.4179 3.74951 17.3366 3.76569 17.2607 3.79711C17.1848 3.82854 17.1159 3.8746 17.0578 3.93267L15.0266 5.96392C13.556 4.92879 11.801 4.37447 10.0027 4.37712C8.20441 4.37978 6.45105 4.93929 4.9836 5.97877L2.94219 3.93267C2.82492 3.8154 2.66586 3.74951 2.5 3.74951C2.33415 3.74951 2.17509 3.8154 2.05782 3.93267C1.94054 4.04995 1.87466 4.20901 1.87466 4.37486C1.87466 4.54071 1.94054 4.69977 2.05782 4.81705L4.01563 6.77486C3.14101 7.60351 2.44464 8.60188 1.96911 9.7089C1.49358 10.8159 1.24889 12.0083 1.25 13.2131V14.9999C1.25 15.3314 1.3817 15.6493 1.61612 15.8837C1.85054 16.1182 2.16848 16.2499 2.5 16.2499H17.5C17.8315 16.2499 18.1495 16.1182 18.3839 15.8837C18.6183 15.6493 18.75 15.3314 18.75 14.9999V13.1249C18.7532 11.9728 18.5274 10.8316 18.0856 9.76764C17.6438 8.70367 16.9949 7.73814 16.1766 6.9272ZM7.1875 13.1249C7.00208 13.1249 6.82083 13.0699 6.66666 12.9669C6.51249 12.8638 6.39232 12.7174 6.32137 12.5461C6.25041 12.3748 6.23184 12.1863 6.26802 12.0045C6.30419 11.8226 6.39348 11.6556 6.52459 11.5244C6.6557 11.3933 6.82275 11.304 7.00461 11.2679C7.18646 11.2317 7.37496 11.2503 7.54627 11.3212C7.71758 11.3922 7.86399 11.5123 7.96701 11.6665C8.07002 11.8207 8.125 12.0019 8.125 12.1874C8.125 12.436 8.02623 12.6745 7.85042 12.8503C7.6746 13.0261 7.43614 13.1249 7.1875 13.1249ZM12.8125 13.1249C12.6271 13.1249 12.4458 13.0699 12.2917 12.9669C12.1375 12.8638 12.0173 12.7174 11.9464 12.5461C11.8754 12.3748 11.8568 12.1863 11.893 12.0045C11.9292 11.8226 12.0185 11.6556 12.1496 11.5244C12.2807 11.3933 12.4477 11.304 12.6296 11.2679C12.8115 11.2317 13 11.2503 13.1713 11.3212C13.3426 11.3922 13.489 11.5123 13.592 11.6665C13.695 11.8207 13.75 12.0019 13.75 12.1874C13.75 12.436 13.6512 12.6745 13.4754 12.8503C13.2996 13.0261 13.0611 13.1249 12.8125 13.1249Z"
      fill="#8E8E93"
    />
  </svg>
);

const GreyWindowsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3333 7.09984V3.3165C18.3333 2.1415 17.8 1.6665 16.475 1.6665H13.1083C11.7833 1.6665 11.25 2.1415 11.25 3.3165V7.0915C11.25 8.27484 11.7833 8.7415 13.1083 8.7415H16.475C17.8 8.74984 18.3333 8.27484 18.3333 7.09984Z"
      fill="#8E8E93"
    />
    <path
      d="M18.3333 16.475V13.1083C18.3333 11.7833 17.8 11.25 16.475 11.25H13.1083C11.7833 11.25 11.25 11.7833 11.25 13.1083V16.475C11.25 17.8 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8 18.3333 16.475Z"
      fill="#8E8E93"
    />
    <path
      d="M8.75033 7.09984V3.3165C8.75033 2.1415 8.21699 1.6665 6.89199 1.6665H3.52533C2.20033 1.6665 1.66699 2.1415 1.66699 3.3165V7.0915C1.66699 8.27484 2.20033 8.7415 3.52533 8.7415H6.89199C8.21699 8.74984 8.75033 8.27484 8.75033 7.09984Z"
      fill="#8E8E93"
    />
    <path
      d="M8.75033 16.475V13.1083C8.75033 11.7833 8.21699 11.25 6.89199 11.25H3.52533C2.20033 11.25 1.66699 11.7833 1.66699 13.1083V16.475C1.66699 17.8 2.20033 18.3333 3.52533 18.3333H6.89199C8.21699 18.3333 8.75033 17.8 8.75033 16.475Z"
      fill="#8E8E93"
    />
  </svg>
);

const GreyTvIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9667 0H3.675C1.65 0 0 1.65 0 3.675V9.09167V9.25833C0 11.2917 1.65 12.9333 3.675 12.9333H6.875C7.33333 12.9333 7.70833 13.3083 7.70833 13.7667V14.575C7.70833 15.0333 7.33333 15.4083 6.875 15.4083H4.85833C4.51667 15.4083 4.23333 15.6917 4.23333 16.0333C4.23333 16.375 4.50833 16.6667 4.85833 16.6667H11.8167C12.1583 16.6667 12.4417 16.3833 12.4417 16.0417C12.4417 15.7 12.1583 15.4167 11.8167 15.4167H9.8C9.34167 15.4167 8.96667 15.0417 8.96667 14.5833V13.775C8.96667 13.3167 9.34167 12.9417 9.8 12.9417H12.975C15.0083 12.9417 16.65 11.2917 16.65 9.26667V9.1V3.68333C16.6417 1.65 14.9917 0 12.9667 0Z"
      fill="#8E8E93"
    />
  </svg>
);

const devices = [
  {
    id: 1,
    name: "29262210 Vless (iPhone/iPad)",
    date: "06.06.2024",
    icon: <AppleIcon />,
    key: "ss/vsovsdPSOOOXOASDODFosd0120123k",
  },
  {
    id: 2,
    name: "29262210 B450 (Windows)",
    date: "06.06.2024",
    icon: <WindowsIcon />,
    key: "ss/vsovsdPSOOOXOASDODFosd0120123k",
  },
];

const instructions = [
  {
    label: "iOS (iPhone, iPad)",
    icon: <AppleIcon />,
    greyIcon: <GreyAppleIcon />,
  },
  { label: "Android", icon: <AndroidIcon />, greyIcon: <GreyAndroidIcon /> },
  { label: "Windows", icon: <WindowsIcon />, greyIcon: <GreyWindowsIcon /> },
  { label: "TV", icon: <TvIcon />, greyIcon: <GreyTvIcon /> },
];

export default function Home({
  appName = "Jesko VPN (3D)",
  days = 112,
  balance = "142,23",
}) {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [keyCopied, setKeyCopied] = useState(false);
  const [deviceMenuOpen, setDeviceMenuOpen] = useState(false);
  const [topUpOpen, setTopUpOpen] = useState(false);
  const [addDeviceOpen, setAddDeviceOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [fistUrls, setFistUrls] = useState(null);
  const menuRef = useRef(null);
  const logoRef = useRef(null);

  // Анимация лого из image sequence (160 кадров, 30 FPS)
  useEffect(() => {
    const totalFrames = 160;
    const fps = 30;
    let currentFrame = 0;
    let intervalId = null;
    let loadedCount = 0;

    const images = [];
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/img/sequence/${String(i).padStart(4, "0")}.png`;
      img.onload = () => {
        loadedCount++;
        // Запускаем анимацию только когда все кадры загружены
        if (loadedCount === totalFrames && !intervalId) {
          intervalId = setInterval(() => {
            if (logoRef.current) {
              logoRef.current.src = images[currentFrame].src;
              currentFrame = (currentFrame + 1) % totalFrames;
            }
          }, 1000 / fps);
        }
      };
      images.push(img);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  // Предзагружаем обе webp-анимации кулаков и присваиваем src обоим <img>
  // в одном React-коммите, чтобы браузер начал декодирование одновременно
  // и встроенные анимации webp шли синхронно.
  useEffect(() => {
    let cancelled = false;
    let createdUrls = [];
    Promise.all([
      fetch("/img/left.webp").then((r) => r.blob()),
      fetch("/img/right.webp").then((r) => r.blob()),
    ])
      .then(([leftBlob, rightBlob]) => {
        if (cancelled) return;
        const left = URL.createObjectURL(leftBlob);
        const right = URL.createObjectURL(rightBlob);
        createdUrls = [left, right];
        setFistUrls({ left, right });
      })
      .catch(() => {
        if (cancelled) return;
        setFistUrls({ left: "/img/left.webp", right: "/img/right.webp" });
      });
    return () => {
      cancelled = true;
      createdUrls.forEach((u) => URL.revokeObjectURL(u));
    };
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText("https://yourdomain.com/ref/abc123");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    showToast("Пригласительная ссылка скопирована");
  };

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="db-root">
        {/* Toast уведомление о копировании */}
        {toast && (
          <div className="db-toast">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect width="22" height="22" rx="11" fill="#fff" />
              <path
                d="M6.5 11.5L9.5 14.5L15.5 8"
                stroke="#34c759"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{toast}</span>
          </div>
        )}

        {/* Header */}
        <div className="db-header">
          <div className="db-logo">
            <img
              ref={logoRef}
              src="/img/sequence/0001.png"
              width={60}
              height={60}
              alt="logo"
              style={{ borderRadius: 8 }}
            />
            <span className="db-logo-text">Jesko VPN</span>
          </div>
          <div style={{ position: "relative" }} ref={menuRef}>
            <button
              className="db-menu-btn"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
            </button>

            {menuOpen && (
              <div className="db-dropdown">
                <button
                  className="db-dropdown-item"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Тех. поддержка</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0002 9.99984C12.3013 9.99984 14.1668 8.13436 14.1668 5.83317C14.1668 3.53198 12.3013 1.6665 10.0002 1.6665C7.69898 1.6665 5.8335 3.53198 5.8335 5.83317C5.8335 8.13436 7.69898 9.99984 10.0002 9.99984Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="db-dropdown-divider" />
                <button
                  className="db-dropdown-item"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Правила</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.49984 18.3332H12.4998C16.6665 18.3332 18.3332 16.6665 18.3332 12.4998V7.49984C18.3332 3.33317 16.6665 1.6665 12.4998 1.6665H7.49984C3.33317 1.6665 1.6665 3.33317 1.6665 7.49984V12.4998C1.6665 16.6665 3.33317 18.3332 7.49984 18.3332Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.125 7.5H6.875"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.125 12.5H6.875"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="db-dropdown-divider" />
                <Link
                  to={"/register"}
                  className="db-dropdown-item logout"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Выйти</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.4165 6.3002C7.67484 3.3002 9.2165 2.0752 12.5915 2.0752H12.6998C16.4248 2.0752 17.9165 3.56686 17.9165 7.29186V12.7252C17.9165 16.4502 16.4248 17.9419 12.6998 17.9419H12.5915C9.2415 17.9419 7.69984 16.7335 7.42484 13.7835"
                      stroke="#FF3B30"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.4999 10H3.0166"
                      stroke="#FF3B30"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.87516 7.2085L2.0835 10.0002L4.87516 12.7918"
                      stroke="#FF3B30"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Balance */}
        <div className="db-balance">
          <div className="db-balance-label">Осталось</div>
          <div className="db-days">
            {days} <span className="db-days-unit">дн</span>
          </div>
          <div className="db-rub">
            Баланс: <span>{balance} RUB</span>
          </div>
          <button className="db-topup-btn" onClick={() => setTopUpOpen(true)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.53 13.03L12.53 16.03C12.38 16.18 12.19 16.25 12 16.25C11.81 16.25 11.62 16.18 11.47 16.03L8.47 13.03C8.18 12.74 8.18 12.26 8.47 11.97C8.76 11.68 9.24 11.68 9.53 11.97L11.25 13.69V8.5C11.25 8.09 11.59 7.75 12 7.75C12.41 7.75 12.75 8.09 12.75 8.5V13.69L14.47 11.97C14.76 11.68 15.24 11.68 15.53 11.97C15.82 12.26 15.82 12.74 15.53 13.03Z"
                fill="white"
              />
            </svg>
            Пополнить
          </button>
        </div>

        {/* Devices */}
        <div className="db-section">
          <div className="db-section-header">
            <span className="db-section-title">Мои устройства</span>
            <span className="db-connected">{devices.length} подключено</span>
          </div>
          <div className="db-card">
            {devices.map((d) => (
              <div
                className="db-device"
                key={d.id}
                onClick={() => setSelectedDevice(d)}
                style={{ cursor: "pointer" }}
              >
                <div className="db-device-icon">{d.icon}</div>
                <div className="db-device-info">
                  <div className="db-device-name">{d.name}</div>
                  <div className="db-device-date">{d.date}</div>
                </div>
              </div>
            ))}
            <button
              className="db-add-device"
              onClick={() => setAddDeviceOpen(true)}
            >
              <div className="db-add-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 16H24"
                    stroke="#00B3F0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 24V8"
                    stroke="#00B3F0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="db-add-label">Добавить устройство</span>
            </button>
          </div>
          <div className="db-tariff">Тариф 100₽/мес за одно устройство</div>
        </div>

        {/* Referral */}
        <div className="db-section">
          <div className="db-card" style={{ padding: 0, overflow: "hidden" }}>
            <div className="db-referral">
              <div className="db-referral-text">
                <div className="db-referral-title">
                  Пригласи друга и получи 50₽ на баланс
                </div>
                <div className="db-referral-desc">
                  Отправьте ссылку другу. Когда ваш друг зайдёт на наш <br />{" "}
                  сайт и зарегистрируется, вы получите 50₽ на баланс!
                </div>
                <div className="db-referral-actions">
                  <button className="db-ref-btn share">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3304 6.6748C15.0304 6.9073 16.1329 8.2948 16.1329 11.3323V11.4298C16.1329 14.7823 14.7904 16.1248 11.4379 16.1248H6.55535C3.20285 16.1248 1.86035 14.7823 1.86035 11.4298V11.3323C1.86035 8.3173 2.94785 6.9298 5.60285 6.6823"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 11.2498V2.71484"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.5123 4.3875L8.9998 1.875L6.4873 4.3875"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Поделиться
                  </button>
                  <button className="db-ref-btn copy" onClick={handleCopy}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 9.675V12.825C12 15.45 10.95 16.5 8.325 16.5H5.175C2.55 16.5 1.5 15.45 1.5 12.825V9.675C1.5 7.05 2.55 6 5.175 6H8.325C10.95 6 12 7.05 12 9.675Z"
                        fill="#00B3F0"
                      />
                      <path
                        d="M12.8253 1.5H9.67531C7.46288 1.5 6.37452 2.25121 6.08673 4.05369C5.99892 4.60363 6.4628 5.0625 7.01972 5.0625H8.32531C11.4753 5.0625 12.9378 6.525 12.9378 9.675V10.9806C12.9378 11.5375 13.3967 12.0014 13.9466 11.9136C15.7491 11.6258 16.5003 10.5374 16.5003 8.325V5.175C16.5003 2.55 15.4503 1.5 12.8253 1.5Z"
                        fill="#00B3F0"
                      />
                    </svg>

                    {copied ? "Скопировано!" : "Скопировать"}
                  </button>
                </div>
              </div>
              {/* Место для стикера — замени src на свой */}
              <div className="db-referral-emoji">
                {fistUrls && (
                  <>
                    <span className="fist">
                      <img
                        src={fistUrls.left}
                        alt=""
                        draggable="false"
                        width={100}
                        height={100}
                      />
                    </span>
                    <span className="fist">
                      <img
                        src={fistUrls.right}
                        alt=""
                        draggable="false"
                        width={100}
                        height={100}
                      />
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="db-section db-instructions">
          <div className="db-section-header">
            <span className="db-section-title">Инструкции</span>
          </div>
          <div className="db-card">
            {instructions.map((item, i) => (
              <div className="db-device" key={i} style={{ cursor: "pointer" }}>
                <div className="db-device-icon">{item.greyIcon}</div>
                <div className="db-device-info">
                  <div className="db-device-name">{item.label}</div>
                </div>
                <svg
                  className="db-chevron"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="db-spacer" />

        {selectedDevice && (
          <div
            className="db-modal-overlay"
            onClick={() => {
              setSelectedDevice(null);
              setDeviceMenuOpen(false);
            }}
          >
            <div className="db-modal" onClick={(e) => e.stopPropagation()}>
              <div className="db-modal-header">
                <span className="db-modal-title">Ваш ключ</span>
                <button
                  className="db-modal-close"
                  onClick={() => {
                    setSelectedDevice(null);
                    setDeviceMenuOpen(false);
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33398 3.3335L12.6667 12.6662"
                      stroke="#8E8E93"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33331 12.6662L12.666 3.3335"
                      stroke="#8E8E93"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="db-modal-key">{selectedDevice.key}</div>
              <div className="db-modal-actions">
                <button
                  className="db-modal-copy"
                  onClick={() => {
                    navigator.clipboard?.writeText(selectedDevice.key);
                    setKeyCopied(true);
                    setTimeout(() => setKeyCopied(false), 2000);
                    showToast("Ключ скопирован");
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                </button>
                <div className="db-modal-more-wrap">
                  <button
                    className="db-modal-more"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeviceMenuOpen((v) => !v);
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#00b3f0"
                    >
                      <circle cx="5" cy="12" r="2" />
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="19" cy="12" r="2" />
                    </svg>
                  </button>
                  {deviceMenuOpen && (
                    <div
                      className="db-more-popover"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        className="db-more-item"
                        onClick={() => {
                          showToast("Устройство удалено");
                          setDeviceMenuOpen(false);
                          setSelectedDevice(null);
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ff3b30"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                          <path d="M10 11v6M14 11v6" />
                          <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                        </svg>
                        Удалить
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {topUpOpen && (
          <TopUpModal
            onClose={() => setTopUpOpen(false)}
            onPay={({ amount, payMethod }) => {
              console.log("Оплата:", amount, payMethod);
              setTopUpOpen(false);
            }}
          />
        )}

        {addDeviceOpen && (
          <AddDeviceModal
            onClose={() => setAddDeviceOpen(false)}
            onDone={() => setAddDeviceOpen(false)}
            onTopUp={() => {
              setAddDeviceOpen(false);
              setTopUpOpen(true);
            }}
          />
        )}
      </div>
    </>
  );
}
