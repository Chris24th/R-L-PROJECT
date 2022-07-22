import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PublicPost from "./PublicPost";
import Logo from "../PostelloLogo.png";

export default function Feed(){
    return(
        // Main Container
        <div className="container">
              {/*Left Container  */}
            <div className="left">
                <a className="profile">
                    <div className="profile-photo">
                        <img src={Logo}/>
                    </div>
                    <div className="handle">
                        <h4>Name of user</h4>
                    </div>
                    <p className="text-muted">
                        @username
                    </p>
                </a>
                {/* SIDE BAR -------------- wa pani nahuman hihi */} 
                <div className="sidebar">
                    <a className="menu-item active">
                        <span><i class="bi bi-person-fill"></i><h3>Friends</h3></span>
                    </a>
                    <a className="Event-item">
                        <span><i class="bi bi-calendar-event"></i><h3>Event</h3></span>
                    </a>
                    <a className="Explore-item">
                        <i class="bi bi-compass-fill"></i><h3>Explore</h3>
                    </a>
                    <a className="pinned-item">
                        <i className="bi bi-save"></i><h3>Pinned Posts</h3>
                    </a>
                    <i class="bi bi-1-circle"></i>
                        
                </div>
            </div>
            {/* Middle Container */}
            <div className="middle">

            </div>
            {/* Right Container */}
            <div className="right">

            </div>
        </div>
    )
}