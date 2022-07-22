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
        <Navbar bg="dark" variant={"dark"} expand="sm">
            <Container fluid>
                <Navbar.Brand href="#">
                    {/* Postello */}
                    <img src={Logo} class ="rounded-circle" width="40px" height="40px" alt=""/>
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home &#xF797; </Nav.Link>
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
