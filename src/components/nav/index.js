import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./nav.css";

function Navigation() {
  const { t } = useTranslation();

  const location = useLocation();

  const pathName = location.pathname;

  return (
    <nav>
      <div
        className={`${
          pathName === "/" ? "navSubContainer" : "navSubContainerActive"
        }`}
      >
        <div className={`${pathName === "/" ? "activeLink" : "passiveLink"}`}>
          <NavLink style={{ color: "inherit" }} to="/">
            {t("home")}
          </NavLink>
        </div>
        <div className="passiveLink">
          <NavLink style={{ color: "inherit" }} to="/users">
            {pathName === "/user" ? "/" : ""}
            {t("users")}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
