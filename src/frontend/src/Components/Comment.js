import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

export default function Comment() {
    // MODAL FOR CREATE POST
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
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
    );
}
