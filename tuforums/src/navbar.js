import React from "react";
import {Outlet, Link} from "react-router-dom";
import Create from "./CreatePost"

function sideBar() {
    return (

        <div class="info">
            <nav>
                <Link to="/Create">Create Thread</Link>
            </nav>
        </div>

    ); 
}

export default sideBar; 