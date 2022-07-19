import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const onCreate = async (e) => {
        try {
            if (
                email !== "" &&
                userID !== "" &&
                password !== "" &&
                confirmPass !== "" &&
                fname !== "" &&
                lname !== ""
            ) {
                navigate("/sign-in");
                alert("success");
            } else {
                alert("Please fillout.");
            }
        } catch (err) {
            console.log(err);
        }
    };
    const handleChange = async (e) => {};
    const onSignIn = () => {
        navigate("/sign-in");
    };
    return (
        <div className="container-md">
            <div className="row m-3 justify-content-center">
                <h1 className="text-center my-5">
                    <strong>Welcome to PostIT</strong>
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
                        />
                    </div>
                    <div className="mb-3">
                        <label>Username</label>
                        <input
                            type="email"
                            className="form-control"
                            value={userID}
                            onChange={(e) => setUserID(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={confirmPass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label>First Name</label>
                        <input
                            type="email"
                            className="form-control"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Last Name</label>
                        <input
                            type="email"
                            className="form-control"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                        />
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                            Male
                        </label>
                    </div>
                    <div class="form-check form-check-inline mb-3">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="male"
                            value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                            Female
                        </label>
                    </div>
                    <div className="d-grid gap-2 col-6 mb-3 mx-auto">
                        <input
                            type="submit"
                            className="btn btn-dark btn-outline-light"
                            value="Create Account"
                            id="female"
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
