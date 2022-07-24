import React, { useStatem, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./Feed.js";

function Home() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    const navigate = useNavigate();
    // console.warn(user);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user-info"));
        if (!user || !user.email || !user.username) {
            navigate("/signin");
        }
    }, []);
    return (
        <div>
            <NavBar />
            <div className="container-md">
                <div className="row m-3 justify-content-center ">
                    <Feed />
                </div>
            </div>
        </div>
    );
}

export default Home;
