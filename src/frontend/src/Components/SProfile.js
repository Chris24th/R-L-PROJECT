import React, { useState, useEffect } from "react";
import axios from "axios";

const SProfile = () => {
    const [user, setUser] = useState();

    const api = axios.create();
    api.defaults.withCredentials = true;

    useEffect(() => {
        api.get("/api/v1/profile").then((response) => {
            setUser(response.data);
        });
    }, []);

    return <div>test{user && <h1>{user.email}</h1>}</div>;
};

export default SProfile;
