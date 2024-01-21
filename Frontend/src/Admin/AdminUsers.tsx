import { useState, useEffect } from "react";
import "../Styles/AdminUsers.css";
import { AdminUserCard } from "./AdminUserCard";
import axios from "axios";
import { Grid, Skeleton } from "@chakra-ui/react";

export const AdminUsers = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
  function getUsers() {
    setLoading(true);
    axios.get(`${API_URL}/user/getusers`).then((res) => {
      setLoading(false);
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
        {loading && (
          <Grid
            justifyContent="center"
            gap="30px"
            w={{ base: "75vw", lg: "80vw" }}
            m="auto"
            alignItems={"center"}
          >
            <Skeleton
              height="50px"
              width={{ base: "75vw", lg: "70vw" }}
            ></Skeleton>
            <Skeleton
              height="50px"
              width={{ base: "75vw", lg: "70vw" }}
            ></Skeleton>
            <Skeleton
              height="50px"
              width={{ base: "75vw", lg: "70vw" }}
            ></Skeleton>
            <Skeleton
              height="50px"
              width={{ base: "75vw", lg: "70vw" }}
            ></Skeleton>
            <Skeleton
              height="50px"
              width={{ base: "75vw", lg: "70vw" }}
            ></Skeleton>
            <Skeleton
              height="50px"
              width={{ base: "75vw", lg: "70vw" }}
            ></Skeleton>
            <Skeleton
              height="50px"
              width={{ base: "75vw", lg: "70vw" }}
            ></Skeleton>
            <Skeleton
              height="50px"
              width={{ base: "75vw", lg: "70vw" }}
            ></Skeleton>
          </Grid>
        )}
        {userData?.map((user) => (
          <AdminUserCard user={user} getUsers={getUsers} />
        ))}
      </div>
    </div>
  );
};
