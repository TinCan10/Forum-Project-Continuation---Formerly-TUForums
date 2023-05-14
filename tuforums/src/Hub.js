import React from "react";
import './Hub.css';



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
    }

    function oldP() {
        setPosts(oldPosts);
    }

    return (
        <div class="container">
            <div class="forumTable">
                <h1>Welcome to TU Forum, Tigers!</h1>
                <div class="forum_head">
                    <div name="sort_by">
                        Sort By: 
                    </div>
                    <div class="sort_element"><h1 onClick={() => newP()} id="sort_new">New</h1></div>
                    <div class="sort_element"><h1 onClick={() => oldP()} id="sort_old">Old</h1></div>
                </div>
                <div class="forum_container" id="forum_container">
                    {
                        posts.map(  
                            (element) => {
                            return (
                                <div class="forum_post">
                                    <div class="post_name">{element.username}</div>
                                    <div class="post_title">{element.title}</div>
                                    <div class="post_subject">{element.subject}</div>
                                </div>
                            )
                        })
                    } 
                </div>
            </div>
        </div>
    );
}
  

export default Hub;