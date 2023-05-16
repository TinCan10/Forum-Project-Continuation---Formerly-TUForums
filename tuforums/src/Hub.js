import React from "react";
import './Hub.css';
import Navbar from './navbar.js'; 


function Hub() {
    const [posts, setPosts] = React.useState([]);
    const [newPosts, setNewPosts] = React.useState([]);
    const [oldPosts, setOldPosts] = React.useState([]);
  
    React.useEffect(() => {
      fetch('/reactIndex')
        .then(res => res.json()) 
        .then(posts => setPosts(posts));
    }, []);  
  

    React.useEffect(() => {
        fetch('/reactIndex')
            .then(res => res.json()) 
            .then(newPosts => setNewPosts(newPosts.reverse()));
    }, []);

    React.useEffect(() => {
        fetch('/reactIndex')
            .then(res => res.json()) 
            .then(posts => setOldPosts(posts));
    }, []);

    function newP() {
        setPosts(newPosts);
        console.log("new posts");
    }

    function oldP() {
        setPosts(oldPosts);
        console.log("old posts");
    }

    function mapPost() {
        const fullPosts = posts.map(  
            (element) => {
            return (
                <div class="forum_post">
                    <div class="post_name">{element.username}</div>
                    <div class="post_title">{element.title}</div>
                    <div class="post_subject">{element.subject}</div>
                </div>
            )
        });

        return fullPosts
    }

    function forumHead() {
        const head = (
            <div class="forum_head">
                <div name="sort_by">
                    Sort By: 
                </div>
                <div class="sort_element"><h1 onClick={() => newP()} id="sort_new">New</h1></div>
                <div class="sort_element"><h1 onClick={() => oldP()} id="sort_old">Old</h1></div>
            </div>
        );
        return head;
    }

    return (
        <div>
            
            <div class="container">
                <Navbar />
                <div class="forumTable">
                    <h1>Welcome to TU Forum, Tigers!</h1>
                    {forumHead()}
                    <div class="forum_container" id="forum_container">
                        {mapPost()}
                    </div>
                </div>
            </div>
        </div>
    );
}
  

export default Hub;