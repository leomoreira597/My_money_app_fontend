import React from "react";

export default function(props){
    return(
        <li>
            <a href={props.path}>
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
            </a>
        </li>
    );
}