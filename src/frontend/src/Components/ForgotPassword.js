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
            <div className="row justify-content-center">
                <h1 className="text-center my-5">
                    <strong>Postello</strong>
                </h1>
            </div>
            <div className="row m-3 justify-content-center p-2">
                <form
                    className="col-md-8 bg-light p-5 shadow"
                    onSubmit={onSubmit}
                >
                    <h4 className="mb-4"> Reset Password </h4>
                    <div className="form-floating mb-5">
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
                    <div className="d-grid col-6 mx-auto">
                        <input
                            type="submit"
                            className="btn-lg btn-dark btn-outline-light"
                            value="Submit"
                        />
                        <label
                            type="button"
                            className="text-decoration-underline text-center mt-2"
                            onClick={onBack}
                        >
                            Back >
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
