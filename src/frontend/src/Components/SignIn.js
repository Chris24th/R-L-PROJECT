import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import bootstrap from "bootstrap";

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignIn = async (e) => {
        let item = { email, password };
        if (email === "" || !password === "") {
            alert("Please fillout.");
        } else {
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
            navigate("/");
        }
    };

    const onSignUp = () => {
        navigate("/signup");
    };

    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/");
        }
    }, []);

    return (
        <div className="container-md">
            <div className="row m-3 justify-content-center">
                <h1 className="text-center my-5">
                    <strong>Welcome to PostIT</strong>
                </h1>
            </div>
            <div className="row m-3 justify-content-center">
                <div className="col-sm-6">
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
                    <div className="d-grid gap-2 col-6 mb-3 mx-auto">
                        <input
                            type="button"
                            className="btn btn-dark btn-outline-light"
                            value="Login"
                            onClick={onSignIn}
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
                </div>
            </div>
        </div>
    );
};

export default SignIn;
