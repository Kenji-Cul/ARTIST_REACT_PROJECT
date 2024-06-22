import React from 'react'
import { Navigate, Outlet, Link } from "react-router-dom";
import Layout from '../Layout';
import { loginSelector, loginUser, clearState } from '../../features/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import './PrivateRoute.css'

function PrivateRoute() {
    //const { token } = useSelector(loginSelector);

    return localStorage.getItem('userToken') ? ( <Outlet />)

: (
    // <div className="unauthorized">
    //      <h1>Unauthorized :(</h1>
    //     <span>
    //  <Link to='/login'>Login</Link> to gain access
    //      </span>
    // </div>
    <Navigate to={"/"} />
  );
    
        

}

export default PrivateRoute
