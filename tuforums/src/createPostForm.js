import React from "react";

 function createPost() {
    return (
        <div class="formContent">
        <form name="postCreation" action="javascript:submit()">
    
            <legend>Fill Out the Form to Create Your Post:</legend>
            <label for="username">Username: </label>
            <input type="text" name="username" id ="username" required/> <br/>
    
            <label for="postTitle">Post Title </label>
            <input type="text" name="postTitle" id ="postTitle" required/> <br/>
    
            <label for="post_subject">Subject: </label>
            <input type="text" name="post_subject" id="post_subject" required/> <br/>
    
            <label for="postContent">Write Your Post In the Text Area Below:</label> <br/>
            <textarea id="postContent" name="postContent" rows="10" cols="200" required></textarea><br/>
    
            <input type="submit" value="Create Post"/>
    
            </form>
            </div>
        );
}
export default createPost;