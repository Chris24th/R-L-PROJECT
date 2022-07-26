import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import PublicPost from "./PublicPost";
import Logo from "../PostelloLogo.png";

export default function Feed() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    return (
        <div className="container-fluid my-4">
            <div className="d-flex justify-content-center row m-8">
                <div className="col-md-15">
                    <div className="feed">
                        <div className="share border bg-white rounded m-1">
                            {/*Left Container  */}
                            <div className="left">
                                <a className="profile">
                                    <div className="profile-photo">
                                        <img src={Logo} width="50 px" height="50 px" />
                                    </div>
                                    <div className="handle">
                                        <h4>
                                        {user ? user.fname : ""} {user ? user.lname : ""}
                                        </h4>
                                    </div>
                                    <p className="text-muted">{user ? user.username : ""}</p>
                                </a>
                            </div>
                            {/* SIDE BAR -------------- wa pani nahuman hihi */}
                            <div className="sidebar">
                                <a className="menu-item active">
                                    <span>
                                        <i className="bi bi-person-fill"></i>
                                        <h3>Friends</h3>
                                    </span>
                                </a>
                                <a className="Event-item">
                                    <span>
                                        <i className="bi bi-calendar-event"></i>
                                        <h3>Event</h3>
                                    </span>
                                </a>
                                <a className="Explore-item">
                                    <i className="bi bi-compass-fill"></i>
                                    <h3>Explore</h3>
                                </a>
                                <a className="pinned-item">
                                    <i className="bi bi-save"></i>
                                    <h3>Pinned Posts</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
