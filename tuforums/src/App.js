import React from "react";
import './App.css';

function App() {
    const [posts, setPosts] = React.useState([]);
  
    React.useEffect(() => {
      fetch('/reactIndex')
        .then(res => res.json()) 
        .then(posts => setPosts(posts));
    }, []);  
  
    return (
        <div class="container">
            <div class="forumTable">
                <h1>Welcome to TU Forum, Tigers!</h1>
                <div class="forum_head">
                    <div name="sort_by">
                        Sort By: 
                    </div>
                    <div class="sort_element"><a href="index.html?sort=new" id="sort_new">New</a></div>
                    <div class="sort_element"><a href="index.html?sort=replies" id="sort_replies">Replies</a></div>
                    <div class="sort_element"><a href="index.html?sort=old" id="sort_old">Old</a></div>
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
  

export default App;