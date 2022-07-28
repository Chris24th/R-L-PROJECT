import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Logo from "../PostelloLogo.png";

const Feed = (postDetails) => {
    const dataList = postDetails.postDetails.map((data) => (
        <div className="feed-post mt-2 border">
            <div className="p-2 bg-white rounded m-1">
                <div className="d-flex flex-row justify-content-between align-items-start profile p-2">
                    <div className="d-flex align-items-center">
                        <img
                            className="rounded-circle img-responsive p-2"
                            src={Logo}
                            width="40"
                        />
                        <div className="d-flex flex-column ml-2 m-2 p-2 justify-content-between">
                            <h6>
                                {data.fname} {data.lname}
                            </h6>
                        </div>
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle
                            className="btn btn-light"
                            variant="light"
                            id="dropdown-basic"
                            bsPrefix="p-0"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                className="bi bi-three-dots"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                            </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                Edit
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Delete
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="feed-content p-2 m-1">
                    <span>{data.textContent}</span>
                </div>
                <div className="profile-engagements"></div>
            </div>
        </div>
    ));
    return <div>{dataList}</div>;
};

export default Feed;
