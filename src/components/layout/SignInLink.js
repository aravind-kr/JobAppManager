import React from 'react'
import { NavLink } from "react-router-dom";

const SignInLink = () => {
    return (
        <ul className="right">
            <li> <NavLink to="/"> New Application</NavLink> </li>
            <li> <NavLink to="/"> LogOut</NavLink> </li>
            <li> <NavLink to="/"  className="btn btn-floating blue lighten-2"> KR </NavLink> </li>
        </ul>
    )
}

export default SignInLink;