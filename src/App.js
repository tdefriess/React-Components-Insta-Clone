/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
// import dummydata
import PostsPage from "./components/PostsContainer/PostsPage";
import dummyData from "./dummy-data";

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const[data] = useState(dummyData);
  return (
    <div className="App">
      <h1>Test</h1>
      <PostsPage cardData={data} />
      {/* Add components here  and pass props where appropriate */}
    </div>
  );
};

export default App;
