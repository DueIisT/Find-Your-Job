import emptyProfileImage from "../../../assets/images.png";
import { Dashboard } from "../../../assets/dashboard";
import { Statistics } from "../../../assets/statistics";
import { Settings } from "../../../assets/settings";
import { HelpIcon } from "../../../assets/help";
import "./AccountInfo.scss";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface AccountInfoProps {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AccountInfo({ login, setLogin }: AccountInfoProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const iconDefault = "rgba(255, 255, 255, 0.87)";
  const iconActive = "#d1f06e";

  const navItems = [
    { label: "Dashboard", Icon: Dashboard, route: "/dashboard" },
    { label: "My Statistics", Icon: Statistics, route: "/statistics" },
    { label: "Settings", Icon: Settings, route: "/settings" },
    { label: "Help", Icon: HelpIcon, route: "/help" },
  ];

  // 👇 при загрузке (или при смене URL) выставляем активный пункт
  useEffect(() => {
    const currentIndex = navItems.findIndex((item) =>
      location.pathname.startsWith(item.route)
    );
    setActiveIndex(currentIndex !== -1 ? currentIndex : null);
  }, [location.pathname]); // обновляется при каждом изменении пути

  const handleNavClick = (index: number, route: string) => {
    setActiveIndex(index);
    navigate(route);
  };

  return (
    <div className="account-info-wrapper">
      <div className="account-container">
        <img
          className="profile-img"
          src={emptyProfileImage}
          alt="Profile"
        />
        <div className="profile-info">
          <div className="profile-name">Dima Murzin</div>
          <div className="profile-mail">dimon4ik1456@gmail.com</div>
        </div>
      </div>

      <div className="nav-container">
        {navItems.map(({ label, Icon, route }, index) => (
          <div
            key={label}
            className={`nav-element ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleNavClick(index, route)}
          >
            <Icon
              iconColor={activeIndex === index ? iconActive : iconDefault}
            />
            <span>{label}</span>
          </div>
        ))}

        <button
          type="button"
          className={login ? "logout-button" : "login-button"}
          onClick={() => setLogin(!login)}
        >
          {login ? "Log Out" : "Log In"}
        </button>
      </div>
    </div>
  );
}
