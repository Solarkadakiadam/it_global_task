import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./userList.css";

function UserList(props) {
  const { t } = useTranslation();

  const { data } = props;

  const columns = [
    { key: "name", name: t("name") },
    { key: "username", name: t("username") },
    { key: "email", name: t("email") },
  ];

  return (
    <div>
      {data ? (
        <div className="gridContainer">
          <div className="gridCellContainer">
            {columns.map((item) => (
              <div key={item.key} className="gridCellSubContainer">
                {item.name}
              </div>
            ))}
          </div>
          <div className="gridDataContainer">
            {data.map((item) => (
              <div
                onClick={() => props.setUserDetail(item)}
                key={item.id}
                className="gridCellContainerWhite"
              >
                {columns.map((col) => (
                  <div key={col.key} className="gridCellSubContainer">
                    {item[`${col.key}`]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

export default UserList;
