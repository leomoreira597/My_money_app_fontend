import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";
import DashBoard from "../dashBoard/dashBoard";
import BillingCycle from "../billingCycle/billingCycle";

export default function(props){
    return(
        <Router history={hashHistory}>
            <Route path='/' component={DashBoard}/>
            <Route path='/billingCycles' component={BillingCycle}/>
            <Redirect from="*" to='/'/>
        </Router>
    );
}