import React from "react";

export default function(props){
    return(
        <div className="tab-content">
            {props.children}
        </div>
    );
}