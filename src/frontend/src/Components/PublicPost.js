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
import Loading from "./Loading";

export default function PublicPost() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    const navigate = useNavigate();
    const [textContent, setTextContent] = useState();
    const [postData, setPostData] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loading, setLoading] = useState(true);

    const onPost = async (e) => {
        if (textContent) {
            setShow(!show);
            try {
                let user = JSON.parse(localStorage.getItem("user-info"));
                let username = user.username;
                let fname = user.fname;
                let lname = user.lname;
                let item = { username, fname, lname, textContent };
                axios({
                    method: "post",
                    url: "http://localhost/api/v1/createpost",
                    data: item,
                }).then(() => {
                    window.location.reload();
                });
            } catch (e) {
                console.log(e);
            }
        } else return setShow(!show);
    };

    // useEffect(() => {
    // });
    useEffect(() => {
        async function api() {
            try {
                await axios
                    .get("http://localhost/api/v1/displaypost/")
                    .then(async (res) => {
                        setPostData(res.data);
                        setTimeout(() => setLoading(false), 500);
                    });
            } catch (e) {
                console.log(e);
            }
        }
        api();
    }, []);

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
                                    type="text"
                                    className="border-2 form-control share-input m-1 p-1"
                                    placeholder="Share your thoughts"
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
                                                    rows={5}
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
                                        <Button
                                            className="btn btn-dark btn-rounded"
                                            onClick={onPost}
                                        >
                                            Publish
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                        {loading ? (
                            <Loading />
                        ) : (
                            <Feed postDetails={postData} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
