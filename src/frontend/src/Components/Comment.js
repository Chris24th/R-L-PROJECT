import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Logo from "../PostelloLogo.png";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Comment() {
    // MODAL FOR CREATE POST
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [postID, setPostID] = useState();
    const [textContent, setTextContent] = useState();
    let user = JSON.parse(localStorage.getItem("user-info"));

    const onSend = async (e) => {
        e.preventDefault();
        let username = user.username;
        let fname = user.fname;
        let lname = user.lname;
        let item = { postID, username, fname, lname, textContent };
        console.log(item);
        let result = await axios({
            method: "post",
            url: "http://localhost/api/v1/createcomment/",
            data: item,
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="p-1 container text-center">
            <div className="d-flex flex-row inputs">
                <img
                    className="rounded-circle p-2"
                    src={Logo}
                    width="40"
                    height="40"
                />
                <div className="col-sm-6 offset-sm-2 col-md-11 offset-md-0">
                    <div className="d-flex flex-row inputs p-1 m-2 mt-0 mb-0">
                        <form style={{ width: "100%" }} onSubmit={onSend}>
                            <input
                                className="form-control p-1"
                                type="text"
                                placeholder="Write a comment..."
                                onChange={(e) => {
                                    setTextContent(e.target.value);
                                }}
                            ></input>
                            <input
                                type="submit"
                                className="btn btn-dark"
                                value="Send"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
