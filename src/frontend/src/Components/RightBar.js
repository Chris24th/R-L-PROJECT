import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import PublicPost from "./PublicPost";
import Logo from "../PostelloLogo.png";

export default function Profile() {
    let user = JSON.parse(localStorage.getItem("user-info"));

    return (
        <div className="container-fluid my-4">
            <div className="d-flex justify-content-center row m-8 ">
                <div className="card social-timeline-card d-flex flex-row inputs p-2 py-4 ">
                    <div className="card-body">
                        <h5 className="card-title">People you may know</h5>
                        <ul className="friend-list">
                            <li>
                                <div className="friend-Profile">
                                    <img
                                        className="rounded-circle"
                                        width="45px"
                                        height="45px"
                                        margin-right="20px"
                                        src={Logo}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h3 className="friend-Name">
                                        Name of User
                                    </h3>
                                    <p className="friend-Number">10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="friend-Profile">
                                    <img
                                        className="rounded-circle"
                                        width="45px"
                                        height="45px"
                                        margin-right="20px"
                                        src={Logo}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h3 className="friend-Name">
                                        Name of User
                                    </h3>
                                    <p className="friend-Number">10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="friend-Profile">
                                    <img
                                        className="rounded-circle"
                                        width="45px"
                                        height="45px"
                                        margin-right="20px"
                                        src={Logo}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h3 className="friend-Name">
                                        Name of User
                                    </h3>
                                    <p className="friend-Number">10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="friend-Profile">
                                    <img
                                        className="rounded-circle"
                                        width="45px"
                                        height="45px"
                                        margin-right="20px"
                                        src={Logo}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h3 className="friend-Name">
                                        Name of User
                                    </h3>
                                    <p className="friend-Number">10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="friend-Profile">
                                    <img
                                        className="rounded-circle"
                                        width="45px"
                                        height="45px"
                                        margin-right="20px"
                                        src={Logo}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h3 className="friend-Name">
                                        Name of User
                                    </h3>
                                    <p className="friend-Number">10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="friend-Profile">
                                    <img
                                        className="rounded-circle"
                                        width="45px"
                                        height="45px"
                                        margin-right="20px"
                                        src={Logo}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h3 className="friend-Name">
                                        Name of User
                                    </h3>
                                    <p className="friend-Number">10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="friend-Profile">
                                    <img
                                        className="rounded-circle"
                                        width="45px"
                                        height="45px"
                                        margin-right="20px"
                                        src={Logo}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h3 className="friend-Name">
                                        Name of User
                                    </h3>
                                    <p className="friend-Number">10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="friend-Profile">
                                    <img
                                        className="rounded-circle"
                                        width="45px"
                                        height="45px"
                                        margin-right="20px"
                                        src={Logo}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h3 className="friend-Name">
                                        Name of User
                                    </h3>
                                    <p className="friend-Number">10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="friend-Profile">
                                    <img
                                        className="rounded-circle"
                                        width="45px"
                                        height="45px"
                                        margin-right="20px"
                                        src={Logo}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h3 className="friend-Name">
                                        Name of User
                                    </h3>
                                    <p className="friend-Number">10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="friend-Profile">
                                    <img
                                        className="rounded-circle"
                                        width="45px"
                                        height="45px"
                                        margin-right="20px"
                                        src={Logo}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h3 className="friend-Name">
                                        Name of User
                                    </h3>
                                    <p className="friend-Number">10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="friend-Profile">
                                    <img
                                        className="rounded-circle"
                                        width="45px"
                                        height="45px"
                                        margin-right="20px"
                                        src={Logo}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h3 className="friend-Name">
                                        Name of User
                                    </h3>
                                    <p className="friend-Number">10 Friends</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
