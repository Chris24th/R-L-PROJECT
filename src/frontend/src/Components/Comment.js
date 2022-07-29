import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
<<<<<<< HEAD
=======
import Modal from "react-bootstrap/Modal";
import Logo from "../PostelloLogo.png";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
>>>>>>> fa6bf06008ddfef0055d80b59cc4d69bd63ac094

export default function Comment() {
    // MODAL FOR CREATE POST
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
<<<<<<< HEAD
        <div className="d-flex flex-row inputs p-2 py-4">
            <Form>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea"
                >
                    <Form.Control
                        placeholder="Share your thoughts"
                        as="textarea"
                        rows={10}
                        // onChange={(e) =>
                        // setTextContent(
                        //     e.target.value
                        //     )
                        // }
                        required
                    />
                </Form.Group>
            </Form>
=======
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
                        <form style={{ width: "1000%" }}>
                            <input
                                className="form-control p-1"
                                type="text"
                                placeholder="Write a comment..."
                                aria-label="default input example"
                            ></input>
                        </form>
                    </div>
                </div>
            </div>
>>>>>>> fa6bf06008ddfef0055d80b59cc4d69bd63ac094
        </div>
    );
}
