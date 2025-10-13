import "./Header.scss";
import { SunIcon } from "../../../assets/sun-icon";
import dayjs from "dayjs";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <div className="header-logo">FYJ</div>
          <div className="header-navigation">
            <input placeholder="Search your request" />
            <button className="search-button">Search</button>
          </div>
          <div className="current-day">
            <div style={{ fontWeight: "700" }}>{dayjs().format("dddd")}</div>
            <div>{dayjs().format("DD/MM/YYYY")}</div>
          </div>
          <SunIcon />
        </div>
      </div>
    </>
  );
}

export default Header;
