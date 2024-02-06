import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setToken, setEmail, setRole } from "./redux/userSlice";
import  Header  from "./components/Header.jsx";
import  Email  from "./components/Email.jsx";
import  AdminDashboard  from "./components/AdminDashboard.jsx";
import  UserDashboard  from "./components/UserDashboard.jsx";
import "./App.css";

function App() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    const role = useSelector((state) => state.user.role);

    const handleLoginFormSubmit = (email, password) => {

        fetch("https://ace-mapi.justcompileit.com/api/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status) {
                    dispatch(setToken(data.token));
                    dispatch(setEmail(data.user.email));
                    dispatch(setRole(data.user.role));
                    console.log(data)
                } else {
                    console.log("Contraseña incorrecta");
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        console.log(token)
        console.log(role)
    }, [token, role])

    return (
        <div className="App">
            {!token && <Header />}
            {!token && <Email onLoginFormSubmit={handleLoginFormSubmit} />}
            {role === "admin" && <AdminDashboard />}
            {role === "user" && <UserDashboard />}
        </div>
    );
}

export default App;