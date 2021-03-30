import React from "react";
import "./userDetail.css";
import { useTranslation } from "react-i18next";

function UserDetail(props) {
  const { t } = useTranslation();

  const { userDetail } = props;

  // e.prevent default used to prevent browser from re-rendering
  const handleSubmitForm = (e) => {
    e.preventDefault();
    props.saveUser();
  };

  return (
    <div>
      <h3>{t("userDetailForm")}</h3>
      <form onSubmit={handleSubmitForm}>
        {props.questions.map((col) => (
          <label key={col.key}>
            {t(col.name)}
            <input
              placeholder={t(col.name)}
              readOnly={!props.showSaveButton}
              required={col.required}
              onChange={(e) => props.onChange(col.key, e.target.value)}
              value={userDetail[`${col.key}`]}
              type="text"
              name={col.key}
            />
          </label>
        ))}
        {props.showSaveButton && (
          <button type="submit" className="newButton">
            <h2>{t("saveUser")}</h2>
          </button>
        )}
      </form>
      {/* <input type="submit" value="Submit" /> */}
    </div>
  );
}

export default UserDetail;
