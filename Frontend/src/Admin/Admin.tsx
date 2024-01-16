import "../Styles/AdminDashboard.css";
import "../Styles/AdminUsers.css";

import { Users2, Music4, ListMusic } from "lucide-react";

export const Admin = () => {
  // const token = localStorage.getItem("token");
  // console.log(token)
  return (
    <div id="Admin-dashboard">
      {/* <h2>Dashboard Analytics</h2> */}
      <h2>Information</h2>
      <div id="detail">
        <div className="detail-card">
          <div className="detail-logo" style={{ backgroundColor: "#D3F4EA" }}>
            <Users2 size={30} fill="#F681A8" color="#F681A8" />
          </div>
          <div className="detail-text">
            <p>Total Admins</p>
            <h3>{4}</h3>
          </div>
        </div>
        <div className="detail-card">
          <div className="detail-logo" style={{ backgroundColor: "#ffd7d2" }}>
            <Music4 size={30} color="#3ce64d" />
          </div>
          <div className="detail-text">
            <p>Total Products</p>
            <h3>{136}</h3>
          </div>
        </div>
        <div className="detail-card">
          <div className="detail-logo" style={{ backgroundColor: "#aaf2f2" }}>
            <ListMusic size={30} fill="#F681A8" color="#F681A8" />
          </div>
          <div className="detail-text">
            <p>Total Cetagory</p>
            <h3>{10}</h3>
          </div>
        </div>
      </div>
      <div id="admin-data-div">
        <h1 style={{fontSize:"x-large",fontWeight:"500",color:"rgb(73, 73, 73)"}}>Admins</h1>
            <div id="admin-user-head">
                <div className="admin-user-logo">{"User"}</div>
                <div className="admin-user-name">{"Name"}</div>
                <div className="admin-user-email">{"E-mail"}</div>
                <div className="admin-user-gender">{"Mobile"}</div>
            </div>
            <div id="admin-data">
                <div id="admin-image">
                    <img src="https://avatars.githubusercontent.com/u/93611786?v=4" alt="" />
                </div>
                <h2 className="admin--name">Anshul Kushwah</h2>
                <h2 className="admin--email">kushwahasg4450@gmail.com</h2>
                <h2 className="admin--gender">7906192050</h2>
            </div>
            <div id="admin-data">
                <div id="admin-image">
                    <img src="https://avatars.githubusercontent.com/u/115460375?v=4" alt="" />
                </div>
                <h2 className="admin--name">Nitesh Chandrakar</h2>
                <h2 className="admin--email">niteshchandrakar2@gmail.com</h2>
                <h2 className="admin--gender">9754601089</h2>
            </div>
            <div id="admin-data">
                <div id="admin-image">
                    <img src="https://avatars.githubusercontent.com/u/103162888?v=4" alt="" />
                </div>
                <h2 className="admin--name">Shashikant Yadav</h2>
                <h2 className="admin--email">shashi31396s@gmail.com</h2>
                <h2 className="admin--gender">9458707066</h2>
            </div>
            <div id="admin-data">
                <div id="admin-image">
                    <img src="https://avatars.githubusercontent.com/u/112534172?s=64&v=4" alt="" />
                </div>
                <h2 className="admin--name">Prateek Shukla</h2>
                <h2 className="admin--email">prateekshuklaps0@gmail.com.</h2>
                <h2 className="admin--gender">9990821422</h2>
            </div>
            <div id="admin-data">
                
            </div>
      </div>
    </div>
  );
};

