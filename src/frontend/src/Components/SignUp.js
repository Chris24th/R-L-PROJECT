import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [sex, setSex] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/");
        }
    }, []);

    const onCreate = async (e) => {
        e.preventDefault();
        try {
            let item = { email, username, password, fname, lname, sex };
            console.warn(item);
            let result = await fetch("http://localhost/api/v1/signup/", {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application.json",
                },
            });
            result = await result.json();
            console.warn(result);
            alert("Account Created Successfully.");
            navigate("/signin");
        } catch (e) {
            alert("Email address is already registered.");
        }
    };
    const onSignIn = () => {
        navigate("/signin");
    };
    const validateInput = (e) => {
        let { name, value } = e.target;
        if (confirmPass && value !== password) {
            setError("Password and Confirm Password does not match.");
        } else {
            setError("");
        }
    };
    return (
        <div className="container-md">
            <div className="row m-3 justify-content-center">
                <h1 className="text-center my-5">
                    <strong>Welcome to Postello</strong>
                </h1>
            </div>
            <div className="row m-3 justify-content-center">
                <form className="col-sm-6" onSubmit={onCreate}>
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
                            required
                            onBlur={validateInput}
                        />
                        {error && (
                            <span className="err text-danger">{error}</span>
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

                    <div className="mb-3">
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
                    <div className="form-check form-check-inline mb-3">
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
                    <div className="d-grid gap-2 col-6 mb-3 mx-auto">
                        <input
                            type="submit"
                            className="btn btn-dark btn-outline-light"
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
