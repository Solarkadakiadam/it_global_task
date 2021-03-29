import React, { useState, useEffect } from "react";
import UserList from "../../components/userList";
import "./users.css";
import axios from "axios";
import UserDetail from "../../components/userDetail";

function Users() {
  const [data, setData] = useState();
  const [showDetail, setShowDetail] = useState(false);
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");

      setData(result.data);
    };
    fetchData();
  }, []);

  console.log(data);

  const handleShowDetail = () => {
    setUserDetail({
      name: "",
      username: "",
      street: "",
      city: "",
    });
    setShowDetail((older) => !older);
  };

  const handleUserDetail = (detail) => {
    const simpleUserInfo = {
      name: detail.name,
      username: detail.username,
      street: detail.address.street,
      city: detail.address.city,
    };

    setUserDetail(simpleUserInfo);
    setShowDetail(true);
  };

  const userDetailOnChange = (key, value) => {
    setUserDetail({
      ...userDetail,
      [key]: value,
    });
  };

  const saveUser = () => {
    alert(
      `User Name: ${userDetail.username}, Name:${userDetail.name}, City: ${userDetail.city}, Street: ${userDetail.street}`
    );
  };

  console.log(userDetail);

  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <h2>Users</h2>
        <button onClick={handleShowDetail} className="newButton">
          <h2>New</h2>
        </button>
      </div>
      <UserList setUserDetail={handleUserDetail} data={data} />
      {showDetail && (
        <div>
          <UserDetail onChange={userDetailOnChange} userDetail={userDetail} />
          <button onClick={saveUser} className="newButton">
            <h2>Save User</h2>
          </button>
        </div>
      )}
    </div>
  );
}

export default Users;
