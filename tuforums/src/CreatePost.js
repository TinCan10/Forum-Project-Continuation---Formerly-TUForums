import CreatePostForm from './createPostForm';
import './CreatePost.css';
import SideBar from './navbar.js'; 




const CreatePost = () => {
  return (
    <div className="App">
      <header className="App-header">
       
      <title> TU Forum </title>

       <SideBar />

       <CreatePostForm />


      </header>
    </div>
  );
};

export default CreatePost;
