import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar.js";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    const navigate = useNavigate();
    const onSignOut = async (e) => {
        navigate("/sign-in");
    };
    return (
        <div>
            <NavBar/>
            <label type="button" onClick={onSignOut}>
                Sign Out
            </label>
        </div>
    );
}

export default Home;
