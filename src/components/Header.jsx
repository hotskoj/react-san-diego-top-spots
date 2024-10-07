import React from "react";

export default function Header() {
    return (
        <div className="container-fuild py-5 mb-4 text-center header">
            <h1 className="display-5 p-3 m-3 fw-bold text-body-emphasis">San Diego Top Spots</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">A list of the top 30 places to see in San Diego, California.</p>
            </div>
        </div>
    );
}