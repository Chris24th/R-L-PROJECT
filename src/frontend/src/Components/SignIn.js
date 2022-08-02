import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoName from "../Postello.png";
import axios from "axios";

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    // const [validate, setValidate] = useState(false);
    const [data, setData] = useState();

    const api = axios.create();
    api.defaults.withCredentials = true;

    const onSignIn = async (e) => {
        e.preventDefault();
        try {
            api.get("/api/sanctum/csrf-cookie").then(() => {
                api.post("api/v1/login", {
                    email: email,
                    password: password,
                }).then((response) => {
                    if (response.data && response.data.error) {
                        setError(response.data.error);
                    } else {
                        setData(response.data);
                        let item = { email, password };
                        axios({
                            method: "post",
                            url: "http://localhost/api/v1/signin",
                            data: item,
                        }).then((response) => {
                            localStorage.setItem(
                                "user-info",
                                JSON.stringify(response.data)
                            );
                            let user = JSON.parse(
                                localStorage.getItem("user-info")
                            );
                            navigate("/");
                        });
                    }
                });
            });
        } catch (e) {
            console.log(e);
        }
    };

    const onSignUp = () => {
        navigate("/signup");
    };

    const onForgotPass = () => {
        navigate("/forgotpassword");
    };

    // useEffect(() => {
    //     let user = JSON.parse(localStorage.getItem("user-info"));
    //     if (user && user.email && user.username) {
    //         navigate("/");
    //     }
    // }, []);

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
                    <p className="text-danger mb-3">{error && error}</p>
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
