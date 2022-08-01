import { useNavigate } from "react-router-dom";

const FPSuccessPage = () => {
    const navigate = useNavigate();

    const onSignIn = () => {
        navigate("/signin");
    };
    return (
        <div className="contiainer">
            <div className="row m-3 justify-content-center">
                <div className="col-md-6 shadow p-5 my-5 border-form bg-light">
                    <h5 className="mb-5 text-center">
                        Reset Password has been sent your email successfully.
                        Please check your email inbox to verify your email.
                        Thank you.
                    </h5>
                    <div className="d-grid mx-auto">
                        <button className="btn-lg btn-dark" onClick={onSignIn}>
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FPSuccessPage;
