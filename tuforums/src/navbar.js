import React from "react";

function sideBar() {
    return (

        <div class="offcanvas offcanvas-start" id="sidebar">
        <div class="offcanvas-header">
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
        </div>
        <div id="help" class="offcanvas-body">
            <div class="info">
                <a href="index.html">Home</a>
                <a href="#">Account Info</a>
                <a href="#">Create Post</a>
                <a href="#">Favorite Posts</a>
                <a href="#">Site Rules</a>
                <a href="#">Options</a>
            </div>
        </div>
    </div>

    ); 
}

export default sideBar; 