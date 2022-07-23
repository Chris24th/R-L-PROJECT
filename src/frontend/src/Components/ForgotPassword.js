import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LogoName from "../Postello.png";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            let item = { email };
            console.warn(item);
            axios({
                method: "post",
                url: "http://localhost/api/v1/forgotpassword",
                data: { email },
            }).then((response) => {
                localStorage.setItem("user-info", JSON.stringify(response));
                let user = JSON.parse(localStorage.getItem("user-info"));
                console.log(user.data);
                if (user.data && user.data.error) {
                    alert("Email does not exists.");
                    localStorage.clear();
                } else {
                    alert(
                        "Password reset link successfully sent to your email."
                    );
                    navigate("/signin");
                    window.location.reload(false);
                }
            });
        } catch (e) {
            console.warn(e);
        }
    };

    const onBack = () => {
        navigate("/signin");
    };

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user-info"));
        if (user && user.email && user.username) {
            navigate("/");
        }
    }, []);

    return (
        <div className="container-md">
            <div className="row m-3 justify-content-center p-2">
                <form
                    className="col-md-6 bg-light shadow p-5 mt-5 border-form"
                    onSubmit={onSubmit}
                >
                    <div className="mb-4 text-center">
                        <img src={LogoName} width="250px" alt="postello logo" />
                    </div>
                    <h5 className="mb-4"> Password Reset </h5>
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
