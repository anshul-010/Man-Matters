import  { useState, useEffect } from "react";
import "../Styles/AdminUsers.css";
import { AdminUserCard } from "./AdminUserCard";
import axios from "axios";

export const AdminUsers = () => {
  const [userData, setUserData] = useState([]);

  

  function getUsers() {
    axios
      .get(`https://man-matters.onrender.com/user/getusers`)
      .then((res) => {
        setUserData(res.data.allUsers);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="admin-user">
      <h2>All User Details</h2>
      <div id="admin-user-head">
        <div className="admin-user-logo">{"User"}</div>
        <div className="admin-user-name">{"Name"}</div>
        <div className="admin-user-email">{"E-mail"}</div>
        <div className="admin-user-gender">{"Mobile"}</div>
        <div className="admin-user-gender">{"Remove"}</div>
      </div>
      <div>
        {userData?.map((user) => (
          <AdminUserCard user={user} getUsers={getUsers} />
        ))}
      </div>
    </div>
  );
};
