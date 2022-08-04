import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import PublicPost from "./PublicPost";
import Logo from "../PostelloLogo.png";
import Shopee from "../Shopee.png";
import Lazada from "../Lazada.png";

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
                        </ul>
                    </div>
                </div>
                <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0">
                                <img
                                    src={Shopee}
                                    alt="Shopee"
                                    // className="rounded-circle"
                                    width="150"
                                />{" "}
                                {"  "}
                                <strong>Shopee</strong>
                            </h6>
                            <span className="text-secondary">
                                <a href="https://www.shopee.ph/">
                                    Shop Online Now!
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0">
                                <img
                                    src={Lazada}
                                    alt="Shopee"
                                    // className="rounded-circle"
                                    width="150"
                                />{" "}
                                {"  "}
                                <strong>Lazada</strong>
                            </h6>
                            <span className="text-secondary">
                                <a href="https://www.lazada.com.ph/">
                                    One Stop Online Shop
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                        <div class="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div
                                class="spinner-border ms-auto"
                                role="status"
                                aria-hidden="true"
                            ></div>
                        </div>
                    </ul>
                </div>
                <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                        <div class="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div
                                class="spinner-border ms-auto"
                                role="status"
                                aria-hidden="true"
                            ></div>
                        </div>
                    </ul>
                </div>
                <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                        <div class="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div
                                class="spinner-border ms-auto"
                                role="status"
                                aria-hidden="true"
                            ></div>
                        </div>
                    </ul>
                </div>
                <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                        <div class="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div
                                class="spinner-border ms-auto"
                                role="status"
                                aria-hidden="true"
                            ></div>
                        </div>
                    </ul>
                </div>
                <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                        <div class="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div
                                class="spinner-border ms-auto"
                                role="status"
                                aria-hidden="true"
                            ></div>
                        </div>
                    </ul>
                </div>
                <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                        <div class="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div
                                class="spinner-border ms-auto"
                                role="status"
                                aria-hidden="true"
                            ></div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}
