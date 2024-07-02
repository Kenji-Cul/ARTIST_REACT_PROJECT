import React from 'react'
import { Navigate, Outlet, Link } from "react-router-dom";
import './UserRoute.css';
const UserRoute = () => {
    return localStorage.getItem('userToken') ? <Navigate to={"/"} />

    : (
        ( <Outlet />)
      );
}

export default UserRoute
