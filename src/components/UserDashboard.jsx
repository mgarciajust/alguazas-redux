import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { useLocation } from "react-router-dom";

export default function UserDashboard() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/"
  };

  return (
    <>
      <div>
        <h4>soy un USER dashboard</h4>
        <p>Email: {user.email}</p>
        <button onClick={handleLogout}>Log out</button>
      </div>
    </>
  );
}