import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Logo from "../PostelloLogo.png";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Edit_DeleteModal() {
    // FOR EDIT
    const [show_Edit, setShow1] = useState(false);
    const handleClose_edit = () => setShow1(false);
    const Edit = () => setShow1(true);

    // FOR DELETE
    const [show_Delete, setShow2] = useState(false);
    const handleClose_del = () => setShow2(false);
    const Delete = () => setShow2(true);

    return (
        <div>
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
                    <Dropdown.Item href="#/action-1" onClick={Edit}>
                        Edit
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={Delete}>
                        Delete
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/* EDIT MODAL */}
            <Modal show={show_Edit} onHide={handleClose_edit}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <strong>Edit</strong>
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
                                // onChange={(e) => setTextContent(e.target.value)}
                                // required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="btn btn-dark btn-rounded"
                        // onClick={onPost}
                    >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* DELETE CONFIRMATION MODAL */}
            <Modal show={show_Delete} onHide={handleClose_del}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <strong>Delete Confirmation</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="alert alert-danger">
                        Are you sure you want to delete?
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="default" onClick={handleClose_del}>
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        // onClick={() => confirmModal(type, id)} ---
                    >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
