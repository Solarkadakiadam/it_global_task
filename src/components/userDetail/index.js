import React from "react";
import "./userDetail.css";
import { useTranslation } from "react-i18next";

function UserDetail(props) {
  const { t } = useTranslation();

  const { userDetail } = props;

  const questions = [
    { key: "name", name: t("name") },
    { key: "username", name: t("username") },
    { key: "street", name: t("street") },
    { key: "city", name: t("city") },
  ];

  return (
    <div>
      <h3>User Detail Form</h3>
      <form>
        {questions.map((col) => (
          <label key={col.key}>
            {t(`${col.name}`)}
            <input
              onChange={(e) => props.onChange(col.key, e.target.value)}
              value={userDetail[`${col.key}`]}
              type="text"
              name={`${col.key}`}
            />
          </label>
        ))}
      </form>
      {/* <input type="submit" value="Submit" /> */}
    </div>
  );
}

export default UserDetail;
