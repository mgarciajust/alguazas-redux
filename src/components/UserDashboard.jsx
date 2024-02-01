import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

export default function UserDashboard (){
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <div>
                <h4>soy un USER dashboard</h4>
                <button onClick={handleLogout}>Log out</button>
            </div>
        </>
    );
}