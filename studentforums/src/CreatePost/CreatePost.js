import './CreatePost.css';
//import SideBar from './navbar.js'; 
import React from "react";



class CreatePost extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            title: "",
            subject: "",
            content: ""
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleSubject = this.handleSubject.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleUsername(event) {
        this.setState({username: event.target.value});
    }
    handleTitle(event) {
        this.setState({title: event.target.value});
    }
    handleSubject(event) {
        this.setState({subject: event.target.value});
    } 
    handleContent(event) {
        this.setState({content: event.target.value});
    }

 
    submitForm() {
        fetch("/addPost", {
            method: 'POST'
        });
    }

    render() {
        return(
            <div class="formContent">
                <form name="postCreation" onSubmit={this.submitForm}>
            
                    <legend>Fill Out the Form to Create Your Post:</legend>
                    <label for="username">Username: </label>
                    <input type="text" name="username" id ="username" required value={this.state.username} onChange={this.handleUsername}/> <br/>
            
                    <label for="postTitle">Post Title: </label>
                    <input type="text" name="postTitle" id ="postTitle" required value={this.state.title} onChange={this.handleTitle}/> <br/>
            
                    <label for="post_subject">Subject: </label>
                    <input type="text" name="post_subject" id="post_subject" required value={this.state.subject} onChange={this.handleSubject}/> <br/>
            
                    <label for="postContent">Write Your Post In the Text Area Below:</label> <br/>
                    <textarea id="postContent" name="postContent" rows="10" cols="200" required value = {this.state.content} onChange={this.handleContent}></textarea><br/>
            
                    <input type="submit" value="Create Post"/>
        
                </form>
            </div>
        );
    }
}

// function CreatePost() {
//   return (
//     <div className="App">
//         {/* <SideBar /> */}
//       <header className="App-header">
       
//       <title> TU Forum </title>

       

//        <CreatePostForm />
//       </header>
//     </div>
//   );
// }

export default CreatePost;
