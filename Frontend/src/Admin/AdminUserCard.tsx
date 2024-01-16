import "../Styles/AdminUsers.css";
import { User2, Trash2 } from "lucide-react";
import axios from "axios";

interface AdminUserCardProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    _id: string;
  };
  getUsers: () => void;
}

export const AdminUserCard: React.FC<AdminUserCardProps> = ({ user, getUsers }) => {


  function handleDelete(id: string) {
    axios.delete(`http://localhost:8080/user/delete-user/${id}`)
      .then(() => getUsers());
  }

  return (
    <div id="admin-user-card">
      <div className="admin-user-logo">
        <User2 fill="orange" color="orange" size={25} />
      </div>
      <div className="admin-user-name">{`${user.firstName} ${user.lastName}`}</div>
      <div className="admin-user-email" >{user.email}</div>
      <div className="admin-user-gender" >{user.mobile}</div>
      <div
        className="admin-user-gender"
        id="delete-user-btn"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Trash2 color="red" onClick={() => handleDelete(user._id)} />
      </div>
    </div>
  );
};
