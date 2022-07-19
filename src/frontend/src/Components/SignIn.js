import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import bootstrap from "bootstrap";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/sign-in",
});
const SignIn = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState();
    const onSignIn = async (e) => {
        navigate("/");
    };
    const handleChange = async (e) => {};
    const onSignUp = () => {
        navigate("/signup");
    };

    return (
        <div className="container-md">
            <div className="row m-3 justify-content-center">
                <h1 className="text-center my-5">
                    <strong>Welcome to PostIT</strong>
                </h1>
            </div>
            <div className="row m-3 justify-content-center">
                <form className="col-sm-6" onSubmit={onSignIn}>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Email address"
                            required
                        />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            required
                        />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div className="d-grid gap-2 col-6 mb-3 mx-auto">
                        <input
                            type="submit"
                            className="btn btn-dark btn-outline-light"
                            value="Login"
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
