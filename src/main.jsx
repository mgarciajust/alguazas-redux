import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import AdminDashboard from './components/AdminDashboard'
import UserDashboard from './components/UserDashboard'


import { Provider } from "react-redux"
import store from "./redux/store"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                <Route path="/admin" element={<AdminDashboard/>}/>
                <Route path="/user" element={<UserDashboard/>} />
                <Route path="/" element={<App/>} />
            </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
