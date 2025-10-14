import emptyProfileImage from "../../../assets/images.png";
import { Dashboard } from "../../../assets/dashboard";
import { Statistics } from "../../../assets/statistics";
import { Settings } from "../../../assets/settings";
import { HelpIcon } from "../../../assets/help";
import "./AccountInfo.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface AccountInfoProps {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AccountInfo({ login, setLogin }: AccountInfoProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  
  const iconDefault = "rgba(255, 255, 255, 0.87)";
  const iconActive = "#d1f06e";

  const navItems = [
    { label: "Dashboard", Icon: Dashboard, route: "/" },
    { label: "My Statistics", Icon: Statistics, route: "/statistics" },
    { label: "Settings", Icon: Settings, route: "/settings" },
    { label: "Help", Icon: HelpIcon, route: "/help" },
  ];

    const handleNavClick = (index: number, route: string) => {
    setActiveIndex(index);
    navigate(route);
  };

  return (
    <>
      <div className="account-container">
        <img
          className="profile-img"
          src={emptyProfileImage}
          alt="Profile image"
        />
        <div className="profile-info">
          <div className="profile-name">Dima Murzin</div>
          <div className="profile-mail">dimon4ik1456@gmail.com</div>
        </div>
      </div>

      <div className="nav-container">
        {navItems.map(({ label, Icon, route }, index) => (
          <div
            key={index}
            className={`nav-element ${activeIndex === index ? "active" : ""}`}
             onClick={() => handleNavClick(index, route)}
          >
            <Icon
              iconColor={activeIndex === index ? iconActive : iconDefault}
            />
            {label}
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
    </>
  );
}
