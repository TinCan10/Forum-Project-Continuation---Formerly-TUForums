import createPost from './createPostForm';
import './CreatePost.css';
import sideBar from './navbar.js'; 
import './logo192.png';
import './logo512.png';



function CreatePost() {
  return (
    <div className="App">
      <header className="App-header">
       
      <title> TU Forum </title>

       <sideBar />

       <createPost />


      </header>
    </div>
  );
}

export default CreatePost;
