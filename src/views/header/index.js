import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../translations/i18n";
import "./header.css";

function Header() {
  const location = useLocation();

  const { t } = useTranslation();

  const [language, setLanguage] = useState("tr");

  const handleOnclick = (e) => {
    setLanguage(e);
    i18n.changeLanguage(e);
  };

  const renderRouteTitle = () => {
    switch (location.pathname) {
      case "/":
        return (
          <h3>
            {t("home")} {t("screen")}
          </h3>
        );
      case "/users":
        return (
          <h3>
            {t("users")} {t("screen")}
          </h3>
        );
      default:
        break;
    }
  };

  return (
    <div className="headerContainer">
      {renderRouteTitle()}
      <div className="dropdownMainContainer">
        <div className="dropdownContainer">
          <div>
            <h3>{t("language")}:</h3>
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              <div>{language === "en" ? t("english") : t("turkish")}</div>
              <div className="downCaret">&#709;</div>
            </button>
            <div className="dropdown-content">
              <span onClick={() => handleOnclick("tr")}>{t("turkish")}</span>
              <span onClick={() => handleOnclick("en")}>{t("english")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
