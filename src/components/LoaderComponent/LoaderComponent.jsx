import React from "react";
import { grid } from "ldrs";
import "./LoaderComponent.css";

const LoaderComponent = () => {
    grid.register();
    return (
        <div className="loader-container">
            <l-grid className="loader" size="100" speed="1.5" color="white"></l-grid>
        </div>
    );
};

export default LoaderComponent;