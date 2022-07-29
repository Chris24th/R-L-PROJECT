import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Logo from "../PostelloLogo.png";
import Feed from "./Feed";
import axios from "axios";

export default function PublicPost() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    const navigate = useNavigate();
    const [textContent, setTextContent] = useState();
    const [postData, setPostData] = useState([]);

    // MODAL FOR CREATE POST
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onPost = async (e) => {
        try {
            let user = JSON.parse(localStorage.getItem("user-info"));
            let username = user.username;
            let fname = user.fname;
            let lname = user.lname;
            let item = { username, fname, lname, textContent };
            await fetch("http://localhost/api/v1/createpost/", {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        try {
            axios
                .get("http://localhost/api/v1/displaypost/")
                .then(async (res) => {
                    setPostData(res.data);
                });
        } catch (e) {
            console.log(e);
        }
    });

    return (
        <div className="container-fluid my-4">
            <div className="d-flex justify-content-center row m-8">
                <div className="col-md-15">
                    <div className="feed">
                        <div
                            className="share border bg-white rounded m-5 mb-2 mt-0"
                            onSubmit={onPost}
                        >
                            <div className="d-flex flex-row inputs p-2 py-4">
                                <img
                                    className="rounded-circle p-2"
                                    src={Logo}
                                    width="40"
                                />
                                {/*---------- MODAL FOR CREATE POST----------*/}
                                <input
                                    type="form"
                                    className="border-2 form-control share-input m-1 p-1"
                                    defaultValue="Share your thoughts"
                                    onClick={handleShow}
                                />
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            <strong>Create Post</strong>
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlTextarea"
                                            >
                                                <Form.Control
                                                    placeholder="Share your thoughts"
                                                    as="textarea"
                                                    rows={10}
                                                    onChange={(e) =>
                                                        setTextContent(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button
                                            type="button"
                                            className="btn btn-light"
                                        >
                                            {/* ICON FOR PHOTO */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                className="bi bi-images"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                                <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                                            </svg>{" "}
                                            Photo
                                        </button>
                                        <Button
                                            className="btn btn-dark btn-rounded"
                                            onClick={onPost}
                                        >
                                            Publish
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            <div className="d-flex flex-row justify-content-between border-top p-1">
                                <div className="d-flex flex-row publish-options">
                                    <div className="align-items-center border-right p-1 share">
                                        <button
                                            type="button"
                                            className="btn btn-lights"
                                            onClick={handleShow}
                                        >
                                            {/* ICON FOR PHOTO */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                className="bi bi-images"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                                <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                                            </svg>{" "}
                                            Photo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Feed postDetails={postData} />
                    </div>
                </div>
            </div>
        </div>
    );
}
