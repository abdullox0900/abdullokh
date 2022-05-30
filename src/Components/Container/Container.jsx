import React from "react";
import "../Container/Container.scss";

function Container({ children, className }) {
    return <div className={'container ' + className}>{children}</div>
}

export default Container;
