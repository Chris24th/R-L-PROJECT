import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoName from "../Postello.png";

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [sex, setSex] = useState("");
    const [passError, setPassError] = useState("");

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user-info"));
        if (user && user.email && user.username) {
            navigate("/");
        }
    }, []);

    const onCreate = async (e) => {
        e.preventDefault();
        try {
            if (password === confirmPass) {
                let item = { email, username, password, fname, lname, sex };
                let result = await fetch("http://localhost/api/v1/signup/", {
                    method: "POST",
                    body: JSON.stringify(item),
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                });
                result = await result.json();
                localStorage.setItem("user-info", JSON.stringify(result));
                let user = JSON.parse(localStorage.getItem("user-info"));
                if (user && user.error) {
                    alert(user.error);
                    localStorage.clear();
                } else {
                    localStorage.setItem("user-info", JSON.stringify(result));
                    let user = JSON.parse(localStorage.getItem("user-info"));
                    let email = user.email;
                    alert(
                        "Account Created Successfully. Please check your inbox to verify email."
                    );
                    localStorage.clear();
                    localStorage.setItem(
                        "user-info",
                        JSON.stringify( {email} )//kani wala lagi ni naapil 
                    );
                    navigate("/signin");
                }
            } else alert("Passwords don't match");
        } catch (e) {
            alert(e);
        }
    };

    const onSignIn = () => {
        navigate("/signin");
    };

    const validatePass = (e) => {
        let { name, value } = e.target;
        if (confirmPass && value !== password) {
            return setPassError(
                "Password and Confirm Password does not match."
            );
        } else {
            if (confirmPass && value.length < 6) {
                return setPassError("Passwords require 6 or more characters.");
            } else {
                return setPassError("");
            }
        }
    };

    return (
        <div className="container-md">
            <div className="row m-3 justify-content-center">
                <form
                    className="col-md-6 shadow p-5 my-5 border-form bg-light"
                    onSubmit={onCreate}
                >
                    <div className="mb-4 text-center">
                        <img src={LogoName} width="250px" alt="postello logo" />
                    </div>
                    <div className=" mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="e.g. example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPass"
                            className="form-control"
                            value={confirmPass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                            onBlur={validatePass}
                            required
                        />
                        {passError && (
                            <span className="err text-danger">{passError}</span>
                        )}
                    </div>
                    <div className="mb-3">
                        <label>First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="radios"
                            id="radio1"
                            value="Male"
                            onClick={() => setSex("Male")}
                            required
                        />
                        <label className="form-check-label" htmlFor="radio1">
                            Male
                        </label>
                    </div>
                    <div className="form-check form-check-inline mb-4">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="radios"
                            id="radio2"
                            value="Female"
                            onClick={() => setSex("Female")}
                            required
                        />
                        <label className="form-check-label" htmlFor="radio2">
                            Female
                        </label>
                    </div>
                    <div className="d-grid mx-auto mb-4">
                        <input
                            type="submit"
                            className="btn-lg btn-dark btn-outline-light"
                            value="Create Account"
                        />
                    </div>
                    <div>
                        <label>Already have an Account?</label>{" "}
                        <label
                            type="button"
                            className="text-decoration-underline"
                            onClick={onSignIn}
                        >
                            Sign In
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
