import React from "react";
import {Outlet, Link} from "react-router-dom";

function sideBar() {
    return (

        <div class="info">
            <p>*User Goes Here*</p>
            <p>Account Info</p>
            <nav>
                <Link to='/Create'>Create Thread</Link>
            </nav>
            <p>Favortie Thread</p>
            <p>Current News</p>
            <p>Site Rules</p>
            <p>Options</p>
        </div>

    ); 
}

export default sideBar; 