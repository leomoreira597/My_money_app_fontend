import "../common/template/dependencies"
import React from "react";
import Header from "../common/template/header";
import Sidebar from "../common/template/sidebar";

export default function(props){
    return(
        <div className="wraper">
            <Header/>
            <Sidebar/>
        </div>
    );
}