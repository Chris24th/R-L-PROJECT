import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        alert("Password reset link successfully sent to your email.");
    };

    const onBack = () => {
        navigate("/signin");
    };
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/");
        }
    }, []);
    return (
        <div className="container-md">
            <div className="row m-3 justify-content-center p-2">
                <form
                    className="col-md-8 bg-light shadow p-5 mt-5 border-form"
                    onSubmit={onSubmit}
                >
                    <h1 className="mb-5">
                        <strong>Postello</strong>
                    </h1>
                    <h4 className="mb-4"> Password Reset </h4>
                    <div className="form-floating mb-4">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="d-grid mx-auto my-3">
                        <input
                            type="submit"
                            className="btn-lg btn-dark btn-outline-light px-5"
                            value="Submit"
                        />
                    </div>
                    <label
                        type="button"
                        className="text-decoration-underline text-center"
                        onClick={onBack}
                    >
                        Back
                    </label>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
