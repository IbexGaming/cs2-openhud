import React from "react";
import "./brand.scss";
// import "./index.scss";

const Brand: React.FC = () => {
    return (
        <div className="brand">
            <img src="/Circuit-Long.png" alt="Logo" />
        </div>
    );
};

export default React.memo(Brand);