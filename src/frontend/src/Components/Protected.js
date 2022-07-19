import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    let Cmp = props.Cmp;
    const navigate = useNavigate();
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user-info"));
        if (user && user.error) {
            navigate("/signin");
        } else navigate("/");
    }, []);

    return (
        <div>
            <Cmp />
        </div>
    );
};

export default Protected;
