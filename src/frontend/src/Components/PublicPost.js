import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Logo from "../PostelloLogo.png";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment from "./Comment.js";

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
    //Enim fugiat aute laborum ullamco laborum nostrud id. Commodo esse laboris incididunt voluptate voluptate nisi laboris aliquip dolore cupidatat quis sunt. Quis eu consectetur dolore sit mollit laboris nostrud. Occaecat dolor duis proident consectetur nostrud reprehenderit cillum eu cupidatat aliqua officia do. Velit ullamco Lorem aliqua sunt duis reprehenderit ipsum id fugiat nostrud velit deserunt elit nulla. Sunt ex deserunt incididunt fugiat reprehenderit fugiat consectetur dolor ullamco elit proident nostrud. Aliquip non deserunt tempor elit.

    const displayPost = () => {
        axios.get("http://localhost/api/v1/displaypost/").then((res) => {
            const datares = res.data;
            setPostData(datares);
            console.log(datares);
        });
    };

    return (
        <div className="container-fluid my-4">
            <div className="d-flex justify-content-center row m-8">
                <div className="col-md-15">
                    <div className="feed">
                        <form
                            className="share border bg-white rounded m-1"
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
                                            className="btn btn-light"
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
                        </form>
                            <button onClick={displayPost}>show posts</button>
                        <form className="share border bg-white rounded m-1">
                            <div className="feed-post mt-2">
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
                                                    {postData.fname}{" "}
                                                    {postData.lname}
                                                </h6>
                                                {/* <span className="m-1">{user && user.username}</span> */}
                                            </div>
                                            {/* Dropdown menu */}
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
                                        <span>{postData.textContent}</span>
                                    </div>
                                    <div className="profile-engagements"></div>
                                </div>
                            </div>
                            {/* LIKE AND COMMENT BUTTON */}
                            <div className="d-flex flex-row justify-content-between border-top p-1">
                                <Container>
                                    <Row>
                                        <Col className="p-1">
                                            <div className="d-grid gap-2">
                                                <Button variant="Light p-1" size="lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                                                    </svg>{" "}
                                                    Like
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col className="p-1">
                                            <div className="d-grid gap-2">
                                                <Button variant="Light p-1" size="lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-square" viewBox="0 0 16 16">
                                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                                    </svg> {" "}
                                                    Comment
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            {/* COMMENT SECTION */}
                            <div className="d-flex flex-row justify-content-between border-top p-1">
                                <Comment/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
