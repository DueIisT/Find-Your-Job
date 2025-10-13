import logo from "../../assets/profile-image.jpg";
import { Dashboard } from "../../assets/dashboard";
import { Statistics } from "../../assets/statistics";
import { Settings } from "../../assets/settings";
import { HelpIcon } from "../../assets/help";
import "./AccountInfo.scss";
import "./button.scss";
import { useState } from "react";

export function AccountInfo() {
  // хранит индекс активного элемента
  const [activeIndex, setActiveIndex] = useState(0);

  const iconDefault = "rgba(255, 255, 255, 0.87)";
  const iconActive = "#d1f06e";

  const navItems = [
    { label: "Dashboard", Icon: Dashboard },
    { label: "My Statistics", Icon: Statistics },
    { label: "Settings", Icon: Settings },
    { label: "Help", Icon: HelpIcon },
  ];

  return (
    <>
      <div className="account-container">
        <img className="profile-img" src={logo} alt="Profile image" />
        <div className="profile-info">
          <div className="profile-name">Dima Murzin</div>
          <div className="profile-mail">dimon4ik1456@gmail.com</div>
        </div>
      </div>

      <div className="nav-container">
        {navItems.map(({ label, Icon }, index) => (
          <div
            key={index}
            className={`nav-element ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <Icon
              iconColor={activeIndex === index ? iconActive : iconDefault}
            />
            {label}
          </div>
        ))}
        <button type="button" className="logout-button">Log Out</button>
      </div>
    </>
  );
}
