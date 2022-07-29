import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import PublicPost from "./PublicPost";
import Logo from "../PostelloLogo.png";

export default function Profile() {
    let user = JSON.parse(localStorage.getItem("user-info"));

    return (
        <div className="container-fluid my-4">
            <div className="d-flex justify-content-center row m-8 ">
                <div className="card d-flex flex-row inputs p-2 py-4 "></div>
            </div>
        </div>
    );
}
