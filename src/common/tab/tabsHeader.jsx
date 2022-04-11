import React from "react";

export default function(props){
    return(
        <ul className="nav nav-tabs">
            {props.children}
        </ul>
    );
}