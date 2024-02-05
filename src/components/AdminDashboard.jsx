import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { useLocation } from "react-router-dom";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/admin") {
      window.location.href = "/admin";
    }
  }, [location.pathname]);

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/"
  };

  return (
    <>
      <div>
        <h4>soy un ADMIN dashboard</h4>
        <button onClick={handleLogout}>Log out</button>
      </div>
    </>
  );
}