import createPost from './createPostForm';
import './App.css';
import sideBar from './navbar.js'; 
import './logo192.png';
import './logo512.png';



function App() {
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

export default App;
