import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar.js";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem("user-info"));
    // console.warn(user);

    const onSignOut = async (e) => {
        localStorage.clear();
        navigate("/signin");
    };
    return (
        <div>
<<<<<<< HEAD
            <p>Signed in As: {user && user.email}</p>;
=======
            <NavBar/>
>>>>>>> 953e0c02b836a52688a305762cf3da76f77e3c6b
            <label type="button" onClick={onSignOut}>
                Sign Out
            </label>
        </div>
    );
}

export default Home;
