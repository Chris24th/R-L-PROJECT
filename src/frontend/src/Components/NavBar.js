import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import Logo from "../PostelloLogo.png";

function NavScroll() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    const navigate = useNavigate();

    const onSignOut = async (e) => {
        localStorage.clear();
        navigate("/signin");
    };

    return (
        <Navbar variant={"dark"} expand="md" bg="dark">
            <Container fluid className="my-2 px-5">
                <Navbar.Brand href="#">
                    {/* Postello */}
                    <img
                        src={Logo}
                        className="rounded-circle"
                        width="40px"
                        height="40px"
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
                        <Nav.Link
                            href="#action1"
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-house"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                                />
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                                />
                            </svg>{" "}
                            Home
                        </Nav.Link>
                        <NavDropdown
                            title={user && user.username}
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item href="#action2">
                                Your Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="#action3"
                                onClick={onSignOut}
                            >
                                Log Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScroll;
