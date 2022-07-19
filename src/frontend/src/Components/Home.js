import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            <p>Signed in As: {user && user.email}</p>;
            <label type="button" onClick={onSignOut}>
                Sign Out
            </label>
        </div>
    );
}

export default Home;
