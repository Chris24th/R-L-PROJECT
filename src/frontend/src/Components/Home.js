import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./Feed.js"


function Home() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    // console.warn(user);
    return (
        <div>
            <NavBar/>
            <div class="container-md">
                <div className="row m-3 justify-content-center "><Feed/></div>
            </div>
        </div>
    );
}

export default Home;
