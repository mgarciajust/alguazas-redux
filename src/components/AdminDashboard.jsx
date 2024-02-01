import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

export default function AdminDashboard (){
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
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