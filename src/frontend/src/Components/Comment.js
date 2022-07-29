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

export default function Comment() {
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
        </div>
    );
}
