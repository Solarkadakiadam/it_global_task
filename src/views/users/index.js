import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import UserDetail from "../../components/userDetail";
import UserList from "../../components/userList";
import "./users.css";

// stupid solution to set the user to empty values
const empty_data = {
  name: "",
  username: "",
  street: "",
  city: "",
  email: "",
  id: "",
};

function Users() {
  const [data, setData] = useState();
  const [showDetail, setShowDetail] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(true);
  const [userDetail, setUserDetail] = useState();

  const { t } = useTranslation();

  // questions that are going to be shown in detail form are defined here,
  //so that the detail form can work it many different kinds of inputs
  const questions = [
    { key: "name", name: t("name"), required: true },
    { key: "username", name: t("username"), required: true },
    { key: "email", name: t("email"), required: false },
    { key: "street", name: t("street"), required: false },
    { key: "city", name: t("city"), required: false },
  ];

  // columns are defined here as the same reason of the questions
  const columns = [
    { key: "name", name: t("name") },
    { key: "username", name: t("username") },
    { key: "email", name: t("email") },
  ];

  // fetching the data from the api and setting it to data
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setData(result.data);
    };
    fetchData();
  }, []);

  // this shows and hides the create new user form
  const handleShowCreateUser = () => {
    if (userDetail !== empty_data && showSaveButton) {
      alert("You will lose the entered data if you close now");
    } else {
      if (showSaveButton) {
        setShowDetail((older) => !older);
      }
      setUserDetail(empty_data);
    }

    setShowSaveButton(true);
  };

  // this function works when the user clicks to the list and shows the details of the existing user
  const handleUserDetail = (detail) => {
    const simpleUserInfo = {
      name: detail.name,
      username: detail.username,
      street: detail.address ? detail?.address.street : detail.street,
      city: detail.address ? detail.address.city : detail.city,
      email: detail.email,
      id: detail.id,
    };
    setUserDetail(simpleUserInfo);
    setShowSaveButton(false);
    setShowDetail(true);
  };

  // this works on form the dynamically change with the names of the inputs and set the changes to the user detail
  const userDetailOnChange = (key, value) => {
    setUserDetail({
      ...userDetail,
      [key]: value,
    });
  };

  /// use effect is used to create the callback function after the new user is added to empty the user detail
  useEffect(() => {
    setUserDetail(empty_data);
  }, [data]);

  ///save user adds the user to the total user list and generates a random id
  const saveUser = () => {
    setData((oldArray) => [
      ...oldArray,
      { ...userDetail, id: new Date().getTime() },
    ]);
  };

  console.log(data);

  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <h2>{t("users")}</h2>
        <button onClick={handleShowCreateUser} className="newButton">
          <h2>{t("new")}</h2>
        </button>
      </div>
      <UserList
        columns={columns}
        setUserDetail={handleUserDetail}
        data={data}
      />
      {showDetail && (
        <div>
          <UserDetail
            questions={questions}
            showSaveButton={showSaveButton}
            saveUser={saveUser}
            onChange={userDetailOnChange}
            userDetail={userDetail}
          />
        </div>
      )}
    </div>
  );
}

export default Users;
