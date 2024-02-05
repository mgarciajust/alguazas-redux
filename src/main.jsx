import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setToken, setEmail, setRole } from './redux/userSlice'

import AdminDashboard from './components/AdminDashboard'
import UserDashboard from './components/UserDashboard'

import { Provider } from "react-redux"
import store from "./redux/store"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<App/>} />
                    <Route path="/admin" element={<AdminDashboard/>} role="admin" />
                    <Route path="/user" element={<UserDashboard/>} role="user" />
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>,
)

