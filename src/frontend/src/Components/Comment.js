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


export default function Comment() {
    // MODAL FOR CREATE POST
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
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
        </div>
    
    )
}