import React, { useEffect, useState } from "react";
import "../styles/first.scss";
import logo from "../assests/bridgelabz.jpg";
import { login } from "../http";

const First = () => {

  const [userID, setUserID] = useState("");
  const [pwd, setPwd] = useState("");
  const [user, setUser] = useState();
  const [name, setName] = useState("");

  const handleLogin = async()=>{
    const userData=await login("users/login",{UserID: userID, Password: pwd});
    setUser(userData.data?.data);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setName(user.Name)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [user]);

  return (
    <div className="main">
        <div className="img-div">
            <img src={logo} alt="bridgeLabz" />
        </div>
      <div className="txt-div">
        <span className="attend-txt">ATTENDENCE LOGIN LOGOUT MONITORING SYSTEM</span>
      </div>
      <div className="details-div">
        <div className="user-div">
            <input type="text" placeholder="userID" className="user" onChange={(e)=>{setUserID(e.target.value)}}/>
        </div>
        <div className="pwd-div">
        <input type="password" placeholder="password" className="pwd" onChange={(e)=>{setPwd(e.target.value)}}/>

        </div>
      </div>
      <div className="btn-div">
        <div className="login-div">
        <button className="in-btn" onClick={handleLogin}>Login</button>

        </div>
        <div className="logout-div">
            <button className="out-btn">Logout</button>
        </div>
      </div>
      <span>{name}</span>
    </div>
  );
};

export default First;
