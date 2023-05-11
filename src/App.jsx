import { Route, Routes } from "react-router-dom";
import "./App.css";

import { useState, useEffect } from 'react'

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import userService from "./utils/userService";
import AddPostPage from "./pages/AddPostPage/AddPostPage";

import * as postsApi from "./utils/postApi"
// ==================================================
// Any Component rendered by a Route component will go in the pages folder
// the pages component will use the components in the "componets folder"
// ==================================================

function App() {

  // when the app loads up grab the token from storage if there is one
  const [user, setUser] = useState(userService.getUser())
  const [posts, setPosts] = useState([]);
  // call this function after we make a http request to signup or login a user, to update the token! and our state
  // userService.signup(formData)
  // userService.login(state)
  function handleSignUpOrLogin(){
    // userService.getUser, grabs the token from localstorage, 
    // decodes it to an object, that we can we store in our state!
    setUser(userService.getUser())
  }
  // (C)RUD
  async function handleAddPost(post) {
    try {
      const responseData = await postsApi.create(post); // this is calling our create function in the postsApi utils folder
      console.log(responseData, " response from the server");
      setPosts([responseData.data, ...posts]); // spread operator to keep all the posts that are already in state!
    } catch (err) {
      console.log(err, " error in addPost");
      // setError("Error creating a post, please try again");
    }
  }

  // C(R)UD
  async function getPosts() {
    try {
      const response = await postsApi.getAll();
      console.log(response, " data");
      setPosts(response.posts);

    } catch (err) {
      console.log(err.message, " this is the error in getPosts");
    }
  }

  useEffect(() => {
    //Getting posts, C(R)UD
    getPosts();
  }, []); // This is useEffect runs once when the Feed component
  // loads

  return (
    <Routes>
      <Route path="/" element={<FeedPage posts={posts}/>} />
      {/* <Route path="/" element={<HomePage /> */}
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/addPost" element={<AddPostPage handleAddPost={handleAddPost}/>} />
      <Route path="/:username" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
