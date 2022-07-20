import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import bootstrap from "bootstrap";

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignIn = async (e) => {
        e.preventDefault();
        try {
            let item = { email, password };
            console.warn(item);
            let result = await fetch("http://localhost/api/v1/signin", {
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
            window.location.reload();

            let user = JSON.parse(localStorage.getItem("user-info"));
            if (user && user.error) {
                alert("Invalid credentials. Try again.");
                localStorage.clear();
            }
        } catch (e) {
            alert(e);
        }
    };

    const onSignUp = () => {
        navigate("/signup");
    };

    const onForgotPass = () => {
        navigate("/forgotpassword");
    };

    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/");
        }
    }, []);

    return (
        <div className="container-md">
            <div className="row m-3 justify-content-center">
                <form
                    className="col-md-8 bg-light shadow p-5 mt-5"
                    onSubmit={onSignIn}
                >
                    <h1 className="mb-5">
                        <strong>Postello Logo</strong>
                    </h1>
                    <div className="form-floating mb-3">
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
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div>
                        <label
                            type="button"
                            onClick={onForgotPass}
                            className="text-decoration-underline mb-3"
                        >
                            Forgot Password
                        </label>{" "}
                    </div>
                    <div className="d-grid d-md-flex justify-content-md-end mb-5">
                        <input
                            type="submit"
                            className="btn-lg btn-dark btn-outline-light"
                            value="    Login    "
                        />
                    </div>
                    <div>
                        <label>Don't have an Account?</label>{" "}
                        <label
                            type="button"
                            className="text-decoration-underline"
                            onClick={onSignUp}
                        >
                            Sign Up
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
