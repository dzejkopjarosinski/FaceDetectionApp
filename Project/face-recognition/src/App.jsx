
import './App.css';
import Navbar from './components/Navbar';




function App() {
  return (
    <div>
      <Navbar />
      <div className='newPostCard'>
        <div className='addPost'>
          <img
            src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="avatar"
          />
          <div className='postFrom'>
            <input
              type="text"
              placeholder = "What's on your mind ?"
              className = "postInput" />
          </div>
          <input type="file" />
          <button>SEND</button>

        

        </div>



      </div>
      
    </div>


  );
}

export default App;
