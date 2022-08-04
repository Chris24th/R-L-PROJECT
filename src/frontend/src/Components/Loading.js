import React from "react";

const Loading = () => {
    return (
        <div className="row justify-content-center">
            <div className="col">
                <div
                    class="spinner-border ms-auto"
                    role="status"
                    aria-hidden="true"
                ></div>
            </div>
        </div>
    );
};

export default Loading;
