import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'


export default function AdminDashboard() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    redirectToHome()
  }, [])

  let navigate = useNavigate()


  const redirectToHome = () => {
        navigate('/')
    }

  const handleLogout = () => {
    dispatch(logout());
    redirectToHome()
  };

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