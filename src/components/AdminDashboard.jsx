import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { useLocation, useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const location = useLocation()
  const navigation = useNavigate()
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    console.log("Saliendo de admin!")
    dispatch(logout());
    navigation("/")
  };

  useEffect(() => {
    if (!user.token || !user.role) {
      navigation("/");
    } else {
      navigation("/admin");
    }
  }, [user.token, user.role]);


  return (
    <>
      <div>
        <h4>soy un ADMIN dashboard</h4>
        <p>Email: {user.email}</p>
        <button onClick={handleLogout}>Log out</button>
      </div>
    </>
  );
}