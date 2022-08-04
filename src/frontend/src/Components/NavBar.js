import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import React from "react-router-dom";
import Logo from "../PostelloLogo.png";

function NavScroll() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    const navigate = useNavigate();

    const onSignOut = async (e) => {
        localStorage.clear();
        navigate("/signin");
    };

    return (
        <Navbar variant={"dark"} bg="dark">
            <Container fluid className="my-2 px-5">
                <Navbar.Brand href="#">
                    {/* Postello */}
                    <img
                        src={Logo}
                        className="rounded-circle"
                        width="25px"
                        height="25px"
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link>{user && user.username}</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={onSignOut}>Log Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScroll;
