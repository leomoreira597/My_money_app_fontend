import React from "react";

export default function(props){
    return(
        <section className="content-header">
            <h1>{props.title} <small>{props.small}</small></h1>
        </section>
    );
}