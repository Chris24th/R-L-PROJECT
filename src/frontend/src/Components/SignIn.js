import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import bootstrap from "bootstrap";
import LogoName from "../Postello.png";

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
                    Accept: "application/json",
                },
            });
            result = await result.json();
            console.warn(result);
            localStorage.setItem("user-info", JSON.stringify(result));
            window.location.reload();

            let user = JSON.parse(localStorage.getItem("user-info"));
            if (user && user.error) {
                alert(user.error);
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
        let user = JSON.parse(localStorage.getItem("user-info"));
        if (user && user.email && user.username) {
            navigate("/");
        }
    }, []);

    return (
        <div className="container-md">
            <div className="row m-3 justify-content-center">
                <form
                    className="col-md-6 bg-light shadow p-5 mt-5 border-form"
                    onSubmit={onSignIn}
                >
                    <div className=" mb-4 text-center">
                        <img src={LogoName} width="250px" alt="postello logo" />
                    </div>
                    <h5 className="mb-4">
                        Be vocal. Share your thoughts and feelings freely on
                        Postello.
                    </h5>
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
                            className="text-decoration-underline mb-4"
                        >
                            Forgot Password
                        </label>{" "}
                    </div>
                    <div className="d-grid mx-auto mb-4">
                        <input
                            type="submit"
                            className="btn-lg btn-dark btn-outline-light"
                            value="Log In"
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
