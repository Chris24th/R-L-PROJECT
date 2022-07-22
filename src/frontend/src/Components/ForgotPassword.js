import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            let item = { email };
            console.warn(item);
            let result = await fetch("http://localhost/api/v1/forgotpassword", {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application.json",
                },
            });
            result = await result.json();
            console.warn(result);
            localStorage.setItem("user-info", JSON.stringify(result));
            // alert("Password reset link successfully sent to your email.");
            let user = JSON.parse(localStorage.getItem("user-info"));
            navigate("/api/forgotpassword");
            window.location.reload(false);
            if (user && user.error) {
                alert("Email does not exists.");
                localStorage.clear();
            }
        } catch (e) {
            console.warn(e);
        }
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
                    className="col-md-8 bg-light shadow p-5 mt-5"
                    onSubmit={onSubmit}
                >
                    <h1 className="mb-5">
                        <strong>Postello Logo</strong>
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
                        Back >
                    </label>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
