import React from "react";
import axios from "axios";

const Sample = () => {
    const api = axios.create();
    api.defaults.withCredentials = true;
    const onClick = () => {
        api.get("/api/sanctum/csrf-cookie").then(() => {
            api.post("api/v1/login", {
                email: "christopherespenida@gmail.com",
                password: "123456",
            }).then((response) => console.log(response));
        });
    };
    return <button onClick={onClick}>Sample</button>;
};

export default Sample;
