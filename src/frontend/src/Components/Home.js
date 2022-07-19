import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    // console.warn(user);
    return (
        <div>
            <NavBar />
        </div>
    );
}

export default Home;
